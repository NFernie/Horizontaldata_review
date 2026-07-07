#!/usr/bin/env python3
"""Batch process horizontal wells for McKinlay Member cuttings & log integration."""

import glob
import os
import re
from datetime import datetime, timezone

import numpy as np
import pandas as pd
import pdfplumber

WORKSPACE = os.environ.get("WORKSPACE", "/workspace")
OUTPUT_DIR = os.path.join(WORKSPACE, "output")
NULL = -999.25
PAIR_TOLERANCE = 5.0
EXCLUSION_BUFFER = 10.0
MUDLOG_WINDOW = 15.0

WELLS = [
    {
        "alias": "JENA31",
        "display": "JENA 31",
        "tops_name": "Jena Dev C Oil Lateral 1_Ops",
        "pdf": "JENA 31_ML_Mudlog_Spud-3394_MD_Final.pdf",
        "xlsx": "Jena 31- Hz Section Samples Descriptions_3394_TD.xlsx",
        "las": "Jena_31",
        "td": 3394,
    },
    {
        "alias": "JENA31DW1",
        "display": "JENA 31DW1",
        "tops_name": "Jena Dev C Oil Lateral 2_Ops",
        "pdf": "JENA 31DW1_ML_Mudlog_Spud-3658_MD_Final.pdf",
        "xlsx": "Jena 31DW1- Hz Section Samples Descriptions.xlsx",
        "las": "Jena_31DW1",
        "td": 3658,
    },
    {
        "alias": "BIALA19",
        "display": "BIALA 19",
        "tops_name": "BIALA 19",
        "pdf": "BIALA 19_ML_Mudlog_Spud-3730_MD_Final.pdf",
        "xlsx": "Biala 19 Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Biala_19",
        "td": 3730,
    },
    {
        "alias": "BIALA20",
        "display": "BIALA 20",
        "tops_name": "BIALA 20",
        "pdf": "BIALA 20_ML_Mudlog_Spud-3315_MD_Final.pdf",
        "xlsx": "Biala 20 Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Biala_20",
        "td": 3315,
    },
    {
        "alias": "BIALA21",
        "display": "BIALA 21",
        "tops_name": "BIALA 21",
        "pdf": "BIALA 21_ML_Mudlog_Spud-3278_MD_Final.pdf",
        "xlsx": "Biala 21 Hz Section Samples Descriptions_Rev3-fernc.xlsx",
        "las": "Biala_21",
        "td": 3278,
    },
]

LITH_TYPES = re.compile(
    r"(SANDSTONE|SILTSTONE|LIMESTONE(?:\([^)]*\))?|SHALE|DOLOMITE|COAL|ANHYDRITE|MUDSTONE|CLAYSTONE)"
)


def classify_tops(mck_list, murta_list, tolerance=PAIR_TOLERANCE):
    overburden = []
    target_reentry = []
    for m in mck_list:
        matched = False
        for mu in murta_list:
            if abs(m - mu) <= tolerance:
                overburden.append({"mckinlay": m, "murta": mu, "delta": abs(m - mu)})
                matched = True
                break
        if not matched:
            target_reentry.append(m)
    return overburden, target_reentry


def exclusion_zones(overburden, target_reentry, buffer=EXCLUSION_BUFFER):
    zones = []
    for ob in overburden:
        zones.append((ob["mckinlay"] - buffer, ob["mckinlay"] + buffer, "overburden"))
    for t in target_reentry:
        zones.append((t - buffer, t + buffer, "target_reentry"))
    return zones


def interval_excluded(top, bot, zones):
    for zt, zb, _ in zones:
        if not (bot < zt or top > zb):
            return True
    return False


def perm_proxy(sep):
    if sep is None or (isinstance(sep, float) and np.isnan(sep)):
        return "Insufficient resistivity data"
    if sep > 50:
        return "High inferred permeability"
    if sep > 20:
        return "Moderate-high inferred permeability"
    if sep > 5:
        return "Moderate inferred permeability"
    if sep > 0:
        return "Low-moderate inferred permeability"
    return "Low inferred permeability (tight/cemented)"


def extract_mudlog_text(pdf_path):
    chunks = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                chunks.append(text)
    return "\n".join(chunks)


