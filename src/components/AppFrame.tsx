import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlassPanel } from "./GlassPanel";
import { ChevronDownIcon, SparkIcon, XIcon } from "./Icons";
import { AppSidebar, defaultSidebarItems, SidebarItem } from "./sidebar";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Chat", path: "/chat" },
];

type AppFrameProps = PropsWithChildren<{
  onNewChat: () => void;
}>;

type ModalView = "about" | "settings" | null;
type ThemeMode = "dark" | "light" | "system";

export function AppFrame({ children, onNewChat }: AppFrameProps) {
  const location = useLocation();
  const [openModal, setOpenModal] = useState<ModalView>(null);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const savedTheme = window.localStorage.getItem("xray-theme-mode");
    return savedTheme === "dark" || savedTheme === "light" || savedTheme === "system"
      ? savedTheme
      : "system";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    function applyTheme() {
      const resolvedTheme =
        themeMode === "system" ? (mediaQuery.matches ? "light" : "dark") : themeMode;

      document.documentElement.dataset.theme = resolvedTheme;
    }

    applyTheme();
    window.localStorage.setItem("xray-theme-mode", themeMode);
    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [themeMode]);

  function handleSidebarItemAction(item: SidebarItem) {
    setOpenModal(item.id);
  }

  return (
    <div className="app-shell">
      <div className="app-shell__aurora app-shell__aurora--one" />
      <div className="app-shell__aurora app-shell__aurora--two" />
      <div className="app-shell__grain" />
      <div className="app-layout">
        <AppSidebar
          items={defaultSidebarItems}
          onPrimaryAction={onNewChat}
          onItemAction={handleSidebarItemAction}
          version="v0.1.0"
        />

        <main className="app-shell__panel">
          <section className="app-main">
            <header className="topbar">
              <GlassPanel className="model-pill glass--pill" padding="14px 24px" radius={999}>
                <div className="model-pill__content">
                  <SparkIcon className="topbar__spark" />
                  <span>GPT-4o</span>
                  <ChevronDownIcon className="topbar__chevron" />
                </div>
              </GlassPanel>

              <nav className="topbar__nav">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      className={`topbar__link ${isActive ? "topbar__link--active" : ""}`}
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </header>

            {children}
          </section>
        </main>
      </div>

      {openModal ? (
        <div className="modal-overlay" role="presentation" onClick={() => setOpenModal(null)}>
          <div
            className="modal-card glass"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-${openModal}-title`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-card__header">
              <div>
                <p className="modal-card__eyebrow">
                  {openModal === "about" ? "About" : "Settings"}
                </p>
                <h2 id={`modal-${openModal}-title`}>
                  {openModal === "about" ? "X-Ray AI Workspace" : "Appearance"}
                </h2>
              </div>
              <button
                className="modal-card__close glass-button"
                type="button"
                aria-label="Close dialog"
                onClick={() => setOpenModal(null)}
              >
                <XIcon className="icon-svg icon-svg--small" />
              </button>
            </div>

            {openModal === "about" ? (
              <div className="modal-card__content">
                <p>
                  This prototype is a single-session AI workspace UI with a React frontend and a
                  FastAPI-ready backend bridge.
                </p>
                <p>
                  Right now it keeps one local conversation, supports file attachments, and is set
                  up so you can plug in your real backend when you are ready.
                </p>
              </div>
            ) : (
              <div className="modal-card__content">
                <div className="settings-group">
                  <div>
                    <h3>Theme</h3>
                    <p>Choose how the interface should look for this device.</p>
                  </div>
                  <div className="settings-group__options">
                    {(["dark", "light", "system"] as ThemeMode[]).map((option) => (
                      <button
                        key={option}
                        className={`settings-option glass-button ${
                          themeMode === option ? "settings-option--active" : ""
                        }`}
                        type="button"
                        onClick={() => setThemeMode(option)}
                      >
                        {option[0].toUpperCase() + option.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
