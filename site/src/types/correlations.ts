import { SPEARMAN_VARS } from "@/config";

export type SpearmanVar = (typeof SPEARMAN_VARS)[number];

export interface WellCorrelations {
  n: number;
  rho: Record<SpearmanVar, Partial<Record<SpearmanVar, number | null>>>;
  p_value: Record<SpearmanVar, Partial<Record<SpearmanVar, number | null>>>;
  decoupling_score: number | null;
}

export type CorrelationsPayload = Record<string, WellCorrelations>;
