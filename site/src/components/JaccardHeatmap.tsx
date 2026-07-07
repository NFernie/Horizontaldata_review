import { cn } from "@/lib/utils";

interface JaccardHeatmapProps {
  aliases: string[];
  matrix: number[][];
  title?: string;
  className?: string;
}

function jaccardColor(value: number) {
  const t = Math.max(0, Math.min(1, value));
  return `color-mix(in srgb, var(--accent) ${Math.round(t * 85 + 5)}%, var(--surface))`;
}

function shortAlias(alias: string) {
  return alias.replace("MCKINLAY", "MCK").replace("FROSTILLICUS", "FROST");
}

export function JaccardHeatmap({ aliases, matrix, title, className }: JaccardHeatmapProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      {title ? <p className="mb-2 text-sm font-medium text-text">{title}</p> : null}
      <table className="min-w-max border-collapse text-xs" role="grid" aria-label={title ?? "Jaccard similarity matrix"}>
        <thead>
          <tr>
            <th className="p-1.5 text-left text-text-muted" scope="col" />
            {aliases.map((a) => (
              <th
                key={a}
                scope="col"
                className="max-w-[3.5rem] truncate p-1.5 font-mono text-[10px] font-semibold text-text-muted"
                title={a}
              >
                {shortAlias(a)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {aliases.map((rowAlias, i) => (
            <tr key={rowAlias}>
              <th
                scope="row"
                className="max-w-[4rem] truncate p-1.5 text-left font-mono text-[10px] font-semibold text-text-muted"
                title={rowAlias}
              >
                {shortAlias(rowAlias)}
              </th>
              {matrix[i].map((value, j) => (
                <td
                  key={`${rowAlias}-${aliases[j]}`}
                  className="border border-border p-0 text-center font-mono tabular-nums"
                  style={{ backgroundColor: jaccardColor(value) }}
                  title={`${rowAlias} ∩ ${aliases[j]}: J = ${value.toFixed(3)}`}
                >
                  <span className="inline-block min-w-[2.25rem] px-1 py-1.5 text-text">
                    {value.toFixed(2)}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
