export type ChatMessage =
  | {
      id: string;
      role: "user";
      text: string;
      time: string;
    }
  | {
      id: string;
      role: "assistant";
      text: string;
      variant?: "default" | "quantum-demo";
    };
