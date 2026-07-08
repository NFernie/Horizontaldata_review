# RQI Update Plan — Planning Brief

**Repo:** `NFernie/Horizontaldata_review`  
**Status:** Locked stakeholder decisions — **not yet implemented**  
**Purpose:** Hand-off document for a planning or implementation agent coordinating pipeline reruns (RQI, WRCI, and related statistics).  
**No code changes in the planning pass that produced this document.**

---

## 1. Executive summary

The Rock Quality Index (RQI) will be upgraded from a **5-component** formula (including a **binary loose-grains flag**) to an **8-component** formula that parses additional cuttings/mudlog observations:

| # | Component | Direction (high RQI = good reservoir) |
|---|-----------|----------------------------------------|
| 1 | `%SS` | Higher sandstone → better |
| 2 | Low GR (inverted LAS) | Lower gamma ray → better |
| 3 | Grain size ordinal | Coarser → better |
| 4 | Porosity score | Better porosity class → better |
| 5 | **Hardness** (replaces binary `loose_grains`) | **Looser → better** (`lse` best … `v hd` worst) |
| 6 | **Cement** (new) | **Less / weaker cement → better** |
| 7 | **Sorting** (new) | **Better sorted → better** |
| 8 | **Angularity** (new) | **More rounded → better** (`ang` worst … `v wl rnd` best) |

All text-derived components use the **combined interval descriptor** already produced in `scripts/process_mckinlay_wells.py` (`long_desc` + matched mudlog lithology via `_interval_descriptor_text()`).

**Reference glossary:** [`mudlog_cutting_descriptions.md`](mudlog_cutting_descriptions.md) (committed MD copy of mudlogging abbreviation tables).

**Downstream impact:** Any RQI change recalculates **WRCI**, water-risk **flags**, **risk_class**, portfolio **Spearman / Jaccard / KS** stats, site JSON under `site/public/data/`, and the corpus index. Treat as a **full pipeline rerun**, not an isolated parser tweak.

---

## 2. Current implementation (baseline)

### 2.1 Formula today (`scripts/config.py` → `export_web_data.py`)

```
RQI = 0.30·norm(pct_ss)
    + 0.25·norm(grain_ordinal)
    + 0.20·norm(1 − GR)
    + 0.15·porosity_score          # fixed lookup from poro_class
    + 0.10·loose_grains_binary   # 1.0 if any lse pattern, else 0.0
```

- Within-well **robust normalisation** (P5–P95 clip) for `%SS`, grain ordinal, and inverted GR.
- Porosity uses fixed `PORO_SCORES` map (`none`→0 … `gd`→1).
- **`RQI_THRESHOLD = 0.6`** gates red-flag logic (unchanged after update).
- Parsed in `process_mckinlay_wells.py`: `parse_porosity()`, `parse_loose_grains()` (binary), `grain_ordinal()`.

### 2.2 Behaviour to retire

- **Binary `loose_grains`** as an RQI input (and **everywhere else** — see §6).
- The old interpretation that “presence of loose grains → RQI boost” is **replaced** by the hardness ladder where **`lse` = high reservoir quality** and **`v hd` = low reservoir quality**.

---

## 3. Locked decisions — clarifying Q&A

### A. Reference document

| Question | Answer |
|----------|--------|
| Where is the abbreviation reference? | **[`mudlog_cutting_descriptions.md`](mudlog_cutting_descriptions.md)** at repo root (MD glossary; no `.docx` required). |

### B. Sorting scale

| Question | Answer |
|----------|--------|
| Full ordinal scale? | Per glossary **Sorting (srt):** `v pr` < `pr` < `mod` < `mod wl` < `wl` < `v wl` (worst → best). Match tokens like `pr srt`, `wl srt`, `mod wl srt` in text. |
| Include angularity? | **Yes — separate RQI component.** `ang` = low RQ; `v wl rnd` = high RQ. Scale: `ang` < `sbang` < `sbrnd` < `rnd` < `v wl rnd`. |
| Missing sorting term? | **Missing** — exclude component from that interval’s RQI (do not impute neutral or poor). |

### C. Cement scale