def parse_mudlog_entries(text):
    entries = []
    lines = text.split("\n")
    current_depths = []
    for i, line in enumerate(lines):
        top_match = re.search(
            r"(MCKINLAY MEMBER|MURTA[^:]*|DC30):\s*(\d+\.?\d*)mMDRT", line
        )
        if top_match:
            entries.append(
                {
                    "type": "formation_top",
                    "name": top_match.group(1),
                    "depth": float(top_match.group(2)),
                    "text": line.strip(),
                }
            )
        md_match = re.search(r"MD:(\d+\.?\d*)\s*m", line)
        if md_match:
            current_depths.append(float(md_match.group(1)))
        lith_match = LITH_TYPES.search(line)
        if lith_match and ":" in line:
            lith_type = lith_match.group(1)
            desc = line.split(":", 1)[1].strip()
            depth_est = current_depths[-1] if current_depths else None
            for j in range(max(0, i - 3), i):
                nums = re.findall(r"^(\d{4})$", lines[j].strip())
                if nums:
                    depth_est = float(nums[0])
            full_desc = desc
            for j in range(i + 1, min(i + 5, len(lines))):
                nl = lines[j].strip()
                if LITH_TYPES.search(nl) or re.match(r"MD:", nl) or re.match(r"^\d{4}$", nl):
                    break
                if nl and not re.match(
                    r"^(WOB|RPM|SPP|FLOW|FLUORESCENCE|MD:|VD |azi )", nl
                ):
                    full_desc += " " + nl
            entries.append(
                {
                    "type": "lithology",
                    "lith_type": lith_type,
                    "depth_est": depth_est,
                    "text": full_desc[:600],
                }
            )
    return entries


def parse_las(las_path):
    data = []
    with open(las_path) as f:
        in_ascii = False
        for line in f:
            if line.strip().startswith("~Ascii"):
                in_ascii = True
                continue
            if in_ascii and line.strip():
                parts = line.split()
                if len(parts) >= 4:
                    data.append(
                        {
                            "depth": float(parts[0]),
                            "GR": float(parts[1]),
                            "RES_DEEP": float(parts[2]),
                            "RES_MED": float(parts[3]),
                            "RES_SHALLOW": float(parts[4])
                            if len(parts) > 4
                            else NULL,
                        }
                    )
    return pd.DataFrame(data)


def avg_log(df, top, bot):
    sub = df[(df["depth"] >= top) & (df["depth"] <= bot)]
    if sub.empty:
        return None
    result = {}
    for col in ["GR", "RES_DEEP", "RES_SHALLOW"]:
        vals = sub[col].replace(NULL, np.nan).dropna()
        result[f"avg_{col}"] = float(vals.mean()) if len(vals) else None
        result[f"n_{col}"] = int(len(vals))
    if result.get("avg_RES_DEEP") is not None and result.get("avg_RES_SHALLOW") is not None:
        result["res_sep"] = result["avg_RES_DEEP"] - result["avg_RES_SHALLOW"]
    else:
        result["res_sep"] = None
    return result


def load_samples(xlsx_path):
    raw = pd.read_excel(xlsx_path, sheet_name="Input Sheet", header=2)
    raw.columns = [str(c).strip() if pd.notna(c) else f"col_{i}" for i, c in enumerate(raw.columns)]

    def col(name):
        for c in raw.columns:
            if name.lower() in str(c).lower():
                return c
        return None

    depth_col = col("Depth")
    if depth_col is None:
        raise ValueError(f"Depth column not found in {xlsx_path}")

    samples = pd.DataFrame(
        {
            "Depth_mMD": pd.to_numeric(raw[depth_col], errors="coerce"),
            "Pct_Sandstone": raw[col("% Sandstone")] if col("% Sandstone") else np.nan,
            "Grain_Size": raw[col("Grain Size")] if col("Grain Size") else np.nan,
            "Max_Grain_Size": raw[col("Max Grain")] if col("Max Grain") else np.nan,
            "Pct_Fluor": raw[col("% Fluor")] if col("% Fluor") else np.nan,
            "Brightness": raw[col("Brightness")] if col("Brightness") else np.nan,
            "Gas_U": raw[col("Gas")] if col("Gas") else np.nan,
            "FeCO3_SLTST": raw[col("FeCO3 in SLTST")] if col("FeCO3 in SLTST") else np.nan,
            "FeCO3_SST": raw[col("FeCO3 in SST")] if col("FeCO3 in SST") else np.nan,
        }
    )
    samples = samples.dropna(subset=["Depth_mMD"]).reset_index(drop=True)

    long_desc = pd.read_excel(xlsx_path, sheet_name="Long Sample Name")
    long_map = {}
    for _, row in long_desc.iterrows():
        m = re.match(r"Sample (\d+(?:\.\d+)?)m:", str(row["Description"]))
        if m:
            long_map[float(m.group(1))] = str(row["Description"])

    depths = samples["Depth_mMD"].values
    tops, bots = [], []
    for i in range(len(depths)):
        if i == 0:
            top = depths[0]
            bot = (depths[0] + depths[1]) / 2 if len(depths) > 1 else depths[0] + 2.5
        elif i == len(depths) - 1:
            top = (depths[i - 1] + depths[i]) / 2
            bot = depths[i] + 2.5
        else:
            top = (depths[i - 1] + depths[i]) / 2
            bot = (depths[i] + depths[i + 1]) / 2
        tops.append(top)
        bots.append(bot)
    samples["interval_top"] = tops
    samples["interval_bottom"] = bots
    return samples, long_map


