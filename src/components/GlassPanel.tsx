import { CSSProperties, PropsWithChildren } from "react";
import LiquidGlass from "../lib/liquid-glass-react-master/liquid-glass-react-master/src/index";

type GlassPanelProps = PropsWithChildren<{
  className?: string;
  padding?: string;
  radius?: number;
  style?: CSSProperties;
  interactive?: boolean;
}>;

export function GlassPanel({
  children,
  className = "",
  padding = "18px 22px",
  radius = 28,
  style,
  interactive = false,
}: GlassPanelProps) {
  return (
    <LiquidGlass
      centered={false}
      className={className}
      padding={padding}
      cornerRadius={radius}
      blurAmount={0.085}
      saturation={155}
      displacementScale={interactive ? 78 : 62}
      aberrationIntensity={interactive ? 2.4 : 1.8}
      elasticity={interactive ? 0.24 : 0.16}
      mode="standard"
      style={style}
      onClick={interactive ? () => undefined : undefined}
    >
      {children}
    </LiquidGlass>
  );
}
