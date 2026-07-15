# Jaccard feature vector change — 2026-07-15 (PR #15)

## Summary

Combined **Option A–C** revision to Method 4 Jaccard similarity:

| Setting | Before | After |
|---------|--------|-------|
| Presence threshold | 10% | **25%** |
| Feature count | 8 | **10** |

### Feature vocabulary

| Removed | Added |
|---------|-------|
| `good_rock` | `good_rock_moderate` (RQI ≥ 0.6) |
| `ZOI` | `good_rock_strong` (RQI ≥ 0.75) |
| `coarse_grain` | `owc_high` |
| `loose_hardness` | `owc_elevated` |
| | `elevated_risk` |
| | `high_gas` (≥ 100 units) |

**Retained:** `lowres_over_good`, `lowfluor_over_good`, `low_GR`, `matching_pay`

**Unchanged:** depth-binned Jaccard (20 normalised lateral bins); clustering / KS (PR #14 scope).

---

## Jena focus wells — feature sets

| Well | Before (10%) | After (25%) |
|------|--------------|-------------|
| **JENA 31** | coarse_grain, good_rock, loose_hardness, matching_pay | elevated_risk, good_rock_moderate, high_gas, matching_pay |
| **JENA 31DW1** | coarse_grain, good_rock, loose_hardness, matching_pay | high_gas, matching_pay |

**Feature-set Jaccard JENA31 ↔ JENA31DW1:** 1.0 → **0.5** (no longer identical).

**Depth-binned Jaccard:** 0.176 (unchanged — spatial risk architecture still differs).

### Interpretation

- **JENA 31** retains moderate good rock (67.5% of intervals ≥ RQI 0.6) and elevated-risk prevalence (30.5% ≥ 25% threshold).
- **JENA 31DW1** drops `good_rock_moderate` (only 12.7% ≥ 0.6) and `elevated_risk` (10.3% — below 25% gate).
- Both share high pay match and high gas show.

---

## Top Jaccard analogs

### JENA 31

| Rank | Before | J | After | J |
|------|--------|---|-------|---|
| 1 | JENA31DW1 | 1.000 | GRANCHIO4 | 1.000 |
| 2 | HOBBES6 | 1.000 | HOBBES6 | 1.000 |
| 3 | MCKINLAY21 | 1.000 | FROSTILLICUS2 | 0.800 |
| 4 | STIMPEE6 | 1.000 | STIMPEE7 | 0.800 |
| 5 | STIMPEE7 | 1.000 | MCKINLAY14 | 0.800 |

### JENA 31DW1

| Rank | Before | J | After | J |
|------|--------|---|-------|---|
| 1 | JENA31 | 1.000 | MCKINLAY11 | 1.000 |
| 2 | HOBBES6 | 1.000 | MCKINLAY13 | 1.000 |
| 3 | MCKINLAY21 | 1.000 | MCKINLAY20 | 0.667 |
| 4 | STIMPEE6 | 1.000 | MCKINLAY21 | 0.667 |
| 5 | STIMPEE7 | 1.000 | MCKINLAY22 | 0.667 |

JENA 31DW1 analogs shift toward **McKinlay legacy** wells with similar sparse feature sets (pay + gas only).

---

## Portfolio discrimination

| Metric | Before | After |
|--------|--------|-------|
| Unique feature-set patterns | 8 | **10** |
| Largest tie bucket | 7 wells (identical 4-set) | 9 wells (3-set: moderate + gas + pay) |
| Wells with J = 1.0 to JENA31 | 5 | 2 (GRANCHIO4, HOBBES6) |

---

## Config references

- `scripts/config.py`: `JACCARD_PRESENCE_PCT`, `JACCARD_FEATURES`, `RQI_STRONG_THRESHOLD`, `JACCARD_HIGH_GAS`
- `site/public/data/stats/jaccard.json`
