import type { AssistantResponse, AssistantResult } from "@/types/assistant";
import { parseQuery } from "./parseQuery";
import { loadManifest } from "./corpusLoader";
import { handleIntervalFilter, handleIntervalLookup } from "./handlers/intervalHandlers";
import { handleKeywordSearch } from "./handlers/keywordHandlers";
import { handleMethodLookup } from "./handlers/summaryHandlers";
import { handleStatsLookup } from "./handlers/statsHandlers";
import { handleSummaryLookup } from "./handlers/summaryHandlers";

async function dispatch(parsed: ReturnType<typeof parseQuery>): Promise<AssistantResult> {
  switch (parsed.intent) {
    case "INTERVAL_LOOKUP":
      return handleIntervalLookup(parsed);
    case "INTERVAL_FILTER":
      return handleIntervalFilter(parsed);
    case "METHOD_LOOKUP":
      return handleMethodLookup(parsed);
    case "SUMMARY_LOOKUP":
      return handleSummaryLookup(parsed);
    case "STATS_LOOKUP":
      return handleStatsLookup(parsed);
    case "KEYWORD_FALLBACK":
    default:
      return handleKeywordSearch(parsed);
  }
}

export async function routeQuery(query: string): Promise<AssistantResponse> {
  const manifest = await loadManifest();
  const parsed = parseQuery(query, manifest.wells);

  try {
    const result = await dispatch(parsed);
    return { query, results: [result] };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to answer query.";
    const fallback = await handleKeywordSearch({
      intent: "KEYWORD_FALLBACK",
      rawQuery: query,
    });
    return {
      query,
      results: [
        {
          ...fallback,
          match_note: message,
        },
      ],
    };
  }
}

export { parseQuery } from "./parseQuery";
export { resolveWell } from "./wellResolver";
export { parseDepth, findNearestInterval } from "./depthResolver";
