import type { ClustersPayload } from "@/types/stats";

export interface ClusterRankEntry {
  alias: string;
  cosine: number;
}

export function rankClusterAnalogs(
  focusAlias: string,
  payload: ClustersPayload,
): ClusterRankEntry[] {
  const focusIdx = payload.aliases.indexOf(focusAlias);
  if (focusIdx === -1) return [];

  return payload.aliases
    .map((alias, idx) => ({
      alias,
      cosine: payload.cosine_similarity[focusIdx]?.[idx] ?? 0,
    }))
    .filter((entry) => entry.alias !== focusAlias)
    .sort((a, b) => b.cosine - a.cosine || a.alias.localeCompare(b.alias));
}

export function getCosineScore(
  focusAlias: string,
  compareAlias: string,
  payload: ClustersPayload,
): number | null {
  const focusIdx = payload.aliases.indexOf(focusAlias);
  const compareIdx = payload.aliases.indexOf(compareAlias);
  if (focusIdx === -1 || compareIdx === -1) return null;
  return payload.cosine_similarity[focusIdx]?.[compareIdx] ?? null;
}

export function topClusterAnalog(
  focusAlias: string,
  payload: ClustersPayload,
): string | null {
  return rankClusterAnalogs(focusAlias, payload)[0]?.alias ?? null;
}
