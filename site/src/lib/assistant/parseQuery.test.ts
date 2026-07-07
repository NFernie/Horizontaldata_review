import { describe, expect, it } from "vitest";
import type { CorpusWellEntry } from "@/types/corpus";
import { parseQuery } from "./parseQuery";

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

describe("parseQuery", () => {
  it("parses interval cuttings lookup with well and depth", () => {
    const parsed = parseQuery("cuttings at 2500m in Jena 31", TEST_WELLS);
    expect(parsed.intent).toBe("INTERVAL_LOOKUP");
    expect(parsed.alias).toBe("JENA31");
    expect(parsed.depth).toBe(2500);
  });

  it("parses WRCI methodology lookup", () => {
    const parsed = parseQuery("how is WRCI calculated", TEST_WELLS);
    expect(parsed.intent).toBe("METHOD_LOOKUP");
    expect(parsed.methodKey).toBe("wrci");
  });

  it("parses pay summary lookup for Jena 31DW1", () => {
    const parsed = parseQuery("pay summary Jena 31DW1", TEST_WELLS);
    expect(parsed.intent).toBe("SUMMARY_LOOKUP");
    expect(parsed.alias).toBe("JENA31DW1");
    expect(parsed.summaryType).toBe("pay_summary");
  });

  it("parses loose-grain interval filter with shorthand well and trailing depth", () => {
    const parsed = parseQuery("loose grains jena 2500", TEST_WELLS);
    expect(parsed.intent).toBe("INTERVAL_FILTER");
    expect(parsed.alias).toBe("JENA31");
    expect(parsed.depth).toBe(2500);
    expect(parsed.filter?.looseGrains).toBe(true);
  });

  it("parses RQI threshold filter on a well", () => {
    const parsed = parseQuery("rqi > 0.6 in Jena 31", TEST_WELLS);
    expect(parsed.intent).toBe("INTERVAL_FILTER");
    expect(parsed.alias).toBe("JENA31");
    expect(parsed.filter?.minRqi).toBe(0.6);
  });
});
