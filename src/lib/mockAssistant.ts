import { ChatMessage } from "../types/chat";

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

export function formatChatTime(date = new Date()) {
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function createUserMessage(text: string): ChatMessage {
  return {
    id: createId("user"),
    role: "user",
    text,
    time: formatChatTime(),
  };
}

export function createAssistantReply(text: string): ChatMessage {
  const normalized = text.toLowerCase();
  const isQuantum =
    normalized.includes("quantum") ||
    normalized.includes("qubit") ||
    normalized.includes("superposition");

  if (isQuantum) {
    return {
      id: createId("assistant"),
      role: "assistant",
      text: "Absolutely. Here's a simple way to think about quantum computing:",
      variant: "quantum-demo",
    };
  }

  return {
    id: createId("assistant"),
    role: "assistant",
    text:
      "I can help with that. This Phase 3 mock keeps the interaction flow real while we keep the assistant output locally simulated.",
    variant: "default",
  };
}

export const initialMessages: ChatMessage[] = [
  createUserMessage("Can you explain quantum computing in simple terms?"),
  {
    id: "assistant-seed",
    role: "assistant",
    text: "Absolutely. Here's a simple way to think about quantum computing:",
    variant: "quantum-demo",
  },
];
