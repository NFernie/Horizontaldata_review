import { describe, expect, it } from "vitest";
import {
  computeConcernStats,
  formatAnalogBullet,
  formatConcernBullet,
  isConcernInterval,
} from "@/lib/concernZones";
import type { IntervalRecord } from "@/types/intervals";

function iv(risk: "Elevated" | "High" | "Low", isolated = false): IntervalRecord {
  return {
    depth: 2100,
    top: 2097.5,
    bot: 2102.5,
    pct_ss: 50,
    grain: "f",
    grain_ordinal: 2,
    poro_class: null,
    fluor: 80,
    log: null,
    RQI: 0.5,
    WRCI: 50,
    risk_class: risk,
    flags: [],
    isolated,
    z_scores: {},
    anomalies: [],
  };
}

describe("isConcernInterval", () => {
  it("flags Elevated and High", () => {
    expect(isConcernInterval(iv("Elevated"))).toBe(true);
    expect(isConcernInterval(iv("High"))).toBe(true);
    expect(isConcernInterval(iv("Low"))).toBe(false);
  });
});

describe("computeConcernStats", () => {
  it("counts risk classes and isolation split", () => {
    const stats = computeConcernStats([
      iv("Elevated"),
      iv("Elevated", true),
      iv("High"),
      iv("Low"),
    ]);
    expect(stats.elevated).toBe(2);
    expect(stats.high).toBe(1);
    expect(stats.isolatedConcerns).toBe(1);
    expect(stats.nonIsolatedConcerns).toBe(2);
    expect(stats.totalConcerns).toBe(3);
  });
});

describe("formatConcernBullet", () => {
  it("includes isolation note when none on file", () => {
    const text = formatConcernBullet("JENA 31", computeConcernStats([iv("Elevated")]), false);
    expect(text).toContain("no mechanical isolation on file");
  });
});

describe("formatAnalogBullet", () => {
  it("includes jaccard score", () => {
    const text = formatAnalogBullet("STIMPEE 7", 1, computeConcernStats([]), false);
    expect(text).toContain("J=1.00");
    expect(text).toContain("no concern zones");
  });
});
