# Updated Pipeline Plan — RQI v2, New Wells, Along-Wellbore Flags & OWC Proximity

**Date:** 2026-07-10  
**Status:** **Approved for implementation** — §9 stakeholder answers locked (2026-07-10)  
**Branch:** Commit directly to `main` (single PR)  
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

**Gate:** ~~Stakeholder answers §9 questions.~~ **✅ Complete** — see §9 locked answers.

**Deliverable:** Signed-off thresholds for ZOI, OWC, WRCI weights, McKinlay 10–15 ingestion strategy.

---

## 4A. Locked decisions summary (from §9 answers)

| Topic | Decision |
|-------|----------|
| McKinlay 10–15 ingestion | Mudlog PDF + litho ASCII + drill-gas; **5 m bins**; horizontal McKinlay Member; tops in `Mck_Murta.xlsx` confirmed |
| ZOI window | **±3 intervals** (3 shallower + 3 deeper) |
| ZOI reference | **Average of 3 shallower** and **average of 3 deeper** — compare independently; flag if **either** side meets criteria |
| ZOI trigger | RQI within **10% of neighbours OR higher** than neighbours; **≥2 of 3** metrics (fluor, TGas, RES_DEEP) drop **>15%** vs that reference average; **% drop** for TGas |
| ZOI vs pay | ZOI fires above pay cutoffs; if **below** pay cutoffs use standard `lowres` / `lowfluor` red flags |
| `low_GR` | **GR < 65 gAPI** on RQI ≥ 0.6; **boolean flag only** (not a WRCI severity term) |
| OWC depth | **`Z` = mTVDss**; distance = `\|Z_interval − OWC_field\|`; Jena 31 + 31DW1 → Jena −1198; McKinlay 10–15 → McKinlay −1203 |
| OWC in WRCI | **Yes** — OWC proximity severity **replaces** former perm term in WRCI numeric score |
| WRCI weights | **0.40·RQI + 0.20·lowres + 0.20·lowfluor + 0.20·owc_severity** (rebalanced from 0.50/0.25/0.25) |
| ZOI vs WRCI | **Independent** — ZOI is not a WRCI input; flag as risk zone when **ZOI + (WRCI Elevated or High)** co-occur |
| `RQI_THRESHOLD` | **0.6** fixed |
| Sequencing | **Single PR**; batch McKinlay 10–15 first, then **all 23 wells** together in final rerun |
| CI | Add `compute_pay_summary.py` to deploy workflow |
| Structural viz | **OWC distance only** — no private viz repo this release |
| ΔRes / DSI | **Removed / suspended** — no `res_sep`, no `highperm` |

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

#### 3B — WRCI formula (locked §9)

```
WRCI = 100 × ( 0.40·RQI + 0.20·lowres_severity + 0.20·lowfluor_severity + 0.20·owc_severity )
```

`owc_severity` maps proximity tier to 0–1 (High → 1.0, Elevated → 0.5, Low → 0.0) using §5.2 distance bands.

Red-flag booleans on **RQI ≥ 0.6** only (except OWC tiers also apply per §5.2 for RQI < 0.6):

| Flag ID | Condition | WRCI term? |
|---------|-----------|------------|
| `lowres` | `avg_RES_DEEP < 20` Ω·m | severity in formula |
| `lowfluor` | `fluor < 75%` | severity in formula |
| `low_GR` | `avg_GR < 65` gAPI | **boolean only** |
| `ZOI` | §4 algorithm | **independent** — not in WRCI formula |
| `owc_near` | §5 proximity tiers | **severity in formula** |

**Risk class (locked §9):**

| Class | Rule |
|-------|------|
| **High** | WRCI ≥ 66 **and** (`owc_near=High` **or** ≥2 of `{lowres, lowfluor, low_GR}`) **or** (ZOI **and** WRCI ≥ 66) |
| **Elevated** | WRCI 40–66 **or** 1 of `{lowres, lowfluor, low_GR}` **or** `owc_near=Elevated` **or** (ZOI **and** WRCI ≥ 40) |
| **Low** | Otherwise |

> Implementer: encode exact combinatorics in `scripts/config.py` with comments; mirror in `site/src/config.ts`.

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

#### 4.2 Algorithm (locked §9)

For each retained interval *i* (sorted by MD, overburden excluded):

