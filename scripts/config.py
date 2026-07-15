"""
Central configuration for McKinlay water-risk statistics and web export.

All tunable weights, cutoffs, and thresholds used by export_web_data.py.
Mirror these values in site/src/config.ts when the static site is built.
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
    "pct_ss": 0.20,
    "low_gr": 0.17,
    "grain_ordinal": 0.14,
    "porosity": 0.13,
    "hardness": 0.12,
    "cement": 0.10,
    "sorting": 0.08,
    "angularity": 0.06,
}
"""Component weights for RQI v2 (must sum to 1.0)."""

RQI_OPTIONAL_COMPONENTS = ("hardness", "cement", "sorting", "angularity")
"""Text-derived components omitted per interval when parser returns None."""

SORTING_SCORES = {
    "v pr": 0.0,
    "pr": 0.2,
    "mod": 0.4,
    "mod wl": 0.6,
    "wl": 0.8,
    "v wl": 1.0,
}

ANGULARITY_SCORES = {
    "ang": 0.0,
    "sbang": 0.25,
    "sbrnd": 0.5,
    "rnd": 0.75,
    "v wl rnd": 1.0,
}

HARDNESS_SCORES = {
    "lse": 1.0,
    "uncons": 0.9,
    "fri": 0.7,
    "mod hd": 0.4,
    "hd": 0.2,
    "v hd": 0.0,
}

CEMENT_TYPE_PENALTY = {
    "arg": 1.0,
    "sil": 0.65,
    "calc": 0.35,
}

CEMENT_AMOUNT_MULT = {
    "tr": 0.25,
    "rr": 0.5,
    "mnr": 0.75,
    "com": 1.0,
}

CEMENT_STRENGTH_MULT = {
    "wk": 0.6,
    "strg": 1.4,
}

CEMENT_DEFAULT_AMOUNT_MULT = 0.5
CEMENT_DEFAULT_STRENGTH_MULT = 1.0

LOOSE_HARDNESS_SCORE = 0.7
"""Hardness lookup score >= this counts as loose_hardness for Jaccard (fri / lse tier)."""

RQI_THRESHOLD = 0.6
"""Intervals with RQI >= this value are considered 'good rock' for red-flag logic."""

RQI_STRONG_THRESHOLD = 0.75
"""Intervals with RQI >= this value count as good_rock_strong for Jaccard."""

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
# Red-flag booleans — updated-plan §3B
# ---------------------------------------------------------------------------
FLAG_LOW_GR = 70.0
"""avg_GR below this (gAPI) triggers low_GR boolean on RQI >= RQI_THRESHOLD intervals."""

FLAG_LOWRES_RES_DEEP = RES_DEEP_CUTOFF
"""avg_RES_DEEP below this (ohm.m) triggers low-resistivity red flag over good rock."""

FLAG_LOWFLUOR_PCT = FLUOR_CUTOFF
"""Fluorescence below this (%) triggers low-fluor red flag over good rock."""

# ---------------------------------------------------------------------------
# Zone of Interest (ZOI) — updated-plan §4.2
# ---------------------------------------------------------------------------
ZOI_NEIGHBOUR_WINDOW = 3
"""Number of shallower and deeper intervals in the reference window."""

ZOI_DROP_PCT = 0.15
"""Minimum fractional drop vs neighbour average to count as deterioration."""

ZOI_MIN_DROPS = 2
"""Minimum metrics (fluor, gas, RES_DEEP) that must drop > ZOI_DROP_PCT."""

ZOI_RQI_NEIGHBOUR_TOLERANCE = 0.9
"""RQI must be >= neighbour RQI average × this factor (or strictly higher)."""

# ---------------------------------------------------------------------------
# OWC proximity — updated-plan §5.2
# ---------------------------------------------------------------------------
OWC_BANDS_GOOD = {"high_lt": 4.0, "elevated_lt": 5.0}
"""Distance bands (m) for RQI >= RQI_THRESHOLD or ZOI intervals: <4 High, 4–5 Elevated, >5 Low."""

OWC_BANDS_POOR = {"high_lt": 2.0, "elevated_lt": 4.0}
"""Legacy poor-rock bands — unused; poor rock always returns OWC tier Low."""

OWC_RES_SUPPRESS = 30.0
"""Suppress OWC proximity flags when avg_RES_DEEP exceeds this (ohm.m)."""

OWC_SEVERITY_HIGH = 1.0
OWC_SEVERITY_ELEVATED = 0.5
OWC_SEVERITY_LOW = 0.0

# ---------------------------------------------------------------------------
# Water-Risk Composite Index (WRCI) — updated-plan §3B
# ---------------------------------------------------------------------------
WRCI_WEIGHTS = {
    "rqi": 0.40,
    "lowres_severity": 0.20,
    "lowfluor_severity": 0.20,
    "owc_severity": 0.20,
}
"""Component weights for WRCI (must sum to 1.0)."""

WRCI_HIGH_THRESHOLD = 60.0
"""WRCI >= this value (with sufficient flags / OWC / ZOI) → High water risk."""

WRCI_ELEVATED_THRESHOLD = 40.0
"""WRCI in [this, WRCI_HIGH) or qualifying flags → Elevated water risk."""

WRCI_HIGH_MIN_FLAGS = 1
"""Minimum count of {lowres, lowfluor, low_GR} booleans for High risk when WRCI >= WRCI_HIGH_THRESHOLD."""

WRCI_HIGH_MULTI_FLAGS = 2
"""≥ this many of {lowres, lowfluor, low_GR, owc_high} → High regardless of WRCI (suppressed when RES_DEEP > OWC_RES_SUPPRESS)."""

LOWRES_SEVERITY_REF = RES_DEEP_CUTOFF
"""Reference RES_DEEP (ohm.m) for low-resistivity severity: clamp((ref − RES)/ref, 0, 1)."""

LOWFLUOR_SEVERITY_REF = 100.0
"""Reference fluorescence (%) for low-fluor severity: clamp((ref − fluor)/ref, 0, 1)."""

# ---------------------------------------------------------------------------
# Robust Z-score anomaly detection — OpusPlanR1 §1.2
# ---------------------------------------------------------------------------
ZSCORE_METRICS = (
    "avg_RES_DEEP",
    "avg_GR",
    "pct_ss",
    "fluor",
    "grain_ordinal",
    "gas",
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
    "avg_RES_DEEP",
    "fluor",
    "gas",
)
"""Variables in the per-well Spearman correlation matrix."""

# ---------------------------------------------------------------------------
# Jaccard similarity — OpusPlanR1 §1.4
# ---------------------------------------------------------------------------
JACCARD_PRESENCE_PCT = 25.0
"""Feature must fire on >= this % of a well's intervals to enter its Jaccard set."""

