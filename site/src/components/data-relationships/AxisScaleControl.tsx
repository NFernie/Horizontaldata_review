import type { DataRelationshipProperty } from "@/config";
import {
  axisSliderStep,
  formatAxisValue,
  type AxisRange,
} from "@/lib/dataRelationships";

interface AxisScaleControlProps {
  axisLabel: string;
  property: DataRelationshipProperty;
  dataExtent: AxisRange;
  range: AxisRange;
  onChange: (range: AxisRange) => void;
}

export function AxisScaleControl({
  axisLabel,
  property,
  dataExtent,
  range,
  onChange,
}: AxisScaleControlProps) {
  const step = axisSliderStep(property, dataExtent);
  const minLimit = dataExtent.min;
  const maxLimit = dataExtent.max;
  const minSliderMax = Math.max(minLimit, range.max - step);
  const maxSliderMin = Math.min(maxLimit, range.min + step);

  return (
    <div className="rounded-card border border-border bg-surface-2 p-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
        {axisLabel} scale — {formatAxisValue(property, range.min)} to{" "}
        {formatAxisValue(property, range.max)}
      </p>

      <div className="space-y-3">
        <div>
          <label htmlFor={`${axisLabel}-min`} className="mb-1 flex justify-between text-xs text-text-muted">
            <span>Min</span>
            <span className="font-mono tabular-nums text-text">
              {formatAxisValue(property, range.min)}
            </span>
          </label>
          <input
            id={`${axisLabel}-min`}
            type="range"
            min={minLimit}
            max={minSliderMax}
            step={step}
            value={range.min}
            onChange={(e) =>
              onChange({ min: Number.parseFloat(e.target.value), max: range.max })
            }
            className="h-2 w-full cursor-pointer accent-accent"
          />
        </div>

        <div>
          <label htmlFor={`${axisLabel}-max`} className="mb-1 flex justify-between text-xs text-text-muted">
            <span>Max</span>
            <span className="font-mono tabular-nums text-text">
              {formatAxisValue(property, range.max)}
            </span>
          </label>
          <input
            id={`${axisLabel}-max`}
            type="range"
            min={maxSliderMin}
            max={maxLimit}
            step={step}
            value={range.max}
            onChange={(e) =>
              onChange({ min: range.min, max: Number.parseFloat(e.target.value) })
            }
            className="h-2 w-full cursor-pointer accent-accent"
          />
        </div>
      </div>
    </div>
  );
}
