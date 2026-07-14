import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlassPanel } from "./GlassPanel";
import { ChevronDownIcon, SparkIcon, SunIcon } from "./Icons";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Chat", path: "/chat" },
];

export function AppFrame({ children }: PropsWithChildren) {
  const location = useLocation();

  return (
    <div className="app-shell">
      <div className="app-shell__aurora app-shell__aurora--one" />
      <div className="app-shell__aurora app-shell__aurora--two" />
      <div className="app-shell__grain" />
      <main className="app-shell__panel">
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

          <div className="topbar__actions">
            <button className="icon-button glass-button" type="button" aria-label="Theme">
              <SunIcon className="icon-svg" />
            </button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
