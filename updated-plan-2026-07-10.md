# Updated Pipeline Plan — RQI v2, New Wells, Along-Wellbore Flags & OWC Proximity

**Date:** 2026-07-10  
**Status:** **Planning only — do not run pipelines or change code until stakeholder go-ahead**  
**Supersedes (in part):** `res_sep_fix-plan.md` (**suspended**), OpusPlanR1 `highperm` / ΔRes red-flag logic  
**Implements:** `RQI_Update-Plan.md` §3 locked decisions (8-component RQI)  
**New inputs:** trajectory files (`*_trajectory`), `Oil_Water_Contact.csv`, McKinlay 10–15 datasets

---

## 1. Executive summary

This plan coordinates a **single major release** covering:

1. **Onboard McKinlay 10–15** (6 new wells) into batch processing and portfolio summaries.  
2. **Re-implement RQI** per `RQI_Update-Plan.md` (8 components; retire binary `loose_grains`).  
3. **Remove ΔRes / `res_sep` entirely** from red flags, WRCI, statistics, site UI, and interpretation narrative — `res_sep_fix-plan.md` is **suspended**.  
4. **Replace perm-proxy logic** with **`low_GR`** (GR < 65 gAPI on good rock) as a distinct flag.  
5. **Add along-wellbore change detection** — **Zone of Interest (ZOI)** flags where good rock shows sudden deterioration in fluorescence, total gas, or deep resistivity vs neighbours.  
6. **Add OWC proximity flags** using trajectory-derived **mTVDss** vs field OWC from `Oil_Water_Contact.csv`.  
7. **Show RQI alongside WRCI** in interval tables, water-risk views, and JSON exports.  
8. **Confirm overburden exclusion** in all net-pay calculations (unchanged logic; re-verify after rerun).

**Phased execution is required** — see §4. Do not merge partial phases.

---

## 2. Scope

### In scope

| Item | Detail |
|------|--------|
| Portfolio | Existing **17** horizontal wells + **McKinlay 10–15** (6 new) = **23 wells** target |
| RQI | 8-component formula per `RQI_Update-Plan.md` §3–4 |
| WRCI | Recalculated **without** `highperm` / `res_sep`; include RQI column everywhere WRCI appears |
| New flags | `low_GR`, `ZOI`, `owc_proximity` (High / Elevated / Low) |
| Trajectory | Petrel survey files at repo root; MD → mTVDss interpolation |
| OWC | `Oil_Water_Contact.csv` field-level mTVDss contacts |
| Pay | Overburden intervals excluded (existing `exclusion_zones`); add `compute_pay_summary.py` to CI rerun chain |
| Docs | `New Statistical Methods.md`, `BATCH_PROCESSING_STATUS.md`, `ALL_WELLS_PAY_SUMMARY.md` |

### Out of scope / suspended

| Item | Status |
|------|--------|
| `res_sep_fix-plan.md` (DSI, charge gate, RES_MED tri-curve) | **Suspended** — no implementation |
| `highperm` red flag | **Removed** |
| ΔRes in interpretation MD (`perm_proxy`, Δ Res tables) | **Removed** from analysis outputs |
| `res_sep` in Spearman / Jaccard / KS / z-scores | **Removed** (replace with `avg_GR` emphasis or along-wellbore metrics) |
| HOBBES 4 | Still no data |
| Private trajectory viz repo integration | **Blocked pending access** — see §10 |

---

## 3. New & updated repo inputs (confirmed on `main`)

### 3.1 McKinlay 10–15 (new wells — not in prior batch)

| Well | LAS | Trajectory | Mudlog PDF | Litho | Drill-gas | Sample Excel |
|------|-----|------------|------------|-------|-----------|--------------|
| McKinlay 10 | `Mck_10` | `Mck_10_trajectory` | ✓ | `.ASC` | `.ASC` | **✗ missing** |
| McKinlay 11 | `Mck_11` | `Mck_11_trajectory` | ✓ | `.ASC` | `.ASC` | **✗ missing** |
| McKinlay 12 | `Mck_12` | `Mck_12_trajectory` | ✓ | `.txt` | `.txt` | **✗ missing** |
| McKinlay 13 | `Mck_13` | `Mck_13_trajectory` | ✓ | `.ASC` | `.ASC` | **✗ missing** |
| McKinlay 14 | `Mck_14` | `Mck_14_trajectory` | ✓ | `.txt` | `.txt` | **✗ missing** |
| McKinlay 15 | `Mck_15` | `Mck_15_trajectory` | ✓ | `.ASC` | `.ASC` | **✗ missing** |

