import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { ClusterAnalogCards, ClusterAssignmentTable } from "@/components/ClusterAnalogCards";
import { Dendrogram } from "@/components/Dendrogram";
import { JaccardHeatmap } from "@/components/JaccardHeatmap";
import { KsGrid } from "@/components/KsGrid";
import { Legend } from "@/components/Legend";
import { JENA31_DUAL_ALIAS, KS_FOCUS_ALIASES, JACCARD_PRESENCE_PCT } from "@/config";
import { pageStateKey, usePersistedState, useScrollRestore } from "@/hooks/usePageState";
import { fetchJson } from "@/lib/utils";
import type { ClustersPayload, JaccardPayload, KsPayload } from "@/types/stats";
import type { WellsPayload } from "@/types/wells";

const CLUSTER_FOCUS = [...KS_FOCUS_ALIASES, JENA31_DUAL_ALIAS] as const;

export function CompareInterWell() {
  useScrollRestore();
  const [matrixMode, setMatrixMode] = usePersistedState<"feature" | "depth">(
    pageStateKey("/compare", "matrixMode"),
    "feature",
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [jaccard, setJaccard] = useState<JaccardPayload | null>(null);
  const [clusters, setClusters] = useState<ClustersPayload | null>(null);
  const [ks, setKs] = useState<KsPayload | null>(null);
  const [wellsPayload, setWellsPayload] = useState<WellsPayload | null>(null);

  useEffect(() => {
    Promise.all([
      fetchJson<JaccardPayload>("data/stats/jaccard.json"),
      fetchJson<ClustersPayload>("data/stats/clusters.json"),
      fetchJson<KsPayload>("data/stats/ks.json"),
      fetchJson<WellsPayload>("data/wells.json"),
    ])
      .then(([j, c, k, w]) => {
        setJaccard(j);
        setClusters(c);
        setKs(k);
        setWellsPayload(w);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const analogAliases = useMemo(() => {
    if (!jaccard) return [];
    return jaccard.aliases.filter((a) => !KS_FOCUS_ALIASES.includes(a as (typeof KS_FOCUS_ALIASES)[number]));
  }, [jaccard]);

  const displayNames = useMemo(() => {
    const map: Record<string, string> = {};
    for (const w of wellsPayload?.wells ?? []) {
      map[w.alias] = w.display;
    }
    return map;
  }, [wellsPayload]);

  if (loading) return <p className="text-text-muted">Loading inter-well comparison data…</p>;

  if (error || !jaccard || !clusters || !ks) {
    return (
      <Card title="Unable to load comparison data">
        <p className="text-risk-high">{error ?? "Missing stats JSON"}</p>
      </Card>
    );
  }

  const matrix = matrixMode === "feature" ? jaccard.matrix : jaccard.depth_binned_matrix;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold text-text sm:text-2xl">Inter-well Comparison</h1>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          Jaccard similarity on binary feature sets (§1.4), hierarchical clustering (§1.5), and
          Kolmogorov–Smirnov significance tests for Jena wells vs analogs.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {KS_FOCUS_ALIASES.map((focus) => (
          <Card
            key={focus}
            title={`${focus} — top analog wells`}
            description="Ranked by Jaccard similarity on feature-set presence"
          >
            <ol className="space-y-2">
              {(jaccard.jena_analog_ranking[focus] ?? []).map((item, idx) => (
                <li
                  key={item.alias}
                  className="flex items-center justify-between rounded-card border border-border bg-surface-2 px-3 py-2 text-sm"
                >
                  <span>
                    <span className="mr-2 font-mono text-text-muted">{idx + 1}.</span>
                    <span className="font-medium text-text">{item.alias}</span>
                  </span>
                  <span className="font-mono text-accent">J = {item.jaccard.toFixed(3)}</span>
                </li>
              ))}
            </ol>
          </Card>
        ))}
      </div>

      <Card
        title="Jaccard similarity matrix"
        description={`Feature presence ≥ ${JACCARD_PRESENCE_PCT}% of intervals per well`}
      >
        <div
          className="mb-4 flex gap-2"
          role="tablist"
          aria-label="Jaccard matrix mode"
        >
          <button
            type="button"
            role="tab"
            aria-selected={matrixMode === "feature"}
            onClick={() => setMatrixMode("feature")}
            className={`cursor-pointer rounded-card border px-3 py-1.5 text-sm transition-colors ${
              matrixMode === "feature"
                ? "border-accent bg-surface-2 text-accent"
                : "border-border text-text-muted hover:text-text"
            }`}
          >
            Feature sets
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={matrixMode === "depth"}
            onClick={() => setMatrixMode("depth")}
            className={`cursor-pointer rounded-card border px-3 py-1.5 text-sm transition-colors ${
              matrixMode === "depth"
                ? "border-accent bg-surface-2 text-accent"
                : "border-border text-text-muted hover:text-text"
            }`}
          >
            Depth-binned (20 bins)
          </button>
        </div>
        <JaccardHeatmap aliases={jaccard.aliases} matrix={matrix} />
        <Legend
          className="mt-4"
          title="Jaccard scale"
          items={[
            { label: "J = 0", color: "var(--surface)" },
            { label: "J = 0.5", color: "color-mix(in srgb, var(--accent) 50%, var(--surface))" },
            { label: "J = 1", color: "var(--accent)" },
          ]}
        />
      </Card>

      <Card title="Hierarchical clustering" description="Ward linkage on standardized well feature vectors">
        <ClusterAnalogCards
          clusters={clusters}
          focusAliases={[...CLUSTER_FOCUS]}
          displayNames={displayNames}
          className="mb-6"
        />
        <Dendrogram
          aliases={clusters.aliases}
          linkage={clusters.linkage}
          clusterIds={clusters.cluster_ids}
          cosineSimilarity={clusters.cosine_similarity}
          displayNames={displayNames}
        />
        <h3 className="mb-2 mt-6 text-sm font-semibold text-text">Cluster assignments</h3>
        <ClusterAssignmentTable
          aliases={clusters.aliases}
          clusterIds={clusters.cluster_ids}
          displayNames={displayNames}
        />
      </Card>

      {KS_FOCUS_ALIASES.map((focus) => (
        <Card key={focus} title={`KS significance — ${focus}`} description="D-statistic and p-value per property">
          <KsGrid data={ks} focusAlias={focus} analogAliases={analogAliases.slice(0, 8)} />
        </Card>
      ))}
    </div>
  );
}