| Question | Answer |
|----------|--------|
| Which cement types count? | **Calcareous (`calc cmt`), siliceous (`sil cmt`), argillaceous (`arg cmt`).** Sideritic (`sid cmt`) is usually trace — **treat as negligible / ignore for cement penalty** unless explicitly flagged later. |
| Amount modifiers (worst → least)? | **`tr` → `rr` → `mnr` → `com`** (more cement = worse RQ). |
| Strength modifiers? | **`wk` = better RQ** (weak cement); **unqualified = moderate**; **`strg` (strong) = worse RQ**. |
| Multiple cement mentions? | Use the **worst** (most detrimental) single classification. |
| Scoring mode? | **Within-well normalised** after absolute lookup score (same pattern as other components). |

### D. Hardness / loose grains

| Question | Answer |
|----------|--------|
| Hardness ladder & direction? | **`lse` / `uncons` = best reservoir quality** → **`fri` → `mod hd` → `hd` → `v hd` = worst.** |
| Ranges (e.g. `fri-mod hd`, `lse crs grs`)? | Score at **midpoint** of the bracketed categories. |
| Keep boolean `loose_grains`? | **No — replaced everywhere** by hardness score / ordinal (RQI, Jaccard flags, JSON export, corpus, assistant filters if applicable). |

### E. RQI formula & weights

| Question | Answer |
|----------|--------|
| Rebalance weights? | **Yes — full rebalance; must sum to 1.0.** |
| Starting weight philosophy? | Stakeholder **priority order** (highest → lowest importance): `%SS` → `GR` → `Grain Size` → `Porosity` → `Hardness` → `Cement` → `Sorting` → `Angularity`. |
| Normalisation? | **Within-well robust norm** for all continuous/ordinal components after absolute lookup scoring. |
| Missing components? | Exclude from interval; **renormalise remaining weights** to sum to 1.0 for that interval (required for sorting/cement/angularity when absent). |

#### Proposed starting weights (implementer to place in `scripts/config.py` + `site/src/config.ts`)

| Component | Config key (suggested) | Weight | Notes |
|-----------|------------------------|--------|-------|
| % Sandstone | `pct_ss` | **0.20** | Highest priority |
| Low GR | `low_gr` | **0.17** | |
| Grain size ordinal | `grain_ordinal` | **0.14** | vf=1 … vc=5 |
| Porosity | `porosity` | **0.13** | Existing `PORO_SCORES` map |
| Hardness | `hardness` | **0.12** | Replaces `loose_grains` |
| Cement | `cement` | **0.10** | Inverted: more/stronger = lower lookup score |
| Sorting | `sorting` | **0.08** | |
| Angularity | `angularity` | **0.06** | Lowest priority |
| | **Total** | **1.00** | |

> Weights are **starting proposals** aligned to stakeholder priority order. Tuning is config-only after parsers land.

### F. WRCI & thresholds

| Question | Answer |
|----------|--------|
| `RQI_THRESHOLD = 0.6` for red flags? | **Keep fixed** (do not recalibrate automatically). |
| Before/after comparison report? | **No** formal acceptance gate required. |

### G. Site exposure

| Question | Answer |
|----------|--------|
| Expose new parsed fields on Well Detail / Corpus Assistant? | **No — internal to RQI calculation only.** Interval JSON may still show updated `RQI` / `WRCI` / `risk_class`; new fields (`sorting_class`, `cement_score`, `hardness_ordinal`, etc.) stay in pipeline internals unless a future story requests UI. |

---

## 4. Absolute lookup tables (implementer reference)

Derived from [`mudlog_cutting_descriptions.md`](mudlog_cutting_descriptions.md) and locked answers. Map to **0.0–1.0** before within-well robust normalisation.

### 4.1 Sorting (`* srt` tokens)

| Class | Abbrev patterns | Lookup score |
|-------|-----------------|--------------|
| Very poor | `v pr srt` | 0.0 |
| Poor | `pr srt` | 0.2 |
| Moderate | `mod srt` (not `mod wl`) | 0.4 |
| Moderately well | `mod wl srt` | 0.6 |
| Well | `wl srt` | 0.8 |
| Very well | `v wl srt` | 1.0 |

**Missing:** no token → component omitted.

### 4.2 Angularity

