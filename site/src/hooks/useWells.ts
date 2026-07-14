import { useEffect, useMemo, useState } from "react";
import { fetchJson } from "@/lib/utils";
import type { WellsPayload, WellRecord } from "@/types/wells";

interface UseWellsOptions {
  includeDualLateral?: boolean;
}

export function useWells(options: UseWellsOptions = {}) {
  const { includeDualLateral = false } = options;
  const [wells, setWells] = useState<WellsPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJson<WellsPayload>("data/wells.json")
      .then(setWells)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const activeWells = useMemo<WellRecord[]>(() => {
    return (
      wells?.wells.filter(
        (w) => !w.data_missing && (includeDualLateral || !w.dual_lateral),
      ) ?? []
    );
  }, [wells, includeDualLateral]);

  const executiveWells = useMemo<WellRecord[]>(() => {
    return wells?.wells.filter((w) => !w.data_missing) ?? [];
  }, [wells]);

  return { wells, loading, error, activeWells, executiveWells };
}
