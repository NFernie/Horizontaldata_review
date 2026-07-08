# Resistivity Separation Fix Plan (DSI & Charge-Aware Perm Flagging)

**Status:** Planning only — **do not implement until stakeholder go-ahead**  
**Parent plan:** [`RQI_Update-Plan.md`](RQI_Update-Plan.md)  
**Related reference:** [`mudlog_cutting_descriptions.md`](mudlog_cutting_descriptions.md)  
**Primary objective:** Fix permeability-zone flagging so resistivity separation contributes to **water-risk** assessment only when charge context supports it — not on every high-RQI zone with large absolute ΔRes.

---

## 1. Problem statement

The current pipeline uses **absolute** deep–shallow resistivity separation in two inconsistent ways:

| Location | Metric | Issue |
|----------|--------|-------|
| `perm_proxy()` in `process_mckinlay_wells.py` | `res_sep = RES_DEEP − RES_SHALLOW` with **fixed** cutoffs (50 / 20 / 5 / 0 Ω·m) | Ignores well baseline, Rt magnitude, and fluid charge; labels interpretation MD text |
| `highperm` red flag in `export_web_data.py` | `res_sep ≥ P75(res_sep)` within well (still **absolute** Δ) | Fires on good rock (RQI ≥ 0.6) **alone** — no charge discrimination |
| WRCI `highperm_norm` | `robust_norm(res_sep)` | Rewards large absolute separation even when fluorescence and Rt indicate **oil charge** |

### Observed failure mode (JENA 31 example)

Flagged “Elevated” zones at ~2445–2460 m MD show:

- RQI ≈ 0.75, **100% fluorescence**, RES_DEEP ≈ 200–270 Ω·m  
- `highperm` flag driven by `res_sep` ≈ 140–210 Ω·m (well P75)  
- **No** `lowres` or `lowfluor` flags  

These intervals look like **permeable, oil-charged pay** — not water-risk — yet `highperm` alone elevates WRCI. The separation metric is doing its job (detecting invasion profile) but is being interpreted as **water risk** without a charge gate.

### Secondary issues

1. **`RES_MED` is parsed from LAS but never averaged or exported** — a three-curve invasion profile is available but unused.  
2. **Negative or near-zero ΔRes** (e.g. JENA 31DW1 avg 3.2 Ω·m) compresses well-relative P75 — flagging behaviour differs wildly by well.  
3. **Absolute ΔRes scales with Rt** — high-resistivity oil sands produce large separation even when the **ratio** is modest.

---

## 2. Design goals

1. **Dynamic, not absolute** — normalise separation by local Rt (DSI or equivalent).  
2. **Charge-aware** — perm flagging on good rock must consider oil vs water vs transition context.  
3. **Use RES_MED where available** — tri-curve invasion shape adds discrimination power.  
4. **Preserve auditability** — store raw `res_sep` plus derived indices; document formulas in `New Statistical Methods.md` after approval.  
5. **Coordinate WRCI** — changes flow through `RQI_Update-Plan.md` §9 before any full pipeline rerun (§6).

---

## 3. Recommended approach (phased)

### Phase A — Adopt Dynamic Separation Index (DSI) as primary perm metric

**Definition (proposed default):**

```
DSI = (RES_DEEP − RES_SHALLOW) / max(RES_DEEP, ε)
    = res_sep / RES_DEEP          # dimensionless, ∈ [0, ~1) typically
```

**Alternatives to evaluate in calibration:**

| Index | Formula | Pros | Cons |
|-------|---------|------|------|
| **DSI (ratio)** | `(Rd − Rs) / Rd` | Scale-free; comparable across wells | Unstable when Rd → 0 |
| **Log separation** | `log10(Rd) − log10(Rs)` | Log-res workflow friendly | Still benefits from charge gate |
| **Separation ratio** | `Rd / Rs` | Classic invasion indicator | Must cap when Rs → 0 |
| **Robust z on DSI** | modified z-score of DSI within well | Already have z-score machinery | Less interpretable in MD text |

**Proposed flag logic (replaces `highperm` on raw `res_sep`):**

```
On intervals where RQI ≥ 0.6:
  dsi_flag = DSI ≥ P75(DSI) within well   # or P80 / modified z > 2.5
```

Keep raw `res_sep` in JSON for traceability; add `dsi` field.

### Phase B — Charge gate (water-risk only)

**Core rule:** High dynamic separation is a **necessary** but not **sufficient** condition for water-risk perm flagging.

Proposed `highperm_water` flag (name TBD) when **all** of:

1. RQI ≥ 0.6 (good rock)  
2. DSI ≥ well P75 (or agreed threshold)  
3. **At least one charge-negative signal:**
   - `lowfluor`: fluor < 75%  
   - `lowres`: RES_DEEP < 20 Ω·m  
   - `charge_decoupled`: DSI ≥ P75 **and** Spearman-local pattern (high DSI percentile + fluor below well median)  
   - *(optional)* parsed `charge_class` from mudlog text (see §5)

