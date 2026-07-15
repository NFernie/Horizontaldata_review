# Clustering feature vector change — 2026-07-15

## Summary

Production update to **Method 5** (`CLUSTER_FEATURES`): shift from lithology / water-risk aggregates toward **petrophysical quality** (fluorescence, gas, RQI).

| | Feature vector |
|---|----------------|
| **Before** | `mean_pct_ss`, `mean_grain_ordinal`, `mean_avg_GR`, `mean_RES_DEEP`, `pay_pct`, `mean_WRCI`, `pct_high_risk`, `pct_zoi` |
| **After** | `mean_pct_ss`, `mean_avg_GR`, `mean_RES_DEEP`, `pay_pct`, `mean_WRCI`, `fluorescence_pct`, `total_gas`, `RQI` |

**Removed:** grain ordinal, high-risk %, ZOI %  
**Added:** mean fluorescence % (`fluor`), mean total gas (`gas`), mean RQI

KS significance tests (`KS_PROPERTIES`) are **unchanged**.

Pipeline: `python3 scripts/export_web_data.py` + `python3 scripts/build_corpus_index.py`.

---

## Jena focus wells — cluster assignment

| Well | Before | After | Changed? |
|------|--------|-------|----------|
| JENA 31 | 1 | 1 | No |
| JENA 31DW1 | 1 | 1 | No |
| JENA 31 Dual | 1 | 1 | No |

Jena wells remain in the **largest cluster (1)** with Biala, Stimpee, Granchio, Frostillicus, McKinlay 23.

---

## Portfolio cluster reassignment (5 wells)

| Well | Before | After |
|------|--------|-------|
| HOBBES 5 | 2 | 3 |
| HOBBES 6 | 4 | 3 |
| MCKINLAY 21 | 4 | 3 |
| MCKINLAY 22 | 4 | 3 |
| MCKINLAY 24 | 4 | 3 |

**Cluster 2** (HOBBES 5 + McKinlay legacy) splits: HOBBES 5 joins the McKinlay 11–14 group in **cluster 3**; cluster 2 is now only McKinlay 15 + Teringie 6.

**Cluster 4** shrinks from six wells to **McKinlay 10 + McKinlay 20** (low-pay / distinct petrophysical signature).

---

## Top cosine analogs (executive dropdown)

### JENA 31

| Rank | Before | Cosine | After | Cosine |
|------|--------|--------|-------|--------|
| 1 | JENA31_DUAL | 0.720 | FROSTILLICUS2 | 0.711 |
| 2 | STIMPEE6 | 0.699 | JENA31_DUAL | 0.699 |
| 3 | GRANCHIO4 | 0.662 | GRANCHIO4 | 0.603 |
| 4 | FROSTILLICUS2 | 0.621 | BIALA20 | 0.541 |
| 5 | BIALA20 | 0.423 | STIMPEE6 | 0.539 |

**Takeaway:** Frostillicus 2 becomes the top analog for JENA 31; Stimpee 6 drops from #2 to #5. Dual lateral stays a close #2.

### JENA 31DW1

| Rank | Before | Cosine | After | Cosine |
|------|--------|--------|-------|--------|
| 1 | MCKINLAY23 | 0.695 | MCKINLAY23 | 0.726 |
| 2 | JENA31_DUAL | 0.597 | JENA31_DUAL | 0.596 |
| 3 | FROSTILLICUS2 | 0.525 | STIMPEE6 | 0.535 |
| 4 | STIMPEE6 | 0.512 | MCKINLAY22 | 0.523 |
| 5 | MCKINLAY20 | 0.439 | MCKINLAY24 | 0.367 |

**Takeaway:** McKinlay 23 strengthens as top analog; McKinlay 22 enters top 5 (replacing Frostillicus 2).

### JENA 31 Dual

| Rank | Before | Cosine | After | Cosine |
|------|--------|--------|-------|--------|
| 1 | STIMPEE6 | 0.926 | STIMPEE6 | 0.825 |
| 2 | FROSTILLICUS2 | 0.867 | JENA31 | 0.699 |
| 3 | JENA31 | 0.720 | FROSTILLICUS2 | 0.679 |
| 4 | GRANCHIO4 | 0.693 | MCKINLAY23 | 0.640 |
| 5 | BIALA20 | 0.641 | JENA31DW1 | 0.596 |

**Takeaway:** Stimpee 6 remains #1 but absolute similarity falls; McKinlay 23 enters top 5.

---

## Interpretation

The new vector emphasises **hydrocarbon indicators** (fluorescence, gas, RQI) over **grain / water-risk flags**. Jena cluster membership is stable; analog ranking shifts toward wells with similar pay-quality signatures (Frostillicus 2, McKinlay 23/22) rather than broad lithology similarity alone.

Dendrogram linkage uses **Ward on z-scored features**; cosine matrix drives analog ranking only.
