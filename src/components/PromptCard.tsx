import { GlassPanel } from "./GlassPanel";
import { ArrowRightIcon, ChartIcon, CodeIcon, GridIcon, PaperclipIcon, SlidersIcon } from "./Icons";

type PromptCardProps = {
  title: string;
  description: string;
  accent: string;
  icon: "grid" | "code" | "chart" | "sliders" | "paperclip";
  onClick?: () => void;
};

const iconMap = {
  grid: GridIcon,
  code: CodeIcon,
  chart: ChartIcon,
  sliders: SlidersIcon,
  paperclip: PaperclipIcon,
};

export function PromptCard({ title, description, accent, icon, onClick }: PromptCardProps) {
  const Icon = iconMap[icon];

  return (
    <GlassPanel
      className="prompt-card"
      padding="24px 20px"
      radius={28}
      style={{ ["--card-accent" as string]: accent }}
      interactive={Boolean(onClick)}
    >
      <div className="prompt-card__icon">
        <Icon className="icon-svg" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="prompt-card__action glass-button" type="button" aria-label={`Open ${title}`} onClick={onClick}>
        <ArrowRightIcon className="icon-svg icon-svg--small" />
      </button>
    </GlassPanel>
  );
}
