import { SparkIcon, PlusIcon } from "../Icons";
import { SidebarItem } from "./sidebarItems";

type AppSidebarProps = {
  title?: string;
  eyebrow?: string;
  primaryLabel?: string;
  version?: string;
  items: SidebarItem[];
  onPrimaryAction: () => void;
  onItemAction: (item: SidebarItem) => void;
};

export function AppSidebar({
  title = "X-Ray AI",
  eyebrow = "Workspace",
  primaryLabel = "New chat",
  version = "v0.1.0",
  items,
  onPrimaryAction,
  onItemAction,
}: AppSidebarProps) {
  return (
    <aside className="sidebar glass">
      <div className="sidebar__inner">
        <div className="sidebar__brand">
          <div className="sidebar__brand-mark glass-button">
            <SparkIcon className="icon-svg" />
          </div>
          <div>
            <p className="sidebar__eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
        </div>

        <button className="sidebar__primary glass-button" type="button" onClick={onPrimaryAction}>
          <PlusIcon className="icon-svg icon-svg--small" />
          <span>{primaryLabel}</span>
        </button>

        <div className="sidebar__bottom">
          <div className="sidebar__section">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className="sidebar__item"
                  type="button"
                  onClick={() => onItemAction(item)}
                >
                  <span className="sidebar__item-icon glass-button">
                    <Icon className="icon-svg icon-svg--small" />
                  </span>
                  <span className="sidebar__item-copy">
                    <span className="sidebar__item-label">{item.label}</span>
                    <span className="sidebar__item-description">{item.description}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="sidebar__version">
            <span>{version}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
