#!/usr/bin/env python3
"""Generate decision brief markdown and static exports from site JSON + interpretation MD."""

from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "site" / "public" / "data"
EXPORTS = DATA / "exports"
DOCS = ROOT / "docs"

JENA_ALIASES = {
    "JENA31": {
        "display": "JENA 31",
        "interpretation": ROOT / "output/JENA31_McKinlay_Cuttings_Interpretation.md",
    },
    "JENA31DW1": {
        "display": "JENA 31DW1",
        "interpretation": ROOT / "output/JENA31DW1_McKinlay_Cuttings_Interpretation.md",
    },
}


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def score_wso_zone(zone: dict) -> tuple[float, str]:
    if zone.get("isolated"):
        return 0.0, "C"
    if zone["risk_class"] not in ("Elevated", "High"):
        return 0.0, "C"
    flags = zone.get("flags") or []
    ev = zone.get("evidence") or {}
    owc = ev.get("owc_near")
    score = 40.0 if zone["risk_class"] == "High" else 22.0
    if owc == "High" or "owc_high" in flags:
        score += 35
    elif owc == "Elevated" or "owc_elevated" in flags:
        score += 20
    if "ZOI" in flags:
        score += 14
    if "lowres" in flags:
        score += 10
    if "lowfluor" in flags:
        score += 8
    if "low_GR" in flags:
        score += 6
    if zone.get("WRCI") is not None:
        score += zone["WRCI"] / 4
    owc_driver = owc == "High" or "owc_high" in flags
    tier = "C"
    if (zone["risk_class"] == "High" or owc_driver) and score >= 55:
        tier = "A"
    elif score >= 34:
        tier = "B"
    return round(score, 1), tier


def rank_wso(alias: str, display: str, zones: list[dict]) -> list[dict]:
    tier_rank = {"A": 3, "B": 2, "C": 1}
    ranked = []
    for zone in zones:
        score, tier = score_wso_zone(zone)
        if tier_rank[tier] < tier_rank["B"]:
            continue
        ev = zone.get("evidence") or {}
        ranked.append(
            {
                "alias": alias,
                "display": display,
                "tier": tier,
                "score": score,
                "depth": zone["depth"],
                "top": zone["top"],
                "bot": zone["bot"],
                "mdSpan": f"{zone['top']:.0f}–{zone['bot']:.0f} m",
                "mTVDss": ev.get("mTVDss"),
                "WRCI": zone.get("WRCI"),
                "RQI": zone.get("RQI"),
                "risk_class": zone["risk_class"],
                "flags": flags if (flags := zone.get("flags") or []) else [],
                "isolated": bool(zone.get("isolated")),
                "owc_near": ev.get("owc_near"),
            }
        )
    ranked.sort(key=lambda c: (-tier_rank[c["tier"]], -c["score"], c["top"]))
    for i, entry in enumerate(ranked, start=1):
        entry["rank"] = i
    return ranked


def is_open_concern(zone: dict) -> bool:
    if zone.get("isolated") or (zone.get("evidence") or {}).get("isolated"):
        return False
    return zone["risk_class"] in ("Elevated", "High")


def is_owc_proximate(zone: dict) -> bool:
    ev = zone.get("evidence") or {}
    owc = ev.get("owc_near")
    flags = zone.get("flags") or []
    return owc in ("High", "Elevated") or "owc_high" in flags or "owc_elevated" in flags


def burden(zones: list[dict], wso: list[dict]) -> dict:
    open_z = [z for z in zones if is_open_concern(z)]
    return {
        "openElevatedHigh": len(open_z),
        "owcProximate": sum(1 for z in open_z if is_owc_proximate(z)),
        "highOpen": sum(1 for z in open_z if z["risk_class"] == "High"),
        "tierA": sum(1 for c in wso if c["tier"] == "A"),
        "tierB": sum(1 for c in wso if c["tier"] == "B"),
    }


def ks_mean_p(ks_row: dict | None) -> float | None:
    if not ks_row:
        return None
    ps = [cell["p_value"] for cell in ks_row.values() if isinstance(cell, dict)]
    return sum(ps) / len(ps) if ps else None


