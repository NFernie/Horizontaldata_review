import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/utils";
import type { WellsPayload } from "@/types/wells";

export function useWells() {
  const [wells, setWells] = useState<WellsPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJson<WellsPayload>("data/wells.json")
      .then(setWells)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { wells, loading, error, activeWells: wells?.wells.filter((w) => !w.data_missing) ?? [] };
}
