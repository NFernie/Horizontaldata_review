import { useEffect, useMemo, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Card } from "@/components/Card";
import { CorrelationMatrix } from "@/components/CorrelationMatrix";
import { DataTable, type DataTableColumn } from "@/components/DataTable";
import { Legend } from "@/components/Legend";
import { MetricCell } from "@/components/MetricCell";
import { RiskBadge } from "@/components/RiskBadge";
import { WellSelect } from "@/components/WellSelect";
import { JENA31_DUAL_ALIAS } from "@/config";
import { useScrollRestore } from "@/hooks/usePageState";
import { useWells } from "@/hooks/useWells";
import { readStoredWell, writeStoredWell } from "@/hooks/useWellSelection";
import { fetchJson, formatDepthMd, formatNumber } from "@/lib/utils";
import type { CorrelationsPayload } from "@/types/correlations";
import type { IntervalRecord, IntervalsPayload } from "@/types/intervals";

export function IntraWellStats() {
  const { alias: routeAlias } = useParams<{ alias: string }>();
  useScrollRestore();
  const { activeWells, loading: wellsLoading } = useWells();
  const [alias, setAlias] = useState(() => routeAlias ?? readStoredWell("JENA31"));
  const [intervals, setIntervals] = useState<IntervalsPayload | null>(null);
  const [correlations, setCorrelations] = useState<CorrelationsPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (routeAlias) {
      setAlias(routeAlias);
      writeStoredWell(routeAlias);
    }
  }, [routeAlias]);

  useEffect(() => {
    fetchJson<CorrelationsPayload>("data/stats/correlations.json")
      .then(setCorrelations)
      .catch((err: Error) => setError(err.message));
  }, []);

  useEffect(() => {
    if (!alias) return;
    setLoading(true);
    fetchJson<IntervalsPayload>(`data/intervals/${alias}.json`)
      .then(setIntervals)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [alias]);

  const anomalies = useMemo(
    () => (intervals?.intervals ?? []).filter((iv) => iv.anomalies.length > 0),
    [intervals],
  );

  const anomalyColumns: DataTableColumn<IntervalRecord>[] = useMemo(
    () => [
      {
        key: "depth",
        header: "Depth (MD · TVDss)",
        align: "right",
        mono: true,
        render: (r) => formatDepthMd(r.depth, r.mTVDss, 0),
      },
      {
        key: "anomalies",
        header: "Anomalous metrics",
        render: (r) => (
          <div className="flex flex-wrap gap-1">
            {r.anomalies.map((m) => (
              <span
                key={m}
                className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs font-mono"
              >
                {m} (z={formatNumber(r.z_scores[m], 2)})
              </span>
            ))}
          </div>
        ),
      },
      {
        key: "wrci",
        header: "WRCI",
        align: "right",
        render: (r) => <MetricCell metric="wrci" value={r.WRCI} />,
      },
      {
        key: "risk",
        header: "Risk",
        align: "center",
        render: (r) => <RiskBadge risk={r.risk_class} />,
      },
    ],
    [],
  );

  const wellCorr = correlations?.[alias];

  if (wellsLoading || loading) {
    return <p className="text-text-muted">Loading intra-well statistics…</p>;
  }

  if (routeAlias === JENA31_DUAL_ALIAS || alias === JENA31_DUAL_ALIAS) {
    return <Navigate to="/intra/JENA31" replace />;
  }

  if (error) {
    return (
      <Card title="Unable to load statistics">
        <p className="text-risk-high">{error}</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-text sm:text-2xl">Intra-well Statistics</h1>
          <p className="mt-1 text-sm text-text-muted">
            Spearman correlations and robust z-score anomalies within a single well.
          </p>
        </div>
        <WellSelect
          wells={activeWells}
          value={alias}
          onChange={(next) => {
            setAlias(next);
            writeStoredWell(next);
          }}
          label="Well"
          className="w-full sm:w-56"
        />
      </header>

      <Card
        title="Spearman correlation matrix"
        description="Rank correlations between petrophysical variables (§1.3)"
      >
        {wellCorr ? (
          <>
            <CorrelationMatrix data={wellCorr} />
            <Legend
              className="mt-4"
              title="Correlation scale"
              items={[
                { label: "ρ ≈ +1", color: "var(--risk-low)" },
                { label: "ρ ≈ 0", color: "var(--surface-2)" },
                { label: "ρ ≈ −1", color: "var(--risk-high)" },
              ]}
            />
          </>
        ) : (
          <p className="text-text-muted">No correlation data for this well.</p>
        )}
      </Card>

      <Card
        title="Z-score anomalies"
        description={`Intervals with |z| > 3.5 on any metric (${anomalies.length} found)`}
      >
        <DataTable
          columns={anomalyColumns}
          rows={anomalies}
          rowKey={(r) => String(r.depth)}
          emptyMessage="No statistically anomalous intervals in this well."
          caption={`${intervals?.display ?? alias} anomaly list`}
          stickyFirstColumn
          scrollMaxHeight="60vh"
        />
      </Card>
    </div>
  );
}
