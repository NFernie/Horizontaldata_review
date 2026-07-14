import type { JaccardPayload } from "@/types/stats";

export interface JaccardRankEntry {
  alias: string;
  jaccard: number;
}

/**
 * Rank analog wells for any focus alias using the feature Jaccard matrix.
 * Excludes self-comparison; sorts by score descending, then alias ascending.
 */
export function rankJaccardAnalogs(
  focusAlias: string,
  payload: JaccardPayload,
): JaccardRankEntry[] {
  const focusIdx = payload.aliases.indexOf(focusAlias);
  if (focusIdx === -1) return [];

  return payload.aliases
    .map((alias, idx) => ({
      alias,
      jaccard: payload.matrix[focusIdx]?.[idx] ?? 0,
    }))
    .filter((entry) => entry.alias !== focusAlias)
    .sort((a, b) => b.jaccard - a.jaccard || a.alias.localeCompare(b.alias));
}

export function getJaccardScore(
  focusAlias: string,
  analogAlias: string,
  payload: JaccardPayload,
): number | null {
  const focusIdx = payload.aliases.indexOf(focusAlias);
  const analogIdx = payload.aliases.indexOf(analogAlias);
  if (focusIdx === -1 || analogIdx === -1) return null;
  return payload.matrix[focusIdx]?.[analogIdx] ?? null;
}

export function topJaccardAnalog(
  focusAlias: string,
  payload: JaccardPayload,
): string | null {
  return rankJaccardAnalogs(focusAlias, payload)[0]?.alias ?? null;
}
