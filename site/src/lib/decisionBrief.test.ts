import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { buildDecisionBrief } from "@/lib/decisionBrief";
import type { ClustersPayload, JaccardPayload, KsPayload } from "@/types/stats";
import type { WaterRiskPayload } from "@/types/waterRisk";
import type { WellsPayload } from "@/types/wells";

const dataRoot = resolve(__dirname, "../../public/data");

function loadJson<T>(path: string): T {
  return JSON.parse(readFileSync(resolve(dataRoot, path), "utf8")) as T;
}

describe("buildDecisionBrief", () => {
  it("populates three questions from exported site data", () => {
    const wells = loadJson<WellsPayload>("wells.json");
    const waterRisk = {
      JENA31: loadJson<WaterRiskPayload>("water_risk/JENA31.json"),
      JENA31DW1: loadJson<WaterRiskPayload>("water_risk/JENA31DW1.json"),
      JENA31_DUAL: loadJson<WaterRiskPayload>("water_risk/JENA31_DUAL.json"),
    };
    const jaccard = loadJson<JaccardPayload>("stats/jaccard.json");
    const ks = loadJson<KsPayload>("stats/ks.json");
    const clusters = loadJson<ClustersPayload>("stats/clusters.json");

    const brief = buildDecisionBrief({ wells, waterRisk, jaccard, ks, clusters });

    expect(brief.questions).toHaveLength(3);
    expect(brief.jaccardFeature).toBeCloseTo(0.5, 2);
    expect(brief.burden.JENA31.openElevatedHigh).toBe(61);
    expect(brief.burden.JENA31DW1.openElevatedHigh).toBe(18);
    expect(brief.wsoByLateral.JENA31[0]?.tier).toBe("A");
    expect(brief.ksTopAnalog.JENA31?.alias).toBe("HOBBES5");
    expect(brief.ksTopAnalog.JENA31DW1?.alias).toBe("FROSTILLICUS2");
  });
});