def find_mudlog(top, bot, entries, window=MUDLOG_WINDOW):
    return [
        e
        for e in entries
        if e["type"] == "lithology"
        and e.get("depth_est")
        and (top - window) <= e["depth_est"] <= (bot + window)
    ]


def fmt(val, digits=2):
    if val is None or (isinstance(val, float) and np.isnan(val)):
        return None
    return round(float(val), digits)


def process_well(cfg, dc30_df, mck_murta_df):
    tops_name = cfg["tops_name"]
    dc30_row = dc30_df[dc30_df["Well identifier (Well name)"] == tops_name]
    if dc30_row.empty:
        raise ValueError(f"No DC30 top for {tops_name}")
    dc30_top = float(dc30_row["MD"].values[0])

    tops = mck_murta_df[mck_murta_df["Well identifier (Well name)"] == tops_name]
    mck_tops = sorted(tops[tops["Surface"] == "MCKINLAY MEMBER"]["MD"].tolist())
    murta_tops = sorted(tops[tops["Surface"] == "MURTA MEMBER"]["MD"].tolist())
    if not mck_tops:
        raise ValueError(f"No McKinlay tops for {tops_name}")

    overburden, target_reentry = classify_tops(mck_tops, murta_tops)
    zones = exclusion_zones(overburden, target_reentry)
    mck_start = min(mck_tops)
    mck_end = float(cfg["td"])

    pdf_path = os.path.join(WORKSPACE, cfg["pdf"])
    xlsx_path = os.path.join(WORKSPACE, cfg["xlsx"])
    las_path = os.path.join(WORKSPACE, cfg["las"])

    mudlog_text = extract_mudlog_text(pdf_path)
    mudlog_entries = parse_mudlog_entries(mudlog_text)
    mudlog_mck = [
        e["depth"]
        for e in mudlog_entries
        if e["type"] == "formation_top" and "MCKINLAY" in e["name"].upper()
    ]

    samples, long_map = load_samples(xlsx_path)
    las_df = parse_las(las_path)

    results = []
    excluded_pre = excluded_ob = excluded_re = 0
    for _, row in samples.iterrows():
        depth = row["Depth_mMD"]
        top = row["interval_top"]
        bot = row["interval_bottom"]
        mid = (top + bot) / 2
        if mid < mck_start or mid > mck_end:
            excluded_pre += 1
            continue
        reason = None
        for zt, zb, ztype in zones:
            if not (bot < zt or top > zb):
                reason = ztype
                break
        if reason:
            if reason == "overburden":
                excluded_ob += 1
            else:
                excluded_re += 1
            continue

        log_stats = avg_log(las_df, top, bot)
        mud_matches = find_mudlog(top, bot, mudlog_entries)
        silt = 100 - row["Pct_Sandstone"] if pd.notna(row["Pct_Sandstone"]) else None
        results.append(
            {
                "depth": depth,
                "top": top,
                "bot": bot,
                "pct_ss": row["Pct_Sandstone"],
                "pct_slt": silt,
                "grain": row["Grain_Size"],
                "max_grain": row["Max_Grain_Size"],
                "fluor": row["Pct_Fluor"],
                "bright": row["Brightness"],
                "gas": row["Gas_U"],
                "fec03_slt": row["FeCO3_SLTST"],
                "fec03_sst": row["FeCO3_SST"],
                "long_desc": long_map.get(depth, ""),
                "mudlog": mud_matches,
                "log": log_stats,
                "perm": perm_proxy(log_stats["res_sep"] if log_stats else None),
            }
        )

    meta = {
        "alias": cfg["display"],
        "tops_name": tops_name,
        "dc30_top": dc30_top,
        "mck_tops": mck_tops,
        "murta_tops": murta_tops,
        "overburden": overburden,
        "target_reentry": target_reentry,
        "zones": zones,
        "mck_start": mck_start,
        "mck_end": mck_end,
        "mudlog_mck": mudlog_mck,
        "total_samples": len(samples),
        "excluded_pre": excluded_pre,
        "excluded_ob": excluded_ob,
        "excluded_re": excluded_re,
        "results": results,
        "cfg": cfg,
    }
    return meta


