import { useState } from "react";
import { cn } from "@/lib/utils";

export interface RankingListItem {
  alias: string;
  score: number;
}

interface ExpandableRankingListProps {
  items: RankingListItem[];
  displayNames?: Record<string, string>;
  scorePrefix: string;
  formatScore: (score: number) => string;
  defaultVisible?: number;
  className?: string;
  listId: string;
}

export function ExpandableRankingList({
  items,
  displayNames,
  scorePrefix,
  formatScore,
  defaultVisible = 5,
  className,
  listId,
}: ExpandableRankingListProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, defaultVisible);
  const canExpand = items.length > defaultVisible;

  return (
    <div className={className}>
      <ol className="space-y-2" id={listId}>
        {visible.map((item, idx) => (
          <li
            key={item.alias}
            className="flex items-center justify-between rounded-card border border-border bg-surface-2 px-3 py-2 text-sm"
          >
            <span>
              <span className="mr-2 font-mono text-text-muted">{idx + 1}.</span>
              <span className="font-medium text-text">
                {displayNames?.[item.alias] ?? item.alias}
              </span>
            </span>
            <span className="font-mono tabular-nums text-accent">
              {scorePrefix}
              {formatScore(item.score)}
            </span>
          </li>
        ))}
      </ol>
      {canExpand ? (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((v) => !v)}
          className={cn(
            "mt-3 cursor-pointer text-sm font-medium text-accent transition-colors hover:text-text",
          )}
        >
          {expanded ? "Show top 5" : `Show all rankings (${items.length})`}
        </button>
      ) : null}
    </div>
  );
}
