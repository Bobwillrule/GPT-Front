import { ComponentType, SVGProps } from "react";
import { InfoIcon, SlidersIcon } from "../Icons";

export type SidebarIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type SidebarItem = {
  id: "about" | "settings";
  label: string;
  description: string;
  icon: SidebarIcon;
};

export const defaultSidebarItems: SidebarItem[] = [
  {
    id: "about",
    label: "About",
    description: "Project details and status",
    icon: InfoIcon,
  },
  {
    id: "settings",
    label: "Settings",
    description: "Preferences and backend config",
    icon: SlidersIcon,
  },
];
