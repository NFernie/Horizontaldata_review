#!/usr/bin/env python3
"""Compute McKinlay Member pay summaries from cuttings and LAS resistivity."""

import os
import sys
from datetime import datetime, timezone

import numpy as np
import pandas as pd

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)
OUTPUT_DIR = os.path.join(WORKSPACE, "output")
NULL = -999.25

sys.path.insert(0, os.path.join(WORKSPACE, "scripts"))
from process_mckinlay_wells import (  # noqa: E402
    WELLS,
    avg_log,
    exclusion_zones,
    classify_tops,
    load_samples,
    parse_las,
    parse_las_td,
    resolve_well_name,
)

FLUOR_CUTOFF = 75.0
SS_CUTOFF = 50.0
RES_DEEP_CUTOFF = 20.0


def in_mckinlay_window(top, bot, mck_start, mck_end, zones):
    mid = (top + bot) / 2
    if mid < mck_start or mid > mck_end:
        return False
    for zt, zb, _ in zones:
        if top < zb and bot > zt:
            return False
    return True


def interval_length(top, bot):
    return max(0.0, bot - top)


def merge_intervals(intervals):
    """Merge overlapping [top, bottom] intervals and return list + total MD."""
    if not intervals:
        return [], 0.0
    sorted_iv = sorted(intervals, key=lambda x: x[0])
    merged = [list(sorted_iv[0])]
    for top, bot in sorted_iv[1:]:
        if top <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], bot)
        else:
            merged.append([top, bot])
    total = sum(b - t for t, b in merged)
    return [(t, b) for t, b in merged], total


def get_mckinlay_sample_intervals(cfg, dc30_df, mck_murta_df):
    _, dc30_row = resolve_well_name(dc30_df, cfg)
    dc30_top = float(dc30_row["MD"].values[0])

    tops_name, tops = resolve_well_name(mck_murta_df, cfg)
    mck_tops = sorted(tops[tops["Surface"] == "MCKINLAY MEMBER"]["MD"].tolist())
    murta_tops = sorted(tops[tops["Surface"] == "MURTA MEMBER"]["MD"].tolist())
    overburden, target_reentry = classify_tops(mck_tops, murta_tops)
    mck_start = min(mck_tops)
    zones, zone_details = exclusion_zones(
        overburden, target_reentry, initial_entry_depth=mck_start
    )

    las_path = os.path.join(WORKSPACE, cfg["las"])
    las_td = parse_las_td(las_path)
    mck_end = float(cfg.get("td") or las_td or max(mck_tops) + 500)

    xlsx_path = os.path.join(WORKSPACE, cfg["xlsx"])
    samples, _ = load_samples(xlsx_path)
    mck_end = max(mck_end, float(samples["Depth_mMD"].max()))

    intervals = []
    for _, row in samples.iterrows():
        top, bot = row["interval_top"], row["interval_bottom"]
        if not in_mckinlay_window(top, bot, mck_start, mck_end, zones):
            continue
        las_df = None  # loaded below once
        intervals.append(
            {
                "depth": float(row["Depth_mMD"]),
                "top": float(top),
                "bot": float(bot),
                "pct_ss": pd.to_numeric(row["Pct_Sandstone"], errors="coerce"),
                "pct_fluor": pd.to_numeric(row["Pct_Fluor"], errors="coerce"),
            }
        )

    las_df = parse_las(las_path)
    for iv in intervals:
        log = avg_log(las_df, iv["top"], iv["bot"])
        iv["avg_res_deep"] = log["avg_RES_DEEP"] if log else np.nan

    lateral_length = mck_end - dc30_top
    return {
        "display": cfg["display"],
        "alias": cfg["alias"],
        "tops_name": tops_name,
        "dc30_top": dc30_top,
        "mck_start": mck_start,
        "mck_end": mck_end,
        "lateral_length": lateral_length,
        "intervals": intervals,
        "las_df": las_df,
        "zones": zones,
        "zone_details": zone_details,
    }


