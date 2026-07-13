import type { RiskClass } from "./wells";

export interface FlaggedZoneEvidence {
  pct_ss: number | null;
  grain_ordinal: number | null;
  poro_class: string | null;
  hardness_score: number | null;
  fluor: number | null;
  avg_GR: number | null;
  avg_RES_DEEP: number | null;
  res_sep: number | null;
}

export interface FlaggedZone {
  depth: number;
  top: number;
  bot: number;
  WRCI: number | null;
  RQI: number | null;
  risk_class: RiskClass;
  flags: string[];
  evidence: FlaggedZoneEvidence;
}

export interface WaterRiskPayload {
  alias: string;
  display: string;
  flagged_zones: FlaggedZone[];
}