**Blocker:** Current pipeline requires **Hz Section Samples Descriptions** Excel (`Input Sheet`). McKinlay 10–15 have mudlog + LAS + ASCII litho/gas only. **Phase 1 must define an alternate ingestion path** (see §5 Q1).

### 3.2 Trajectory files (all wells)

23 Petrel survey exports at repo root (`Jena_31_trajectory`, `Mck_10_trajectory`, etc.). Columns include `MD`, `TVD`, `Z` (subsea depth). Example: JENA 31 at MD ≈ 2586 m has **Z ≈ −1193 m** — consistent with Jena field OWC **−1198 m** in `Oil_Water_Contact.csv`.

### 3.3 OWC reference

`Oil_Water_Contact.csv` — field-level mTVDss contacts:

| Field | OWC (mTVDss) |
|-------|----------------|
| Jena | −1198 |
| McKinlay | −1203 |
| Hobbes | −1210 |
| Biala | −1205 |
| Granchio | −1214 |
| Frostillicus | −1227 |
| Stimpee | −1214 |
| Teringie | −1227 |

**Note:** Trailing spaces in CSV (`Field `, `Stimpee `) — normalise on ingest. Per-well field mapping required (JENA 31 → Jena, MCKINLAY 20 → McKinlay, etc.).

### 3.4 Updated tops

`DC30.xlsx` and `Mck_Murta.xlsx` updated 2026-07-09 — verify McKinlay 10–15 entries before processing.

---

## 4. Phased execution plan

### Phase 0 — Planning lock-in (this document)

**Gate:** Stakeholder answers §9 questions. No code until approved.

**Deliverable:** Signed-off thresholds for ZOI, OWC, WRCI weights, McKinlay 10–15 ingestion strategy.

---

### Phase 1 — Batch new wells into summaries

**Goal:** McKinlay 10–15 produce the same output artefacts as existing wells.

| Task | Detail |
|------|--------|
| 1.1 | Extend `WELLS` registry in `process_mckinlay_wells.py` for MCKINLAY10–15 |
| 1.2 | Map wells to `DC30.xlsx` / `Mck_Murta.xlsx` tops names |
| 1.3 | **Ingestion strategy** for wells without sample Excel (mudlog + litho ASCII + drill-gas) — see §9 Q1 |
| 1.4 | Unit handling: litho/gas files in **feet** → convert to **m MD** |
| 1.5 | Add trajectory loader: interpolate `mTVDss` (Z column) at each sample MD |
| 1.6 | Run `process_mckinlay_wells.py` for all **23** wells |
| 1.7 | Run `compute_pay_summary.py`; update `ALL_WELLS_PAY_SUMMARY.md` |
| 1.8 | Update `BATCH_PROCESSING_STATUS.md`, `REUSABLE_WORKFLOW_PROMPT.md` |

**Acceptance:**
- 6 new `output/MCKINLAY{10–15}_*.md` interpretation + process summaries exist  
- Pay summaries exclude overburden (spot-check one new well)  
- `mTVDss` present on every retained interval JSON field (Phase 1b or deferred to Phase 3)

---

### Phase 2 — RQI v2 (8-component)

**Goal:** Implement `RQI_Update-Plan.md` §3–4 parsers and weights.

| Task | Detail |
|------|--------|
| 2.1 | Add `parse_sorting()`, `parse_angularity()`, `parse_cement()`, `parse_hardness()` |
| 2.2 | Update `RQI_WEIGHTS` (0.20 / 0.17 / 0.14 / 0.13 / 0.12 / 0.10 / 0.08 / 0.06) |
| 2.3 | Per-interval weight renormalisation when sorting/cement/angularity missing |
| 2.4 | Remove `loose_grains` boolean everywhere |
| 2.5 | Mirror `scripts/config.py` → `site/src/config.ts` |