```
shallow_avg = mean(fluor, gas, RES_DEEP) over intervals [i-3 .. i-1]
deep_avg    = mean(fluor, gas, RES_DEEP) over intervals [i+1 .. i+3]
shallow_RQI_avg = mean(RQI) over [i-3 .. i-1]
deep_RQI_avg    = mean(RQI) over [i+1 .. i+3]

For each side S ∈ {shallow, deep} where enough neighbours exist:
  rqi_ok = (RQI_i >= RQI_THRESHOLD) AND (
             RQI_i >= RQI_avg_S * 0.9          # within 10% of neighbours OR higher
             OR RQI_i > RQI_avg_S
           )
  drops = count over m ∈ {fluor, gas, RES_DEEP} where:
             ref[m] > 0 AND (ref[m] - cur[m]) / ref[m] > 0.15
             # ref = shallow_avg or deep_avg for that metric
  side_triggers = rqi_ok AND drops >= 2

ZOI = side_triggers_shallow OR side_triggers_deep
```

- Edge intervals: use available neighbours only (1–3 per side).  
- Missing fluor/gas: compute drops over **available** metrics only; still require **≥2** drops.  
- If interval is **below pay cutoffs** (`lowres` / `lowfluor`), use standard red flags — ZOI is for above-cutoff deterioration.

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

## 12. Implementation agent prompts (copy-paste)

> **Usage:** One prompt per message. Wait for the phase acceptance gate before starting the next — unless using a **combined prompt** noted below. Commit to `main`. Single PR for the full release.

### How many phases per prompt?

| Approach | Phases | When |
|----------|--------|------|
| **Recommended** | **1** | Default — highest success rate |
| **Acceptable** | **3 + 4 + 5** | Single backend session — all touch `export_web_data.py` |
| **Acceptable** | **6** | After 1–5 pass — rerun + site + CI only |
| **Do not combine** | 1 + 2 | Both heavily edit `process_mckinlay_wells.py` |
| **Do not combine** | 2 + 3 | Phase 3 export needs Phase 2 RQI fields |
| **Do not parallelise** | Any two phases on same file | See §13 |

---

### Prompt — Phase 1: Batch McKinlay 10–15 + trajectory

```
Execute updated-plan-2026-07-10.md Phase 1 only.

Read: updated-plan-2026-07-10.md §4A (locked decisions), §3.1, §9A, RQI_Update-Plan.md §6.
Do NOT implement RQI v2 parsers, WRCI changes, or full 23-well JSON export yet.

Tasks:
1. Add MCKINLAY10–MCKINLAY15 to WELLS registry in scripts/process_mckinlay_wells.py.
   Map to DC30.xlsx / Mck_Murta.xlsx tops (confirmed present).
2. Build alternate ingestion for wells without sample Excel:
   - Mudlog PDF + litho ASCII/TXT + drill-gas ASCII/TXT
   - Convert feet → metres MD
   - Aggregate litho/gas to 5 m sample bins
3. New module scripts/trajectory.py (or similar):
   - Parse Petrel *_trajectory files (MD, Z columns)
   - interpolate_mtvds(md) → mTVDss (Z column = subsea)
4. Attach mTVDss to each interval record in process output
5. Run process_mckinlay_wells.py for MCKINLAY10–15 only first; fix errors
6. Run compute_pay_summary.py for new wells; verify overburden exclusion
7. Update output/BATCH_PROCESSING_STATUS.md and REUSABLE_WORKFLOW_PROMPT.md

Constraints:
- Reuse classify_tops / exclusion_zones unchanged
- Do NOT remove res_sep yet (Phase 3)
- Horizontal McKinlay Member logic same as existing 17 wells

Acceptance:
- output/MCKINLAY{10..15}_McKinlay_Cuttings_Interpretation.md exist
- output/MCKINLAY{10..15}_Process_Summary.md exist
- output/McKinlay {10..15}/pay-summary.md exist (or consistent naming)
- Spot-check MCKINLAY10: retained intervals have mTVDss populated
- Pay intervals do not overlap overburden exclusion zones
- python3 scripts/process_mckinlay_wells.py --only MCKINLAY10 exits 0

Commit to main. Summarise data gaps and interval counts per new well.
```

---

### Prompt — Phase 2: RQI v2 (8-component)

