import { GlassPanel } from "./GlassPanel";
import { SparkIcon } from "./Icons";
import { ChatMessage } from "../types/chat";

function QuantumDemo() {
  return (
    <>
      <div className="content-block">
        <h2>1. Bits vs. Qubits</h2>
        <p>
          In classical computers, bits are either 0 or 1. In quantum computers, qubits can be 0,
          1, or both at once through superposition.
        </p>
      </div>

      <GlassPanel className="diagram-card" padding="34px 40px" radius={34}>
        <div className="diagram-card__column">
          <h3>Classical Bit</h3>
          <div className="bit-track">
            <span className="bit-track__dot bit-track__dot--active" />
            <span className="bit-track__dot" />
            <span className="bit-track__dot" />
            <span className="bit-track__dot" />
            <span className="bit-track__dot bit-track__dot--violet" />
          </div>
          <div className="bit-track__labels">
            <span>0</span>
            <span>1</span>
          </div>
        </div>

        <div className="diagram-card__divider" />

        <div className="diagram-card__column">
          <h3>Qubit (Superposition)</h3>
          <div className="qubit-sphere">
            <div className="qubit-sphere__ring qubit-sphere__ring--horizontal" />
            <div className="qubit-sphere__ring qubit-sphere__ring--vertical" />
            <div className="qubit-sphere__core" />
          </div>
        </div>
      </GlassPanel>

      <div className="content-block">
        <h2>2. Superposition</h2>
        <p>
          A qubit can be in multiple states at once. That lets a quantum computer explore many
          possibilities simultaneously.
        </p>
      </div>
    </>
  );
}

type ChatMessageViewProps = {
  message: ChatMessage;
};

export function ChatMessageView({ message }: ChatMessageViewProps) {
  if (message.role === "user") {
    return (
      <div className="message-row message-row--user">
        <GlassPanel className="message-bubble message-bubble--user" padding="28px 32px 22px" radius={34}>
          <p>{message.text}</p>
          <span>{message.time}</span>
        </GlassPanel>
      </div>
    );
  }

  return (
    <div className="message-row message-row--assistant">
      <GlassPanel className="assistant-mark" padding="0" radius={999}>
        <SparkIcon className="icon-svg" />
      </GlassPanel>
      <div className="message-stack">
        <p className="assistant-lead">{message.text}</p>
        {message.variant === "quantum-demo" ? (
          <QuantumDemo />
        ) : (
          <div className="content-block">
            <p>{message.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
