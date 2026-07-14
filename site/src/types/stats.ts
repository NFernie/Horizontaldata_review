export interface JaccardPayload {
  aliases: string[];
  feature_vocabulary: string[];
  presence_pct: number;
  feature_sets: Record<string, string[]>;
  matrix: number[][];
  depth_binned_matrix: number[][];
  jena_analog_ranking: Record<string, Array<{ alias: string; jaccard: number }>>;
}

export interface ClustersPayload {
  aliases: string[];
  features: string[];
  feature_means: number[];
  feature_stds: number[];
  cosine_similarity: number[][];
  euclidean_distance: number[][];
  linkage: number[][];
  cluster_ids: Record<string, number>;
}

export interface ClusterAnalogRankEntry {
  alias: string;
  cosine: number;
}

export type ClusterAnalogRankingPayload = Record<string, ClusterAnalogRankEntry[]>;

export interface KsResult {
  D: number;
  p_value: number;
}

export type KsPayload = Record<
  string,
  {
    vs_analogs: Record<string, Record<string, KsResult>>;
    vs_portfolio: Record<string, KsResult>;
  }
>;