def cuttings_pay(intervals):
    pay_iv = []
    for iv in intervals:
        ss = iv["pct_ss"]
        fluor = iv["pct_fluor"]
        if pd.notna(ss) and pd.notna(fluor) and ss > SS_CUTOFF and fluor > FLUOR_CUTOFF:
            pay_iv.append((iv["top"], iv["bot"]))
    merged, total = merge_intervals(pay_iv)
    missing = sum(
        1
        for iv in intervals
        if pd.isna(iv["pct_ss"]) or pd.isna(iv["pct_fluor"])
    )
    return merged, total, missing


def res_only_pay(las_df, mck_start, mck_end, zones):
    sub = las_df[(las_df["depth"] >= mck_start) & (las_df["depth"] <= mck_end)].copy()
    sub = sub[sub["RES_DEEP"].replace(NULL, np.nan).notna()]
    sub["RES_DEEP"] = sub["RES_DEEP"].replace(NULL, np.nan)
    sub = sub.sort_values("depth").reset_index(drop=True)

    if len(sub) < 2:
        return [], 0.0, 0

    steps = sub["depth"].diff().dropna()
    step = float(steps.median()) if len(steps) else 0.1524

    pay_iv = []
    run_start = None
    prev_depth = None

    for _, row in sub.iterrows():
        d = row["depth"]
        res = row["RES_DEEP"]
        in_zone = True
        for zt, zb, _ in zones:
            if zt <= d < zb:
                in_zone = False
                break
        is_pay = in_zone and res > RES_DEEP_CUTOFF

        if is_pay:
            if run_start is None:
                run_start = d - step / 2
            prev_depth = d
        else:
            if run_start is not None and prev_depth is not None:
                pay_iv.append((run_start, prev_depth + step / 2))
            run_start = None
            prev_depth = None

    if run_start is not None and prev_depth is not None:
        pay_iv.append((run_start, prev_depth + step / 2))

    merged, total = merge_intervals(pay_iv)
    null_pct = (
        las_df[(las_df["depth"] >= mck_start) & (las_df["depth"] <= mck_end)]["RES_DEEP"]
        .replace(NULL, np.nan)
        .isna()
        .mean()
        * 100
    )
    return merged, total, null_pct


def matching_pay(intervals):
    pay_iv = []
    no_res = 0
    for iv in intervals:
        ss = iv["pct_ss"]
        fluor = iv["pct_fluor"]
        res = iv["avg_res_deep"]
        if pd.isna(res):
            no_res += 1
            continue
        if (
            pd.notna(ss)
            and pd.notna(fluor)
            and ss > SS_CUTOFF
            and fluor > FLUOR_CUTOFF
            and res > RES_DEEP_CUTOFF
        ):
            pay_iv.append((iv["top"], iv["bot"]))
    merged, total = merge_intervals(pay_iv)
    return merged, total, no_res


def pct_of_lateral(pay_md, lateral_length):
    if lateral_length <= 0:
        return np.nan
    return 100.0 * pay_md / lateral_length


def analyze_well(cfg, dc30_df, mck_murta_df):
    data = get_mckinlay_sample_intervals(cfg, dc30_df, mck_murta_df)
    cut_iv, cut_md, cut_missing = cuttings_pay(data["intervals"])
    res_iv, res_md, res_null_pct = res_only_pay(
        data["las_df"], data["mck_start"], data["mck_end"], data["zones"]
    )
    match_iv, match_md, match_no_res = matching_pay(data["intervals"])

    return {
        **data,
        "cuttings": {"intervals": cut_iv, "md": cut_md, "missing": cut_missing},
        "resistivity": {"intervals": res_iv, "md": res_md, "null_pct": res_null_pct},
        "matching": {"intervals": match_iv, "md": match_md, "no_res": match_no_res},
    }


def format_intervals(intervals, limit=15):
    if not intervals:
        return "_No pay intervals identified._\n"
    lines = ["| Top (m MD) | Bottom (m MD) | Length (m) |", "|------------|---------------|------------|"]
    for top, bot in intervals[:limit]:
        lines.append(f"| {top:.1f} | {bot:.1f} | {bot - top:.1f} |")
    if len(intervals) > limit:
        lines.append(f"\n_({len(intervals) - limit} additional intervals omitted)_")
    lines.append("")
    return "\n".join(lines)


