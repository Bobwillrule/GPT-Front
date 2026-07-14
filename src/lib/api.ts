const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

export class ChatApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ChatApiError";
  }
}

export async function sendChatMessage(message: string, files: File[]): Promise<string> {
  const formData = new FormData();
  formData.append("message", message);

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new ChatApiError(`Backend returned ${response.status}`);
  }

  const payload = (await response.json()) as { reply?: string };

  if (!payload.reply) {
    throw new ChatApiError("Backend response did not include reply text.");
  }

  return payload.reply;
}
