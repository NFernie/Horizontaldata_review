import { useEffect, useMemo, useState } from "react";
import { JENA31_DUAL_CONSTITUENTS } from "@/config";
import { StructuralConcernTrack } from "@/components/executive/StructuralConcernTrack";
import { fetchJson } from "@/lib/utils";
import type { IntervalRecord, IsolationDepth } from "@/types/intervals";
import type { TrajectoryPayload } from "@/types/trajectory";
import type { WellRecord } from "@/types/wells";
import type { ExclusionZone } from "@/types/zones";
import { cn } from "@/lib/utils";

const LATERAL_COLOURS: Record<string, string> = {
  JENA31: "var(--lateral-jena31)",
  JENA31DW1: "var(--lateral-jena31dw1)",
};

interface DualLateralTrackProps {
  label: string;
  intervals: IntervalRecord[];
  wells: WellRecord[];
  isolationDepths?: IsolationDepth[];
  owcMtvds?: number | null;
  className?: string;
  resizeKeyPrefix?: string;
  showElevated?: boolean;
  showHigh?: boolean;
}

function wellExtents(wells: WellRecord[], alias: string) {
  const well = wells.find((w) => w.alias === alias);
  return {
    dc30: well?.dc30 ?? 0,
    td: well?.td ?? (well?.dc30 ?? 0) + 1,
  };
}

export function DualLateralTrack({
  label,
  intervals,
  wells,
  isolationDepths = [],
  owcMtvds,
  className,
  resizeKeyPrefix,
  showElevated = true,
  showHigh = true,
}: DualLateralTrackProps) {
  const [trajectories, setTrajectories] = useState<Record<string, TrajectoryPayload | null>>({});
  const [zonesByAlias, setZonesByAlias] = useState<Record<string, ExclusionZone[]>>({});

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      JENA31_DUAL_CONSTITUENTS.map((alias) =>
        Promise.all([
          fetchJson<TrajectoryPayload>(`data/trajectory/${alias}.json`).catch(() => null),
          fetchJson<{ zones: ExclusionZone[] }>(`data/zones/${alias}.json`)
            .then((payload) => payload.zones)
            .catch(() => []),
        ]),
      ),
    ).then((results) => {
      if (cancelled) return;
      const trajMap: Record<string, TrajectoryPayload | null> = {};
      const zoneMap: Record<string, ExclusionZone[]> = {};
      JENA31_DUAL_CONSTITUENTS.forEach((alias, i) => {
        trajMap[alias] = results[i][0];
        zoneMap[alias] = results[i][1];
      });
      setTrajectories(trajMap);
      setZonesByAlias(zoneMap);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const lateralData = useMemo(
    () =>
      JENA31_DUAL_CONSTITUENTS.map((alias) => {
        const { dc30, td } = wellExtents(wells, alias);
        const lateralIntervals = intervals.filter((iv) => (iv.source_lateral ?? "JENA31") === alias);
        const lateralIso = (isolationDepths ?? []).filter((band) => {
          const mid = (band.top_md + band.bot_md) / 2;
          return mid >= dc30 && mid <= td;
        });
        const lateralOb = (zonesByAlias[alias] ?? []).filter(
          (zone) => zone.re_entry >= dc30 && zone.entry <= td,
        );
        return {
          alias,
          display: alias === "JENA31" ? "JENA 31" : "JENA 31DW1",
          intervals: lateralIntervals,
          isolationDepths: lateralIso,
          overburdenZones: lateralOb,
          trajectory: trajectories[alias] ?? null,
          dc30,
          td,
        };
      }),
    [intervals, isolationDepths, trajectories, zonesByAlias, wells],
  );

  const hasConcerns = intervals.some((iv) => iv.risk_class === "Elevated" || iv.risk_class === "High");
  const hasIsolation = isolationDepths.length > 0;

  return (
    <div
      className={cn(
        "flex flex-col rounded-card border border-border bg-surface-2 p-3",
        className,
      )}
    >
      <p className="mb-2 text-[9px] font-semibold text-text">{label}</p>

      {!intervals.length ? (
        <p className="flex flex-1 items-center justify-center text-[9px] text-text-muted">
          No interval data
        </p>
      ) : (
        <div className="grid gap-2 md:grid-cols-2">
          {lateralData.map((lat) => (
            <StructuralConcernTrack
              key={lat.alias}
              label={lat.display}
              intervals={lat.intervals}
              isolationDepths={lat.isolationDepths}
              overburdenZones={lat.overburdenZones}
              trajectory={lat.trajectory}
              owcMtvds={owcMtvds ?? lat.trajectory?.owc_mtvds}
              mdStart={lat.dc30}
              mdEnd={lat.td}
              markerColor={() => LATERAL_COLOURS[lat.alias] ?? "var(--accent)"}
              resizeKey={resizeKeyPrefix ? `${resizeKeyPrefix}:${lat.alias}` : undefined}
              embedded
              showElevated={showElevated}
              showHigh={showHigh}
            />
          ))}
        </div>
      )}

      {!hasConcerns ? (
        <p className="mt-1.5 text-[9px] text-text-muted">No Elevated or High intervals</p>
      ) : null}
      {!hasIsolation && intervals.length > 0 ? (
        <p className="mt-1 text-[8px] text-text-muted/80">No mechanical isolation on file</p>
      ) : null}
    </div>
  );
}
