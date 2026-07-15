import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { DataTable, type DataTableColumn } from "@/components/DataTable";
import { DepthTracks, nearestInterval } from "@/components/DepthTracks";
import { Legend } from "@/components/Legend";
import { MetricCell } from "@/components/MetricCell";
import { RiskExplainBadge, FlagExplainBadge } from "@/components/RiskExplainBadge";
import { WellSelect } from "@/components/WellSelect";
import { JENA31_DUAL_ALIAS } from "@/config";
import { useScrollRestore } from "@/hooks/usePageState";
import { useWells } from "@/hooks/useWells";
import { readStoredWell, writeStoredWell } from "@/hooks/useWellSelection";
import { fetchJson, formatHafwl, formatNumber, formatPercent } from "@/lib/utils";
import type { IntervalRecord, IntervalsPayload } from "@/types/intervals";
import type { ZonesPayload } from "@/types/zones";

export function WellDetail() {
  const { alias: routeAlias } = useParams<{ alias: string }>();
  useScrollRestore();
  const { activeWells, loading: wellsLoading } = useWells();
  const [alias, setAlias] = useState(() => routeAlias ?? readStoredWell("JENA31"));
  const [intervals, setIntervals] = useState<IntervalsPayload | null>(null);
  const [zones, setZones] = useState<ZonesPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [highlightRowKey, setHighlightRowKey] = useState<string | null>(null);

  useEffect(() => {
    if (routeAlias) {
      setAlias(routeAlias);
      writeStoredWell(routeAlias);
    }
  }, [routeAlias]);

  useEffect(() => {
    if (!alias) return;
    setLoading(true);
    setError(null);
    Promise.all([
      fetchJson<IntervalsPayload>(`data/intervals/${alias}.json`),
      fetchJson<ZonesPayload>(`data/zones/${alias}.json`),
    ])
      .then(([iv, zn]) => {
        setIntervals(iv);
        setZones(zn);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [alias]);

  const handleWellChange = (next: string) => {
    setAlias(next);
    writeStoredWell(next);
  };

  const handleDepthSelect = (md: number) => {
    if (!intervals?.intervals.length) return;
    const nearest = nearestInterval(intervals.intervals, md);
    if (nearest) setHighlightRowKey(String(nearest.depth));
  };

  const columns: DataTableColumn<IntervalRecord>[] = useMemo(
    () => [
      {
        key: "depth",
        header: "Depth (MD)",
        align: "right",
        mono: true,
        render: (r) => `${r.depth.toFixed(0)} m MD`,
      },
      {
        key: "mtvds",
        header: "mTVDss",
        align: "right",
        mono: true,
        render: (r) => formatNumber(r.mTVDss, 1),
      },
      {
        key: "hafwl",
        header: "HAFWL",
        align: "right",
        mono: true,
        render: (r) => formatHafwl(r.hafwl_m),
      },
      {
        key: "pct_ss",
        header: "%SS",
        align: "right",
        mono: true,
        render: (r) => formatPercent(r.pct_ss, 0),
      },
      {
        key: "grain",
        header: "Grain",
        render: (r) => r.grain ?? "—",
      },
      {
        key: "fluor",
        header: "Fluor",
        align: "right",
        mono: true,
        render: (r) => formatPercent(r.fluor, 0),
      },
      {
        key: "gr",
        header: "GR",
        align: "right",
        mono: true,
        render: (r) => formatNumber(r.log?.avg_GR, 1),
      },
      {
        key: "res",
        header: "RES D",
        align: "right",
        mono: true,
        render: (r) => formatNumber(r.log?.avg_RES_DEEP, 1),
      },
      {
        key: "rqi",
        header: "RQI",
        align: "right",
        render: (r) => <MetricCell metric="rqi" value={r.RQI} />,
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
        render: (r) => <RiskExplainBadge interval={r} />,
      },
      {
        key: "isolated",
        header: "Isolated",
        align: "center",
        render: (r) =>
          r.isolated ? (
            <span className="rounded px-1.5 py-0.5 text-xs font-medium text-emerald-400">Yes</span>
          ) : (
            <span className="text-text-muted">—</span>
          ),
      },
      {
        key: "flags",
        header: "Flags",
        render: (r) => (
          <div className="flex flex-wrap gap-1">
            {(r.flags ?? []).map((f) => (
              <FlagExplainBadge key={f} flag={f} interval={r} />
            ))}
            {!r.flags?.length ? <span className="text-text-muted">—</span> : null}
          </div>
        ),
      },
    ],
    [],
  );

  if (wellsLoading || loading) {
    return <p className="text-text-muted">Loading well data…</p>;
  }

  if (routeAlias === JENA31_DUAL_ALIAS || alias === JENA31_DUAL_ALIAS) {
    return <Navigate to="/well/JENA31" replace />;
  }

  if (error || !intervals || !zones) {
    return (
      <Card title="Unable to load well">
        <p className="text-risk-high">{error ?? "Missing data"}</p>
      </Card>
    );
  }

  const owcLabel =
    intervals.owc_mtvds != null
      ? `Field OWC${intervals.owc_field ? ` (${intervals.owc_field})` : ""}: ${formatNumber(intervals.owc_mtvds, 1)} m TVDss`
      : null;

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-text sm:text-2xl">{intervals.display}</h1>
            <p className="mt-1 text-sm text-text-muted">
              McKinlay Member depth tracks — {intervals.interval_count} retained intervals
            </p>
            {owcLabel ? (
              <p className="mt-1 font-mono text-sm text-accent">{owcLabel}</p>
            ) : null}
          </div>
          <WellSelect
            wells={activeWells}
            value={alias}
            onChange={handleWellChange}
            label="Well"
            className="w-full sm:w-56"
          />
        </div>
        <Link
          to={`/intra/${alias}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-card border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/20 sm:w-auto sm:self-start"
        >
          Intra-well statistics
          <span aria-hidden="true">→</span>
        </Link>
      </header>

      <DepthTracks
        intervals={intervals.intervals}
        zones={zones.zones}
        isolationDepths={intervals.isolation_depths}
        onDepthSelect={handleDepthSelect}
      />

      <Legend
        title="Track legend"
        items={[
          { label: "Overburden", color: "rgba(147,161,176,0.35)", description: "excluded zones" },
          { label: "Mechanical isolation", color: "var(--isolation-hatch-stripe)", description: "grey/white hatch (Iso track)" },
          { label: "RES deep", color: "var(--res-high)" },
          { label: "RES shallow", color: "var(--res-low)" },
          { label: "WRCI High", color: "var(--risk-high)" },
          { label: "WRCI Elevated", color: "var(--risk-elev)" },
          {
            label: "Table RQI/WRCI",
            color: "var(--metric-rqi-high)",
            description: "threshold tints; tracks use continuous/risk-class scales",
          },
        ]}
      />

      <Card title="Interval table" description="All retained McKinlay sample intervals">
        <DataTable
          columns={columns}
          rows={intervals.intervals}
          rowKey={(r) => String(r.depth)}
          caption={`${intervals.display} McKinlay intervals`}
          stickyFirstColumn
          scrollMaxHeight="70vh"
          highlightRowKey={highlightRowKey}
        />
      </Card>
    </div>
  );
}
