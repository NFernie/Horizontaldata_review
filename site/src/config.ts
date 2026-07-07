/**
 * Mirror of scripts/config.py — keep in sync for methodology display.
 */

export const SS_CUTOFF = 50.0;
export const FLUOR_CUTOFF = 75.0;
export const RES_DEEP_CUTOFF = 20.0;

export const RQI_WEIGHTS = {
  pct_ss: 0.3,
  grain_ordinal: 0.25,
  low_gr: 0.2,
  porosity: 0.15,
  loose_grains: 0.1,
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

export const ROBUST_NORM_PERCENTILES = [5, 95] as const;

export const FLAG_RES_SEP_PERCENTILE = 75;
export const FLAG_LOWRES_RES_DEEP = RES_DEEP_CUTOFF;
export const FLAG_LOWFLUOR_PCT = FLUOR_CUTOFF;

export const WRCI_WEIGHTS = {
  rqi: 0.4,
  highperm: 0.2,
  lowres_severity: 0.2,
  lowfluor_severity: 0.2,
} as const;

export const WRCI_HIGH_THRESHOLD = 66.0;
export const WRCI_ELEVATED_THRESHOLD = 40.0;
export const WRCI_HIGH_MIN_FLAGS = 2;

export const LOWRES_SEVERITY_REF = RES_DEEP_CUTOFF;
export const LOWFLUOR_SEVERITY_REF = FLUOR_CUTOFF;

export const ZSCORE_METRICS = [
  "res_sep",
  "avg_RES_DEEP",
  "avg_GR",
  "pct_ss",
  "fluor",
  "grain_ordinal",
] as const;

export const ZSCORE_THRESHOLD = 3.5;
export const MAD_SCALE = 0.6745;

export const SPEARMAN_VARS = [
  "pct_ss",
  "grain_ordinal",
  "avg_GR",
  "res_sep",
  "avg_RES_DEEP",
  "fluor",
  "gas",
] as const;

export const JACCARD_PRESENCE_PCT = 10.0;
export const JACCARD_DEPTH_BINS = 20;

export const JACCARD_FEATURES = [
  "good_rock",
  "highperm",
  "lowres_over_good",
  "lowfluor_over_good",
  "matching_pay",
  "coarse_grain",
  "low_GR",
  "loose_grains",
] as const;

export const COARSE_GRAIN_ORDINAL = 4;
export const LOW_GR_PERCENTILE = 25;

export const CLUSTER_FEATURES = [
  "mean_pct_ss",
  "mean_grain_ordinal",
  "mean_avg_GR",
  "mean_res_sep",
  "mean_RES_DEEP",
  "pay_pct",
  "mean_WRCI",
  "pct_high_risk",
] as const;

export const KS_PROPERTIES = [
  "pct_ss",
  "grain_ordinal",
  "avg_GR",
  "res_sep",
  "avg_RES_DEEP",
  "fluor",
  "WRCI",
] as const;

export const KS_FOCUS_ALIASES = ["JENA31", "JENA31DW1"] as const;
export const HOBBES4_ALIAS = "HOBBES4";

export const RISK_LABELS = {
  High: "High water risk",
  Elevated: "Elevated water risk",
  Low: "Low water risk",
} as const;

export const FLAG_LABELS = {
  highperm: "High permeability",
  lowres: "Low resistivity",
  lowfluor: "Low fluorescence",
} as const;
