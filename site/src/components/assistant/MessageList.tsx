import type { AssistantResult } from "@/types/assistant";
import { ResultCard } from "./ResultCard";
import { SuggestedPrompts } from "./SuggestedPrompts";

export interface AssistantMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  results?: AssistantResult[];
  error?: string;
}

interface MessageListProps {
  messages: AssistantMessage[];
  loading: boolean;
  onPromptSelect: (prompt: string) => void;
}

export function MessageList({ messages, loading, onPromptSelect }: MessageListProps) {
  const showSuggestions = messages.length === 0 && !loading;

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex-1 space-y-4 overflow-y-auto px-3 py-4 sm:px-4">
        {showSuggestions ? (
          <div className="space-y-4">
            <div className="rounded-card border border-border bg-surface-2 p-4">
              <h2 className="text-sm font-semibold text-text">Corpus Assistant</h2>
              <p className="mt-1 text-sm text-text-muted">
                Search McKinlay cuttings interpretations, pay and process summaries, statistical
                methods, and live portfolio statistics. Answers are retrieved verbatim from the
                indexed corpus — no AI synthesis.
              </p>
            </div>
            <SuggestedPrompts onSelect={onPromptSelect} disabled={loading} />
          </div>
        ) : null}

        {messages.map((message) => (
          <div
            key={message.id}
            className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            {message.role === "user" ? (
              <div className="max-w-[90%] rounded-card border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-text">
                {message.text}
              </div>
            ) : (
              <div className="w-full max-w-none space-y-3">
                {message.error ? (
                  <p className="text-sm text-risk-high">{message.error}</p>
                ) : null}
                {message.results?.map((result, index) => (
                  <ResultCard key={`${message.id}-${index}`} result={result} />
                ))}
              </div>
            )}
          </div>
        ))}

        {loading ? (
          <p className="text-sm text-text-muted" role="status" aria-live="polite">
            Searching corpus…
          </p>
        ) : null}
      </div>
    </div>
  );
}
