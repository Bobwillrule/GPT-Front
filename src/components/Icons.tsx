import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 2.75L13.9 8.1L19.25 10L13.9 11.9L12 17.25L10.1 11.9L4.75 10L10.1 8.1L12 2.75Z" />
      <path d="M18.1 3.8L18.7 5.5L20.4 6.1L18.7 6.7L18.1 8.4L17.5 6.7L15.8 6.1L17.5 5.5L18.1 3.8Z" />
    </BaseIcon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1.75V4.25" />
      <path d="M12 19.75V22.25" />
      <path d="M4.22 4.22L5.99 5.99" />
      <path d="M18.01 18.01L19.78 19.78" />
      <path d="M1.75 12H4.25" />
      <path d="M19.75 12H22.25" />
      <path d="M4.22 19.78L5.99 18.01" />
      <path d="M18.01 5.99L19.78 4.22" />
    </BaseIcon>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.5 18.25H15.5" />
      <path d="M6.75 16.75V11.25C6.75 8.35 9.1 6 12 6C14.9 6 17.25 8.35 17.25 11.25V16.75L19 18.25H5L6.75 16.75Z" />
      <path d="M10.25 20C10.6 20.72 11.25 21.25 12 21.25C12.75 21.25 13.4 20.72 13.75 20" />
    </BaseIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 10L12 15L17 10" />
    </BaseIcon>
  );
}

export function PaperclipIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.75 12.25L14.76 6.24C16.14 4.86 18.39 4.86 19.77 6.24C21.15 7.62 21.15 9.87 19.77 11.25L11.28 19.74C9.32 21.7 6.15 21.7 4.19 19.74C2.23 17.78 2.23 14.61 4.19 12.65L11.97 4.87" />
    </BaseIcon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M3.9 9H20.1" />
      <path d="M3.9 15H20.1" />
      <path d="M12 3.75C14.2 5.95 15.45 8.9 15.45 12C15.45 15.1 14.2 18.05 12 20.25C9.8 18.05 8.55 15.1 8.55 12C8.55 8.9 9.8 5.95 12 3.75Z" />
    </BaseIcon>
  );
}

export function BulbIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9.25 17.25H14.75" />
      <path d="M10 20.25H14" />
      <path d="M8 9.75C8 7.54 9.79 5.75 12 5.75C14.21 5.75 16 7.54 16 9.75C16 11.2 15.23 12.47 14.07 13.18C13.38 13.61 13 14.34 13 15.12V15.75H11V15.12C11 14.34 10.62 13.61 9.93 13.18C8.77 12.47 8 11.2 8 9.75Z" />
    </BaseIcon>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4.5" y="4.5" width="6" height="6" rx="1.4" />
      <rect x="13.5" y="4.5" width="6" height="6" rx="1.4" />
      <rect x="4.5" y="13.5" width="6" height="6" rx="1.4" />
      <rect x="13.5" y="13.5" width="6" height="6" rx="1.4" />
    </BaseIcon>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.5 8.25L4.75 12L8.5 15.75" />
      <path d="M15.5 8.25L19.25 12L15.5 15.75" />
      <path d="M13.25 5.75L10.75 18.25" />
    </BaseIcon>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.5 18.25H19.5" />
      <path d="M6.5 16V11.75" />
      <path d="M10.5 16V8.5" />
      <path d="M14.5 16V12.75" />
      <path d="M18.5 16V6.5" />
      <path d="M6.5 8.25L10.5 5.75L14.5 9L18.5 4.75" />
    </BaseIcon>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6.25V17.75" />
      <path d="M12 4.75V19.25" />
      <path d="M18 6.25V17.75" />
      <path d="M4.5 9.25H7.5" />
      <path d="M10.5 13.75H13.5" />
      <path d="M16.5 10.25H19.5" />
    </BaseIcon>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4.75V19.25" />
      <path d="M6.75 10L12 4.75L17.25 10" />
    </BaseIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12H19" />
      <path d="M13.5 6.5L19 12L13.5 17.5" />
    </BaseIcon>
  );
}
