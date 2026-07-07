import { useState, type FormEvent } from "react";

interface QueryInputProps {
  onSubmit: (query: string) => void;
  disabled?: boolean;
}

export function QueryInput({ onSubmit, disabled }: QueryInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSubmit(trimmed);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-border bg-surface p-3 sm:p-4">
      <label htmlFor="corpus-assistant-query" className="sr-only">
        Ask the corpus assistant
      </label>
      <div className="flex gap-2">
        <input
          id="corpus-assistant-query"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={disabled}
          placeholder="e.g. cuttings at 2500 m MD in Jena 31"
          className="min-w-0 flex-1 rounded-card border border-border bg-bg px-3 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-accent/50 disabled:opacity-50"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="shrink-0 rounded-card border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Ask
        </button>
      </div>
    </form>
  );
}
