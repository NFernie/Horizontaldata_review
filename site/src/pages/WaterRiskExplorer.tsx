import { Card } from "@/components/Card";
import { RiskBadge } from "@/components/RiskBadge";
import { StatTile } from "@/components/StatTile";
import { WellSelect } from "@/components/WellSelect";
import { useWells } from "@/hooks/useWells";
import {
  readStoredWaterRiskLeft,
  readStoredWaterRiskRight,
  readStoredWell,
  writeStoredWaterRiskLeft,
  writeStoredWaterRiskRight,
  writeStoredWell,
} from "@/hooks/useWellSelection";
import { fetchJson, formatDepthMd, formatNumber, formatPercent } from "@/lib/utils";
import type { FlaggedZone, WaterRiskPayload } from "@/types/waterRisk";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ZoneCard({ zone }: { zone: FlaggedZone }) {
  const ev = zone.evidence;
  return (
    <article className="rounded-card border border-border bg-surface-2 p-4 transition-colors hover:border-accent/30">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-mono text-sm font-semibold text-text">
            {formatDepthMd(zone.depth, ev.mTVDss, 0)}
          </p>
          <p className="text-xs text-text-muted">
            {zone.top.toFixed(0)} – {zone.bot.toFixed(0)} m MD
          </p>
        </div>
        <RiskBadge risk={zone.risk_class} />
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {(zone.flags ?? []).length > 0 ? (
          zone.flags.map((f) => <RiskBadge key={f} flag={f} />)
        ) : (
          <span className="text-xs text-text-muted">No red flags (elevated by WRCI)</span>
        )}
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
          <dt className="text-text-muted">OWC dist</dt>
          <dd className="font-mono text-text">
            {ev.owc_distance_m != null ? `${formatNumber(ev.owc_distance_m, 1)} m` : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-text-muted">mTVDss</dt>
          <dd className="font-mono text-text">{formatNumber(ev.mTVDss, 1)}</dd>
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
          <dt className="text-text-muted">Hardness score</dt>
          <dd className="font-mono text-text">
            {ev.hardness_score != null ? formatNumber(ev.hardness_score, 2) : "—"}
          </dd>
        </div>
      </dl>
    </article>
  );
}

interface WellRiskPanelProps {
  payload: WaterRiskPayload | null;
  alias: string;
  wells: ReturnType<typeof useWells>["activeWells"];
  onAliasChange: (alias: string) => void;
  label: string;
  loading?: boolean;
}

function WellRiskPanel({
  payload,
  alias,
  wells,
  onAliasChange,
  label,
  loading,
}: WellRiskPanelProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleZones = useMemo(() => {
    const zones = payload?.flagged_zones ?? [];
    return showAll ? zones : zones.slice(0, 40);
  }, [payload, showAll]);

  const topChart = useMemo(
    () =>
      (payload?.flagged_zones ?? []).slice(0, 8).map((z) => ({
        depth: `${z.depth.toFixed(0)}m`,
        WRCI: z.WRCI ?? 0,
      })),
    [payload],
  );

  const highCount = payload?.flagged_zones.filter((z) => z.risk_class === "High").length ?? 0;
  const elevatedCount =
    payload?.flagged_zones.filter((z) => z.risk_class === "Elevated").length ?? 0;

  return (
    <Card className="flex h-full flex-col">
      <WellSelect
        wells={wells}
        value={alias}
        onChange={onAliasChange}
        label={label}
        id={`water-risk-${label.replace(/\s+/g, "-").toLowerCase()}`}
        className="mb-4"
      />

      {loading ? (
        <p className="text-sm text-text-muted">Loading flagged zones…</p>
      ) : !payload ? (
        <p className="text-sm text-text-muted">No water-risk data for this well.</p>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-text-muted">{payload.flagged_zones.length} flagged zones</p>

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
          ) : (
            <p className="text-sm text-text-muted">No flagged zones for chart.</p>
          )}

          <div className="max-h-[32rem] space-y-3 overflow-y-auto pr-1">
            {payload.flagged_zones.length === 0 ? (
              <p className="text-sm text-text-muted">No elevated or high-risk zones identified.</p>
            ) : (
              <>
                {visibleZones.map((zone) => (
                  <ZoneCard key={`${zone.depth}-${zone.top}`} zone={zone} />
                ))}
                {payload.flagged_zones.length > 40 && !showAll ? (
                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="w-full rounded-card border border-border bg-surface-2 px-4 py-2 text-sm text-accent hover:border-accent/40"
                  >
                    Show all {payload.flagged_zones.length} zones
                  </button>
                ) : null}
              </>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

export function WaterRiskExplorer() {
  const { activeWells, loading: wellsLoading, error: wellsError } = useWells();
  const [leftAlias, setLeftAlias] = useState(() =>
    readStoredWaterRiskLeft(readStoredWell("JENA31")),
  );
  const [rightAlias, setRightAlias] = useState(() => readStoredWaterRiskRight("JENA31DW1"));
  const [cache, setCache] = useState<Record<string, WaterRiskPayload>>({});
  const [loadingAliases, setLoadingAliases] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const cacheRef = useRef(cache);
  cacheRef.current = cache;

  const handleLeftChange = useCallback((alias: string) => {
    setLeftAlias(alias);
    writeStoredWaterRiskLeft(alias);
    writeStoredWell(alias);
  }, []);

  const handleRightChange = useCallback((alias: string) => {
    setRightAlias(alias);
    writeStoredWaterRiskRight(alias);
  }, []);

  useEffect(() => {
    if (!activeWells.length) return;
    const aliases = [...new Set([leftAlias, rightAlias])];
    const missing = aliases.filter((a) => !cacheRef.current[a] && !loadingAliases.has(a));
    if (!missing.length) return;

    setLoadingAliases((prev) => new Set([...prev, ...missing]));
    let cancelled = false;

    Promise.all(
      missing.map((alias) =>
        fetchJson<WaterRiskPayload>(`data/water_risk/${alias}.json`)
          .then((payload) => ({ alias, payload }))
          .catch((err: Error) => {
            throw new Error(`${alias}: ${err.message}`);
          }),
      ),
    )
      .then((results) => {
        if (cancelled) return;
        setCache((prev) => {
          const next = { ...prev };
          results.forEach(({ alias, payload }) => {
            next[alias] = payload;
          });
          return next;
        });
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (cancelled) return;
        setLoadingAliases((prev) => {
          const next = new Set(prev);
          missing.forEach((a) => next.delete(a));
          return next;
        });
      });

    return () => {
      cancelled = true;
    };
  }, [activeWells, leftAlias, rightAlias]);

  if (wellsLoading) return <p className="text-text-muted">Loading wells…</p>;

  if (wellsError || error) {
    return (
      <Card title="Unable to load water-risk data">
        <p className="text-risk-high">{wellsError ?? error}</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold text-text sm:text-2xl">Water-Risk Explorer</h1>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          Compare flagged McKinlay intervals side-by-side for any two wells. Your last selected
          wells are remembered as you move between pages.
        </p>
      </header>

      <div className="grid gap-6 xl:grid-cols-2">
        <WellRiskPanel
          label="Left well"
          alias={leftAlias}
          wells={activeWells}
          onAliasChange={handleLeftChange}
          payload={cache[leftAlias] ?? null}
          loading={loadingAliases.has(leftAlias)}
        />
        <WellRiskPanel
          label="Right well"
          alias={rightAlias}
          wells={activeWells}
          onAliasChange={handleRightChange}
          payload={cache[rightAlias] ?? null}
          loading={loadingAliases.has(rightAlias)}
        />
      </div>
    </div>
  );
}
