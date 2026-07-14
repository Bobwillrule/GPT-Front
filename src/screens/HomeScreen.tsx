import { Composer } from "../components/Composer";
import { PromptCard } from "../components/PromptCard";

const promptCards = [
  {
    title: "Explain",
    description: "quantum computing in simple terms",
    accent: "rgba(129, 102, 255, 0.65)",
    icon: "grid" as const,
  },
  {
    title: "Write",
    description: "a Python script to scrape cleanly",
    accent: "rgba(220, 99, 255, 0.55)",
    icon: "code" as const,
  },
  {
    title: "Analyze",
    description: "this ETF portfolio with visuals",
    accent: "rgba(52, 210, 203, 0.55)",
    icon: "chart" as const,
  },
  {
    title: "Design",
    description: "a workout plan landing page",
    accent: "rgba(255, 164, 52, 0.55)",
    icon: "sliders" as const,
  },
  {
    title: "Plan",
    description: "a thoughtful Taiwan itinerary",
    accent: "rgba(255, 109, 209, 0.55)",
    icon: "paperclip" as const,
  },
];

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

      <div className="prompt-grid">
        {promptCards.map((card) => (
          <PromptCard key={card.title} {...card} onClick={() => onSubmit(card.description)} />
        ))}
      </div>

      <div className="scroll-cue">v</div>
    </section>
  );
}
