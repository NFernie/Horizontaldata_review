import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { Dendrogram } from "@/components/Dendrogram";
import { JaccardHeatmap } from "@/components/JaccardHeatmap";
import { KsGrid } from "@/components/KsGrid";
import { Legend } from "@/components/Legend";
import { StatTile } from "@/components/StatTile";
import { KS_FOCUS_ALIASES, JACCARD_PRESENCE_PCT } from "@/config";
import { pageStateKey, usePersistedState, useScrollRestore } from "@/hooks/usePageState";
import { fetchJson } from "@/lib/utils";
import type { ClustersPayload, JaccardPayload, KsPayload } from "@/types/stats";

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

  useEffect(() => {
    Promise.all([
      fetchJson<JaccardPayload>("data/stats/jaccard.json"),
      fetchJson<ClustersPayload>("data/stats/clusters.json"),
      fetchJson<KsPayload>("data/stats/ks.json"),
    ])
      .then(([j, c, k]) => {
        setJaccard(j);
        setClusters(c);
        setKs(k);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const analogAliases = useMemo(() => {
    if (!jaccard) return [];
    return jaccard.aliases.filter((a) => !KS_FOCUS_ALIASES.includes(a as (typeof KS_FOCUS_ALIASES)[number]));
  }, [jaccard]);

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
        <Dendrogram
          aliases={clusters.aliases}
          linkage={clusters.linkage}
          clusterIds={clusters.cluster_ids}
        />
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Object.entries(clusters.cluster_ids).slice(0, 8).map(([alias, cid]) => (
            <StatTile key={alias} label={alias.replace("MCKINLAY", "MCK")} value={`C${cid}`} />
          ))}
        </div>
      </Card>

      {KS_FOCUS_ALIASES.map((focus) => (
        <Card key={focus} title={`KS significance — ${focus}`} description="D-statistic and p-value per property">
          <KsGrid data={ks} focusAlias={focus} analogAliases={analogAliases.slice(0, 8)} />
        </Card>
      ))}
    </div>
  );
}