def write_well_pay_summary(result):
    well = result["display"]
    lat = result["lateral_length"]
    out_dir = os.path.join(OUTPUT_DIR, well.replace("/", "-"))
    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, "pay-summary.md")

    cut = result["cuttings"]
    res = result["resistivity"]
    match = result["matching"]
    zone_lines = []
    if result.get("zone_details"):
        zone_lines.append("### Overburden Exclusion Intervals\n")
        zone_lines.append(
            "| Entry (m MD) | Murta (m MD) | Re-entry (m MD) | Length (m) |"
        )
        zone_lines.append("|-------------|-------------|-----------------|------------|")
        for zd in result["zone_details"]:
            re_txt = f"{zd['re_entry']:.1f}"
            if zd.get("default_reentry"):
                re_txt += " (assumed)"
            zone_lines.append(
                f"| {zd['entry']:.1f} | {zd['murta']:.1f} | {re_txt} | {zd['length']:.1f} |"
            )
        zone_lines.append("")

    lines = [
        f"# {well} — McKinlay Pay Summary\n",
        f"**Generated:** {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}  ",
        f"**Formation tops name:** {result['tops_name']}  ",
        f"**McKinlay window:** {result['mck_start']:.1f} – {result['mck_end']:.1f} m MD  ",
        f"**DC30 top:** {result['dc30_top']:.2f} m MD  ",
        f"**Total lateral length (TD − DC30):** {lat:.1f} m\n",
        "---\n",
        *zone_lines,
        "## Pay Rules Applied\n",
        "See [`pay-rules.md`](../../pay-rules.md) for full definitions.\n",
        "| Category | Criteria | Data source |",
        "|----------|----------|-------------|",
        f"| Cuttings only | %SS > {SS_CUTOFF:.0f}% AND %Fluor > {FLUOR_CUTOFF:.0f}% | Sample spreadsheet intervals |",
        f"| Resistivity only | RES_DEEP > {RES_DEEP_CUTOFF:.0f} ohm.m | LAS file (continuous) |",
        f"| Matching both | All three criteria | Sample interval + LAS average |",
        "",
        "## Pay Summary\n",
        "| Category | Pay MD (m) | % of Lateral | Intervals |",
        "|----------|-----------|--------------|-----------|",
        f"| Cuttings only | {cut['md']:.1f} | {pct_of_lateral(cut['md'], lat):.1f}% | {len(cut['intervals'])} |",
        f"| Resistivity only | {res['md']:.1f} | {pct_of_lateral(res['md'], lat):.1f}% | {len(res['intervals'])} |",
        f"| Matching both | {match['md']:.1f} | {pct_of_lateral(match['md'], lat):.1f}% | {len(match['intervals'])} |",
        "",
        f"**Sample intervals in McKinlay Member:** {len(result['intervals'])}",
        "",
        "## Cuttings-Only Pay Intervals\n",
        format_intervals(cut["intervals"]),
        "## Resistivity-Only Pay Intervals\n",
        format_intervals(res["intervals"]),
        "## Matching Pay Intervals\n",
        format_intervals(match["intervals"]),
        "## Data Quality Notes\n",
    ]

    issues = []
    if cut["missing"] > 0:
        issues.append(
            f"- **{cut['missing']}** sample intervals missing %SS or %Fluor — excluded from cuttings/matching pay."
        )
    if match["no_res"] > 0:
        issues.append(
            f"- **{match['no_res']}** intervals lack valid LAS RES_DEEP — excluded from matching pay only."
        )
    if res["null_pct"] > 10:
        issues.append(
            f"- **{res['null_pct']:.1f}%** of LAS samples in McKinlay window have NULL RES_DEEP — resistivity pay may be understated."
        )
    if cut["md"] > lat:
        issues.append("- Cuttings pay MD exceeds lateral length — overlapping sample intervals (expected with merge).")
    if not issues:
        issues.append("- No major data quality flags for this well.")

    lines.extend(issues)
    lines.append("")

    with open(path, "w") as f:
        f.write("\n".join(lines))
    return path