**Acceptance:** Spot-check JENA 31 @ 2500 m — hardness/sorting/cement parsed from mudlog text; RQI differs from current 5-component value.

---

### Phase 3 — Remove ΔRes; new flag framework

**Goal:** Retire `res_sep` analysis; implement replacement flags.

#### 3A — Remove ΔRes (mandatory)

| Location | Action |
|----------|--------|
| `process_mckinlay_wells.py` | Stop computing/displaying `res_sep`, `perm_proxy()`; remove Δ Res from interpretation MD |
| `export_web_data.py` | Remove `highperm` flag, `highperm_norm` from WRCI, `res_sep` from z-scores / Spearman / Jaccard / KS / clusters |
| `config.py` / `config.ts` | Remove `FLAG_RES_SEP_PERCENTILE`, `highperm` from `WRCI_WEIGHTS`, `JACCARD_FEATURES`, `ZSCORE_METRICS`, etc. |
| `New Statistical Methods.md` | Remove Method 1 `highperm`; document new flags |
| Site | Remove `res_sep` depth track; remove `highperm` chips |
| `res_sep_fix-plan.md` | Add **SUSPENDED** banner at top |

#### 3B — New WRCI formula (proposed default)

```
WRCI = 100 × ( 0.50·RQI + 0.25·lowres_severity + 0.25·lowfluor_severity )
```

Red-flag booleans on **RQI ≥ 0.6** only:

| Flag ID | Condition | Replaces |
|---------|-----------|----------|
| `lowres` | `avg_RES_DEEP < 20` Ω·m | unchanged |
| `lowfluor` | `fluor < 75%` | unchanged |
| `low_GR` | `avg_GR < 65` gAPI | **`highperm`** (perm proxy) |
| `ZOI` | Along-wellbore deterioration — §6 | **new** |
| `owc_near` | OWC proximity — §7 | **new** |

**Risk class (proposed — confirm in §9):**

| Class | Rule (draft) |
|-------|----------------|
| **High** | WRCI ≥ 66 **and** ≥ 2 of `{lowres, lowfluor, low_GR, ZOI, owc_near=High}` |
| **Elevated** | WRCI 40–66 **or** 1 flag **or** `owc_near=Elevated` on RQI≥0.6 / ZOI |
| **Low** | Otherwise |

> WRCI weights and risk-class combinatorics are **draft** — stakeholder must confirm §9 Q5–Q6.

#### 3C — RQI in tables

Add `RQI` column alongside `WRCI` and `risk_class` in:
- Interval JSON (`site/public/data/intervals/{ALIAS}.json`)
- Water-risk ranked zones (`water_risk/{ALIAS}.json`)
- Well Detail interval `DataTable`
- Water-Risk Explorer evidence cards
- Corpus interval summaries

---

### Phase 4 — Along-wellbore Zone of Interest (ZOI)

**Goal:** Flag intervals where reservoir quality is good but show properties **suddenly deteriorate** vs neighbours along the lateral.

#### 4.1 Stakeholder intent (as stated)

Compare each interval's **RQI, %Fluor, TGas, RES_DEEP** to **nearby intervals in mMD**. Flag when:

1. Interval has **RQI ≥ 0.6** (good rock), **and**  
2. **Sudden decrease > 15%** in **any** of `%Fluor`, `TGas`, or `RES_DEEP` relative to reference neighbour(s).

**Example (confirmed intent):**

| Sample | Depth | RQI | Fluor | TGas | Res |
|--------|-------|-----|-------|------|-----|
| X (reference) | Y | 0.60 | 100% | 40 | 30 |
| A (flagged) | B | 0.63 | 80% (−20%) | 30 (−25%) | 25 (−17%) | → **ZOI** |

#### 4.2 Proposed algorithm (draft — pending §9 Q2)

For each retained interval *i* (sorted by MD):

```
neighbours = intervals at i-1, i, i+1   # 3-interval window (1 shallower + self + 1 deeper)
           OR i-3…i+3                    # 7-interval window — TBD

reference  = neighbour with max(RQI) among window excluding i, where RQI ≥ 0.6
           OR immediate shallower interval if RQI ≥ 0.6 — TBD

For each metric m ∈ {fluor, gas, avg_RES_DEEP}:
  drop_pct(m) = (ref[m] - cur[m]) / ref[m]   # only if ref[m] > 0

ZOI = (RQI_i ≥ 0.6) AND any(drop_pct(m) > 0.15)
```

