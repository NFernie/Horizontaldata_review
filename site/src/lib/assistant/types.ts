import type { AssistantIntent } from "@/types/assistant";

export type SummaryType = "pay_summary" | "process_summary";

export interface IntervalFilter {
  looseGrains?: boolean;
  minWrci?: number;
  maxWrci?: number;
  riskClass?: "High" | "Elevated" | "Low";
}

export interface ParsedQuery {
  intent: AssistantIntent;
  rawQuery: string;
  alias?: string;
  depth?: number;
  methodKey?: string;
  summaryType?: SummaryType;
  statsTopic?: "correlations" | "jaccard" | "ks" | "clusters" | "water_risk" | "analog";
  filter?: IntervalFilter;
}
