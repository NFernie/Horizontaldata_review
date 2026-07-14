import type { DistHistogramProperty } from "@/config";
import type { IntervalRecord } from "@/types/intervals";

const BIN_COUNT = 16;

export function getIntervalPropertyValue(
  interval: IntervalRecord,
  property: DistHistogramProperty,
): number | null {
  switch (property) {
    case "RQI":
      return interval.RQI ?? null;
    case "WRCI":
      return interval.WRCI ?? null;
    case "pct_ss":
      return interval.pct_ss ?? null;
    case "grain_ordinal":
      return interval.grain_ordinal ?? null;
    case "avg_GR":
      return interval.log?.avg_GR ?? null;
    case "avg_RES_DEEP":
      return interval.log?.avg_RES_DEEP ?? null;
    case "fluor":
      return interval.fluor ?? null;
    default:
      return null;
  }
}

export function propertyDomain(property: DistHistogramProperty): [number, number] {
  if (property === "RQI") return [0, 1];
  if (property === "WRCI") return [0, 100];
  return [0, 1];
}

export interface HistogramBin {
  label: string;
  lo: number;
  hi: number;
  countA: number;
  countB: number;
}

export function buildHistogramBins(
  valuesA: number[],
  valuesB: number[],
  property: DistHistogramProperty,
): HistogramBin[] {
  const all = [...valuesA, ...valuesB];
  if (!all.length) {
    return Array.from({ length: BIN_COUNT }, (_, i) => ({
      label: `${i}`,
      lo: 0,
      hi: 0,
      countA: 0,
      countB: 0,
    }));
  }

  let lo = Math.min(...all);
  let hi = Math.max(...all);
  const preset = propertyDomain(property);
  if (property === "RQI" || property === "WRCI") {
    lo = preset[0];
    hi = preset[1];
  } else if (hi <= lo) {
    hi = lo + 1;
  }

  const width = (hi - lo) / BIN_COUNT;
  const bins: HistogramBin[] = Array.from({ length: BIN_COUNT }, (_, i) => {
    const binLo = lo + i * width;
    const binHi = i === BIN_COUNT - 1 ? hi : lo + (i + 1) * width;
    return {
      label: binLo.toFixed(property === "WRCI" ? 0 : 2),
      lo: binLo,
      hi: binHi,
      countA: 0,
      countB: 0,
    };
  });

  const assign = (values: number[], key: "countA" | "countB") => {
    for (const value of values) {
      let idx = Math.floor((value - lo) / width);
      if (idx >= BIN_COUNT) idx = BIN_COUNT - 1;
      if (idx < 0) idx = 0;
      bins[idx]![key] += 1;
    }
  };

  assign(valuesA, "countA");
  assign(valuesB, "countB");
  return bins;
}
