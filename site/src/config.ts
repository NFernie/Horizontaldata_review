/**
 * Mirror of scripts/config.py — keep in sync for methodology display.
 */

export const SS_CUTOFF = 50.0;
export const FLUOR_CUTOFF = 75.0;
export const RES_DEEP_CUTOFF = 20.0;

export const RQI_WEIGHTS = {
  pct_ss: 0.2,
  low_gr: 0.17,
  grain_ordinal: 0.14,
  porosity: 0.13,
  hardness: 0.12,
  cement: 0.1,
  sorting: 0.08,
  angularity: 0.06,
} as const;

export const RQI_THRESHOLD = 0.6;

export const PORO_SCORES = {
  none: 0.0,
  poor: 0.0,
  "p-fr": 0.33,
  fr: 0.5,
  "fr-gd": 0.75,
  gd: 1.0,
} as const;

export const LOOSE_HARDNESS_SCORE = 0.7;

export const ROBUST_NORM_PERCENTILES = [5, 95] as const;

export const FLAG_LOW_GR = 70.0;
export const FLAG_LOWRES_RES_DEEP = RES_DEEP_CUTOFF;
export const FLAG_LOWFLUOR_PCT = FLUOR_CUTOFF;

export const ZOI_NEIGHBOUR_WINDOW = 3;
export const ZOI_DROP_PCT = 0.15;
export const ZOI_MIN_DROPS = 2;
export const ZOI_RQI_NEIGHBOUR_TOLERANCE = 0.9;

export const OWC_BANDS_GOOD = { high_lt: 4.0, elevated_lt: 5.0 } as const;
export const OWC_BANDS_POOR = { high_lt: 2.0, elevated_lt: 4.0 } as const;
export const OWC_RES_SUPPRESS = 30.0;
export const OWC_SEVERITY_HIGH = 1.0;
export const OWC_SEVERITY_ELEVATED = 0.5;
export const OWC_SEVERITY_LOW = 0.0;

export const WRCI_WEIGHTS = {
  rqi: 0.4,
  lowres_severity: 0.2,
  lowfluor_severity: 0.2,
  owc_severity: 0.2,
} as const;

export const WRCI_HIGH_THRESHOLD = 60.0;
export const WRCI_ELEVATED_THRESHOLD = 40.0;
export const WRCI_HIGH_MIN_FLAGS = 1;
export const WRCI_HIGH_MULTI_FLAGS = 2;

export const LOWRES_SEVERITY_REF = RES_DEEP_CUTOFF;
export const LOWFLUOR_SEVERITY_REF = 100.0;

export const ZSCORE_METRICS = [
  "avg_RES_DEEP",
  "avg_GR",
  "pct_ss",
  "fluor",
  "grain_ordinal",
  "gas",
] as const;

export const ZSCORE_THRESHOLD = 3.5;
export const MAD_SCALE = 0.6745;

export const SPEARMAN_VARS = [
  "pct_ss",
  "grain_ordinal",
  "avg_GR",
  "avg_RES_DEEP",
  "fluor",
  "gas",
] as const;

export const JACCARD_PRESENCE_PCT = 10.0;
export const JACCARD_DEPTH_BINS = 20;

export const JACCARD_FEATURES = [
  "good_rock",
  "lowres_over_good",
  "lowfluor_over_good",
  "low_GR",
  "ZOI",
  "matching_pay",
  "coarse_grain",
  "loose_hardness",
] as const;

export const COARSE_GRAIN_ORDINAL = 4;

export const CLUSTER_FEATURES = [
  "mean_pct_ss",
  "mean_avg_GR",
  "mean_RES_DEEP",
  "pay_pct",
  "mean_WRCI",
  "fluorescence_pct",
  "total_gas",
  "RQI",
] as const;

export const KS_PROPERTIES = [
  "pct_ss",
  "grain_ordinal",
  "avg_GR",
  "avg_RES_DEEP",
  "fluor",
  "WRCI",
] as const;

export const KS_FOCUS_ALIASES = ["JENA31", "JENA31DW1"] as const;
export const HOBBES4_ALIAS = "HOBBES4";

export const JENA31_DUAL_ALIAS = "JENA31_DUAL";
export const JENA31_DUAL_CONSTITUENTS = ["JENA31", "JENA31DW1"] as const;

export const DIST_HISTOGRAM_PROPERTIES = [
  "RQI",
  "WRCI",
  "pct_ss",
  "grain_ordinal",
  "avg_GR",
  "avg_RES_DEEP",
  "fluor",
] as const;

export type DistHistogramProperty = (typeof DIST_HISTOGRAM_PROPERTIES)[number];

export const RISK_LABELS = {
  High: "High water risk",
  Elevated: "Elevated water risk",
  Low: "Low water risk",
} as const;

export const FLAG_LABELS = {
  lowres: "Low resistivity",
  lowfluor: "Low fluorescence",
  low_GR: "Low GR",
  ZOI: "Zone of interest",
  owc_high: "OWC proximity (high)",
  owc_elevated: "OWC proximity (elevated)",
} as const;
