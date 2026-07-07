import { SUGGESTED_PROMPTS } from "./constants";

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
  disabled?: boolean;
}

export function SuggestedPrompts({ onSelect, disabled }: SuggestedPromptsProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-text-muted">Try asking</p>
      <div className="flex flex-col gap-2">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(prompt)}
            className="rounded-card border border-border bg-surface px-3 py-2 text-left text-sm text-text transition-colors hover:border-accent/40 hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
