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
    case "hafwl_m":
      return interval.hafwl_m ?? null;
    case "gas":
      return interval.gas ?? null;
    default:
      return null;
  }
}

export function propertyDomain(property: DistHistogramProperty): [number, number] | null {
  if (property === "RQI") return [0, 1];
  if (property === "WRCI") return [0, 100];
  return null;
}

export interface MultiWellHistogramBin {
  label: string;
  lo: number;
  hi: number;
  counts: Record<string, number>;
}

export function buildMultiWellHistogramBins(
  valuesByAlias: Record<string, number[]>,
  property: DistHistogramProperty,
): MultiWellHistogramBin[] {
  const aliases = Object.keys(valuesByAlias);
  const all = aliases.flatMap((alias) => valuesByAlias[alias] ?? []);

  if (!all.length) {
    return Array.from({ length: BIN_COUNT }, (_, i) => ({
      label: `${i}`,
      lo: 0,
      hi: 0,
      counts: Object.fromEntries(aliases.map((alias) => [alias, 0])),
    }));
  }

  let lo = Math.min(...all);
  let hi = Math.max(...all);
  const preset = propertyDomain(property);
  if (preset) {
    lo = preset[0];
    hi = preset[1];
  } else if (hi <= lo) {
    hi = lo + 1;
  }

  const width = (hi - lo) / BIN_COUNT;
  const bins: MultiWellHistogramBin[] = Array.from({ length: BIN_COUNT }, (_, i) => {
    const binLo = lo + i * width;
    const binHi = i === BIN_COUNT - 1 ? hi : lo + (i + 1) * width;
    return {
      label: binLo.toFixed(property === "WRCI" ? 0 : 2),
      lo: binLo,
      hi: binHi,
      counts: Object.fromEntries(aliases.map((alias) => [alias, 0])),
    };
  });

  for (const alias of aliases) {
    for (const value of valuesByAlias[alias] ?? []) {
      let idx = Math.floor((value - lo) / width);
      if (idx >= BIN_COUNT) idx = BIN_COUNT - 1;
      if (idx < 0) idx = 0;
      bins[idx]!.counts[alias] = (bins[idx]!.counts[alias] ?? 0) + 1;
    }
  }

  return bins;
}

export function computeModeFromMultiBins(
  bins: MultiWellHistogramBin[],
  alias: string,
): number | null {
  let maxCount = 0;
  let modeBin: MultiWellHistogramBin | null = null;
  for (const bin of bins) {
    const count = bin.counts[alias] ?? 0;
    if (count > maxCount) {
      maxCount = count;
      modeBin = bin;
    }
  }
  if (!modeBin || maxCount === 0) return null;
  return roundStat((modeBin.lo + modeBin.hi) / 2);
}

export function multiBinToChartRows(
  bins: MultiWellHistogramBin[],
  aliases: string[],
): Record<string, string | number>[] {
  return bins.map((bin) => {
    const row: Record<string, string | number> = { label: bin.label };
    for (const alias of aliases) {
      row[`count_${alias}`] = bin.counts[alias] ?? 0;
    }
    return row;
  });
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
  if (preset) {
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

export const HISTOGRAM_STAT_DECIMALS = 3;

export interface DescriptiveStats {
  mean: number | null;
  median: number | null;
  mode: number | null;
  stdDev: number | null;
  n: number;
}

function roundStat(value: number): number {
  const factor = 10 ** HISTOGRAM_STAT_DECIMALS;
  return Math.round(value * factor) / factor;
}

export function computeMean(values: number[]): number | null {
  if (!values.length) return null;
  return roundStat(values.reduce((sum, v) => sum + v, 0) / values.length);
}

export function computeMedian(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 0
      ? (sorted[mid - 1]! + sorted[mid]!) / 2
      : sorted[mid]!;
  return roundStat(median);
}

export function computeStdDev(values: number[]): number | null {
  if (!values.length) return null;
  const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
  const variance = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;
  return roundStat(Math.sqrt(variance));
}

export function computeModeFromBins(
  bins: HistogramBin[],
  countKey: "countA" | "countB",
): number | null {
  let maxCount = 0;
  let modeBin: HistogramBin | null = null;
  for (const bin of bins) {
    const count = bin[countKey];
    if (count > maxCount) {
      maxCount = count;
      modeBin = bin;
    }
  }
  if (!modeBin || maxCount === 0) return null;
  return roundStat((modeBin.lo + modeBin.hi) / 2);
}

export function computeDescriptiveStats(
  values: number[],
  bins: HistogramBin[],
  countKey: "countA" | "countB",
): DescriptiveStats {
  return {
    mean: computeMean(values),
    median: computeMedian(values),
    mode: computeModeFromBins(bins, countKey),
    stdDev: computeStdDev(values),
    n: values.length,
  };
}

export function formatHistogramStat(value: number | null): string {
  if (value == null) return "—";
  return value.toFixed(HISTOGRAM_STAT_DECIMALS);
}
