import { describe, expect, it } from "vitest";
import {
  buildScatterPoints,
  clampAxisRange,
  computeAxisExtent,
  computeLinearRegression,
  computePearsonR,
  filterIntervals,
  formatRegressionEquation,
  passesRelationshipFilters,
  regressionLinePoints,
} from "./dataRelationships";
import type { IntervalRecord } from "@/types/intervals";

function sampleInterval(overrides: Partial<IntervalRecord> = {}): IntervalRecord {
  return {
    depth: 2500,
    top: 2495,
    bot: 2505,
    pct_ss: 60,
    grain: "md",
    grain_ordinal: 2,
    poro_class: "gd",
    fluor: 80,
    gas: 100,
    log: { avg_GR: 70, avg_RES_DEEP: 25 },
    RQI: 0.55,
    WRCI: 45,
    risk_class: "Elevated",
    flags: ["lowres"],
    hafwl_m: 3.5,
    matching_pay: true,
    z_scores: {},
    anomalies: [],
    ...overrides,
  };
}

describe("dataRelationships", () => {
  it("filters by risk class and pay", () => {
    const filters = {
      riskClasses: ["High" as const],
      payOnly: true,
      selectedFlags: [],
    };
    expect(passesRelationshipFilters(sampleInterval({ risk_class: "High" }), filters)).toBe(true);
    expect(passesRelationshipFilters(sampleInterval({ risk_class: "Low" }), filters)).toBe(false);
    expect(
      passesRelationshipFilters(sampleInterval({ risk_class: "High", matching_pay: false }), filters),
    ).toBe(false);
  });

  it("filters by selected flags", () => {
    const filters = {
      riskClasses: ["Elevated" as const, "High" as const, "Low" as const],
      payOnly: false,
      selectedFlags: ["ZOI"],
    };
    expect(passesRelationshipFilters(sampleInterval({ flags: ["ZOI"] }), filters)).toBe(true);
    expect(passesRelationshipFilters(sampleInterval({ flags: ["lowres"] }), filters)).toBe(false);
  });

  it("computes Pearson r for perfect positive correlation", () => {
    const xs = [1, 2, 3, 4];
    const ys = [2, 4, 6, 8];
    expect(computePearsonR(xs, ys)).toBeCloseTo(1, 5);
  });

  it("computes pooled linear regression", () => {
    const points = [
      { alias: "A", display: "A", depth: 1, x: 1, y: 2 },
      { alias: "A", display: "A", depth: 2, x: 2, y: 4 },
      { alias: "B", display: "B", depth: 3, x: 3, y: 6 },
    ];
    const regression = computeLinearRegression(points);
    expect(regression.n).toBe(3);
    expect(regression.pearsonR).toBeCloseTo(1, 5);
    expect(regression.rSquared).toBeCloseTo(1, 5);
    expect(regression.slope).toBeCloseTo(2, 5);
    expect(regression.intercept).toBeCloseTo(0, 5);
    expect(formatRegressionEquation(regression, "Y", "X")).toContain("Y =");
  });

  it("builds scatter points dropping null axes", () => {
    const intervals = [
      sampleInterval({ RQI: 0.5, log: { avg_GR: 80 } }),
      sampleInterval({ RQI: null, log: { avg_GR: 70 } }),
    ];
    const points = buildScatterPoints(
      { JENA31: { display: "JENA 31", intervals } },
      ["JENA31"],
      "avg_GR",
      "RQI",
      {
        riskClasses: ["Elevated", "High", "Low"],
        payOnly: false,
        selectedFlags: [],
      },
    );
    expect(points).toHaveLength(1);
    expect(points[0]?.x).toBe(80);
  });

  it("returns regression line endpoints", () => {
    const regression = computeLinearRegression([
      { alias: "A", display: "A", depth: 1, x: 0, y: 1 },
      { alias: "A", display: "A", depth: 2, x: 2, y: 5 },
    ]);
    const line = regressionLinePoints(regression, 0, 2);
    expect(line).toHaveLength(2);
    expect(line[0]?.y).toBeCloseTo(1, 3);
    expect(line[1]?.y).toBeCloseTo(5, 3);
  });

  it("filterIntervals returns matching subset", () => {
    const intervals = [
      sampleInterval({ risk_class: "High" }),
      sampleInterval({ risk_class: "Low" }),
    ];
    const filtered = filterIntervals(intervals, {
      riskClasses: ["High"],
      payOnly: false,
      selectedFlags: [],
    });
    expect(filtered).toHaveLength(1);
    expect(filtered[0]?.risk_class).toBe("High");
  });

  it("reads MD from interval depth", () => {
    const intervals = [
      sampleInterval({ depth: 2510.5 }),
    ];
    const points = buildScatterPoints(
      { JENA31: { display: "JENA 31", intervals } },
      ["JENA31"],
      "depth",
      "RQI",
      {
        riskClasses: ["Elevated", "High", "Low"],
        payOnly: false,
        selectedFlags: [],
      },
    );
    expect(points).toHaveLength(1);
    expect(points[0]?.x).toBe(2510.5);
  });

  it("computes axis extent with padding", () => {
    const extent = computeAxisExtent([10, 20, 30]);
    expect(extent.min).toBeLessThan(10);
    expect(extent.max).toBeGreaterThan(30);
  });

  it("clamps axis range within data extent", () => {
    const extent = { min: 0, max: 100 };
    const clamped = clampAxisRange({ min: -10, max: 150 }, extent);
    expect(clamped.min).toBeGreaterThanOrEqual(0);
    expect(clamped.max).toBeLessThanOrEqual(100);
  });
});
