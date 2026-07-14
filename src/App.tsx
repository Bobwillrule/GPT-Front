import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AppFrame } from "./components/AppFrame";
import { createAssistantReply, createUserMessage, initialMessages } from "./lib/mockAssistant";
import { ChatScreen } from "./screens/ChatScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ChatMessage } from "./types/chat";

export function App() {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isResponding, setIsResponding] = useState(false);
  const navigate = useNavigate();
  const responseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (responseTimeoutRef.current) {
        window.clearTimeout(responseTimeoutRef.current);
      }
    };
  }, []);

  function submitMessage(rawMessage: string) {
    const text = rawMessage.trim();
    if (!text || isResponding) {
      return;
    }

    const userMessage = createUserMessage(text);
    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setIsResponding(true);
    navigate("/chat");

    responseTimeoutRef.current = window.setTimeout(() => {
      setMessages((current) => [...current, createAssistantReply(text)]);
      setIsResponding(false);
    }, 700);
  }

  return (
    <AppFrame>
      <Routes>
        <Route
          path="/"
          element={<HomeScreen draft={draft} onDraftChange={setDraft} onSubmit={submitMessage} />}
        />
        <Route
          path="/chat"
          element={
            <ChatScreen
              messages={messages}
              draft={draft}
              onDraftChange={setDraft}
              onSubmit={submitMessage}
              isResponding={isResponding}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppFrame>
  );
}
