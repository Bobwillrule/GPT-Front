import { FormEvent, KeyboardEvent, useRef } from "react";
import { GlassPanel } from "./GlassPanel";
import { BulbIcon, GlobeIcon, GridIcon, PaperclipIcon, SendIcon } from "./Icons";

type ComposerProps = {
  placeholder: string;
  brand: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  files: File[];
  onFilesChange: (files: File[]) => void;
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
  files,
  onFilesChange,
  disabled = false,
}: ComposerProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if ((!value.trim() && files.length === 0) || disabled) {
      return;
    }

    onSubmit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }

    event.preventDefault();

    if ((!value.trim() && files.length === 0) || disabled) {
      return;
    }

    onSubmit();
  }

  function handleFileSelection(fileList: FileList | null) {
    if (!fileList) {
      return;
    }

    onFilesChange([...files, ...Array.from(fileList)]);
  }

  function removeFile(fileName: string) {
    onFilesChange(files.filter((file) => file.name !== fileName));
  }

  return (
    <form className="composer-form" onSubmit={handleSubmit}>
      <GlassPanel className="composer" padding="26px 24px 18px" radius={34}>
        <div className="composer__surface">
          <input
            ref={fileInputRef}
            className="composer__file-input"
            type="file"
            multiple
            onChange={(event) => {
              handleFileSelection(event.target.files);
              event.currentTarget.value = "";
            }}
          />
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
          {files.length > 0 ? (
            <div className="composer__attachments">
              {files.map((file) => (
                <button
                  key={`${file.name}-${file.size}`}
                  className="composer__attachment glass-button"
                  type="button"
                  onClick={() => removeFile(file.name)}
                >
                  <span>{file.name}</span>
                  <span className="composer__attachment-remove">x</span>
                </button>
              ))}
            </div>
          ) : null}
          <div className="composer__footer">
            <div className="composer__tools">
              <button
                className="tool-chip tool-chip--icon glass-button"
                type="button"
                aria-label="Attach file"
                onClick={() => fileInputRef.current?.click()}
              >
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
              disabled={(!value.trim() && files.length === 0) || disabled}
            >
              <SendIcon className="icon-svg icon-svg--send" />
            </button>
          </div>
        </div>
      </GlassPanel>
    </form>
  );
}
