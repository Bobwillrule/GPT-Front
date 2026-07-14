import { FormEvent, KeyboardEvent } from "react";
import { GlassPanel } from "./GlassPanel";
import { BulbIcon, GlobeIcon, GridIcon, PaperclipIcon, SendIcon } from "./Icons";

type ComposerProps = {
  placeholder: string;
  brand: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
};

const tools = [
  { label: "Search", icon: GlobeIcon },
  { label: "Reason", icon: BulbIcon },
  { label: "Create", icon: GridIcon },
];

export function Composer({
  placeholder,
  brand,
  value,
  onChange,
  onSubmit,
  disabled = false,
}: ComposerProps) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!value.trim() || disabled) {
      return;
    }

    onSubmit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }

    event.preventDefault();

    if (!value.trim() || disabled) {
      return;
    }

    onSubmit();
  }

  return (
    <form className="composer-form" onSubmit={handleSubmit}>
      <GlassPanel className="composer" padding="26px 24px 18px" radius={34}>
        <label className="composer__label" htmlFor={`composer-${brand}`}>
          {placeholder}
        </label>
        <textarea
          id={`composer-${brand}`}
          className="composer__input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
        />
        <div className="composer__footer">
          <div className="composer__tools">
            <button className="tool-chip tool-chip--icon glass-button" type="button" aria-label="Attach file">
              <PaperclipIcon className="icon-svg" />
            </button>
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <button key={tool.label} className="tool-chip glass-button" type="button">
                  <Icon className="icon-svg icon-svg--small" />
                  <span>{tool.label}</span>
                </button>
              );
            })}
          </div>

          <button
            className="send-button"
            type="submit"
            aria-label={`Send message to ${brand}`}
            disabled={!value.trim() || disabled}
          >
            <SendIcon className="icon-svg icon-svg--send" />
          </button>
        </div>
      </GlassPanel>
    </form>
  );
}