**Explicit exclusions (do not flag water-risk perm):**

| Context | Signals | Rationale |
|---------|---------|-----------|
| **Oil-charged** | fluor ≥ 75% **and** RES_DEEP ≥ 20 Ω·m | Pay-like; separation reflects oil invasion |
| **Tight / cemented** | DSI low **or** `perm_proxy` = low | No permeability concern |
| **Transition** | moderate DSI + moderate fluor + moderate Rt | Route to `transition` class; lower WRCI perm weight |

### Phase C — Incorporate RES_MED (tri-curve invasion profile)

`RES_MED` is already mapped in `parse_las()` but dropped in `avg_log()`. Proposed additions per interval:

```
avg_RES_MED
sep_deep_med  = RES_DEEP − RES_MED
sep_med_shallow = RES_MED − RES_SHALLOW
profile_shape = classify_invasion_profile(sep_deep_med, sep_med_shallow)
```

**Profile shape classes (conceptual):**

| Shape | Typical curve order | Interpretation |
|-------|---------------------|----------------|
| `oil_invaded` | Rd > Rm > Rs (separation mostly deep–med) | Oil filtrate / hydrocarbon — **not** water flag |
| `water_like` | Rd ≈ Rm ≈ Rs (flat) **or** Rd low with high DSI on shallow contrast | Water-saturated or filtrate-matched |
| `transition` | Rm between Rd and Rs, mixed show | Uncertain — down-weight in WRCI |
| `no_med` | RES_MED missing | Fall back to DSI + charge gate only |

### Phase D — Fluid context composite (optional enhancement)

Combine log-derived and cuttings-derived charge signals:

```
charge_score = w_f·norm(fluor) + w_r·norm(RES_DEEP) + w_g·norm(gas) + w_t·text_charge
water_risk_perm = dsi_flag AND (charge_score < charge_threshold)
```

Text charge tokens from `mudlog_cutting_descriptions.md` §7 (oil stain, yel-grn, `wtr`, etc.).

---

## 4. Alternative & complementary suggestions

| # | Suggestion | Type | Water / oil / transition handling |
|---|------------|------|----------------------------------|
| 1 | **DSI + charge gate** (§3 Phase A–B) | **Recommended default** | Oil excluded when fluor+Rt high; water when DSI high + low charge |
| 2 | **Tri-curve profile** (§3 Phase C) | **Recommended where RES_MED exists** | Shape class maps to oil / water / transition |
| 3 | **Rename flags** — `highperm` → `high_dsi`; add `highperm_water` for WRCI | Clarity | Avoid conflating perm with water risk in UI |
| 4 | **Decoupling score** — require `DSI ↑` AND `(fluor ↓ OR RES_DEEP ↓)` | Statistical | Uses existing Spearman diagnostic intent |
| 5 | **Pay-zone suppression** — suppress water perm flag when interval meets **matching pay** | Business rule | Pay ∩ water-risk is contradictory |
| 6 | **Portfolio-normalised DSI** — P75 computed on pooled McKinlay intervals | Inter-well stable | May blur well-specific tool response |
| 7 | **Point-wise LAS DSI** — compute DSI on 0.15 m LAS then aggregate to sample interval (max / P90 / mean) | More sensitive | Heavier compute; may spike on thin beds |
| 8 | **WRCI reweight** — reduce `highperm` weight; add `charge_decoupled` term | WRCI tune | See `RQI_Update-Plan.md` §9 |
| 9 | **Z-score on DSI** instead of P75 | Robust | Already in Method 2 machinery |
| 10 | **Mudlog fluid tokens** — parse §7 of mudlog reference | Text | Transition when text and log disagree |

---

## 5. Proposed new fields (after approval)

| Field | Stage | Description |
|-------|-------|-------------|
| `res_sep` | existing | Absolute ΔRes (retain) |
| `dsi` | extractor | `(RES_DEEP − RES_SHALLOW) / RES_DEEP` |
| `avg_RES_MED` | extractor | Mean medium resistivity over interval |
| `sep_deep_med`, `sep_med_shallow` | extractor | Tri-curve separations |
| `invasion_profile` | extractor | `oil_invaded` \| `water_like` \| `transition` \| `unknown` |
| `charge_class` | extractor / stats | `oil` \| `water` \| `transition` \| `indeterminate` |
| `flag_high_dsi` | export | DSI ≥ well P75 on good rock |
| `flag_perm_water` | export | DSI flag + charge gate (replaces naive `highperm` for WRCI) |

---

## 6. Calibration & acceptance (before merge)

Run on **JENA 31** and **JENA 31DW1** first:

