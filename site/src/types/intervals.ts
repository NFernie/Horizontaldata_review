import type { RiskClass } from "./wells";

export interface IntervalLog {
  avg_GR?: number | null;
  n_GR?: number;
  avg_RES_DEEP?: number | null;
  n_RES_DEEP?: number;
  avg_RES_SHALLOW?: number | null;
  n_RES_SHALLOW?: number;
  res_sep?: number | null;
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
  perm?: string;
  matching_pay?: boolean;
  RQI: number | null;
  WRCI: number | null;
  risk_class: RiskClass;
  flags: string[];
  z_scores: Record<string, number | null>;
  anomalies: string[];
}

export interface IntervalsPayload {
  alias: string;
  display: string;
  interval_count: number;
  intervals: IntervalRecord[];
}
