import { describe, expect, it } from "vitest";
import { getCosineScore, rankClusterAnalogs, topClusterAnalog } from "@/lib/clusterAnalogs";
import type { ClustersPayload } from "@/types/stats";

const miniClusters: ClustersPayload = {
  aliases: ["JENA31", "STIMPEE6", "GRANCHIO4"],
  features: [],
  feature_means: [],
  feature_stds: [],
  cosine_similarity: [
    [1, 0.75, 0.69],
    [0.75, 1, 0.5],
    [0.69, 0.5, 1],
  ],
  euclidean_distance: [],
  linkage: [],
  cluster_ids: {},
};

describe("rankClusterAnalogs", () => {
  it("excludes focus and sorts by cosine", () => {
    const ranks = rankClusterAnalogs("JENA31", miniClusters);
    expect(ranks.map((r) => r.alias)).toEqual(["STIMPEE6", "GRANCHIO4"]);
    expect(ranks[0]?.cosine).toBe(0.75);
  });
});

describe("topClusterAnalog", () => {
  it("returns highest cosine analog", () => {
    expect(topClusterAnalog("JENA31", miniClusters)).toBe("STIMPEE6");
  });
});

describe("getCosineScore", () => {
  it("reads matrix score", () => {
    expect(getCosineScore("JENA31", "GRANCHIO4", miniClusters)).toBe(0.69);
  });
});
