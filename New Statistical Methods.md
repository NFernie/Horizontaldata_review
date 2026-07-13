# Statistical Methods — McKinlay Water-Risk Review

**Purpose:** Canonical corpus document for the Corpus Assistant and human reference.  
**Scope:** Five statistical methods applied to **non-excluded McKinlay Member intervals** across **23** horizontal wells.  
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

Score each sample interval for **water influx risk** by combining rock quality (RQI v2) with red-flag families: low deep resistivity, low fluorescence, low GR (boolean), along-wellbore Zone of Interest (ZOI), and oil–water contact (OWC) proximity.

### Step A — Rock Quality Index (RQI), 0–1 (v2)

Eight-component RQI per `RQI_Update-Plan.md`:

```
RQI = 0.20·norm(%SS) + 0.17·norm(1−GR) + 0.14·norm(grain) + 0.13·porosity_score
    + 0.12·norm(hardness) + 0.10·norm(cement) + 0.08·norm(sorting) + 0.06·norm(angularity)
```

Text-derived components (hardness, cement, sorting, angularity) are omitted when not parsed; remaining weights are renormalised per interval.

`norm()` is **robust within-well normalisation**: clip each metric to P5–P95 for that well, then min–max scale to 0–1.

### Step B — Red flags

| Flag | ID | Condition | WRCI term? |
|------|-----|-----------|------------|
| Low resistivity | `lowres` | `avg_RES_DEEP < 20` Ω·m **and** RQI ≥ 0.6 | severity |
| Low fluorescence | `lowfluor` | `fluor < 75%` **and** RQI ≥ 0.6 | severity |
| Low GR | `low_GR` | `avg_GR < 65` gAPI **and** RQI ≥ 0.6 | boolean only |
| Zone of interest | `ZOI` | Along-wellbore deterioration (±3 neighbours; ≥2 metrics drop >15%) | independent |
| OWC proximity | `owc_near` | Tier from `abs(mTVDss − OWC_field)` | severity |

ZOI fires above pay cutoffs; intervals below fluor/res pay cutoffs use standard `lowres` / `lowfluor` flags instead.

### Step C — WRCI (0–100)

```
WRCI = 100 × ( 0.40·RQI + 0.20·lowres_severity + 0.20·lowfluor_severity + 0.20·owc_severity )
```

| Severity term | Formula |
|---------------|---------|
| `lowres_severity` | `clamp((20 − RES_DEEP) / 20, 0, 1)` |
| `lowfluor_severity` | `clamp((75 − fluor) / 75, 0, 1)` |
| `owc_severity` | High → 1.0, Elevated → 0.5, Low → 0.0 |

### Risk classification

| Class | Rule |
|-------|------|
| **High** | WRCI ≥ 66 **and** (OWC High **or** ≥2 of `{lowres, lowfluor, low_GR}`) **or** (ZOI **and** WRCI ≥ 66) |
| **Elevated** | WRCI 40–66 **or** 1 of `{lowres, lowfluor, low_GR}` **or** OWC Elevated **or** (ZOI **and** WRCI ≥ 40) |
| **Low** | Otherwise |

### Water-risk mapping

Primary deliverable for Jena 31 / Jena 31DW1: depth-ordered flagged zones with RQI, WRCI, `mTVDss`, OWC distance, and explicit flag reasoning.

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

- `avg_RES_DEEP`
- `avg_GR`
- `pct_ss`
- `fluor`
- `grain_ordinal`
- `gas`
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

An interval with **anomalously low `avg_RES_DEEP`**, **anomalously high `avg_GR`**, and **high `pct_ss`** is a classic water-zone signature (good rock without hydrocarbon charge).

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

`pct_ss`, `grain_ordinal`, `avg_GR`, `avg_RES_DEEP`, `fluor`, `gas`

### Method

- Compute Spearman ρ for each variable pair across retained intervals  
- Report ρ and two-tailed p-value (n = interval count per well)  
- Small n per well → interpret p-values cautiously

### Key diagnostic

| Pattern | Interpretation |
|---------|----------------|
| Positive RQI ↔ `avg_RES_DEEP` | Rock quality tracks resistivity |
| Negative RQI ↔ `avg_GR` | Cleaner sand vs higher gamma ray |
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
- `lowres_over_good`
- `lowfluor_over_good`
- `low_GR` (GR < 65 gAPI on good rock)
- `ZOI`
- `matching_pay`
- `coarse_grain` (grain_ordinal ≥ 4)
- `loose_hardness`

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
- `mean_RES_DEEP`
- `pay_pct`
- `mean_WRCI`
- `pct_high_risk`
- `pct_zoi`

**Method:**

1. Standardise features across wells  
2. Pairwise **cosine** and **Euclidean** distances  
3. **Agglomerative hierarchical clustering** (Ward linkage)  
4. Dendrogram + cluster ID per well

### Part B — Kolmogorov–Smirnov two-sample tests

For each property distribution, compare **Jena 31** and **Jena 31DW1** against each analog well (and portfolio):

**Properties tested:** `pct_ss`, `grain_ordinal`, `avg_GR`, `avg_RES_DEEP`, `fluor`, `WRCI`

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