def top_ks_analog(ks: dict, focus: str, exclude: set[str]) -> tuple[str, float] | None:
    row = ks.get(focus, {}).get("vs_analogs", {})
    best = None
    for alias, props in row.items():
        if alias in exclude:
            continue
        mp = ks_mean_p(props)
        if mp is None:
            continue
        if best is None or mp > best[1]:
            best = (alias, mp)
    return best


def jaccard_pair(jaccard: dict, a: str, b: str) -> tuple[float | None, float | None]:
    aliases = jaccard["aliases"]
    i, j = aliases.index(a), aliases.index(b)
    feature = jaccard["matrix"][i][j]
    depth = jaccard.get("depth_binned_matrix", [[None]])[i][j]
    return feature, depth


def cluster_cosine(clusters: dict, a: str, b: str) -> float | None:
    aliases = clusters["aliases"]
    i, j = aliases.index(a), aliases.index(b)
    return clusters["cosine_similarity"][i][j]


def top_cluster(clusters: dict, focus: str) -> tuple[str, float] | None:
    aliases = clusters["aliases"]
    fi = aliases.index(focus)
    best = None
    for idx, alias in enumerate(aliases):
        if alias == focus:
            continue
        cos = clusters["cosine_similarity"][fi][idx]
        if best is None or cos > best[1]:
            best = (alias, cos)
    return best


