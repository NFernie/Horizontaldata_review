import type { IntervalRecord } from "@/types/intervals";
import type { RiskClass } from "@/types/wells";

export interface ConcernStats {
  elevated: number;
  high: number;
  isolatedConcerns: number;
  nonIsolatedConcerns: number;
  totalConcerns: number;
  hasIsolationBands: boolean;
}

export function isConcernRisk(risk: RiskClass): boolean {
  return risk === "Elevated" || risk === "High";
}

export function isConcernInterval(interval: IntervalRecord): boolean {
  return isConcernRisk(interval.risk_class);
}

export function computeConcernStats(intervals: IntervalRecord[]): ConcernStats {
  let elevated = 0;
  let high = 0;
  let isolatedConcerns = 0;
  let nonIsolatedConcerns = 0;

  for (const iv of intervals) {
    if (!isConcernInterval(iv)) continue;
    if (iv.risk_class === "Elevated") elevated += 1;
    if (iv.risk_class === "High") high += 1;
    if (iv.isolated) {
      isolatedConcerns += 1;
    } else {
      nonIsolatedConcerns += 1;
    }
  }

  return {
    elevated,
    high,
    isolatedConcerns,
    nonIsolatedConcerns,
    totalConcerns: elevated + high,
    hasIsolationBands: false,
  };
}

export function formatConcernBullet(
  display: string,
  stats: ConcernStats,
  hasIsolationOnFile: boolean,
): string {
  const parts = [
    `${stats.elevated} elevated`,
    `${stats.high} high`,
  ];
  const isolation =
    hasIsolationOnFile && stats.isolatedConcerns > 0
      ? `${stats.isolatedConcerns} isolated concern zones`
      : hasIsolationOnFile
        ? "isolation on file"
        : "no mechanical isolation on file";
  return `${display}: ${parts.join("; ")}; ${isolation}.`;
}

export function formatAnalogBullet(
  display: string,
  jaccard: number | null,
  stats: ConcernStats,
  hasIsolationOnFile: boolean,
): string {
  const score = jaccard != null ? `J=${jaccard.toFixed(2)}` : "J=—";
  const concernPart =
    stats.totalConcerns === 0
      ? "no concern zones"
      : `${stats.elevated} elevated; ${stats.high} high${
          stats.isolatedConcerns > 0
            ? `; ${stats.isolatedConcerns} isolated concern zones`
            : hasIsolationOnFile
              ? ""
              : ""
        }`;
  return `vs ${display} (${score}): ${concernPart}.`;
}
