import type { AssistantResult } from "@/types/assistant";
import { cn } from "@/lib/utils";
import { CitationLink } from "./CitationLink";
import { INTENT_LABELS } from "./constants";
import { MarkdownContent } from "./MarkdownContent";

interface ResultCardProps {
  result: AssistantResult;
}

function SummaryGrid({ summary }: { summary: Record<string, string | number | boolean | null> }) {
  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {Object.entries(summary).map(([key, value]) => {
        const text = value == null ? "—" : String(value);
        const isLong = text.length > 120;
        return (
          <div key={key} className={cn(isLong && "sm:col-span-2")}>
            <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">{key}</dt>
            <dd
              className={cn(
                "mt-0.5 text-sm text-text",
                key === "Description" || isLong ? "font-sans leading-relaxed" : "font-mono",
              )}
            >
              {isLong ? `${text.slice(0, 200)}${text.length > 200 ? "…" : ""}` : text}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export function ResultCard({ result }: ResultCardProps) {
  const intentLabel = INTENT_LABELS[result.intent] ?? result.intent;

  return (
    <article className="rounded-card border border-border bg-surface-2 p-4">
      <header className="mb-3 space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{intentLabel}</p>
        <h3 className="text-sm font-semibold leading-snug text-text">{result.title}</h3>
        {result.match_note ? (
          <p className="text-xs text-risk-elev">{result.match_note}</p>
        ) : null}
      </header>

      <div className="space-y-3">
        {typeof result.summary === "string" ? (
          <p className="text-sm text-text-muted">{result.summary}</p>
        ) : (
          <SummaryGrid summary={result.summary} />
        )}

        {result.detail_markdown ? (
          <details className="group rounded-card border border-border bg-surface">
            <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-surface-2 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="text-text-muted transition-transform group-open:rotate-90">
                  ▸
                </span>
                Show full detail
              </span>
            </summary>
            <div className="border-t border-border px-3 py-3">
              <MarkdownContent markdown={result.detail_markdown} />
            </div>
          </details>
        ) : null}

        {result.citations.length > 0 ? (
          <div className="space-y-2">
            <p className="text-xs font-medium text-text-muted">Sources</p>
            <div className="flex flex-wrap gap-2">
              {result.citations.map((citation, index) => (
                <CitationLink key={`${citation.source}-${index}`} citation={citation} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
