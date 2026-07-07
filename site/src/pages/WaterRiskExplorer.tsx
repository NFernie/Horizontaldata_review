import { useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/Card";
import { RiskBadge } from "@/components/RiskBadge";
import { StatTile } from "@/components/StatTile";
import { fetchJson, formatNumber, formatPercent } from "@/lib/utils";
import type { FlaggedZone, WaterRiskPayload } from "@/types/waterRisk";
import { KS_FOCUS_ALIASES } from "@/config";

function ZoneCard({ zone }: { zone: FlaggedZone }) {
  const ev = zone.evidence;
  return (
    <article className="rounded-card border border-border bg-surface-2 p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-mono text-sm font-semibold text-text">
            {zone.depth.toFixed(0)} m MD
          </p>
          <p className="text-xs text-text-muted">
            {zone.top.toFixed(0)} – {zone.bot.toFixed(0)} m
          </p>
        </div>
        <RiskBadge risk={zone.risk_class} />
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {zone.flags.map((f) => (
          <RiskBadge key={f} flag={f as "highperm" | "lowres" | "lowfluor"} />
        ))}
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:grid-cols-3">
        <div>
          <dt className="text-text-muted">WRCI</dt>
          <dd className="font-mono text-text">{formatNumber(zone.WRCI, 1)}</dd>
        </div>
        <div>
          <dt className="text-text-muted">RQI</dt>
          <dd className="font-mono text-text">{formatNumber(zone.RQI, 2)}</dd>
        </div>
        <div>
          <dt className="text-text-muted">%SS</dt>
          <dd className="font-mono text-text">{formatPercent(ev.pct_ss, 0)}</dd>
        </div>
        <div>
          <dt className="text-text-muted">GR</dt>
          <dd className="font-mono text-text">{formatNumber(ev.avg_GR, 1)}</dd>
        </div>
        <div>
          <dt className="text-text-muted">RES_DEEP</dt>
          <dd className="font-mono text-text">{formatNumber(ev.avg_RES_DEEP, 1)}</dd>
        </div>
        <div>
          <dt className="text-text-muted">ΔRes</dt>
          <dd className="font-mono text-text">{formatNumber(ev.res_sep, 2)}</dd>
        </div>
        <div>
          <dt className="text-text-muted">Fluor</dt>
          <dd className="font-mono text-text">{formatPercent(ev.fluor, 0)}</dd>
        </div>
        <div>
          <dt className="text-text-muted">Porosity</dt>
          <dd className="text-text">{ev.poro_class ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-text-muted">Loose grains</dt>
          <dd className="text-text">{ev.loose_grains ? "Yes" : "No"}</dd>
        </div>
      </dl>
    </article>
  );
}

function WellRiskPanel({ payload }: { payload: WaterRiskPayload }) {
  const topChart = useMemo(
    () =>
      payload.flagged_zones.slice(0, 8).map((z) => ({
        depth: `${z.depth.toFixed(0)}m`,
        WRCI: z.WRCI ?? 0,
      })),
    [payload.flagged_zones],
  );

  const highCount = payload.flagged_zones.filter((z) => z.risk_class === "High").length;
  const elevatedCount = payload.flagged_zones.filter((z) => z.risk_class === "Elevated").length;

  return (
    <div className="space-y-4">
      <header>
        <h2 className="text-lg font-semibold text-text">{payload.display}</h2>
        <p className="text-sm text-text-muted">{payload.flagged_zones.length} flagged zones</p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <StatTile label="High risk" value={highCount} variant="risk" />
        <StatTile label="Elevated" value={elevatedCount} variant="accent" />
      </div>

      {topChart.length > 0 ? (
        <div className="h-48 rounded-card border border-border bg-surface-2 p-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topChart} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="depth" tick={{ fill: "var(--text-muted)", fontSize: 10 }} />
              <YAxis
                domain={[0, 100]}
                tick={{ fill: "var(--text-muted)", fontSize: 10 }}
                width={28}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  color: "var(--text)",
                }}
              />
              <Bar dataKey="WRCI" fill="var(--risk-elev)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : null}

      <div className="space-y-3 max-h-[32rem] overflow-y-auto pr-1">
        {payload.flagged_zones.map((zone) => (
          <ZoneCard key={`${zone.depth}-${zone.top}`} zone={zone} />
        ))}
      </div>
    </div>
  );
}

export function WaterRiskExplorer() {
  const [data, setData] = useState<Record<string, WaterRiskPayload>>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      KS_FOCUS_ALIASES.map((alias) =>
        fetchJson<WaterRiskPayload>(`data/water_risk/${alias}.json`).then((payload) => [
          alias,
          payload,
        ] as const),
      ),
    )
      .then((entries) => setData(Object.fromEntries(entries)))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-text-muted">Loading water-risk data…</p>;

  if (error) {
    return (
      <Card title="Unable to load water-risk data">
        <p className="text-risk-high">{error}</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold text-text sm:text-2xl">Water-Risk Explorer</h1>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          Ranked flagged McKinlay intervals for Jena 31 and Jena 31DW1. Each card shows contributing
          red flags and supporting petrophysical evidence.
        </p>
      </header>

      <div className="grid gap-6 xl:grid-cols-2">
        {KS_FOCUS_ALIASES.map((alias) =>
          data[alias] ? <WellRiskPanel key={alias} payload={data[alias]} /> : null,
        )}
      </div>
    </div>
  );
}