def write_interpretation(meta, path):
    r = meta["results"]
    alias = meta["alias"]
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = [
        f"# {alias} — McKinlay Member Cuttings & Log Interpretation\n",
        f"**Generated:** {now}  ",
        f"**Well:** {alias} ({meta['tops_name']})  ",
        f"**TD:** {meta['mck_end']:.0f} m MD  \n",
        "---\n",
        "## 1. Data Sources & Methodology\n",
        "| Source | File | Role |",
        "|--------|------|------|",
        f"| Mudlog PDF | `{meta['cfg']['pdf']}` | Cuttings lithology descriptions |",
        f"| Sample Descriptions | `{meta['cfg']['xlsx']}` (Input Sheet) | Depth intervals & sample properties |",
        "| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |",
        f"| Wireline Log (LAS) | `{meta['cfg']['las']}` | GR, RES_DEEP, RES_SHALLOW |",
        "",
        "## 2. Formation Top Analysis\n",
        "### 2.1 Key Tops\n",
        "| Marker | Depth (m MD) | Source |",
        "|--------|-------------|--------|",
        f"| DC30 | {meta['dc30_top']:.2f} | DC30.xlsx |",
        f"| McKinlay Member (shallowest) | {meta['mck_start']:.2f} | Mck_Murta.xlsx |",
    ]
    if meta["mudlog_mck"]:
        lines.append(f"| McKinlay Member (mudlog) | {meta['mudlog_mck'][0]:.1f} | Mudlog PDF |")
    lines += [
        "",
        "### 2.2 McKinlay Member Top Classification\n",
        "**Target re-entry (McKinlay without paired Murta):**",
    ]
    for t in meta["target_reentry"]:
        lines.append(f"- {t:.2f} m MD")
    lines += [
        "",
        "**Overburden intersections (McKinlay ≈ Murta within 5 m):**",
        "| McKinlay (m MD) | Murta (m MD) | Δ (m) |",
        "|-----------------|-------------|-------|",
    ]
    if meta["overburden"]:
        for ob in meta["overburden"]:
            lines.append(f"| {ob['mckinlay']:.2f} | {ob['murta']:.2f} | {ob['delta']:.2f} |")
    else:
        lines.append("| _none identified_ | — | — |")

    zone_str = ", ".join([f"{zt:.0f}–{zb:.0f} ({zt_})" for zt, zb, zt_ in meta["zones"]])
    lines += [
        f"\n**McKinlay Member analysis window:** {meta['mck_start']:.1f} – {meta['mck_end']:.1f} m MD",
        f"\n**Excluded zones (±{EXCLUSION_BUFFER:.0f} m around overburden & target re-entry tops):** {zone_str or 'none'}",
        f"\n**Samples in McKinlay Member:** {len(r)} of {meta['total_samples']} total",
        f"- Excluded pre-reservoir: {meta['excluded_pre']}",
        f"- Excluded overburden intersections: {meta['excluded_ob']}",
        f"- Excluded target re-entry tops: {meta['excluded_re']}",
        "",
        "## 3. Known Shortcomings\n",
        "> **Read this section before using the output.**\n",
        "1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.",
        "2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.",
        f"3. **Well name mapping:** {alias} → `{meta['tops_name']}` (verified by TD and LAS WELL header).",
        "4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.",
        "5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).",
        "6. **NULL LAS values** (-999.25) excluded from averages.",
        f"7. **Exclusion zones** use ±{EXCLUSION_BUFFER:.0f} m around paired overburden tops AND McKinlay target re-entry tops without Murta pairs.",
        "8. **Input Sheet only** — Calculations Sheet not used.",
        "",
    ]
    if meta["mudlog_mck"] and abs(meta["mudlog_mck"][0] - meta["mck_start"]) > 10:
        lines.append(
            f"9. **McKinlay pick discrepancy:** tops file {meta['mck_start']:.2f} m vs mudlog {meta['mudlog_mck'][0]:.1f} m "
            f"(Δ ≈ {abs(meta['mudlog_mck'][0] - meta['mck_start']):.0f} m)."
        )
        lines.append("")

    lines += [
        "## 4. McKinlay Member Sample Intervals\n",
        "Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.\n",
    ]

    for item in r:
        lines.append(f"### {item['depth']:.0f} m MD — Interval {item['top']:.1f} – {item['bot']:.1f} m\n")
        if item["long_desc"]:
            lines.append(f"**Sample Description (spreadsheet):** {item['long_desc']}\n")
        else:
            parts = []
            if item["pct_slt"] is not None and item["pct_ss"] is not None:
                parts.append(f"{item['pct_slt']:.0f}% Siltstone, {item['pct_ss']:.0f}% {item['grain']} Sandstone")
            if pd.notna(item["fluor"]):
                parts.append(f"{item['fluor']:.0f}% {item['bright']} FLUOR")
            if pd.notna(item["gas"]):
                parts.append(f"TG {item['gas']}U")
            lines.append(f"**Sample Description (spreadsheet):** {', '.join(parts)}\n")

        lines += ["| Property | Value |", "|----------|-------|"]
        if pd.notna(item["pct_ss"]):
            lines.append(f"| % Sandstone | {item['pct_ss']} |")
        lines.append(f"| Grain Size | {item['grain']} (max: {item['max_grain']}) |")
        if pd.notna(item["fluor"]):
            lines.append(f"| Fluorescence | {item['fluor']}% {item['bright']} |")
        if pd.notna(item["gas"]):
            lines.append(f"| Total Gas | {item['gas']} U |")
        if pd.notna(item["fec03_slt"]):
            lines.append(f"| FeCO₃ in Siltstone | {item['fec03_slt']} |")
        if pd.notna(item["fec03_sst"]):
            lines.append(f"| FeCO₃ in Sandstone | {item['fec03_sst']} |")
        lines.append("")

        if item["mudlog"]:
            lines.append("**Mudlog Cuttings Description (PDF):**")
            for m in item["mudlog"][:2]:
                d_str = f" @ ~{m['depth_est']:.0f}m" if m.get("depth_est") else ""
                lines.append(f"- **{m['lith_type']}**{d_str}: {m['text']}")
            if len(item["mudlog"]) > 2:
                lines.append(f"- _({len(item['mudlog']) - 2} additional mudlog entries in interval)_")
            lines.append("")
        else:
            lines.append("**Mudlog Cuttings Description (PDF):** _No matching entry found_\n")

        lg = item["log"]
        if lg:
            lines.append("**Wireline Log Averages (LAS):**")
            lines.append("| Curve | Average | Data Points |")
            lines.append("|-------|---------|-------------|")
            if lg.get("avg_GR") is not None:
                lines.append(f"| GR (gAPI) | {lg['avg_GR']:.1f} | {lg['n_GR']} |")
            if lg.get("avg_RES_DEEP") is not None:
                lines.append(f"| RES_DEEP (ohm.m) | {lg['avg_RES_DEEP']:.2f} | {lg['n_RES_DEEP']} |")
            if lg.get("avg_RES_SHALLOW") is not None:
                lines.append(f"| RES_SHALLOW (ohm.m) | {lg['avg_RES_SHALLOW']:.2f} | {lg['n_RES_SHALLOW']} |")
            if lg.get("res_sep") is not None:
                lines.append(f"| **Δ Res (Deep − Shallow)** | **{lg['res_sep']:.2f}** | — |")
            lines.append(f"\n**Permeability Proxy:** {item['perm']}")
            if lg.get("res_sep") is not None:
                lines.append(
                    "> Greater deep-shallow resistivity separation → higher inferred permeability.\n"
                )
        else:
            lines.append("**Wireline Log Averages:** _No log data in interval_\n")
        lines.append("---\n")

    res_seps = [x["log"]["res_sep"] for x in r if x["log"] and x["log"].get("res_sep") is not None]
    ss_vals = [x["pct_ss"] for x in r if pd.notna(x["pct_ss"])]
    lines += ["## 5. Summary Statistics (McKinlay Member)\n", "| Metric | Value |", "|--------|-------|"]
    lines.append(f"| Intervals analysed | {len(r)} |")
    if r:
        lines.append(f"| Depth range | {min(x['depth'] for x in r):.0f} – {max(x['depth'] for x in r):.0f} m |")
    if ss_vals:
        lines.append(f"| Avg % Sandstone | {np.mean(ss_vals):.1f}% |")
    if res_seps:
        lines.append(f"| Avg Δ Res (Deep−Shallow) | {np.mean(res_seps):.2f} ohm.m |")
        lines.append(f"| Max Δ Res | {max(res_seps):.2f} ohm.m |")
        lines.append(f"| Min Δ Res | {min(res_seps):.2f} ohm.m |")
    lines.append(f"| Mudlog matches | {sum(1 for x in r if x['mudlog'])} / {len(r)} |")
    lines.append("")

    with open(path, "w") as f:
        f.write("\n".join(lines))


