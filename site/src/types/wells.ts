export interface WellRecord {
  alias: string;
  display: string;
  tops_name: string | null;
  dc30: number | null;
  td: number | null;
  lateral: number | null;
  interval_count: number;
  pay_pct: number | null;
  high_risk_count: number;
  elevated_risk_count: number;
  cluster_id: number | null;
  data_missing: boolean;
}

export interface WellsPayload {
  generated: string;
  well_count: number;
  wells: WellRecord[];
  notes?: Record<string, string>;
}

export type RiskClass = "High" | "Elevated" | "Low";
