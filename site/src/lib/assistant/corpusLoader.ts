import { dataUrl, fetchJson } from "@/lib/utils";
import type { Bm25SearchIndex } from "./bm25";
import type {
  CorpusStatsIndex,
  StatisticalMethodsDoc,
} from "@/types/assistant";
import type { CorpusChunk, CorpusIntervalsPayload, CorpusManifest } from "@/types/corpus";

let manifestPromise: Promise<CorpusManifest> | null = null;
let chunksPromise: Promise<CorpusChunk[]> | null = null;
let methodsPromise: Promise<StatisticalMethodsDoc> | null = null;
let bm25Promise: Promise<Bm25SearchIndex> | null = null;

export function loadManifest(): Promise<CorpusManifest> {
  manifestPromise ??= fetchJson<CorpusManifest>("corpus/manifest.json");
  return manifestPromise;
}

export async function loadChunks(): Promise<CorpusChunk[]> {
  if (!chunksPromise) {
    chunksPromise = (async () => {
      const res = await fetch(dataUrl("corpus/chunks.jsonl"));
      if (!res.ok) {
        throw new Error(`Failed to load corpus/chunks.jsonl: ${res.status}`);
      }
      const text = await res.text();
      return text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => JSON.parse(line) as CorpusChunk);
    })();
  }
  return chunksPromise;
}

export function loadMethods(): Promise<StatisticalMethodsDoc> {
  methodsPromise ??= fetchJson<StatisticalMethodsDoc>("corpus/methods/statistical-methods.json");
  return methodsPromise;
}

export function loadBm25Index(): Promise<Bm25SearchIndex> {
  bm25Promise ??= fetchJson<Bm25SearchIndex>("corpus/search-index.json");
  return bm25Promise;
}

export function loadIntervals(alias: string): Promise<CorpusIntervalsPayload> {
  return fetchJson<CorpusIntervalsPayload>(`corpus/intervals/${alias}.json`);
}

export function loadStatsIndex(): Promise<CorpusStatsIndex> {
  return fetchJson<CorpusStatsIndex>("corpus/stats/index.json");
}

export function resetCorpusCache(): void {
  manifestPromise = null;
  chunksPromise = null;
  methodsPromise = null;
  bm25Promise = null;
}
