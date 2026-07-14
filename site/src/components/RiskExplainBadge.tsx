import { RiskBadge } from "@/components/RiskBadge";
import { Popover } from "@/components/Popover";
import { FlagExplainContent } from "@/components/FlagExplainPopover";
import {
  evidenceFromInterval,
  evidenceFromZone,
  explainFlag,
  explainInterval,
  explainZone,
  isExplainableRisk,
  type RiskExplainResult,
} from "@/lib/flagExplain";
import type { IntervalRecord } from "@/types/intervals";
import type { FlaggedZone } from "@/types/waterRisk";
import type { RiskClass } from "@/types/wells";
import { cn } from "@/lib/utils";

interface RiskExplainBadgeProps {
  risk?: RiskClass | null;
  flags?: string[];
  interval?: IntervalRecord;
  zone?: FlaggedZone;
  explain?: RiskExplainResult;
  className?: string;
}

export function RiskExplainBadge({
  risk,
  flags,
  interval,
  zone,
  explain: explainProp,
  className,
}: RiskExplainBadgeProps) {
  const resolvedRisk = risk ?? interval?.risk_class ?? zone?.risk_class;
  const resolvedFlags = flags ?? interval?.flags ?? zone?.flags;
  const explainable = isExplainableRisk(resolvedRisk, resolvedFlags);

  const explain =
    explainProp ??
    (interval ? explainInterval(interval) : zone ? explainZone(zone) : null);

  const badge = <RiskBadge risk={resolvedRisk} className={className} />;

  if (!explainable || !explain) {
    return badge;
  }

  return (
    <Popover
      content={<FlagExplainContent explain={explain} />}
      disabled={!explainable}
      className={cn(explainable && "rounded-full", className)}
    >
      {badge}
    </Popover>
  );
}

interface FlagExplainBadgeProps {
  flag: string;
  interval?: IntervalRecord;
  zone?: FlaggedZone;
  className?: string;
}

export function FlagExplainBadge({ flag, interval, zone, className }: FlagExplainBadgeProps) {
  const ev = interval ? evidenceFromInterval(interval) : zone ? evidenceFromZone(zone) : null;
  const line = ev ? explainFlag(flag, ev) : "Flag detail unavailable";

  return (
    <Popover
      content={
        <div className="space-y-1">
          <p className="text-xs font-semibold text-text">{flag}</p>
          <p className="text-xs leading-relaxed text-text-muted">{line}</p>
        </div>
      }
      className={className}
    >
      <RiskBadge flag={flag} />
    </Popover>
  );
}
