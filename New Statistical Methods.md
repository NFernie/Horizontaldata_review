# Statistical Methods — McKinlay Water-Risk Review

**Purpose:** Canonical corpus document for the Corpus Assistant and human reference.  
**Scope:** Five statistical methods applied to **non-excluded McKinlay Member intervals** across 17 horizontal wells.  
**Implementation:** `scripts/config.py` (Python) and `site/src/config.ts` (site); computed in `scripts/export_web_data.py`.

**Type key**

- **Intra-well** — statistics computed within a single well’s interval population.
- **Inter-well** — statistics comparing wells to each other.

---

## Method 1 — Water-Risk Composite Index (WRCI)

**Reference:** OpusPlanR1 §1.1  
**Type:** Intra-well, per-interval  
**Primary outputs:** `RQI`, `flags[]`, `WRCI`, `risk_class` per interval  
**Site views:** Well Detail (WRCI track), Water-Risk Explorer, Portfolio Dashboard  
**JSON sources:** `site/public/data/intervals/{ALIAS}.json`, `site/public/data/water_risk/{ALIAS}.json`

### Objective

Score each sample interval for **water influx risk** by combining rock quality with three red-flag families: high inferred permeability (resistivity separation), low deep resistivity over good rock, and low fluorescence over good rock.

### Step A — Rock Quality Index (RQI), 0–1

RQI blends signals that indicate “good reservoir rock”:

```
RQI = 0.30 · norm(pct_ss)
    + 0.25 · norm(grain_ordinal)
    + 0.20 · norm(1 − GR_scaled)
    + 0.15 · porosity_score
    + 0.10 · loose_grain_flag
```

| Component | Source | Notes |
|-----------|--------|-------|
| `pct_ss` | Cuttings % sandstone | Higher = better |
| `grain_ordinal` | Grain / max grain text | vf=1 … vc=5; coarser = better |
| `1 − GR_scaled` | LAS avg gamma ray | Lower GR = cleaner sand |
| `porosity_score` | Parsed from `long_desc` / mudlog | none/poor=0, p-fr=0.33, fr=0.5, fr-gd=0.75, gd=1.0 |
| `loose_grain_flag` | Parsed from description text | 1 if loose-grain indicators (`lse`, `loose grain`, etc.) |

`norm()` is **robust within-well normalisation**: clip each metric to P5–P95 for that well, then min–max scale to 0–1.

### Step B — Red-flag booleans (only when RQI ≥ 0.6)

Red flags apply only where rock quality is already “good” (RQI ≥ 0.6):

| Flag | ID | Condition |
|------|-----|-----------|
| High permeability | `highperm` | `res_sep ≥ P75(res_sep)` within the well **and** RQI ≥ 0.6 |
| Low resistivity | `lowres` | `avg_RES_DEEP < 20` ohm·m **and** RQI ≥ 0.6 |
| Low fluorescence | `lowfluor` | `fluor < 75%` **and** RQI ≥ 0.6 |

`res_sep` (ΔRes) = `avg_RES_DEEP − avg_RES_SHALLOW` (absolute difference in ohm·m).

### Step C — WRCI (0–100)

```
WRCI = 100 × ( 0.40·RQI + 0.20·highperm_norm + 0.20·lowres_severity + 0.20·lowfluor_severity )
```

| Severity term | Formula |
|---------------|---------|
| `highperm_norm` | Within-well robust normalisation of `res_sep` |
| `lowres_severity` | `clamp((20 − RES_DEEP) / 20, 0, 1)` |
| `lowfluor_severity` | `clamp((75 − fluor) / 75, 0, 1)` |

### Risk classification

| Class | Rule |
|-------|------|
| **High** | WRCI ≥ 66 **and** ≥ 2 flags |
| **Elevated** | WRCI 40–66 **or** exactly 1 flag |
| **Low** | Otherwise |

### Permeability proxy (interpretation text only)

Qualitative label in interpretation markdown (`perm` field) uses **absolute** ΔRes bands (not well-relative):

| ΔRes (ohm·m) | Label |
|--------------|-------|
| > 50 | High inferred permeability |
| > 20 | Moderate-high inferred permeability |
| > 5 | Moderate inferred permeability |
| > 0 | Low-moderate inferred permeability |
| ≤ 0 | Low inferred permeability (tight/cemented) |