def write_all_wells_summary(results):
    path = os.path.join(OUTPUT_DIR, "ALL_WELLS_PAY_SUMMARY.md")
    lines = [
        "# All Wells — McKinlay Pay Comparison\n",
        f"**Generated:** {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}\n",
        "## Summary Table\n",
        "| Well | DC30 (m) | TD (m) | Lateral (m) | Cuttings Pay (m) | Cuttings % | Res Pay (m) | Res % | Matching Pay (m) | Matching % |",
        "|------|----------|--------|-------------|------------------|------------|-------------|-------|------------------|------------|",
    ]

    total_lat = total_cut = total_res = total_match = 0
    for r in sorted(results, key=lambda x: x["display"]):
        lat = r["lateral_length"]
        cut_md, res_md, match_md = r["cuttings"]["md"], r["resistivity"]["md"], r["matching"]["md"]
        total_lat += lat
        total_cut += cut_md
        total_res += res_md
        total_match += match_md
        lines.append(
            f"| {r['display']} | {r['dc30_top']:.1f} | {r['mck_end']:.1f} | {lat:.1f} | "
            f"{cut_md:.1f} | {pct_of_lateral(cut_md, lat):.1f}% | "
            f"{res_md:.1f} | {pct_of_lateral(res_md, lat):.1f}% | "
            f"{match_md:.1f} | {pct_of_lateral(match_md, lat):.1f}% |"
        )

    n = len(results)
    lines += [
        "",
        "## Portfolio Totals (arithmetic sum — not normalised by well count)\n",
        f"| Metric | Total MD (m) | Avg per well (m) |",
        f"|--------|-------------|------------------|",
        f"| Lateral length | {total_lat:.1f} | {total_lat/n:.1f} |",
        f"| Cuttings pay | {total_cut:.1f} | {total_cut/n:.1f} |",
        f"| Resistivity pay | {total_res:.1f} | {total_res/n:.1f} |",
        f"| Matching pay | {total_match:.1f} | {total_match/n:.1f} |",
        "",
        "## Key Issues & Limitations\n",
        "1. **Lateral length** = TD (or deepest sample/LAS) minus DC30 top — not horizontal displacement (TVD/VS).",
        "2. **Cuttings pay** uses sample interval midpoints; irregular spacing means overlapping intervals are merged.",
        f"3. **Resistivity pay** scans LAS at ~0.15 m steps; NULL values ({NULL}) excluded; gaps may break or shorten pay zones.",
        "4. **Matching pay** uses *average* RES_DEEP per sample interval — not point-by-point LAS; can differ from res-only totals.",
        f"5. **Cutoffs:** %Fluor > {FLUOR_CUTOFF:.0f}%, %SS > {SS_CUTOFF:.0f}%, RES_DEEP > {RES_DEEP_CUTOFF:.0f} ohm.m.",
        "6. **McKinlay Member only** — overburden intervals (Murta/McKinlay entry → lone McKinlay re-entry) excluded from pay.",
        "7. **HOBBES 4** not included — no data files in repository.",
        "8. **Legacy McKinlay spreadsheets** (20–24) — fluorescence/sandstone from Sheet1 cols G/H; parsing quality varies.",
        "",
        "## Interpretation Notes\n",
        "- **High cuttings % + low res %** suggests fluorescent sand at cuttings scale but low deep resistivity on log (tight, fresh, or invasion effects).",
        "- **High res % + low cuttings %** suggests log-quality reservoir with cuttings not meeting fluorescence/sandstone cutoffs.",
        "- **Matching pay** is the most conservative — requires both datasets to agree at sample resolution.",
        "",
    ]

    with open(path, "w") as f:
        f.write("\n".join(lines))
    return path