**Additional idea — RQI drop variant (from ambiguous wording):**

```
RQI_drop = (ref_RQI - RQI_i) / ref_RQI > 0.10   # 10% RQI decrease vs neighbour
```

Clarify whether RQI drop alone triggers ZOI or only fluor/TG/res drops on RQI≥0.6.

#### 4.3 Edge cases

- First / last interval in lateral: use 1-sided neighbour only  
- Missing gas or fluor (legacy Sheet1 wells): skip that metric; ZOI if any present metric drops > 15%  
- Overburden intervals: excluded from ZOI windows  
- McKinlay 10–15 without fluor: ZOI may be **res + gas only**

#### 4.4 Alternative ideas (for discussion)

| # | Approach | Pros | Cons |
|---|----------|------|------|
| A | **Pairwise** (vs immediate shallower) | Matches example | Noisy on irregular sample spacing |
| B | **3-point rolling median** reference | Smoother | May miss sharp single-step changes |
| C | **Modified z-score** on fluor/TG/res along wellbore | Already have machinery | Less intuitive than % drop |
| D | **Combined deterioration index** | Single score for WRCI | Harder to explain |
| E | ZOI only when **≥2 of 3** metrics drop >15% | Fewer false positives | May miss single strong signal |

---

### Phase 5 — OWC proximity flags

**Goal:** Flag intervals by vertical distance to field oil–water contact.

#### 5.1 Depth conversion

```
1. Load trajectory for well → interpolate Z (mTVDss) at sample MD
2. Load field OWC from Oil_Water_Contact.csv via well→field map
3. owc_distance_m = abs(mTVDss_interval - OWC_field)   # confirm sign convention §9 Q4
```

#### 5.2 Proximity tiers (stakeholder spec)

**For RQI ≥ 0.6 or ZOI intervals:**

| Tier | Distance to OWC | Flag |
|------|-----------------|------|
| High | < 4 m | `owc_near=High` |
| Elevated | 4 – 6 m | `owc_near=Elevated` |
| Low | > 6 m | `owc_near=Low` |

**For RQI < 0.6 (poor rock):**

| Tier | Distance | Flag |
|------|----------|------|
| High | < 3 m | `owc_near=High` |
| Elevated | 3 – 5 m | `owc_near=Elevated` |
| Low | > 5 m | `owc_near=Low` |

**Rationale:** Poor rock near OWC is still noteworthy but with tighter distance bands.

#### 5.3 Open geoscience questions

- Is OWC **field-level** appropriate for all laterals (Jena 31 vs 31DW1 share Jena −1198)?  
- Use **Z** or **TVD** column from Petrel export for mTVDss? (Z appears subsea-referenced; TVD is datum-relative)  
- Horizontal wells: distance is **vertical offset to contact surface** — not along-hole distance to wedge. Confirm this is the intended physical model.

---

### Phase 6 — Full pipeline rerun & site deploy

**Execute only after Phases 1–5 pass acceptance gates.**

```bash
pip install -r requirements.txt

# 1. Process all wells (RQI v2 parsers, trajectory TVDSS, no res_sep)
python3 scripts/process_mckinlay_wells.py

# 2. Pay summaries (overburden excluded)
python3 scripts/compute_pay_summary.py

# 3. Statistics + flags (WRCI v2, ZOI, OWC, low_GR)
python3 scripts/export_web_data.py

# 4. Corpus index
python3 scripts/build_corpus_index.py

# 5. Site
cd site && npm test && npm run build
```

**Update:** `.github/workflows/deploy.yml` to include `compute_pay_summary.py`.

**Acceptance gates:**

| # | Check |
|---|-------|
| G1 | 23 wells process (or documented skip with reason) |
| G2 | No `res_sep` / `highperm` in JSON or site |
| G3 | RQI column visible alongside WRCI in Well Detail + Water-Risk |
| G4 | JENA 31 @ 2500 m has `mTVDss`, OWC distance, RQI v2 |
| G5 | Overburden intervals absent from pay totals |
| G6 | `New Statistical Methods.md` updated |
| G7 | `npm run build` clean |