| Class | Tokens | Lookup score |
|-------|--------|--------------|
| Angular | `ang` (angular, not angularity section header) | 0.0 |
| Subangular | `sbang` | 0.25 |
| Subrounded | `sbrnd` | 0.5 |
| Rounded | `rnd` | 0.75 |
| Very well rounded | `v wl rnd` | 1.0 |

### 4.3 Cement (worst-of multiple; cal/sil/arg only)

**Type base penalty** (before amount/strength modifiers):

| Type | Base cementedness (higher = worse RQ) |
|------|---------------------------------------|
| `arg cmt` | Highest penalty |
| `sil cmt` | Medium |
| `calc cmt` | Lower |

**Amount modifier** (apply to penalty magnitude):

| Modifier | Multiplier (suggested) |
|----------|------------------------|
| `tr` | ×0.25 |
| `rr` | ×0.5 |
| `mnr` | ×0.75 |
| `com` | ×1.0 |
| (none) | ×0.5 |

**Strength modifier** (invert for RQ score after penalty):

| Modifier | Effect on RQ |
|----------|--------------|
| `wk` | Reduce penalty (better RQ) |
| (none) | Baseline |
| `strg` | Increase penalty (worse RQ) |

Final cement component score: `1.0 − normalised_penalty` so more cement → lower RQI input.

**`sid cmt`:** ignore unless policy changes.

### 4.4 Hardness (replaces `loose_grains`)

| Class | Tokens | Reservoir-quality score |
|-------|--------|-------------------------|
| Loose | `lse` | 1.0 |
| Unconsolidated | `uncons` | 0.9 |
| Friable | `fri` | 0.7 |
| Moderately hard | `mod hd` | 0.4 |
| Hard | `hd` (not `mod hd`, `v hd`) | 0.2 |
| Very hard | `v hd` | 0.0 |

**Ranges:** midpoint of endpoints (e.g. `fri-mod hd` → 0.55).

**Note:** `sft` / `frm` should not appear in SST per glossary; if seen, log warning and treat as missing or map conservatively.

### 4.5 Porosity (unchanged)

Keep existing `parse_porosity()` classes and `PORO_SCORES` in `scripts/config.py`.

---

## 5. Observations from codebase review

1. **Reference doc gap (resolved):** Original `.docx` was not in the repo; [`mudlog_cutting_descriptions.md`](mudlog_cutting_descriptions.md) now serves as the parser source of truth.

2. **Semantic reversal on loose grains:** Current binary parser treats any `lse` hit as `loose_grains = true` → **+0.10 RQI weight**. New hardness model keeps **`lse` as high RQ** but for **continuous** reasons (unconsolidated pay), not a boolean bump. Expect **material RQI shifts** in intervals rich in `lse` / `fri` vs `mod hd`.

3. **Text source is already combined:** Parsers should run on `_interval_descriptor_text(long_desc, mud_matches)` — same as porosity/loose grains today. No spreadsheet MD file updates required.

4. **Real mudlog patterns observed** (Jena 31 / Teringie 6 interpretations):
   - Sorting: `wl srt`, `mod wl srt`, `pr srt` (sometimes split by depth numbers, e.g. `mod wl 2288 srt` — parser must tolerate intervening tokens).
   - Cement: `wk sil cmt`, `sil cmt`, `sid cmt`, `rr sid cmt`.
   - Hardness: `fri`, `fri-mod hd`, `mod hd`, `lse`, `occ lse crs grs`.
   - Angularity often co-occurs with sorting: `sbang`, `sbrnd`.

5. **Siderite ambiguity:** `sid` appears both as **siderite mineral** (`mnr sid`, `rr sid cmt`) and **`sid cmt`**. Stakeholder: sid cement usually trace → **exclude from cement penalty**; existing `fec03_slt` / `fec03_sst` parsing remains separate.

6. **Missing-component renormalisation is new:** Today every interval has all five components (binary loose defaults to 0). With sorting/cement/angularity optional, `compute_rqi_components()` must **reweight per interval** — document and test this edge case.

