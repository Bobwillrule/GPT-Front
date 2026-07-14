import { useEffect, useRef } from "react";
import { ChatMessageView } from "../components/ChatMessageView";
import { Composer } from "../components/Composer";
import { ChatMessage } from "../types/chat";

type ChatScreenProps = {
  messages: ChatMessage[];
  draft: string;
  onDraftChange: (value: string) => void;
  onSubmit: (message: string) => void;
  files: File[];
  onFilesChange: (files: File[]) => void;
  isResponding: boolean;
};

export function ChatScreen({
  messages,
  draft,
  onDraftChange,
  onSubmit,
  files,
  onFilesChange,
  isResponding,
}: ChatScreenProps) {
  const logRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, isResponding]);

  return (
    <section className="screen screen--chat">
      <div className="chat-log" ref={logRef}>
        <div className="chat-thread">
          {messages.map((message) => (
            <ChatMessageView key={message.id} message={message} />
          ))}

          {isResponding ? (
            <div className="message-row message-row--assistant">
              <div className="message-stack message-stack--pending">
                <p className="assistant-lead assistant-lead--pending">Thinking</p>
              </div>
            </div>
          ) : null}

          <div ref={endRef} />
        </div>
      </div>

      <div className="chat-dock">
        <Composer
          placeholder="Message X-Ray AI"
          brand="X-Ray AI"
          value={draft}
          onChange={onDraftChange}
          onSubmit={() => onSubmit(draft)}
          files={files}
          onFilesChange={onFilesChange}
          disabled={isResponding}
        />
        <p className="chat-footer">X-Ray AI can make mistakes. Check important info.</p>
      </div>
    </section>
  );
}
