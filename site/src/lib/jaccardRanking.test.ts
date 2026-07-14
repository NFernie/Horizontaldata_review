import { describe, expect, it } from "vitest";
import { getJaccardScore, rankJaccardAnalogs, topJaccardAnalog } from "@/lib/jaccardRanking";
import type { JaccardPayload } from "@/types/stats";

const miniPayload: JaccardPayload = {
  aliases: ["JENA31", "STIMPEE7", "BIALA19"],
  feature_vocabulary: [],
  presence_pct: 10,
  feature_sets: {},
  matrix: [
    [1, 1, 0.5],
    [1, 1, 0.3],
    [0.5, 0.3, 1],
  ],
  depth_binned_matrix: [],
  jena_analog_ranking: {},
};

describe("rankJaccardAnalogs", () => {
  it("excludes focus well and sorts by score", () => {
    const ranks = rankJaccardAnalogs("JENA31", miniPayload);
    expect(ranks.map((r) => r.alias)).toEqual(["STIMPEE7", "BIALA19"]);
    expect(ranks[0]?.jaccard).toBe(1);
  });

  it("returns empty for unknown focus", () => {
    expect(rankJaccardAnalogs("UNKNOWN", miniPayload)).toEqual([]);
  });
});

describe("topJaccardAnalog", () => {
  it("returns highest-ranked analog", () => {
    expect(topJaccardAnalog("JENA31", miniPayload)).toBe("STIMPEE7");
  });
});

describe("getJaccardScore", () => {
  it("reads matrix score for pair", () => {
    expect(getJaccardScore("JENA31", "BIALA19", miniPayload)).toBe(0.5);
  });
});