```
Execute updated-plan-2026-07-10.md Phase 2 only.

Prerequisite: Phase 1 merged to main.

Read: RQI_Update-Plan.md §3–4 (locked parsers, weights, lookup tables), mudlog_cutting_descriptions.md.

Tasks:
1. Add parse_sorting(), parse_angularity(), parse_cement(), parse_hardness() in process_mckinlay_wells.py
   Run on _interval_descriptor_text(long_desc, mud_matches)
2. Update scripts/config.py RQI_WEIGHTS (0.20/0.17/0.14/0.13/0.12/0.10/0.08/0.06)
3. Refactor export_web_data.py compute_rqi_components():
   - 8 components with per-interval weight renormalisation when sorting/cement/angularity missing
4. Remove loose_grains boolean from process output, export, Jaccard flags (replace with hardness-based flag at implementation discretion per RQI_Update-Plan.md §5 item 7)
5. Mirror config in site/src/config.ts
6. Re-run process_mckinlay_wells.py for ALL 23 wells
7. Do NOT change WRCI flags or remove res_sep yet (Phase 3)

Acceptance:
- JENA31 @ 2500 m: hardness/sorting/cement parsed in interpretation MD
- RQI value differs from old 5-component export
- No loose_grains in new interval records
- npm run build still succeeds (config mirror only)

Commit to main. Report RQI distribution change for JENA31 vs prior.
```

---

### Prompt — Phases 3 + 4 + 5: Flags, ZOI, OWC, ΔRes removal (combined)

```
Execute updated-plan-2026-07-10.md Phases 3, 4, and 5 together.

Prerequisites: Phases 1 and 2 on main.

Read: updated-plan-2026-07-10.md §4A, §3B–3C, §4.2, §5, §6 (ΔRes removal checklist).

Tasks — Phase 3 (remove ΔRes + flag framework):
1. Remove res_sep, perm_proxy(), Δ Res rows from process_mckinlay_wells.py interpretation MD
2. Remove highperm, res_sep from config.py, export_web_data.py, site/src/config.ts
3. New WRCI: 0.40·RQI + 0.20·lowres + 0.20·lowfluor + 0.20·owc_severity
4. low_GR boolean flag: avg_GR < 65 AND RQI >= 0.6 (NOT a WRCI severity term)
5. Remove res_sep from Spearman, z-scores, Jaccard, KS, clusters; add low_GR, ZOI to Jaccard vocabulary
6. Site: remove res_sep depth track and highperm chips; add RQI column to DataTable, Water-Risk evidence
7. Update New Statistical Methods.md Method 1; confirm res_sep_fix-plan.md SUSPENDED banner

Tasks — Phase 4 (ZOI):
8. Implement ZOI per §4.2: ±3 interval window, shallow/deep averages independently,
   ≥2 of {fluor, gas, RES_DEEP} drop >15%, RQI gate per locked rules
9. ZOI independent of WRCI formula; store flag_zoi on intervals

Tasks — Phase 5 (OWC):
10. Load Oil_Water_Contact.csv (normalise field names); well→field map
11. owc_distance_m = abs(mTVDss - OWC_field); tiers per §5.2 (different bands for RQI>=0.6 vs <0.6)
12. owc_severity feeds WRCI numeric score; owc_near tier flag on interval
13. Risk class per §3B locked table (ZOI + WRCI co-occurrence rules)

Run export_web_data.py after changes. Do NOT run full corpus/site deploy yet.

Acceptance:
- grep -r "highperm\|res_sep" site/src scripts --include="*.py" --include="*.ts" --include="*.tsx" returns no hits (except suspended plan doc / historical OpusPlan)
- water_risk/JENA31.json has RQI, WRCI, flags without highperm
- JENA31 interval at ~2500 m: mTVDss, owc_distance_m, owc_near tier present
- ZOI unit test or script assertion for stakeholder example pattern
- npm run build succeeds

Commit to main.
```

---

### Prompt — Phase 6: Full pipeline rerun, corpus, CI, deploy

```
Execute updated-plan-2026-07-10.md Phase 6 only.

Prerequisites: Phases 1–5 on main.

Tasks:
1. pip install -r requirements.txt
2. python3 scripts/process_mckinlay_wells.py          # all 23 wells
3. python3 scripts/compute_pay_summary.py
4. python3 scripts/export_web_data.py
5. python3 scripts/build_corpus_index.py
6. Add compute_pay_summary.py to .github/workflows/deploy.yml (after process + export, before corpus)
7. cd site && npm test && npm run build
8. Update output/ALL_WELLS_PAY_SUMMARY.md, BATCH_PROCESSING_STATUS.md (23 wells)
9. Add pay overburden assertion test if not done in Phase 1

Acceptance gates G1–G7 from §4 Phase 6:
- 23 wells in wells.json
- No res_sep/highperm in site/public/data
- RQI visible alongside WRCI on Well Detail and Water-Risk
- JENA31 @ 2500 m passes spot-check
- npm run build clean

Commit all generated artefacts to main. Single PR ready for review.
```

