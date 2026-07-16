import { describe, expect, it } from "vitest";
import { scoreWsoZone, rankWsoCandidates } from "@/lib/wsoCandidates";
import type { FlaggedZone } from "@/types/waterRisk";

function zone(overrides: Partial<FlaggedZone> & Pick<FlaggedZone, "risk_class">): FlaggedZone {
  return {
    depth: 2500,
    top: 2497.5,
    bot: 2502.5,
    WRCI: 40,
    RQI: 0.4,
    flags: [],
    evidence: {
      pct_ss: null,
      grain_ordinal: null,
      poro_class: null,
      hardness_score: null,
      fluor: null,
      avg_GR: null,
      avg_RES_DEEP: null,
      mTVDss: -2100,
      hafwl_m: null,
      owc_distance_m: 5,
      owc_near: null,
      isolated: false,
    },
    ...overrides,
  };
}

describe("scoreWsoZone", () => {
  it("deprioritises isolated zones", () => {
    const result = scoreWsoZone(zone({ risk_class: "High", isolated: true }));
    expect(result.tier).toBe("C");
    expect(result.score).toBe(0);
  });

  it("promotes High + OWC High to Tier A", () => {
    const result = scoreWsoZone(
      zone({
        risk_class: "High",
        WRCI: 52,
        flags: ["owc_high", "ZOI"],
        evidence: {
          ...zone({ risk_class: "High" }).evidence,
          owc_near: "High",
        },
      }),
    );
    expect(result.tier).toBe("A");
    expect(result.score).toBeGreaterThanOrEqual(55);
  });

  it("assigns Elevated OWC-proximate open zones to Tier B", () => {
    const result = scoreWsoZone(
      zone({
        risk_class: "Elevated",
        flags: ["owc_elevated"],
        evidence: {
          ...zone({ risk_class: "Elevated" }).evidence,
          owc_near: "Elevated",
        },
      }),
    );
    expect(result.tier).toBe("B");
  });
});

describe("rankWsoCandidates", () => {
  it("sorts by tier then score then depth", () => {
    const ranked = rankWsoCandidates("JENA31", "JENA 31", [
      zone({
        risk_class: "Elevated",
        top: 2400,
        bot: 2405,
        depth: 2402.5,
        flags: ["owc_elevated"],
        evidence: {
          ...zone({ risk_class: "Elevated" }).evidence,
          owc_near: "Elevated",
        },
      }),
      zone({
        risk_class: "High",
        top: 2500,
        bot: 2505,
        depth: 2502.5,
        flags: ["owc_high"],
        evidence: {
          ...zone({ risk_class: "High" }).evidence,
          owc_near: "High",
        },
      }),
    ]);
    expect(ranked).toHaveLength(2);
    expect(ranked[0]?.tier).toBe("A");
    expect(ranked[0]?.rank).toBe(1);
  });

  it("filters below min tier", () => {
    const ranked = rankWsoCandidates(
      "JENA31",
      "JENA 31",
      [zone({ risk_class: "Low" })],
      { minTier: "B" },
    );
    expect(ranked).toHaveLength(0);
  });
});