---

## 5. Pay & overburden (Step 3 confirmation)

**Requirement:** Overburden zones must not contribute to net pay.

**Current behaviour (unchanged):** `compute_pay_summary.py` and `process_mckinlay_wells.py` use shared `exclusion_zones` / `interval_excluded()` logic. Pay MD sums only non-excluded McKinlay intervals.

**Phase 6 verification:**
- Re-run pay for JENA 31 — confirm 3 overburden windows still excluded (see `output/JENA 31/pay-summary.md`)  
- Add automated assertion in pay script or test: `no pay interval overlaps exclusion zone`  
- Include McKinlay 10–15 in `ALL_WELLS_PAY_SUMMARY.md`

---

## 6. ΔRes removal checklist

| Artifact | Remove / replace |
|----------|----------------|
| `res_sep` field in interval JSON | Remove (or keep null deprecated one release — prefer remove) |
| `highperm` flag | Remove |
| WRCI `highperm_norm` term | Remove; redistribute weight |
| `perm_proxy()` interpretation text | Remove Δ Res rows from MD |
| Well Detail `res_sep` track | Remove |
| Spearman variable `res_sep` | Remove |
| Z-score metric `res_sep` | Remove |
| Jaccard feature `highperm` | Replace with `low_GR` and/or `ZOI` |
| KS property `res_sep` | Remove |
| Cluster feature `mean_res_sep` | Remove |
| Corpus synonyms `perm` → `res_sep` | Update to `low_GR` / `ZOI` |
| `res_sep_fix-plan.md` | Mark **SUSPENDED** |

---

## 7. Document updates required

| Document | Change |
|----------|--------|
| `updated-plan-2026-07-10.md` | This file |
| `RQI_Update-Plan.md` | Note `res_sep_fix-plan` suspended; link here |
| `res_sep_fix-plan.md` | Add SUSPENDED banner |
| `New Statistical Methods.md` | Method 1 rewrite: flags, WRCI, ZOI, OWC |
| `BATCH_PROCESSING_STATUS.md` | 23-well table |
| `output/REUSABLE_WORKFLOW_PROMPT.md` | McKinlay 10–15 + trajectory |
| `OpusPlanR1.md` | Historical reference only (no ΔRes) |

---

## 8. Private repo / trajectory visualisation (§10 answer)

**Can we read your private GitHub repos and pull trajectory/structural display code?**

**No — not automatically.** This environment can only access:

- The current workspace (`NFernie/Horizontaldata_review`)  
- Public URLs you provide  
- Repos you explicitly grant access to (collaborator invite, copy code into this repo, git submodule, or paste relevant modules)

**Recommended paths to reuse your Python viz code:**

| Option | Effort | Notes |
|--------|--------|-------|
| **A. Copy modules** into `scripts/trajectory/` in this repo | Low | Best for static site — no cross-repo dependency |
| **B. Git submodule** | Medium | Pin version; CI must init submodules |
| **C. Publish viz package** to private PyPI / install from git URL | Medium | `pip install git+https://...` in `requirements.txt` |
| **D. Reimplement minimal MD→TVDSS interpolator** | Low | May suffice for OWC distance without full structural viz |

For **OWC proximity flags**, Option **D** is likely sufficient (1D interpolation MD → Z). Full structural display on the static site is a **separate Phase 7** if desired.

**To proceed with viz integration, please provide:**
- Repo name / URL (or add Cursor agent as collaborator)  
- Which modules render trajectory + structure  
- Whether viz is **batch (PNG/SVG export)** or **interactive (needs client library)**

---

## 9. Clarifying questions (answer before go-ahead)

### A. McKinlay 10–15 ingestion

1. **Sample spreadsheets:** Will Hz Section Samples Descriptions Excel files be uploaded for McKinlay 10–15, or should we build intervals from **mudlog PDF + litho ASCII + drill-gas** only?

Build intervals from Mudlog PDF + Litho + Drill Gas
 
3. If ASCII-only: what is the **sample spacing** (litho rows are ~1.3 ft)? Aggregate to 5 m bins to match existing wells?  

Aggregate to 5m bins

4. Are McKinlay 10–15 **horizontal McKinlay Member targets** (same exclusion logic as 20–24)?  

