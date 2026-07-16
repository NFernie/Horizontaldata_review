import { describe, expect, it } from "vitest";
import { rankKsAnalogs } from "./ksRanking";
import type { KsPayload } from "@/types/stats";

const cell = (D: number, p_value: number) => ({ D, p_value });

const miniKs: KsPayload = {
  JENA31: {
    vs_analogs: {
      JENA31DW1: {
        pct_ss: cell(0.1, 0.9),
        WRCI: cell(0.5, 0.1),
      },
      JENA31_DUAL: {
        pct_ss: cell(0.2, 0.8),
        WRCI: cell(0.4, 0.2),
      },
      HOBBES5: {
        pct_ss: cell(0.05, 0.95),
        grain_ordinal: cell(0.1, 0.85),
        WRCI: cell(0.1, 0.9),
      },
      BIALA20: {
        pct_ss: cell(0.2, 0.7),
        WRCI: cell(0.3, 0.6),
      },
      STIMPEE7: {
        pct_ss: cell(0.15, 0.75),
        WRCI: cell(0.2, 0.02),
      },
    },
    vs_portfolio: {
      pct_ss: cell(0.3, 0.01),
    },
  },
  JENA31DW1: {
    vs_analogs: {
      JENA31: {
        pct_ss: cell(0.1, 0.9),
      },
      FROSTILLICUS2: {
        pct_ss: cell(0.05, 0.99),
        WRCI: cell(0.1, 0.95),
      },
      STIMPEE6: {
        pct_ss: cell(0.2, 0.5),
      },
    },
    vs_portfolio: {},
  },
};

const JENA_EXCLUDE = ["JENA31", "JENA31DW1", "JENA31_DUAL"] as const;

describe("rankKsAnalogs", () => {
  it("excludes all Jena wells from analog pool", () => {
    const ranked = rankKsAnalogs(miniKs, "JENA31", JENA_EXCLUDE);
    expect(ranked.map((r) => r.alias)).not.toContain("JENA31");
    expect(ranked.map((r) => r.alias)).not.toContain("JENA31DW1");
    expect(ranked.map((r) => r.alias)).not.toContain("JENA31_DUAL");
  });

  it("sorts by descending mean_p", () => {
    const ranked = rankKsAnalogs(miniKs, "JENA31", JENA_EXCLUDE);
    expect(ranked[0]?.alias).toBe("HOBBES5");
    expect(ranked[0]!.meanP).toBeGreaterThan(ranked[1]!.meanP);
  });

  it("assigns 1-based ranks", () => {
    const ranked = rankKsAnalogs(miniKs, "JENA31", JENA_EXCLUDE);
    expect(ranked[0]?.rank).toBe(1);
    expect(ranked[1]?.rank).toBe(2);
  });

  it("produces different top analog for JENA31DW1 vs JENA31", () => {
    const jena31 = rankKsAnalogs(miniKs, "JENA31", JENA_EXCLUDE)[0]?.alias;
    const jena31dw1 = rankKsAnalogs(miniKs, "JENA31DW1", JENA_EXCLUDE)[0]?.alias;
    expect(jena31).toBe("HOBBES5");
    expect(jena31dw1).toBe("FROSTILLICUS2");
    expect(jena31).not.toBe(jena31dw1);
  });

  it("counts significant differences in sigCount", () => {
    const hobbes = rankKsAnalogs(miniKs, "JENA31", JENA_EXCLUDE).find(
      (r) => r.alias === "HOBBES5",
    );
    expect(hobbes?.sigCount).toBe(0);
    const stimpee = rankKsAnalogs(miniKs, "JENA31", JENA_EXCLUDE).find(
      (r) => r.alias === "STIMPEE7",
    );
    expect(stimpee?.sigCount).toBe(1);
  });

  it("returns empty for unknown focus", () => {
    expect(rankKsAnalogs(miniKs, "UNKNOWN", JENA_EXCLUDE)).toEqual([]);
  });
});

describe("rankKsAnalogs live ordering", () => {
  it("matches expected top analogs from exported ks.json", async () => {
    const { readFileSync } = await import("node:fs");
    const { resolve } = await import("node:path");
    const ks = JSON.parse(
      readFileSync(resolve(process.cwd(), "public/data/stats/ks.json"), "utf8"),
    ) as KsPayload;

    const ranked = rankKsAnalogs(ks, "JENA31", JENA_EXCLUDE);
    expect(ranked[0]?.alias).toBe("HOBBES5");
    expect(ranked[7]?.alias).toBe("MCKINLAY14");

    const dw1 = rankKsAnalogs(ks, "JENA31DW1", JENA_EXCLUDE);
    expect(dw1[0]?.alias).toBe("FROSTILLICUS2");

    const dual = rankKsAnalogs(ks, "JENA31_DUAL", JENA_EXCLUDE);
    expect(dual[0]?.alias).toBe("STIMPEE6");
    expect(dual.length).toBeGreaterThan(8);
  });
});