| Check | Pass criterion |
|-------|----------------|
| Oil-charged pay zones (high fluor, high Rd) | **Not** flagged `perm_water` |
| Known water-suspect zones (stakeholder picks) | Flagged with DSI + low charge |
| JENA 31 @ 2500 m MD (reference interval) | Documented classification + reasoning |
| Zero High-risk inflation | Elevated/High counts change with explicit justification |
| RES_MED coverage | Report % intervals with tri-curve vs DSI-only fallback |

Stakeholder to supply 3–5 **anchor intervals per Jena well** (water / oil / transition) for calibration.

---

## 7. Files to touch (implementation phase — not now)

| File | Change |
|------|--------|
| `scripts/process_mckinlay_wells.py` | `avg_log()` → RES_MED; compute `dsi`, profile fields; update `perm_proxy()` to DSI bands |
| `scripts/config.py` | DSI percentiles, charge thresholds, profile class cutoffs |
| `scripts/export_web_data.py` | Replace / augment `highperm` logic; WRCI input terms |
| `site/src/config.ts` | Mirror config |
| `New Statistical Methods.md` | Method 1 permeability / flag definitions |
| `site/src/types/intervals.ts`, `waterRisk.ts` | New fields |
| Site views | Well Detail track: DSI + profile; Water-Risk evidence chips |

**Pipeline rerun order:** see `RQI_Update-Plan.md` §6.

---

## 8. WRCI coordination

Do **not** change WRCI weights or risk-class rules in isolation. Perm-separation fixes must be merged with the RQI update package per **`RQI_Update-Plan.md` §9**:

- `highperm_norm` in WRCI should use **DSI** (or gated `perm_water` severity), not raw `res_sep`.  
- Consider splitting WRCI into `perm_severity` (charge-aware) + existing `lowres` / `lowfluor` terms.  
- Revisit `WRCI_HIGH_THRESHOLD` / `WRCI_HIGH_MIN_FLAGS` after calibration — current Jena exports have **0 High** zones.

---

## 9. Clarifying questions (stakeholder)

Please answer before implementation go-ahead:

### A. DSI definition

1. **Preferred primary index:** ratio DSI `(Rd−Rs)/Rd`, log separation `log10(Rd)−log10(Rs)`, or `Rd/Rs`?  
2. **Minimum RES_DEEP** to compute DSI (e.g. ignore when Rd < 1 Ω·m)?  
3. **Well-relative vs portfolio-relative** percentile for DSI flag — or hybrid?

### B. Charge gate / fluid classes

4. Should **matching-pay intervals** automatically suppress water-risk perm flags?  
5. For **oil-charged** classification, is `%Fluor ≥ 75% AND RES_DEEP ≥ 20`** sufficient, or do you want mudlog text tokens (oil stain, yel-grn) required?  
6. How should **transition zones** affect WRCI — separate risk class, down-weighted perm term, or flag only (no WRCI bump)?  
7. Is **total gas (TG)** a required charge indicator for this basin, or optional?

### C. RES_MED / tri-curve

8. Confirm **RES_MED** is present and trustworthy on all 17 LAS files (including `*_GOLD` variants).  
9. If RES_MED is missing for a well, is **DSI-only + charge gate** acceptable fallback?

### D. Flag naming & UI

10. Retain legacy `highperm` label in UI for compatibility, or rename to `high_dsi` / `perm_water`?  
11. Should interpretation MD `perm_proxy()` text use **DSI bands** instead of absolute Ω·m bands?

### E. Calibration anchors

12. Please provide **3–5 anchor intervals per Jena well** (depth MD + expected class: water / oil / transition).  
13. Are there **known water entry depths** from production / drilling events to validate against?

### F. Scope & timing

14. Apply DSI fix to **all 17 wells** in one rerun, or Jena wells first?  
15. Should pay summaries (`compute_pay_summary.py`) be included in the same rerun batch, or statistics-only?

---

## 10. Cross-references

| Document | Relationship |
|----------|--------------|
| [`RQI_Update-Plan.md`](RQI_Update-Plan.md) | Parent plan — §3 locked decisions constrain this fix; §6 rerun order; §9 WRCI coordination |
| [`mudlog_cutting_descriptions.md`](mudlog_cutting_descriptions.md) | Text tokens for optional charge_class parsing |
| [`New Statistical Methods.md`](New Statistical Methods.md) | Canonical method definitions (update after approval) |
| [`OpusPlanR1.md`](OpusPlanR1.md) | Original red-flag #1 definition (superseded pending approval) |
| [`pay-rules.md`](pay-rules.md) | Matching-pay suppression candidate |

---

## 11. Revision history

| Date | Change |
|------|--------|
| 2026-07-08 | Initial plan — DSI proposal, tri-curve option, charge gate, clarifying questions |
