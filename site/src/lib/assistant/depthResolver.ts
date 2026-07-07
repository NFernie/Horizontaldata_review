import type { CorpusIntervalRecord } from "@/types/corpus";

const DEPTH_PATTERNS: RegExp[] = [
  /(\d+(?:\.\d+)?)\s*m\s*md\b/i,
  /(\d+(?:\.\d+)?)\s*mmd\b/i,
  /(\d+(?:\.\d+)?)\s*md\b/i,
  /(?:@|at|depth)\s*(\d+(?:\.\d+)?)/i,
  /(\d+(?:\.\d+)?)\s*m\b/i,
];

export function parseDepth(query: string): number | undefined {
  for (const pattern of DEPTH_PATTERNS) {
    const match = pattern.exec(query);
    if (match) {
      return Number.parseFloat(match[1]);
    }
  }
  return undefined;
}

export interface DepthMatchResult {
  record: CorpusIntervalRecord;
  matchNote?: string;
}

export function findNearestInterval(
  intervals: CorpusIntervalRecord[],
  queryDepth: number,
  depthThreshold = 10,
): DepthMatchResult | null {
  if (!intervals.length) return null;

  const nearest = intervals.reduce((best, current) =>
    Math.abs(current.depth - queryDepth) < Math.abs(best.depth - queryDepth)
      ? current
      : best,
  );

  const delta = Math.abs(nearest.depth - queryDepth);
  const matchNote =
    delta > depthThreshold
      ? `Nearest sample at ${nearest.depth} m MD (requested ${queryDepth} m MD).`
      : undefined;

  return { record: nearest, matchNote };
}
