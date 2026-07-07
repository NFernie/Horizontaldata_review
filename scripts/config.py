"""
Central configuration for McKinlay water-risk statistics and web export.

All tunable weights, cutoffs, and thresholds used by export_web_data.py.
Mirror these values in site/src/config.ts when the static site is built (Phase 3).
"""

# ---------------------------------------------------------------------------
# Pay cutoffs (shared with compute_pay_summary.py semantics)
# ---------------------------------------------------------------------------
SS_CUTOFF = 50.0
"""Minimum % sandstone for cuttings / matching pay."""

FLUOR_CUTOFF = 75.0
"""Minimum % fluorescence for cuttings / matching pay."""

RES_DEEP_CUTOFF = 20.0
"""Minimum deep resistivity (ohm.m) for resistivity / matching pay."""

# ---------------------------------------------------------------------------
# Rock Quality Index (RQI) — OpusPlanR1 §1.1 Step A
# ---------------------------------------------------------------------------
RQI_WEIGHTS = {
    "pct_ss": 0.30,
    "grain_ordinal": 0.25,
    "low_gr": 0.20,
    "porosity": 0.15,
    "loose_grains": 0.10,
}
"""Component weights for RQI (must sum to 1.0)."""

RQI_THRESHOLD = 0.6
"""Intervals with RQI >= this value are considered 'good rock' for red-flag logic."""

PORO_SCORES = {
    "none": 0.0,
    "poor": 0.0,
    "p-fr": 0.33,
    "fr": 0.5,
    "fr-gd": 0.75,
    "gd": 1.0,
}
"""Porosity class → score for RQI porosity component."""

ROBUST_NORM_PERCENTILES = (5, 95)
"""P5–P95 clipping range for within-well robust min–max normalisation."""

# ---------------------------------------------------------------------------
# Red-flag booleans — OpusPlanR1 §1.1 Step B
# ---------------------------------------------------------------------------
FLAG_RES_SEP_PERCENTILE = 75
"""Well-relative percentile for high-permeability (res_sep) red flag."""

FLAG_LOWRES_RES_DEEP = RES_DEEP_CUTOFF
"""avg_RES_DEEP below this (ohm.m) triggers low-resistivity red flag over good rock."""

FLAG_LOWFLUOR_PCT = FLUOR_CUTOFF
"""Fluorescence below this (%) triggers low-fluor red flag over good rock."""

# ---------------------------------------------------------------------------
# Water-Risk Composite Index (WRCI) — OpusPlanR1 §1.1 Step C
# ---------------------------------------------------------------------------
WRCI_WEIGHTS = {
    "rqi": 0.40,
    "highperm": 0.20,
    "lowres_severity": 0.20,
    "lowfluor_severity": 0.20,
}
"""Component weights for WRCI (must sum to 1.0)."""

WRCI_HIGH_THRESHOLD = 66.0
"""WRCI >= this value (with sufficient flags) → High water risk."""

WRCI_ELEVATED_THRESHOLD = 40.0
"""WRCI in [this, WRCI_HIGH) or 1 flag → Elevated water risk."""

WRCI_HIGH_MIN_FLAGS = 2
"""Minimum red-flag count required for High risk class."""

LOWRES_SEVERITY_REF = RES_DEEP_CUTOFF
"""Reference RES_DEEP (ohm.m) for low-resistivity severity: clamp((ref − RES)/ref, 0, 1)."""

LOWFLUOR_SEVERITY_REF = FLUOR_CUTOFF
"""Reference fluorescence (%) for low-fluor severity: clamp((ref − fluor)/ref, 0, 1)."""

# ---------------------------------------------------------------------------
# Robust Z-score anomaly detection — OpusPlanR1 §1.2
# ---------------------------------------------------------------------------
ZSCORE_METRICS = (
    "res_sep",
    "avg_RES_DEEP",
    "avg_GR",
    "pct_ss",
    "fluor",
    "grain_ordinal",
)
"""Interval metrics for modified z-score anomaly detection."""

ZSCORE_THRESHOLD = 3.5
"""|modified z| above this value flags an anomaly."""

MAD_SCALE = 0.6745
"""Scale factor for modified z-score (median/MAD estimator)."""

# ---------------------------------------------------------------------------
# Spearman correlation — OpusPlanR1 §1.3
# ---------------------------------------------------------------------------
SPEARMAN_VARS = (
    "pct_ss",
    "grain_ordinal",
    "avg_GR",
    "res_sep",
    "avg_RES_DEEP",
    "fluor",
    "gas",
)
"""Variables in the per-well Spearman correlation matrix."""

# ---------------------------------------------------------------------------
# Jaccard similarity — OpusPlanR1 §1.4
# ---------------------------------------------------------------------------
JACCARD_PRESENCE_PCT = 10.0
"""Feature must fire on >= this % of a well's intervals to enter its Jaccard set."""

JACCARD_DEPTH_BINS = 20
"""Number of bins for depth-binned Jaccard (normalised lateral position 0–1)."""

JACCARD_FEATURES = (
    "good_rock",
    "highperm",
    "lowres_over_good",
    "lowfluor_over_good",
    "matching_pay",
    "coarse_grain",
    "low_GR",
    "loose_grains",
)
"""Binary feature vocabulary for inter-well Jaccard similarity."""

COARSE_GRAIN_ORDINAL = 4
"""grain_ordinal >= this value counts as coarse_grain for Jaccard."""

LOW_GR_PERCENTILE = 25
"""avg_GR below this well-relative percentile counts as low_GR."""

# ---------------------------------------------------------------------------
# Clustering + KS — OpusPlanR1 §1.5
# ---------------------------------------------------------------------------
CLUSTER_FEATURES = (
    "mean_pct_ss",
    "mean_grain_ordinal",
    "mean_avg_GR",
    "mean_res_sep",
    "mean_RES_DEEP",
    "pay_pct",
    "mean_WRCI",
    "pct_high_risk",
)
"""Per-well aggregate features for cosine/Euclidean clustering."""

KS_PROPERTIES = (
    "pct_ss",
    "grain_ordinal",
    "avg_GR",
    "res_sep",
    "avg_RES_DEEP",
    "fluor",
    "WRCI",
)
"""Interval-level distributions tested with two-sample KS."""

KS_FOCUS_ALIASES = ("JENA31", "JENA31DW1")
"""Jena wells tested against analogs and portfolio."""

# ---------------------------------------------------------------------------
# Portfolio
# ---------------------------------------------------------------------------
HOBBES4_ALIAS = "HOBBES4"
"""Placeholder alias for data-absent well (not in WELLS list)."""

DATA_DIR = "site/public/data"
"""Root directory for exported JSON (relative to workspace)."""
