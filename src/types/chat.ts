export type ChatMessage =
  | {
      id: string;
      role: "user";
      text: string;
      time: string;
      attachments?: string[];
    }
  | {
      id: string;
      role: "assistant";
      text: string;
      time: string;
      variant?: "default" | "quantum-demo";
    };
