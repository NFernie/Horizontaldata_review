import { Link } from "react-router-dom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/Card";
import { DataTable, type DataTableColumn } from "@/components/DataTable";
import { ExecutiveSummary } from "@/components/executive/ExecutiveSummary";
import { Legend } from "@/components/Legend";
import { RiskBadge } from "@/components/RiskBadge";
import { StatTile } from "@/components/StatTile";
import { WRCI_ELEVATED_THRESHOLD, WRCI_HIGH_THRESHOLD } from "@/config";
import { pageStateKey, usePersistedState, useScrollRestore } from "@/hooks/usePageState";
import { useWells } from "@/hooks/useWells";
import {
  exportElementAsImage,
  portfolioTableFilename,
  type TableImageFormat,
} from "@/lib/exportTableImage";
import { fetchJson, formatNumber, formatPercent } from "@/lib/utils";
import type { WellRecord, WellsPayload } from "@/types/wells";

export function PortfolioDashboard() {
  useScrollRestore();
  const { executiveWells, loading: wellsLoading } = useWells({ includeDualLateral: true });
  const [payload, setPayload] = useState<WellsPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [tableOpen, setTableOpen] = usePersistedState(
    pageStateKey("/", "portfolioTableExpanded"),
    false,
  );
  const tableRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState<TableImageFormat | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);

  const handleTableExport = useCallback(
    async (format: TableImageFormat) => {
      const node = tableRef.current;
      if (!node) return;
      setExportError(null);
      setExporting(format);
      try {
        await exportElementAsImage(
          node,
          portfolioTableFilename(format, payload?.generated),
          format,
        );
      } catch (err) {
        setExportError(err instanceof Error ? err.message : "Export failed");
      } finally {
        setExporting(null);
      }
    },
    [payload?.generated],
  );

  useEffect(() => {
    fetchJson<WellsPayload>("data/wells.json")
      .then(setPayload)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const allWells = useMemo(
    () => (payload?.wells ?? []).filter((w) => !w.data_missing),
    [payload],
  );

  const summary = useMemo(() => {
    if (!allWells.length) {
      return { avgPay: 0, totalHighRisk: 0, totalElevated: 0, avgLateral: 0 };
    }
    const avgPay =
      allWells.reduce((sum, w) => sum + (w.pay_pct ?? 0), 0) / allWells.length;
    const totalHighRisk = allWells.reduce((sum, w) => sum + w.high_risk_count, 0);
    const totalElevated = allWells.reduce((sum, w) => sum + w.elevated_risk_count, 0);
    const avgLateral =
      allWells.reduce((sum, w) => sum + (w.lateral ?? 0), 0) / allWells.length;
    return { avgPay, totalHighRisk, totalElevated, avgLateral };
  }, [allWells]);

  const columns: DataTableColumn<WellRecord>[] = [
    {
      key: "display",
      header: "Well",
      render: (row) => (
        <div>
          <Link
            to={`/well/${row.alias}`}
            className="font-medium text-accent hover:underline"
          >
            {row.display}
          </Link>
          <p className="text-xs text-text-muted">{row.alias}</p>
        </div>
      ),
    },
    {
      key: "lateral",
      header: "Lateral (m)",
      align: "right",
      mono: true,
      render: (row) => formatNumber(row.lateral, 0),
    },
    {
      key: "pay_pct",
      header: "Pay %",
      align: "right",
      mono: true,
      render: (row) => formatPercent(row.pay_pct),
    },
    {
      key: "high_risk_count",
      header: "High risk",
      align: "center",
      mono: true,
      render: (row) =>
        row.high_risk_count > 0 ? (
          <RiskBadge risk="High" />
        ) : (
          <span className="text-text-muted">0</span>
        ),
    },
    {
      key: "elevated_risk_count",
      header: "Elevated",
      align: "center",
      mono: true,
      render: (row) =>
        row.elevated_risk_count > 0 ? (
          <span className="inline-flex items-center gap-1">
            <RiskBadge risk="Elevated" />
            <span className="font-mono text-xs text-text-muted">({row.elevated_risk_count})</span>
          </span>
        ) : (
          <span className="text-text-muted">0</span>
        ),
    },
    {
      key: "interval_count",
      header: "Intervals",
      align: "right",
      mono: true,
      render: (row) => row.interval_count,
    },
    {
      key: "cluster_id",
      header: "Cluster",
      align: "center",
      mono: true,
      render: (row) => (row.cluster_id != null ? row.cluster_id : "—"),
    },
  ];

  if (loading || wellsLoading) {
    return <p className="text-text-muted">Loading portfolio data…</p>;
  }

  if (error) {
    return (
      <Card title="Unable to load data">
        <p className="text-risk-high">{error}</p>
      </Card>
    );
  }

  const missingWells = (payload?.wells ?? []).filter((w) => w.data_missing);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold text-text sm:text-2xl">Portfolio Dashboard</h1>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          McKinlay Member horizontal wells — executive concern hub, pay coverage, and lateral extent.
          Data generated {payload?.generated ?? "—"}.
        </p>
      </header>

      <ExecutiveSummary wells={executiveWells} />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile label="Active wells" value={allWells.length} hint="Includes dual lateral" />
        <StatTile
          label="Avg matching pay"
          value={summary.avgPay}
          unit="%"
          variant="accent"
          hint="Cuttings + resistivity agreement"
        />
        <StatTile
          label="Elevated zones"
          value={summary.totalElevated}
          variant="risk"
          hint="Across all wells"
        />
        <StatTile
          label="Avg lateral"
          value={summary.avgLateral}
          unit="m"
          hint="TD − DC30"
        />
      </div>

      <Card className="p-0">
        <button
          type="button"
          onClick={() => setTableOpen((open) => !open)}
          aria-expanded={tableOpen}
          className="flex w-full cursor-pointer items-center justify-between rounded-card px-4 py-4 text-left transition-colors hover:bg-surface-2/60 sm:px-5"
        >
          <div>
            <h2 className="text-lg font-semibold text-text">Full portfolio table</h2>
            <p className="mt-1 text-sm text-text-muted">
              {allWells.length} wells with McKinlay interval statistics
            </p>
          </div>
          <span className="text-accent" aria-hidden>
            {tableOpen ? "▾" : "▸"}
          </span>
        </button>
        {tableOpen ? (
          <div className="border-t border-border px-4 pb-4 pt-2 sm:px-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled={exporting !== null}
                onClick={() => handleTableExport("png")}
                className="rounded-card border border-border bg-surface-2 px-3 py-1.5 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {exporting === "png" ? "Exporting PNG…" : "Export PNG"}
              </button>
              <button
                type="button"
                disabled={exporting !== null}
                onClick={() => handleTableExport("jpeg")}
                className="rounded-card border border-border bg-surface-2 px-3 py-1.5 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {exporting === "jpeg" ? "Exporting JPG…" : "Export JPG"}
              </button>
              {exportError ? (
                <p className="text-xs text-risk-high" role="alert">
                  {exportError}
                </p>
              ) : null}
            </div>
            <DataTable
              ref={tableRef}
              columns={columns}
              rows={allWells}
              rowKey={(row) => row.alias}
              caption="McKinlay horizontal well portfolio comparison"
              stickyFirstColumn
              stickyMinWidth="min-w-[10rem]"
            />
          </div>
        ) : null}
      </Card>

      {missingWells.length > 0 ? (
        <Card title="Data gaps">
          <ul className="list-disc space-y-1 pl-5 text-sm text-text-muted">
            {missingWells.map((well) => (
              <li key={well.alias}>
                <strong className="text-text">{well.display}</strong> — no source files in repository
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      <Legend
        title="Risk classification"
        items={[
          { label: "High", color: "var(--risk-high)", description: `WRCI ≥ ${WRCI_HIGH_THRESHOLD}` },
          {
            label: "Elevated",
            color: "var(--risk-elev)",
            description: `WRCI ${WRCI_ELEVATED_THRESHOLD}–${WRCI_HIGH_THRESHOLD} or flags`,
          },
          { label: "Low", color: "var(--risk-low)", description: "Below thresholds" },
        ]}
      />
    </div>
  );
}