JACCARD_DEPTH_BINS = 20
"""Number of bins for depth-binned Jaccard (normalised lateral position 0–1)."""

JACCARD_HIGH_GAS = 100.0
"""Total gas (units) >= this value counts as high_gas for Jaccard."""

JACCARD_FEATURES = (
    "good_rock_moderate",
    "good_rock_strong",
    "lowres_over_good",
    "lowfluor_over_good",
    "low_GR",
    "matching_pay",
    "owc_high",
    "owc_elevated",
    "elevated_risk",
    "high_gas",
)
"""Binary feature vocabulary for inter-well Jaccard similarity."""

COARSE_GRAIN_ORDINAL = 4
"""grain_ordinal >= this value counts as coarse_grain for Jaccard."""

# ---------------------------------------------------------------------------
# Clustering + KS — OpusPlanR1 §1.5
# ---------------------------------------------------------------------------
CLUSTER_FEATURES = (
    "mean_pct_ss",
    "mean_avg_GR",
    "mean_RES_DEEP",
    "pay_pct",
    "mean_WRCI",
    "fluorescence_pct",
    "total_gas",
    "RQI",
)
"""Per-well aggregate features for cosine/Euclidean clustering."""

KS_PROPERTIES = (
    "pct_ss",
    "grain_ordinal",
    "avg_GR",
    "avg_RES_DEEP",
    "fluor",
    "WRCI",
)
"""Interval-level distributions tested with two-sample KS."""

KS_FOCUS_ALIASES = ("JENA31", "JENA31DW1")
"""Jena wells tested against analogs and portfolio."""

JENA31_DUAL_ALIAS = "JENA31_DUAL"
"""Virtual merged well — JENA 31 + JENA 31DW1 single wellhead."""

JENA31_DUAL_DISPLAY = "JENA 31 Dual Lateral"

JENA31_DUAL_CONSTITUENTS = ("JENA31", "JENA31DW1")

DIST_HISTOGRAM_PROPERTIES = (
    "RQI",
    "WRCI",
    "pct_ss",
    "grain_ordinal",
    "avg_GR",
    "avg_RES_DEEP",
    "fluor",
)
"""Interval properties for executive distribution histogram."""

# ---------------------------------------------------------------------------
# Portfolio
# ---------------------------------------------------------------------------
HOBBES4_ALIAS = "HOBBES4"
"""Placeholder alias for data-absent well (not in WELLS list)."""

DATA_DIR = "site/public/data"
"""Root directory for exported JSON (relative to workspace)."""
