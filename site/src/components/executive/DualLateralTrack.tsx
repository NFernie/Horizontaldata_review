import { useEffect, useMemo, useState } from "react";
import { JENA31_DUAL_CONSTITUENTS } from "@/config";
import { StructuralConcernTrack } from "@/components/executive/StructuralConcernTrack";
import { fetchJson } from "@/lib/utils";
import type { IntervalRecord, IsolationDepth } from "@/types/intervals";
import type { TrajectoryPayload } from "@/types/trajectory";
import type { WellRecord } from "@/types/wells";
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
}: DualLateralTrackProps) {
  const [trajectories, setTrajectories] = useState<Record<string, TrajectoryPayload | null>>({});

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      JENA31_DUAL_CONSTITUENTS.map((alias) =>
        fetchJson<TrajectoryPayload>(`data/trajectory/${alias}.json`).catch(() => null),
      ),
    ).then((results) => {
      if (cancelled) return;
      const map: Record<string, TrajectoryPayload | null> = {};
      JENA31_DUAL_CONSTITUENTS.forEach((alias, i) => {
        map[alias] = results[i];
      });
      setTrajectories(map);
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
        return {
          alias,
          display: alias === "JENA31" ? "JENA 31" : "JENA 31DW1",
          intervals: lateralIntervals,
          isolationDepths: lateralIso,
          trajectory: trajectories[alias] ?? null,
          dc30,
          td,
        };
      }),
    [intervals, isolationDepths, trajectories, wells],
  );

  const hasConcerns = intervals.some((iv) => iv.risk_class === "Elevated" || iv.risk_class === "High");
  const hasIsolation = isolationDepths.length > 0;

  return (
    <div
      className={cn(
        "flex min-h-[420px] flex-col rounded-card border border-border bg-surface-2 p-4",
        className,
      )}
    >
      <p className="mb-3 text-sm font-semibold text-text">{label}</p>

      {!intervals.length ? (
        <p className="flex flex-1 items-center justify-center text-sm text-text-muted">
          No interval data
        </p>
      ) : (
        <div className="grid flex-1 gap-3 md:grid-cols-2">
          {lateralData.map((lat) => (
            <StructuralConcernTrack
              key={lat.alias}
              label={lat.display}
              intervals={lat.intervals}
              isolationDepths={lat.isolationDepths}
              trajectory={lat.trajectory}
              owcMtvds={owcMtvds ?? lat.trajectory?.owc_mtvds}
              mdStart={lat.dc30}
              mdEnd={lat.td}
              markerColor={() => LATERAL_COLOURS[lat.alias] ?? "var(--accent)"}
              embedded
            />
          ))}
        </div>
      )}

      {!hasConcerns ? (
        <p className="mt-2 text-sm text-text-muted">No Elevated or High intervals</p>
      ) : null}
      {!hasIsolation && intervals.length > 0 ? (
        <p className="mt-1 text-xs text-text-muted/80">No mechanical isolation on file</p>
      ) : null}
    </div>
  );
}
