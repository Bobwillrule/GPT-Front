import { Composer } from "../components/Composer";

type HomeScreenProps = {
  draft: string;
  onDraftChange: (value: string) => void;
  onSubmit: (message: string) => void;
};

export function HomeScreen({ draft, onDraftChange, onSubmit }: HomeScreenProps) {
  return (
    <section className="screen screen--home">
      <div className="hero-orb">
        <div className="hero-orb__glow" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Adaptive AI Workspace</p>
        <h1>Good evening, Hugo</h1>
        <p>What can I help you with today?</p>
      </div>

      <Composer
        placeholder="Message ChatGPT"
        brand="ChatGPT"
        value={draft}
        onChange={onDraftChange}
        onSubmit={() => onSubmit(draft)}
      />
    </section>
  );
}