**Note:** The `highperm` **red flag** uses well-relative P75 of ΔRes; the text `perm` label uses fixed absolute cutoffs.

### Water-risk mapping

Primary deliverable for Jena 31 / Jena 31DW1: depth-ordered flagged zones with explicit flag reasoning.

---

## Method 2 — Robust Z-Score Anomaly Detection

**Reference:** OpusPlanR1 §1.2  
**Type:** Intra-well  
**Primary outputs:** Per-interval `z_scores{}`, `anomalies[]`  
**Site view:** Intra-well Statistics (`/intra/:alias`)  
**JSON source:** `site/public/data/intervals/{ALIAS}.json`

### Objective

Find intervals that are **statistically unusual within their own well** — surfacing subtle water-zone signatures that fixed WRCI thresholds may miss.

### Metrics tested

For each interval, modified z-scores are computed for:

- `res_sep`
- `avg_RES_DEEP`
- `avg_GR`
- `pct_ss`
- `fluor`
- `grain_ordinal`

### Formula

For metric \(m\) across all retained intervals in a well:

```
z_i = 0.6745 × (x_i − median(x)) / MAD(x)
```

- `MAD` = median absolute deviation from the well median  
- `0.6745` = consistency constant for normal-distribution equivalence  
- Flag when **|z| > 3.5**

### Diagnostic pattern

An interval with **anomalously high `res_sep`**, **anomalously low `avg_RES_DEEP`**, and **high `pct_ss`** is a classic water-zone signature (good, permeable rock without hydrocarbon charge).

### Outputs

- Anomaly table per well (intervals with any |z| > 3.5)
- Per-interval z-vector stored in JSON for depth-track shading

---

## Method 3 — Spearman Rank-Correlation Matrix

**Reference:** OpusPlanR1 §1.3  
**Type:** Intra-well  
**Primary outputs:** 7×7 matrix of Spearman ρ and p-values per well  
**Site view:** Intra-well Statistics (`/intra/:alias`)  
**JSON source:** `site/public/data/stats/correlations.json`

### Objective

Quantify **relationships between petrophysical variables** within each well using rank-based correlation (robust to non-linearity and text-derived ordinals).

### Variables

`pct_ss`, `grain_ordinal`, `avg_GR`, `res_sep`, `avg_RES_DEEP`, `fluor`, `gas`

### Method

- Compute Spearman ρ for each variable pair across retained intervals  
- Report ρ and two-tailed p-value (n = interval count per well)  
- Small n per well → interpret p-values cautiously

### Key diagnostic

| Pattern | Interpretation |
|---------|----------------|
| Positive RQI ↔ `res_sep` | Permeability proxy behaves as expected |
| Negative / weak `res_sep` ↔ `avg_RES_DEEP` | Permeability decoupled from resistivity (water charge suspicion) |
| Negative / weak RQI ↔ `fluor` | Good rock without fluorescence |

**Decoupling** of permeability from hydrocarbon indicators suggests water-prone zones.

### Outputs

- 7×7 heatmap per well in the site UI  
- Used to explain *why* Jena intervals are risky (perm vs charge decoupling)

---

## Method 4 — Jaccard Similarity on Binary Flag Sets

**Reference:** OpusPlanR1 §1.4  
**Type:** Inter-well  
**Primary outputs:** 17×17 similarity matrix, Jena analog rankings  
**Site view:** Inter-well Comparison (`/compare`)  
**JSON source:** `site/public/data/stats/jaccard.json`

### Objective

Measure how similar two wells are in the **character of their flagged / geological features**, independent of absolute depth.

### Feature vocabulary

Each well is represented as a set of binary features that are “present” if they fire on ≥ **10%** of that well’s intervals:

- `good_rock` (RQI ≥ 0.6)
- `highperm`
- `lowres_over_good`
- `lowfluor_over_good`
- `matching_pay`
- `coarse_grain` (grain_ordinal ≥ 4)
- `low_GR` (GR below well P25)
- `loose_grains`

### Formula

```
J(A, B) = |A ∩ B| / |A ∪ B|
```

Range: 0 (no shared features) to 1 (identical feature sets).

### Depth-binned variant