def parse_interpretation(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    td_match = re.search(r"\*\*TD:\*\*\s*([^\n]+)", text)
    window_match = re.search(
        r"\*\*McKinlay Member analysis window:\*\*\s*([^\n]+)", text
    )
    shortcomings: list[str] = []
    sec3 = re.search(r"## 3\. Known Shortcomings\n\n(.*?)\n## 4\.", text, re.S)
    if sec3:
        for line in sec3.group(1).splitlines():
            line = re.sub(r"^\d+\.\s*", "", line.strip())
            line = line.replace("**", "")
            if line.startswith(">"):
                continue
            if line:
                shortcomings.append(line)
    return {
        "td": (td_match.group(1).strip() if td_match else "—"),
        "analysisWindow": (
            window_match.group(1).strip() if window_match else "McKinlay Member window not parsed"
        ),
        "shortcomings": shortcomings[:8],
    }


def wrci_cell(c: dict) -> str:
    w = c.get("WRCI")
    return f"{w:.1f}" if w is not None else "—"


def format_top_wso(candidates: list[dict], limit: int = 3) -> str:
    if not candidates:
        return "none ranked Tier A/B"
    parts = [
        f"{c['mdSpan']} (Tier {c['tier']}, score {c['score']:.1f})"
        for c in candidates[:limit]
    ]
    return "; ".join(parts)


def wso_table_rows(candidates: list[dict]) -> str:
    return "\n".join(
        f"| {c['rank']} | {c['tier']} | {c['mdSpan']} | {wrci_cell(c)} | {c.get('owc_near') or '—'} | {c['score']:.1f} |"
        for c in candidates
    )


def appendix_shortcomings(interpretations: list[dict]) -> str:
    blocks = []
    for meta in interpretations:
        lines = "\n".join(f"- {s}" for s in meta["shortcomings"][:5])
        blocks.append(f"### {meta['display']}\n{lines}")
    return "\n\n".join(blocks)


def build_markdown(stats: dict) -> str:
    b31 = stats["burden"]["JENA31"]
    bd1 = stats["burden"]["JENA31DW1"]
    bd = stats["burden"]["JENA31_DUAL"]
    w31 = stats["wso"]["JENA31"][:5]
    wd1 = stats["wso"]["JENA31DW1"][:5]
    gen = stats["generated"]

    return f"""# JENA 31 Dual Lateral — Executive Decision Brief

**Generated:** {gen}  
**Audience:** Stakeholder review (advisory — cuttings & log evidence only)  
**Site:** Portfolio → Decision Brief panel · Print view at `/#/decision-brief/print`

---

## Slide 1 — WSO shortlist (where to act)

**Headline:** JENA 31 carries most open water-risk windows; 31DW1 has fewer but deep Tier A clusters.

**Bullets:**
- JENA 31: **{b31['tierA']} Tier A** + **{b31['tierB']} Tier B** open windows ({b31['openElevatedHigh']} Elevated/High; {b31['owcProximate']} OWC-proximate)
- JENA 31DW1: **{bd1['tierA']} Tier A** + **{bd1['tierB']} Tier B** ({bd1['openElevatedHigh']} Elevated/High; {bd1['owcProximate']} OWC-proximate)
- Top JENA 31 windows: {format_top_wso(stats['wso']['JENA31'])}
- Top 31DW1 windows: {format_top_wso(stats['wso']['JENA31DW1'])}

**Speaker note:** Tier A/B ranks OWC proximity, ZOI, and WRCI on **open** intervals. Isolated zones are deprioritised. No production or rate data informs this list.

**Caveats (on slide):**
- Cuttings-based advisory only
- Confirm with completion geometry & field logs before WSO

---

## Slide 2 — Lateral similarity (share intervention logic?)

**Headline:** Laterals share cluster ID but diverge on feature Jaccard, KS, and cosine signature.

**Bullets:**
- Feature Jaccard (JENA 31 ↔ 31DW1): **{stats['jaccardFeature']:.3f}** · depth-binned: **{stats['jaccardDepthBinned']:.3f}**
- KS mean p (distributions): **{stats['ksMeanPBetweenLaterals']:.3f}** · cluster cosine: **{stats['clusterCosineBetweenLaterals']:.3f}**
- Top KS analog — JENA 31: **{stats['ksTop']['JENA31'][0]}** (mean p={stats['ksTop']['JENA31'][1]:.3f})
- Top KS analog — 31DW1: **{stats['ksTop']['JENA31DW1'][0]}** (mean p={stats['ksTop']['JENA31DW1'][1]:.3f})

**Speaker note:** Statistical similarity ≠ interchangeable WSO targets. Jaccard is on `/compare`; executive compare uses cluster cosine.

**Caveats:**
- Read Jaccard (binary features) and KS (continuous properties) together
- Negative cluster cosine means aggregate petrophysical vectors point apart

---

## Slide 3 — Commingled dual-lateral asset

**Headline:** Merged view shows **{bd['openElevatedHigh']}** open concern windows — masking per-lateral concentration.

**Bullets:**
- JENA 31 Dual Lateral: **{bd['openElevatedHigh']}** open Elevated/High · **{bd['owcProximate']}** OWC-proximate · **{bd['highOpen']}** High
- Pay %: **{stats['pay']['JENA31_DUAL']:.1f}%** merged ({stats['pay']['JENA31']:.1f}% JENA 31 · {stats['pay']['JENA31DW1']:.1f}% 31DW1)
- Top cluster analog (dual): **{stats['clusterTop']['JENA31_DUAL'][0]}** (cos={stats['clusterTop']['JENA31_DUAL'][1]:.3f})
- Top KS analog (dual): **{stats['ksTop']['JENA31_DUAL'][0]}** (mean p={stats['ksTop']['JENA31_DUAL'][1]:.3f})

**Speaker note:** Single wellhead / commingled production limits attribution. Virtual `JENA31_DUAL` is for analysis — not a routable well page.

**Caveats:**
- No water-cut or rate data
- Per-lateral detail in Well Detail & Water-Risk Explorer

---

## Appendix A — Top WSO windows (export reference)

### JENA 31

| Rank | Tier | MD window | WRCI | OWC | Score |
|------|------|-----------|------|-----|-------|
{wso_table_rows(w31)}

### JENA 31DW1

| Rank | Tier | MD window | WRCI | OWC | Score |
|------|------|-----------|------|-----|-------|
{wso_table_rows(wd1)}

---

## Appendix B — Interpretation shortcomings (from output/*_Interpretation.md)

{appendix_shortcomings(stats['interpretations'])}

---

## Appendix C — Data sources

| Asset | Path |
|-------|------|
| Water risk | `site/public/data/water_risk/JENA31*.json` |
| WSO export | `site/public/data/exports/wso_candidates_jena.json` |
| Print context | `site/public/data/exports/decision_brief_context.json` |
| Stats | `site/public/data/stats/{{jaccard,ks,clusters}}.json` |
| Interpretation | `output/JENA31*_McKinlay_Cuttings_Interpretation.md` |

**Limitation:** This brief does not include production rates, water cut, or intervention cost — only cuttings/log-derived concern flags.
"""


def main() -> None:
    wells = load_json(DATA / "wells.json")
    well_by = {w["alias"]: w for w in wells["wells"]}
    jaccard = load_json(DATA / "stats/jaccard.json")
    ks = load_json(DATA / "stats/ks.json")
    clusters = load_json(DATA / "stats/clusters.json")

    wso: dict[str, list[dict]] = {}
    burdens: dict[str, dict] = {}
    for alias, meta in JENA_ALIASES.items():
        wr = load_json(DATA / f"water_risk/{alias}.json")
        ranked = rank_wso(alias, meta["display"], wr["flagged_zones"])
        wso[alias] = ranked
        burdens[alias] = burden(wr["flagged_zones"], ranked)

    dual_wr = load_json(DATA / "water_risk/JENA31_DUAL.json")
    dual_wso = wso["JENA31"] + wso["JENA31DW1"]
    burdens["JENA31_DUAL"] = burden(dual_wr["flagged_zones"], dual_wso)

    jf, jd = jaccard_pair(jaccard, "JENA31", "JENA31DW1")
    ks_between = ks_mean_p(ks["JENA31"]["vs_analogs"].get("JENA31DW1"))
    cos_between = cluster_cosine(clusters, "JENA31", "JENA31DW1")

    exclude = {"JENA31", "JENA31DW1", "JENA31_DUAL"}
    ks_top = {
        alias: top_ks_analog(ks, alias, exclude)
        for alias in ("JENA31", "JENA31DW1", "JENA31_DUAL")
    }
    cluster_top = {
        alias: top_cluster(clusters, alias)
        for alias in ("JENA31", "JENA31DW1", "JENA31_DUAL")
    }

    interpretations = []
    for alias, meta in JENA_ALIASES.items():
        parsed = parse_interpretation(meta["interpretation"])
        interpretations.append(
            {
                "alias": alias,
                "display": meta["display"],
                **parsed,
            }
        )

    generated = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    stats = {
        "generated": generated,
        "burden": burdens,
        "wso": wso,
        "jaccardFeature": jf,
        "jaccardDepthBinned": jd,
        "ksMeanPBetweenLaterals": ks_between,
        "clusterCosineBetweenLaterals": cos_between,
        "ksTop": {k: v for k, v in ks_top.items()},
        "clusterTop": {k: v for k, v in cluster_top.items()},
        "pay": {
            "JENA31": well_by["JENA31"]["pay_pct"],
            "JENA31DW1": well_by["JENA31DW1"]["pay_pct"],
            "JENA31_DUAL": well_by["JENA31_DUAL"]["pay_pct"],
        },
        "interpretations": interpretations,
    }

    EXPORTS.mkdir(parents=True, exist_ok=True)
    (EXPORTS / "wso_candidates_jena.json").write_text(
        json.dumps(
            {
                "generated": wells.get("generated", generated),
                "laterals": [
                    {"alias": a, "display": JENA_ALIASES[a]["display"], "candidates": wso[a]}
                    for a in JENA_ALIASES
                ],
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    (EXPORTS / "decision_brief_context.json").write_text(
        json.dumps(
            {"generated": wells.get("generated", generated), "interpretations": interpretations},
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    DOCS.mkdir(parents=True, exist_ok=True)
    md = build_markdown(stats)
    (DOCS / "decision-brief-jena-dual.md").write_text(md, encoding="utf-8")
    print(f"Wrote {DOCS / 'decision-brief-jena-dual.md'}")
    print(f"Wrote {EXPORTS / 'wso_candidates_jena.json'}")
    print(f"Wrote {EXPORTS / 'decision_brief_context.json'}")


if __name__ == "__main__":
    main()
