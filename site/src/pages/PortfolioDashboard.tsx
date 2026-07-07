import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { DataTable, type DataTableColumn } from "@/components/DataTable";
import { Legend } from "@/components/Legend";
import { RiskBadge } from "@/components/RiskBadge";
import { StatTile } from "@/components/StatTile";
import { fetchJson, formatNumber, formatPercent } from "@/lib/utils";
import type { WellRecord, WellsPayload } from "@/types/wells";

export function PortfolioDashboard() {
  const [payload, setPayload] = useState<WellsPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJson<WellsPayload>("data/wells.json")
      .then(setPayload)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const activeWells = useMemo(
    () => (payload?.wells ?? []).filter((w) => !w.data_missing),
    [payload],
  );

  const summary = useMemo(() => {
    if (!activeWells.length) {
      return { avgPay: 0, totalHighRisk: 0, totalElevated: 0, avgLateral: 0 };
    }
    const avgPay =
      activeWells.reduce((sum, w) => sum + (w.pay_pct ?? 0), 0) / activeWells.length;
    const totalHighRisk = activeWells.reduce((sum, w) => sum + w.high_risk_count, 0);
    const totalElevated = activeWells.reduce((sum, w) => sum + w.elevated_risk_count, 0);
    const avgLateral =
      activeWells.reduce((sum, w) => sum + (w.lateral ?? 0), 0) / activeWells.length;
    return { avgPay, totalHighRisk, totalElevated, avgLateral };
  }, [activeWells]);

  const columns: DataTableColumn<WellRecord>[] = [
    {
      key: "display",
      header: "Well",
      render: (row) => (
        <div>
          <p className="font-medium text-text">{row.display}</p>
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

  if (loading) {
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
          McKinlay Member horizontal wells — pay coverage, water-risk counts, and lateral extent.
          Data generated {payload?.generated ?? "—"}.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile label="Active wells" value={activeWells.length} hint="Excludes data-missing" />
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

      <Card
        title="Well comparison"
        description={`${activeWells.length} wells with McKinlay interval statistics`}
      >
        <DataTable
          columns={columns}
          rows={activeWells}
          rowKey={(row) => row.alias}
          caption="McKinlay horizontal well portfolio comparison"
        />
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
          { label: "High", color: "var(--risk-high)", description: "WRCI ≥ 66, ≥ 2 flags" },
          { label: "Elevated", color: "var(--risk-elev)", description: "WRCI 40–66 or 1 flag" },
          { label: "Low", color: "var(--risk-low)", description: "Below thresholds" },
        ]}
      />
    </div>
  );
}