- Normalise lateral position to 0–1 in **20 bins**  
- Build per-bin water-risk / feature vectors  
- Compute Jaccard on binned vectors to compare **architecture of risk along the lateral**

### Outputs

- Feature-set Jaccard matrix (heatmap)  
- Depth-binned Jaccard matrix  
- Ranked “most similar analog wells” for Jena 31 and Jena 31DW1

### Water-risk mapping

Identifies analog wells whose known water behaviour may inform Jena risk assessment.

---

## Method 5 — Hierarchical Clustering with Kolmogorov–Smirnov Significance

**Reference:** OpusPlanR1 §1.5  
**Type:** Inter-well  
**Primary outputs:** Dendrogram, cluster assignments, KS significance grid  
**Site view:** Inter-well Comparison (`/compare`)  
**JSON sources:** `site/public/data/stats/clusters.json`, `site/public/data/stats/ks.json`

### Objective

Group wells by aggregate petrophysical signature and test whether Jena wells’ property distributions are **statistically distinguishable** from candidate analogs.

### Part A — Feature-vector clustering

Per-well aggregate feature vector (standardised):

- `mean_pct_ss`
- `mean_grain_ordinal`
- `mean_avg_GR`
- `mean_res_sep`
- `mean_RES_DEEP`
- `pay_pct`
- `mean_WRCI`
- `pct_high_risk`

**Method:**

1. Standardise features across wells  
2. Pairwise **cosine** and **Euclidean** distances  
3. **Agglomerative hierarchical clustering** (Ward linkage)  
4. Dendrogram + cluster ID per well

### Part B — Kolmogorov–Smirnov two-sample tests

For each property distribution, compare **Jena 31** and **Jena 31DW1** against each analog well (and portfolio):

**Properties tested:** `pct_ss`, `grain_ordinal`, `avg_GR`, `res_sep`, `avg_RES_DEEP`, `fluor`, `WRCI`

**Reported:** D-statistic and p-value per (focus well, analog, property).

Low p-value → distributions are significantly different (analog may be less comparable).

### Outputs

- Dendrogram with cluster assignments  
- KS significance grid for JENA31 and JENA31DW1 vs analogs

### Water-risk mapping

Confidence layer — quantifies which analog wells are truly comparable to Jena for transfer of water-risk insight.

---

## Summary table

| # | Method | Type | Key inputs | Primary output | Site route |
|---|--------|------|------------|----------------|------------|
| 1 | WRCI | Intra | Cuttings, LAS, parsed text | Per-interval risk class + flags | `/well/:alias`, `/water-risk` |
| 2 | Robust Z-score | Intra | Six interval metrics | Anomaly list + z-scores | `/intra/:alias` |
| 3 | Spearman ρ | Intra | Seven petrophysical vars | 7×7 correlation matrix | `/intra/:alias` |
| 4 | Jaccard | Inter | Binary feature sets | Similarity matrix + analog ranks | `/compare` |
| 5 | Clustering + KS | Inter | Well aggregates + distributions | Dendrogram + KS grid | `/compare` |

---

## Data-quality caveats (apply to all methods)

1. **Overburden exclusion** — Intervals overlapping Murta/McKinlay entry → lone McKinlay re-entry zones are excluded from all statistics.  
2. **LAS mnemonic parsing** — GR/RES must be read by curve name, not fixed column order.  
3. **Text-derived fields** — Porosity and loose grains depend on cuttings description parsing; coverage varies by well.  
4. **Small n** — Per-well interval counts vary; Spearman p-values and KS tests should be read with sample size in mind.  
5. **HOBBES 4** — No data files; excluded from the 17-well portfolio.

---

## Corpus indexing notes (for Assistant)

When indexed by `build_corpus_index.py`, chunk this file as:

| Chunk ID | Section |
|----------|---------|
| `method:1-wrci` | Method 1 |
| `method:2-zscore` | Method 2 |
| `method:3-spearman` | Method 3 |
| `method:4-jaccard` | Method 4 |
| `method:5-clustering-ks` | Method 5 |
| `method:summary` | Summary table + caveats |

Assistant queries matching “WRCI”, “z-score”, “Spearman”, “Jaccard”, “KS”, “clustering”, or “how is … calculated” should retrieve the relevant chunk.
