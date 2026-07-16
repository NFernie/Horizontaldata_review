# JENA 31 Dual Lateral — Executive Decision Brief

**Generated:** 2026-07-16 02:43 UTC  
**Audience:** Stakeholder review (advisory — cuttings & log evidence only)  
**Site:** Portfolio → Decision Brief panel · Print view at `/#/decision-brief/print`

---

## Slide 1 — WSO shortlist (where to act)

**Headline:** JENA 31 carries most open water-risk windows; 31DW1 has fewer but deep Tier A clusters.

**Bullets:**
- JENA 31: **26 Tier A** + **35 Tier B** open windows (61 Elevated/High; 60 OWC-proximate)
- JENA 31DW1: **2 Tier A** + **16 Tier B** (18 Elevated/High; 6 OWC-proximate)
- Top JENA 31 windows: 2498–2502 m (Tier A, score 94.0); 2452–2458 m (Tier A, score 84.7); 2492–2498 m (Tier A, score 83.3)
- Top 31DW1 windows: 3595–3605 m (Tier A, score 92.4); 3605–3612 m (Tier A, score 68.1); 3575–3585 m (Tier B, score 57.2)

**Speaker note:** Tier A/B ranks OWC proximity, ZOI, and WRCI on **open** intervals. Isolated zones are deprioritised. No production or rate data informs this list.

**Caveats (on slide):**
- Cuttings-based advisory only
- Confirm with completion geometry & field logs before WSO

---

## Slide 2 — Lateral similarity (share intervention logic?)

**Headline:** Laterals share cluster ID but diverge on feature Jaccard, KS, and cosine signature.

**Bullets:**
- Feature Jaccard (JENA 31 ↔ 31DW1): **0.500** · depth-binned: **0.176**
- KS mean p (distributions): **0.156** · cluster cosine: **-0.158**
- Top KS analog — JENA 31: **HOBBES5** (mean p=0.184)
- Top KS analog — 31DW1: **FROSTILLICUS2** (mean p=0.248)

**Speaker note:** Statistical similarity ≠ interchangeable WSO targets. Jaccard is on `/compare`; executive compare uses cluster cosine.

**Caveats:**
- Read Jaccard (binary features) and KS (continuous properties) together
- Negative cluster cosine means aggregate petrophysical vectors point apart

---

## Slide 3 — Commingled dual-lateral asset

**Headline:** Merged view shows **79** open concern windows — masking per-lateral concentration.

**Bullets:**
- JENA 31 Dual Lateral: **79** open Elevated/High · **66** OWC-proximate · **2** High
- Pay %: **76.4%** merged (80.4% JENA 31 · 73.6% 31DW1)
- Top cluster analog (dual): **STIMPEE6** (cos=0.825)
- Top KS analog (dual): **STIMPEE6** (mean p=0.216)

**Speaker note:** Single wellhead / commingled production limits attribution. Virtual `JENA31_DUAL` is for analysis — not a routable well page.

**Caveats:**
- No water-cut or rate data
- Per-lateral detail in Well Detail & Water-Risk Explorer

---

## Appendix A — Top WSO windows (export reference)

### JENA 31

| Rank | Tier | MD window | WRCI | OWC | Score |
|------|------|-----------|------|-----|-------|
| 1 | A | 2498–2502 m | 51.9 | High | 94.0 |
| 2 | A | 2452–2458 m | 30.9 | High | 84.7 |
| 3 | A | 2492–2498 m | 49.3 | High | 83.3 |
| 4 | A | 2462–2468 m | 32.3 | High | 71.1 |
| 5 | A | 2468–2472 m | 32.4 | High | 71.1 |

### JENA 31DW1

| Rank | Tier | MD window | WRCI | OWC | Score |
|------|------|-----------|------|-----|-------|
| 1 | A | 3595–3605 m | 45.6 | High | 92.4 |
| 2 | A | 3605–3612 m | 44.6 | High | 68.1 |
| 3 | B | 3575–3585 m | 36.8 | Elevated | 57.2 |
| 4 | B | 3585–3595 m | 35.4 | Elevated | 56.8 |
| 5 | B | 2165–2175 m | 38.0 | Low | 51.5 |

---

## Appendix B — Interpretation shortcomings (from output/*_Interpretation.md)

### JENA 31
- Mudlog PDF text extraction is imperfect. Depth-to-description assignment uses ±15 m proximity heuristics.
- Formation top discrepancies between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
- Well name mapping: JENA 31 → `JENA 31 OPS` (verified by TD and LAS WELL header).
- Sample intervals are midpoints between consecutive sample depths — variable widths where spacing is irregular.
- Water-risk flags use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).

### JENA 31DW1
- Mudlog PDF text extraction is imperfect. Depth-to-description assignment uses ±15 m proximity heuristics.
- Formation top discrepancies between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
- Well name mapping: JENA 31DW1 → `JENA 31DW1` (verified by TD and LAS WELL header).
- Sample intervals are midpoints between consecutive sample depths — variable widths where spacing is irregular.
- Water-risk flags use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).

---

## Appendix C — Data sources

| Asset | Path |
|-------|------|
| Water risk | `site/public/data/water_risk/JENA31*.json` |
| WSO export | `site/public/data/exports/wso_candidates_jena.json` |
| Print context | `site/public/data/exports/decision_brief_context.json` |
| Stats | `site/public/data/stats/{jaccard,ks,clusters}.json` |
| Interpretation | `output/JENA31*_McKinlay_Cuttings_Interpretation.md` |

**Limitation:** This brief does not include production rates, water cut, or intervention cost — only cuttings/log-derived concern flags.
