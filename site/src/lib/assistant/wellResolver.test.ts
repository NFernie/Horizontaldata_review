import { describe, expect, it } from "vitest";
import type { CorpusWellEntry } from "@/types/corpus";
import { resolveWell } from "./wellResolver";

const TEST_WELLS: CorpusWellEntry[] = [
  {
    alias: "JENA31",
    display: "JENA 31",
    depth_min: 2255,
    depth_max: 3390,
    interval_count: 197,
    sources: {
      interpretation: "output/JENA31_McKinlay_Cuttings_Interpretation.md",
      pay_summary: "output/JENA 31/pay-summary.md",
      process_summary: "output/JENA31_Process_Summary.md",
    },
  },
  {
    alias: "JENA31DW1",
    display: "JENA 31DW1",
    depth_min: 2070,
    depth_max: 3658,
    interval_count: 165,
    sources: {
      interpretation: "output/JENA31DW1_McKinlay_Cuttings_Interpretation.md",
      pay_summary: "output/JENA 31DW1/pay-summary.md",
      process_summary: "output/JENA31DW1_Process_Summary.md",
    },
  },
];

describe("resolveWell", () => {
  it("resolves display name Jena 31", () => {
    expect(resolveWell("cuttings at 2500m in Jena 31", TEST_WELLS)?.alias).toBe("JENA31");
  });

  it("resolves Jena 31DW1 before Jena 31", () => {
    expect(resolveWell("pay summary Jena 31DW1", TEST_WELLS)?.alias).toBe("JENA31DW1");
  });

  it("resolves alias abbreviations", () => {
    expect(resolveWell("stats for j31", TEST_WELLS)?.alias).toBe("JENA31");
  });

  it("resolves shorthand jena to Jena 31", () => {
    expect(resolveWell("loose grains jena 2500", TEST_WELLS)?.alias).toBe("JENA31");
  });
});
