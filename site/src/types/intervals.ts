import type { RiskClass } from "./wells";

export interface IntervalLog {
  avg_GR?: number | null;
  n_GR?: number;
  avg_RES_DEEP?: number | null;
  n_RES_DEEP?: number;
  avg_RES_SHALLOW?: number | null;
  n_RES_SHALLOW?: number;
}

export interface IntervalRecord {
  depth: number;
  top: number;
  bot: number;
  pct_ss: number | null;
  pct_slt?: number | null;
  grain: string | null;
  max_grain?: string | null;
  grain_ordinal: number;
  poro_class: string | null;
  fluor: number | null;
  bright?: string | null;
  gas?: number | null;
  long_desc?: string;
  log: IntervalLog | null;
  matching_pay?: boolean;
  RQI: number | null;
  WRCI: number | null;
  risk_class: RiskClass;
  flags: string[];
  mTVDss?: number | null;
  owc_distance_m?: number | null;
  owc_near?: "High" | "Elevated" | "Low" | null;
  z_scores: Record<string, number | null>;
  anomalies: string[];
}

export interface IntervalsPayload {
  alias: string;
  display: string;
  interval_count: number;
  intervals: IntervalRecord[];
}