7. **`loose_grains` removal is wide-ranging:**
   - `scripts/process_mckinlay_wells.py` — replace `parse_loose_grains()` with `parse_hardness()` (ordinal + score).
   - `scripts/config.py` — `RQI_WEIGHTS`, Jaccard `BINARY_FLAGS`.
   - `scripts/export_web_data.py` — `compute_rqi_components()`, flag builders.
   - `site/src/config.ts` — mirror weights/flags.
   - `site/src/types/intervals.ts`, `waterRisk.ts`, `corpus.ts` — schema fields.
   - `site/src/lib/assistant/` — `looseGrains` filter → hardness-based or removed.
   - `New Statistical Methods.md`, `OpusPlanR1.md` — formula documentation.
   - Jaccard flag `loose_grains` → replace with hardness threshold flag (e.g. `loose_hardness` / `high_hardness_score`) — **define at implementation time**.

8. **WRCI formula unchanged:** Still `0.40·RQI + 0.20·highperm + 0.20·lowres + 0.20·lowfluor` after RQI recompute. Only inputs to red-flag gating change via new RQI distribution.

9. **Corpus assistant:** Phase 4 added RQI query filters and corpus `RQI` on summaries — values will change after rerun; no new UI fields per stakeholder.

10. **Coordination with other statistics work:** If WRCI weights, flag thresholds, or red-flag definitions change in parallel, **sequence reruns**: (1) parsing/RQI → (2) WRCI/flags → (3) `export_web_data.py` stats → (4) `build_corpus_index.py`. Avoid partial deploys where JSON intervals disagree with methods doc.

---

## 6. Pipeline rerun checklist (implementation agent)

Execute in order after parser + config changes:

| Step | Command / action | Outputs affected |
|------|------------------|------------------|
| 1 | `python3 scripts/process_mckinlay_wells.py` (all 17 wells) | `output/*_McKinlay_Cuttings_Interpretation.md`, per-well process summaries, new parsed fields |
| 2 | `python3 scripts/export_web_data.py` | `site/public/data/intervals/*.json`, `water_risk/*.json`, `stats/*.json` |
| 3 | `python3 scripts/build_corpus_index.py` | `site/public/corpus/**` |
| 4 | `cd site && npm test && npm run build` | Verify TS mirrors Python config |
| 5 | Update docs | `New Statistical Methods.md` § Method 1, optionally `OpusPlanR1.md` §1.1 |

**CI:** `.github/workflows/deploy.yml` already runs processing → export → corpus build on deploy.

---

## 7. Implementation tasks (for future agent — do not start without go-ahead)

- [ ] Add `parse_sorting()`, `parse_angularity()`, `parse_cement()`, `parse_hardness()` in `process_mckinlay_wells.py`
- [ ] Add lookup score maps + updated `RQI_WEIGHTS` in `scripts/config.py`
- [ ] Refactor `compute_rqi_components()` for 8 components + per-interval weight renormalisation when missing
- [ ] Remove `loose_grains` boolean; migrate Jaccard / export / types / assistant
- [ ] Mirror config in `site/src/config.ts`
- [ ] Update `New Statistical Methods.md`
- [ ] Full pipeline rerun (§6)
- [ ] Spot-check Jena 31 / 31DW1 flagged zones geologically (informal — no formal report)

---

## 8. Related documents

| Document | Role |
|----------|------|
| [`mudlog_cutting_descriptions.md`](mudlog_cutting_descriptions.md) | Abbreviation glossary for parsers |
| [`OpusPlanR1.md`](OpusPlanR1.md) | Original WRCI / RQI statistical design |
| [`New Statistical Methods.md`](New Statistical Methods.md) | Canonical method definitions for site + corpus |
| [`pay-rules.md`](pay-rules.md) | Pay logic (orthogonal to RQI; same rerun cadence) |
| [`chatbot-plan.md`](chatbot-plan.md) | Corpus assistant (consumes updated JSON) |

---

## 9. Open items for parallel WRCI / statistics planning

These were **not** decided in the RQI Q&A and may trigger **additional** reruns:

- WRCI component weights (`a,b,c,d`) or red-flag percentile cutoffs
- Whether `sid cmt` should ever contribute a small cement penalty
- Jaccard replacement flag naming/threshold for hardness (e.g. top quartile of hardness score within well)
- Whether assistant `looseGrains` filter should map to hardness score or be removed

Capture decisions for these in a separate `WRCI_Update-Plan.md` if work proceeds in parallel.

---

*Generated: 2026-07-08 — planning brief only; no RQI code changes applied.*
