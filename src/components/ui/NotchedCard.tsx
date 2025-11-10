import React from "react";
export interface NotchConfig {
  width?: { base: number; sm?: number; md?: number; lg?: number }; // responsive widths in px
  depth?: { base: number; sm?: number; md?: number; lg?: number }; // responsive depths in px
  bottomRadius?: number;
  topRadius?: number;
}
interface NotchedCardProps {
  notch?: NotchConfig;
  children?: React.ReactNode; 
  borderWidth?: number;
  borderColor?: string;
  shadowColor?: string;
  className?: string;
  widthClass?: string; // e.g. "w-full md:w-[400px]"
  heightClass?: string; // e.g. "h-[400px] md:h-[500px]"
}
export default function NotchedCard({
   notch = {
    width: { base: 0, sm: 200, md: 230, lg: 250 },
    depth: { base: 0, sm: 35, md: 40, lg: 45 },
    bottomRadius: 25,
    topRadius: 25,
  },
  children,
  borderWidth = 3,
  borderColor = "bg-[#D7E3FF]",
  shadowColor = "#D7E3FF",
  className = "",
  widthClass = "w-full md:w-[400px]",
  heightClass = "h-[400px]",
}: NotchedCardProps) {
  const cornerRadius = 24;
  const ref = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState({ width: 400, height: 400 });
  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  // Helper to get responsive pixel value based on screen width
  const getResponsiveValue = (values: { base: number; sm?: number; md?: number; lg?: number }) => {
    const w = window.innerWidth;
    if (w >= 1024 && values.lg) return values.lg;
    if (w >= 768 && values.md) return values.md;
    if (w >= 640 && values.sm) return values.sm;
    return values.base;
  };
  const generatePath = (inset: number = 0) => {
    const { width: cardWidth, height: cardHeight } = size;
    const w = cardWidth - inset * 2;
    const h = cardHeight - inset * 2;
    const r = cornerRadius - inset;
    // Dynamically adjust notch size based on screen width
    const nWidth = getResponsiveValue(notch.width ?? { base: 250 });
    const nDepth = getResponsiveValue(notch.depth ?? { base: 40 });
    const nStart = (cardWidth - nWidth) / 2 - inset;
    const nEnd = nStart + nWidth;
    const nBottomRadius = notch.bottomRadius ?? 25;
    const nTopRadius = notch.topRadius ?? 25;
    return `
      M ${inset},${r + inset}
      Q ${inset},${inset} ${r + inset},${inset}
      L ${nStart + inset},${inset}
      Q ${nStart + nBottomRadius + inset},${inset} ${nStart + nBottomRadius + inset},${inset + nBottomRadius}
      L ${nStart + nBottomRadius + inset},${inset + nDepth - nTopRadius}
      Q ${nStart + nBottomRadius + inset},${inset + nDepth} ${nStart + nBottomRadius + nTopRadius + inset},${inset + nDepth}
      L ${nEnd - nBottomRadius - nTopRadius + inset},${inset + nDepth}
      Q ${nEnd - nBottomRadius + inset},${inset + nDepth} ${nEnd - nBottomRadius + inset},${inset + nDepth - nTopRadius}
      L ${nEnd - nBottomRadius + inset},${inset + nBottomRadius}
      Q ${nEnd - nBottomRadius + inset},${inset} ${nEnd + inset},${inset}
      L ${w - r},${inset}
      Q ${w + inset},${inset} ${w + inset},${r + inset}
      L ${w + inset},${h - r + inset}
      Q ${w + inset},${h + inset} ${w - r + inset},${h + inset}
      L ${r + inset},${h + inset}
      Q ${inset},${h + inset} ${inset},${h - r + inset}
    `.trim().replace(/\s+/g, " ");
  };
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        ref={ref}
        className={`relative ${widthClass} ${heightClass} transition-all duration-300`}
        style={{
          filter: `drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))`,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.filter = `drop-shadow(0 45px 65px ${shadowColor})`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.filter = `drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))`)
        }
      >
        {/* Border layer */}
        <div
          className={`absolute inset-0 ${borderColor}`}
          style={{
            clipPath: `path('${generatePath(0)}')`,
          }}
        />
        {/* Main card */}
        <div
          className={`relative bg-white  ${widthClass} ${heightClass}`}
          style={{
            clipPath: `path('${generatePath(borderWidth)}')`,
          }}
        >
          <div className={`${className}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