---

### Prompt — Optional: Debugging pass (recommended, not required)

```
Debugging pass for updated-plan-2026-07-10.md implementation.

Read updated-plan-2026-07-10.md §4A and acceptance gates.

Do NOT add features. Investigate and report:

1. JENA 31 + JENA 31DW1: list top 10 intervals by WRCI; verify no oil-pay intervals falsely High risk
2. ZOI: count per well; manually verify 3 intervals including stakeholder example pattern
3. OWC: confirm JENA 31 mTVDss vs OWC −1198 distances are geologically plausible along lateral
4. McKinlay 10–15: interval counts, mudlog match rate, any missing LAS curves
5. Pay: assert zero overlap between pay intervals and overburden zones (all 23 wells)
6. grep residual highperm/res_sep in repo

Output: DEBUG_REPORT.md with findings and fix recommendations only.
Only commit code fixes if clearly broken; otherwise report only.
```

---

## 13. Parallelisation matrix

### Can phases run simultaneously?

| Phases | Parallel? | Reason |
|--------|-----------|--------|
| **1 ∥ 2** | **No** | Both edit `process_mckinlay_wells.py` |
| **2 ∥ 3** | **No** | Export needs RQI v2 fields from Phase 2 |
| **3 ∥ 4 ∥ 5** | **No** (combine instead) | All edit `export_web_data.py` + `config.py` |
| **3 ∥ site UI** | **Caution** | Site needs frozen JSON schema from export — do site in Phase 3 or after |
| **1.5 trajectory module ∥ 2** | **Possible** | Only if Phase 1 landed `scripts/trajectory.py` first and Phase 2 avoids that file |
| **6 ∥ anything** | **No** | Phase 6 is the integration gate |

### Maximum safe concurrency

| Agents | What can run in parallel |
|--------|------------------------|
| **1 agent (recommended)** | Phases **1 → 2 → (3+4+5) → 6** sequentially |
| **2 agents (max)** | Agent A: Phases 1→2 (extractor). Agent B: **wait** until Phase 3 schema agreed, then site-only UI stubs — **high conflict risk; not recommended** |
| **3+ agents** | **Not recommended** — shared Python files and generated JSON will conflict |

### Combined prompts (fewer hand-offs)

| Combined block | Phases | Agent sessions |
|----------------|--------|----------------|
| Backend flags | **3 + 4 + 5** | 1 session |
| Full delivery | **1 → 2 → 345 → 6** | **4 sessions** (optimal) |

**Bottom line:** At most **one** implementation agent on this repo at a time. **Zero** phases can safely run in parallel on shared files. The only time-saving merge is **Phases 3+4+5 in one prompt**.

---

## 14. Debugging agent — recommended or required?

| | Guidance |
|---|----------|
| **Required?** | **No** — not a gate for merge or deploy. |
| **Recommended?** | **Yes** — run the optional debugging prompt (§12) **after Phases 3+4+5** and again **after Phase 6**. |
| **When it pays off most** | ZOI edge cases (±3 window at lateral toes), OWC distance sanity, McKinlay 10–15 ASCII ingestion, pay/overburden overlap, residual `res_sep` references. |
| **What it should not do** | Re-scope features, change locked §4A thresholds, or implement `res_sep_fix-plan.md`. |

**Suggested workflow:**

```
Phase 1 → spot-check MCKINLAY10
Phase 2 → spot-check JENA31 @ 2500 m RQI
Phases 3+4+5 → optional debugging pass → fix blockers
Phase 6 → full rerun → optional debugging pass → merge
```

---

## 10. Suggested reading order (implementer)

1. This document **§4A** (locked decisions) + **§12** (copy-paste prompts)  
2. `RQI_Update-Plan.md` §3–4 (RQI parsers)  
3. This document §4.2 (ZOI) + §5 (OWC)  
4. `Oil_Water_Contact.csv` + `Jena_31_trajectory`  
5. `mudlog_cutting_descriptions.md`

---

## 11. Revision history

| Date | Change |
|------|--------|
| 2026-07-10 | Initial plan — RQI v2 rerun, McKinlay 10–15 batching, ΔRes removal, ZOI + OWC flags, private repo guidance |
| 2026-07-10 | §9 answers locked; §4A summary; §12 implementation prompts; §13 parallelisation; §14 debugging guidance; WRCI rebalanced with OWC severity |