def write_pay_rules():
    path = os.path.join(WORKSPACE, "pay-rules.md")
    content = f"""# McKinlay Member Pay Rules

**Established:** {datetime.now(timezone.utc).strftime('%Y-%m-%d')}

## Scope

- **Formation:** McKinlay Member only (horizontal target interval)
- **Lateral reference:** DC30 top to TD (deepest sample or LAS stop)
- **Exclusions:** Each Murta/McKinlay overburden entry pair excludes from entry depth to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Entry pairs falling inside an existing exclusion interval share that zone. Initial DC30/McKinlay reservoir entry is not excluded.

## Pay Categories

### 1. Cuttings-Only Pay

**Source:** Sample description spreadsheets (Input Sheet or legacy Sheet1)

**Criteria (both required):**
| Parameter | Cutoff |
|-----------|--------|
| % Sandstone (%SS) | > {SS_CUTOFF:.0f}% |
| % Fluorescence (%Fluor) | > {FLUOR_CUTOFF:.0f}% |

**Method:**
- Use McKinlay Member sample depth intervals (midpoints between consecutive samples)
- Flag intervals meeting both cuttings criteria
- Merge overlapping flagged intervals
- Sum merged interval lengths = **Pay MD (m)**

### 2. Resistivity-Only Pay

**Source:** LAS wireline files (GR, RES_DEEP, RES_SHALLOW) — **not** batch interpretation summaries

**Criteria:**
| Parameter | Cutoff |
|-----------|--------|
| RES_DEEP | > {RES_DEEP_CUTOFF:.0f} ohm.m |

**Method:**
- Scan LAS at native sampling (~0.15 m) within McKinlay Member window
- Exclude NULL values ({NULL})
- Exclude overburden/re-entry zones
- Identify contiguous runs where RES_DEEP > cutoff
- Merge and sum = **Pay MD (m)**

### 3. Matching Pay (Cuttings + Resistivity)

**Source:** Sample intervals with LAS average resistivity

**Criteria (all three required):**
| Parameter | Cutoff |
|-----------|--------|
| % Sandstone | > {SS_CUTOFF:.0f}% |
| % Fluorescence | > {FLUOR_CUTOFF:.0f}% |
| Average RES_DEEP (interval) | > {RES_DEEP_CUTOFF:.0f} ohm.m |

**Method:**
- For each McKinlay sample interval, compute average RES_DEEP from LAS
- Flag intervals meeting all three criteria
- Merge overlapping intervals
- Sum = **Pay MD (m)**

## Reporting Metrics

| Metric | Definition |
|--------|------------|
| **Pay MD (m)** | Total measured depth of merged pay intervals |
| **Lateral length (m)** | TD − DC30 top |
| **Pay %** | Pay MD ÷ Lateral length × 100 |

## Output Files

| File | Description |
|------|-------------|
| `pay-rules.md` | This document |
| `output/<Well Name>/pay-summary.md` | Per-well pay breakdown |
| `output/ALL_WELLS_PAY_SUMMARY.md` | Comparison table all wells |

## Recompute

```bash
python3 scripts/compute_pay_summary.py
```
"""
    with open(path, "w") as f:
        f.write(content)
    return path


def main():
    dc30_df = pd.read_excel(os.path.join(WORKSPACE, "DC30.xlsx"))
    mck_murta_df = pd.read_excel(os.path.join(WORKSPACE, "Mck_Murta.xlsx"))

    write_pay_rules()
    results = []
    for cfg in WELLS:
        print(f"Pay analysis: {cfg['display']}...")
        result = analyze_well(cfg, dc30_df, mck_murta_df)
        write_well_pay_summary(result)
        results.append(result)
        print(
            f"  cut={result['cuttings']['md']:.0f}m res={result['resistivity']['md']:.0f}m "
            f"match={result['matching']['md']:.0f}m lateral={result['lateral_length']:.0f}m"
        )

    write_all_wells_summary(results)
    print(f"\nWrote pay-rules.md and {len(results)} well summaries + ALL_WELLS_PAY_SUMMARY.md")


if __name__ == "__main__":
    main()
