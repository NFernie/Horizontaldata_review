import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/Card";
import { DataTable, type DataTableColumn } from "@/components/DataTable";
import { DepthTracks } from "@/components/DepthTracks";
import { Legend } from "@/components/Legend";
import { RiskBadge } from "@/components/RiskBadge";
import { WellSelect } from "@/components/WellSelect";
import { useWells } from "@/hooks/useWells";
import { fetchJson, formatNumber, formatPercent } from "@/lib/utils";
import type { IntervalRecord, IntervalsPayload } from "@/types/intervals";
import type { ZonesPayload } from "@/types/zones";

export function WellDetail() {
  const { alias: routeAlias } = useParams<{ alias: string }>();
  const { activeWells, loading: wellsLoading } = useWells();
  const [alias, setAlias] = useState(routeAlias ?? "JENA31DW1");
  const [intervals, setIntervals] = useState<IntervalsPayload | null>(null);
  const [zones, setZones] = useState<ZonesPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (routeAlias) setAlias(routeAlias);
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

  const columns: DataTableColumn<IntervalRecord>[] = useMemo(
    () => [
      {
        key: "depth",
        header: "Depth",
        align: "right",
        mono: true,
        render: (r) => `${r.depth.toFixed(0)} m`,
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
        mono: true,
        render: (r) => formatNumber(r.RQI, 2),
      },
      {
        key: "wrci",
        header: "WRCI",
        align: "right",
        mono: true,
        render: (r) => formatNumber(r.WRCI, 1),
      },
      {
        key: "risk",
        header: "Risk",
        align: "center",
        render: (r) => <RiskBadge risk={r.risk_class} />,
      },
      {
        key: "flags",
        header: "Flags",
        render: (r) => (
          <div className="flex flex-wrap gap-1">
            {r.flags.map((f) => (
              <RiskBadge key={f} flag={f} />
            ))}
            {!r.flags.length ? <span className="text-text-muted">—</span> : null}
          </div>
        ),
      },
    ],
    [],
  );

  if (wellsLoading || loading) {
    return <p className="text-text-muted">Loading well data…</p>;
  }

  if (error || !intervals || !zones) {
    return (
      <Card title="Unable to load well">
        <p className="text-risk-high">{error ?? "Missing data"}</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-text sm:text-2xl">{intervals.display}</h1>
            <p className="mt-1 text-sm text-text-muted">
              McKinlay Member depth tracks — {intervals.interval_count} retained intervals
            </p>
          </div>
          <WellSelect
            wells={activeWells}
            value={alias}
            onChange={setAlias}
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

      <DepthTracks intervals={intervals.intervals} zones={zones.zones} />

      <Legend
        title="Track legend"
        items={[
          { label: "Overburden", color: "rgba(147,161,176,0.35)", description: "excluded zones" },
          { label: "RES deep", color: "var(--res-high)" },
          { label: "RES shallow", color: "var(--res-low)" },
          { label: "WRCI High", color: "var(--risk-high)" },
          { label: "WRCI Elevated", color: "var(--risk-elev)" },
        ]}
      />

      <Card title="Interval table" description="All retained McKinlay sample intervals">
        <DataTable
          columns={columns}
          rows={intervals.intervals}
          rowKey={(r) => String(r.depth)}
          caption={`${intervals.display} McKinlay intervals`}
        />
      </Card>

    </div>
  );
}
