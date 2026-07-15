import type { JaccardPayload } from "@/types/stats";

export interface JaccardRankEntry {
  alias: string;
  jaccard: number;
}

/** Stakeholder tie-break among equal top Jaccard scores; fallback when in top 5 at J ≥ 0.8 */
const PREFERRED_ANALOG: Record<string, string> = {
  JENA31: "STIMPEE7",
  JENA31DW1: "BIALA19",
};

/**
 * Rank analog wells for any focus alias using the feature Jaccard matrix.
 * Excludes self-comparison; sorts by score descending, then alias ascending.
 */
export function rankJaccardAnalogs(
  focusAlias: string,
  payload: JaccardPayload,
  matrix: number[][] = payload.matrix,
): JaccardRankEntry[] {
  const focusIdx = payload.aliases.indexOf(focusAlias);
  if (focusIdx === -1) return [];

  return payload.aliases
    .map((alias, idx) => ({
      alias,
      jaccard: matrix[focusIdx]?.[idx] ?? 0,
    }))
    .filter((entry) => entry.alias !== focusAlias)
    .sort((a, b) => b.jaccard - a.jaccard || a.alias.localeCompare(b.alias));
}

/** Rank analog wells using the depth-binned Jaccard matrix. */
export function rankDepthBinnedJaccardAnalogs(
  focusAlias: string,
  payload: JaccardPayload,
): JaccardRankEntry[] {
  return rankJaccardAnalogs(focusAlias, payload, payload.depth_binned_matrix);
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
  const ranked = rankJaccardAnalogs(focusAlias, payload);
  if (!ranked.length) return null;

  const maxJ = ranked[0]!.jaccard;
  const ties = ranked.filter((r) => r.jaccard === maxJ);
  const preferred = PREFERRED_ANALOG[focusAlias];

  if (preferred) {
    if (ties.some((t) => t.alias === preferred)) return preferred;
    const prefEntry = ranked.find((r) => r.alias === preferred);
    if (prefEntry && prefEntry.jaccard >= 0.8 && ranked.indexOf(prefEntry) < 5) {
      return preferred;
    }
  }

  return ranked[0]!.alias;
}