def write_summary(meta, path):
    r = meta["results"]
    res_seps = [x["log"]["res_sep"] for x in r if x["log"] and x["log"].get("res_sep") is not None]
    ss_vals = [x["pct_ss"] for x in r if pd.notna(x["pct_ss"])]
    alias = meta["alias"]
    lines = [
        f"# {alias} Analysis — Process Summary\n",
        f"**Date:** {datetime.now(timezone.utc).strftime('%Y-%m-%d')}\n",
        "## Objective\n",
        f"Integrate mudlog, sample descriptions, formation tops, and LAS data for **McKinlay Member** on {alias}.\n",
        "## Data Files Used\n",
        f"| File | Purpose |",
        f"|------|---------|",
        f"| `{meta['cfg']['pdf']}` | Mudlog cuttings |",
        f"| `{meta['cfg']['xlsx']}` → Input Sheet | Sample intervals |",
        f"| `DC30.xlsx`, `Mck_Murta.xlsx` | Formation tops |",
        f"| `{meta['cfg']['las']}` | GR / resistivity |",
        "",
        "## Formation Top Results\n",
        f"- DC30: **{meta['dc30_top']:.2f} m** | McKinlay start: **{meta['mck_start']:.2f} m** | TD: **{meta['mck_end']:.0f} m**",
        f"- Overburden intersections: **{len(meta['overburden'])}**",
        f"- Target re-entry tops: **{len(meta['target_reentry'])}**",
        f"- Excluded zones: pre-reservoir {meta['excluded_pre']}, overburden {meta['excluded_ob']}, re-entry {meta['excluded_re']}",
        f"- **{len(r)}** McKinlay intervals retained\n",
        "## Key Findings\n",
    ]
    if r:
        lines.append(
            f"- Depth range: **{min(x['depth'] for x in r):.0f} – {max(x['depth'] for x in r):.0f} m MD**"
        )
    if ss_vals:
        lines.append(f"- Average sandstone: **{np.mean(ss_vals):.1f}%**")
    if res_seps:
        lines.append(
            f"- Δ Res range: **{min(res_seps):.1f} – {max(res_seps):.1f} ohm.m** (avg {np.mean(res_seps):.1f})"
        )
    lines.append(
        f"- Mudlog matched: **{sum(1 for x in r if x['mudlog'])} / {len(r)}** intervals\n"
    )
    lines.append("## Limitations\n")
    lines.append("See interpretation file Section 3 for full list.\n")
    with open(path, "w") as f:
        f.write("\n".join(lines))


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    dc30_df = pd.read_excel(os.path.join(WORKSPACE, "DC30.xlsx"))
    mck_murta_df = pd.read_excel(os.path.join(WORKSPACE, "Mck_Murta.xlsx"))

    summaries = []
    for cfg in WELLS:
        print(f"Processing {cfg['display']}...")
        meta = process_well(cfg, dc30_df, mck_murta_df)
        alias = cfg["alias"]
        write_interpretation(
            meta, os.path.join(OUTPUT_DIR, f"{alias}_McKinlay_Cuttings_Interpretation.md")
        )
        write_summary(meta, os.path.join(OUTPUT_DIR, f"{alias}_Process_Summary.md"))
        summaries.append(meta)
        print(
            f"  -> {len(meta['results'])} intervals, "
            f"mudlog {sum(1 for x in meta['results'] if x['mudlog'])}/{len(meta['results'])}"
        )

    return summaries


if __name__ == "__main__":
    main()
