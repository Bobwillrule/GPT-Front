import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AppFrame } from "./components/AppFrame";
import { sendChatMessage } from "./lib/api";
import { ChatScreen } from "./screens/ChatScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ChatMessage } from "./types/chat";

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function formatChatTime(date = new Date()) {
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function createUserMessage(text: string, files: File[]): ChatMessage {
  return {
    id: createId("user"),
    role: "user",
    text,
    time: formatChatTime(),
    attachments: files.map((file) => file.name),
  };
}

function createAssistantMessage(text: string): ChatMessage {
  return {
    id: createId("assistant"),
    role: "assistant",
    text,
    variant: "default",
  };
}

export function App() {
  const [draft, setDraft] = useState("");
  const [draftFiles, setDraftFiles] = useState<File[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isResponding, setIsResponding] = useState(false);
  const navigate = useNavigate();

  async function submitMessage(rawMessage: string) {
    const text = rawMessage.trim();
    if ((!text && draftFiles.length === 0) || isResponding) {
      return;
    }

    const filesToSend = [...draftFiles];
    const userMessage = createUserMessage(text, filesToSend);

    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setDraftFiles([]);
    setIsResponding(true);
    navigate("/chat");

    try {
      const reply = await sendChatMessage(text, filesToSend);
      setMessages((current) => [...current, createAssistantMessage(reply)]);
    } catch (error) {
      const message =
        error instanceof Error
          ? `${error.message}. Connect your real FastAPI backend at /api/chat when ready.`
          : "Failed to reach the backend. Connect your real FastAPI backend at /api/chat when ready.";

      setMessages((current) => [...current, createAssistantMessage(message)]);
    } finally {
      setIsResponding(false);
    }
  }

  return (
    <AppFrame>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              draft={draft}
              onDraftChange={setDraft}
              onSubmit={submitMessage}
              files={draftFiles}
              onFilesChange={setDraftFiles}
            />
          }
        />
        <Route
          path="/chat"
          element={
            <ChatScreen
              messages={messages}
              draft={draft}
              onDraftChange={setDraft}
              onSubmit={submitMessage}
              files={draftFiles}
              onFilesChange={setDraftFiles}
              isResponding={isResponding}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppFrame>
  );
}
