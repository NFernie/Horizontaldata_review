import { DATA_RELATIONSHIP_FLAG_OPTIONS, FLAG_LABELS } from "@/config";
import type { RelationshipFilters } from "@/lib/dataRelationships";
import type { RiskClass } from "@/types/wells";

const RISK_OPTIONS: RiskClass[] = ["High", "Elevated", "Low"];

interface RelationshipFilterBarProps {
  filters: RelationshipFilters;
  onChange: (filters: RelationshipFilters) => void;
}

export function RelationshipFilterBar({ filters, onChange }: RelationshipFilterBarProps) {
  const toggleRisk = (risk: RiskClass) => {
    const next = filters.riskClasses.includes(risk)
      ? filters.riskClasses.filter((value) => value !== risk)
      : [...filters.riskClasses, risk];
    onChange({ ...filters, riskClasses: next });
  };

  const toggleFlag = (flag: string) => {
    const next = filters.selectedFlags.includes(flag)
      ? filters.selectedFlags.filter((value) => value !== flag)
      : [...filters.selectedFlags, flag];
    onChange({ ...filters, selectedFlags: next });
  };

  return (
    <div
      className="rounded-card border border-border bg-surface-2 p-4"
      role="group"
      aria-label="Interval filters"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">Filters</p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-text-muted">Risk</span>
          {RISK_OPTIONS.map((risk) => (
            <label key={risk} className="flex cursor-pointer items-center gap-2 text-sm text-text">
              <input
                type="checkbox"
                checked={filters.riskClasses.includes(risk)}
                onChange={() => toggleRisk(risk)}
                className="h-4 w-4 cursor-pointer accent-accent"
              />
              {risk}
            </label>
          ))}
        </div>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-text">
          <input
            type="checkbox"
            checked={filters.payOnly}
            onChange={(e) => onChange({ ...filters, payOnly: e.target.checked })}
            className="h-4 w-4 cursor-pointer accent-accent"
          />
          Pay intervals only
        </label>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-text-muted">Flags</span>
        {DATA_RELATIONSHIP_FLAG_OPTIONS.map((flag) => (
          <label key={flag} className="flex cursor-pointer items-center gap-2 text-sm text-text">
            <input
              type="checkbox"
              checked={filters.selectedFlags.includes(flag)}
              onChange={() => toggleFlag(flag)}
              className="h-4 w-4 cursor-pointer accent-accent"
            />
            {FLAG_LABELS[flag as keyof typeof FLAG_LABELS] ?? flag}
          </label>
        ))}
      </div>
    </div>
  );
}
