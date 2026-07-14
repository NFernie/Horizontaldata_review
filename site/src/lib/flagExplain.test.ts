import { describe, expect, it } from "vitest";
import {
  buildRiskExplanation,
  evidenceFromZone,
  explainFlag,
  explainInterval,
} from "./flagExplain";
import type { IntervalRecord } from "@/types/intervals";

const baseInterval = (overrides: Partial<IntervalRecord> = {}): IntervalRecord => ({
  depth: 2500,
  top: 2497.5,
  bot: 2502.5,
  pct_ss: 100,
  grain: "silt",
  grain_ordinal: 0,
  poro_class: "gd",
  fluor: 100,
  log: { avg_GR: 65.58, avg_RES_DEEP: 22.92 },
  matching_pay: true,
  RQI: 0.6568,
  WRCI: 46.27,
  risk_class: "High",
  flags: ["low_GR", "owc_high"],
  mTVDss: -1194.21,
  hafwl_m: 3.79,
  owc_distance_m: 3.79,
  owc_near: "High",
  isolated: false,
  z_scores: {},
  anomalies: [],
  ...overrides,
});

describe("flagExplain", () => {
  it("explains owc_high with distance and RQI", () => {
    const ev = evidenceFromZone({
      depth: 2500,
      top: 2497.5,
      bot: 2502.5,
      WRCI: 46.27,
      RQI: 0.6568,
      risk_class: "High",
      flags: ["owc_high"],
      evidence: {
        pct_ss: 100,
        grain_ordinal: 0,
        poro_class: "gd",
        hardness_score: 0.3,
        fluor: 100,
        avg_GR: 65.58,
        avg_RES_DEEP: 22.92,
        mTVDss: -1194.21,
        hafwl_m: 3.79,
        owc_distance_m: 3.79,
        owc_near: "High",
        isolated: false,
      },
    });
    const line = explainFlag("owc_high", ev);
    expect(line).toContain("OWC proximity");
    expect(line).toContain("3.8");
    expect(line).toContain("good rock");
  });

  it("builds interval explanation at 2500 m MD", () => {
    const explain = explainInterval(baseInterval());
    expect(explain.depthLabel).toContain("2500");
    expect(explain.riskClass).toBe("High");
    expect(explain.flagLines.length).toBeGreaterThanOrEqual(2);
  });

  it("notes OWC High suppression when RES_DEEP > 30", () => {
    const explain = buildRiskExplanation(2600, 2597.5, 2602.5, {
      RQI: 0.7,
      WRCI: 65,
      risk_class: "Elevated",
      flags: ["owc_high", "lowres", "lowfluor"],
      avg_RES_DEEP: 35,
      owc_near: "High",
      owc_distance_m: 3,
    });
    expect(explain.owcSuppressedHigh).toBe(true);
    expect(explain.ruleSummary).toContain("30");
  });
});