Yes, horizontal McKinlay Member targets, all the wells in the data set are Horizontal Mckinlay Member Targets

5. Confirm **Mck_Murta.xlsx** now contains tops for wells 10–15.

Confirmed tops are included in the xlsx

### B. Zone of Interest (ZOI)

5. **Neighbour window:** 1 shallower + 1 deeper (3 total), or wider (±3 intervals)?  

3 shallower and 3 deeper

6. **Reference interval:** Immediate shallower, immediate deeper, best RQI in window, or average of neighbours?  

Average of neighbours, compare to average of shallower and compare to average of deeper. So compare to two different averages

7. **% drop baseline:** Compare to **shallower** neighbour only (matches your example), or max of neighbours?  

Compare to deeper and shallower independantly and flag if either meets the criteria

8. Does **RQI drop > 10%** alone trigger ZOI, or only fluor/TG/res drops when RQI ≥ 0.6?  

If RQI is within the range of <10% or greater than neighbours and change in flour/TG/res meets criteria trigger a ZOI. Use this alternative approach 'ZOI only when ≥2 of 3 metrics drop >15%'

9. Should ZOI fire when values drop but remain **above pay cutoffs** (your example: fluor 80%, res 25)? — assumed **yes**.

Yes, if below pay cutoffs trigger use the red flag triggers. 

10. **TGas units:** Compare absolute drop or % drop? (40 → 30 is −25% but also −10 units.)

Percentage drop >15%

### C. low_GR flag

11. Confirm threshold: **GR < 65 gAPI** on intervals where **RQI ≥ 0.6** only (same gate as other red flags)?  

Use the suggested threshold

12. Should `low_GR` contribute to WRCI severity term, or be **boolean flag only**?

Boolean flag only. GR is already considered in RQI and therefore WRCI independantly 


### D. OWC / trajectory

13. Confirm **`Z` column = mTVDss** for OWC distance (not TVD relative to KB).  

Z = mTVDss 

14. **Jena 31 vs 31DW1:** both use Field **Jena** OWC (−1198)? 

Yes same OWC

15. **McKinlay 10–15:** all use Field **McKinlay** (−1203)?  

Yes same OWC

16. Distance formula: `|Z_interval − OWC_field|` — correct?  

Correct 

17. Should OWC proximity affect **WRCI numeric score** or only **risk_class / flag chips**?

OWC should effect WRCI numeric score

### E. WRCI & risk classification

18. Approve proposed WRCI weights **0.50 / 0.25 / 0.25** (RQI / lowres / lowfluor) after removing perm term?  

Approved. Balance in OWC proximity to replace perm term

19. How should **ZOI** and **owc_near** combine with WRCI for High / Elevated / Low? (See §4 draft table.)  

ZOI does not need to combine with WRCI, it should be independant and verified as a risk zone when they flag together (WRCI eleveated or high). Combine WRCI for high & elevated owc_near 

20. Keep **`RQI_THRESHOLD = 0.6`** fixed per `RQI_Update-Plan.md`?

Keep the threshold

### F. Scope & sequencing

21. **Single PR** for all phases, or phase-per-PR with intermediate review?  

Single PR

22. Run **17-well rerun first** (RQI v2 + flags) before adding McKinlay 10–15, or all 23 together?  

All 23 together after batching Mck 10-15

23. Approve adding `compute_pay_summary.py` to **GitHub Actions** deploy workflow?

Approve

### G. Private viz repo

24. Repo URL / name and preferred integration option (§8 A–D)?  
25. Is structural viz **required for this release**, or OWC distance only?

Lets do OWC distance only for now

---

## 10. Suggested stakeholder reading order

1. This document §9 (questions)  
2. `RQI_Update-Plan.md` §3 (locked RQI decisions)  
3. `updated-plan-2026-07-10.md` §4–6 (phases)  
4. `Oil_Water_Contact.csv` + one trajectory file (e.g. `Jena_31_trajectory`)  
5. `mudlog_cutting_descriptions.md` (parser glossary)

---

## 11. Revision history

| Date | Change |
|------|--------|
| 2026-07-10 | Initial plan — RQI v2 rerun, McKinlay 10–15 batching, ΔRes removal, ZOI + OWC flags, private repo guidance |
