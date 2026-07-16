import { useEffect, useState } from "react";
import { buildDecisionBrief, type DecisionBriefPayload } from "@/lib/decisionBrief";
import { fetchJson } from "@/lib/utils";
import type { ClustersPayload, JaccardPayload, KsPayload } from "@/types/stats";
import type { WaterRiskPayload } from "@/types/waterRisk";
import type { WellsPayload } from "@/types/wells";

export function useDecisionBrief(): {
  brief: DecisionBriefPayload | null;
  loading: boolean;
  error: string | null;
} {
  const [brief, setBrief] = useState<DecisionBriefPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetchJson<WellsPayload>("data/wells.json"),
      fetchJson<WaterRiskPayload>("data/water_risk/JENA31.json"),
      fetchJson<WaterRiskPayload>("data/water_risk/JENA31DW1.json"),
      fetchJson<WaterRiskPayload>("data/water_risk/JENA31_DUAL.json"),
      fetchJson<JaccardPayload>("data/stats/jaccard.json"),
      fetchJson<KsPayload>("data/stats/ks.json"),
      fetchJson<ClustersPayload>("data/stats/clusters.json"),
    ])
      .then(([wells, j31, jdw1, dual, jaccard, ks, clusters]) => {
        setBrief(
          buildDecisionBrief({
            wells,
            waterRisk: { JENA31: j31, JENA31DW1: jdw1, JENA31_DUAL: dual },
            jaccard,
            ks,
            clusters,
          }),
        );
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { brief, loading, error };
}
