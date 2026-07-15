import { describe, expect, it } from "vitest";
import {
  buildHistogramBins,
  computeDescriptiveStats,
  computeMean,
  computeMedian,
  computeModeFromBins,
  computeStdDev,
  formatHistogramStat,
} from "./histogram";

describe("histogram stats", () => {
  it("computes mean, median, and population std dev", () => {
    const values = [1, 2, 3, 4, 5];
    expect(computeMean(values)).toBe(3);
    expect(computeMedian(values)).toBe(3);
    expect(computeStdDev(values)).toBeCloseTo(1.414, 2);
  });

  it("returns null stats for empty values", () => {
    expect(computeMean([])).toBeNull();
    expect(computeMedian([])).toBeNull();
    expect(computeStdDev([])).toBeNull();
    expect(formatHistogramStat(null)).toBe("—");
  });

  it("derives mode from highest-count bin midpoint (rounded)", () => {
    const bins = buildHistogramBins([0.1, 0.2, 0.25], [0.8, 0.9], "RQI");
    const modeA = computeModeFromBins(bins, "countA");
    const modeB = computeModeFromBins(bins, "countB");
    expect(modeA).not.toBeNull();
    expect(modeB).not.toBeNull();
    expect(modeA).toBeLessThan(0.5);
    expect(modeB).toBeGreaterThan(0.5);
  });

  it("builds descriptive stats bundle", () => {
    const valuesA = [0.2, 0.4, 0.6];
    const valuesB = [0.8, 0.9];
    const bins = buildHistogramBins(valuesA, valuesB, "RQI");
    const statsA = computeDescriptiveStats(valuesA, bins, "countA");
    expect(statsA.n).toBe(3);
    expect(statsA.mean).toBeCloseTo(0.4, 3);
    expect(statsA.median).toBe(0.4);
    expect(statsA.stdDev).not.toBeNull();
  });

  it("formats stats with fixed decimals", () => {
    expect(formatHistogramStat(1.2)).toBe("1.200");
  });
});
