import React from "react";

export interface NotchConfig {
  width?: { base: number; sm?: number; md?: number; lg?: number };
  depth?: { base: number; sm?: number; md?: number; lg?: number };
  topLeft?: number;
  topRight?: number;
  bottomLeft?: number;
  bottomRight?: number;
}

interface NotchedCardProps {
  notch?: NotchConfig;
  children?: React.ReactNode;
  borderWidth?: number;
  borderColor?: string;
  shadowColor?: string;
  className?: string;
  widthClass?: string;
  heightClass?: string;
}

export default function SideNotchCard({
  notch = {
    width: { base: 0, sm: 0, md: 0, lg: 0 },
    depth: { base: 0, sm: 0, md: 0, lg: 0 },
    topLeft: 30,
    topRight: 0,
    bottomLeft: 20,
    bottomRight: 20,
  },
  children,
  borderWidth = 3,
  borderColor = "bg-[#d7e3ff]",
  shadowColor = "#d7e3ff",
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

  const getResponsiveValue = (values: { base: number; sm?: number; md?: number; lg?: number }) => {
    const w = window.innerWidth;
    if (w >= 1024 && values.lg !== undefined) return values.lg;
    if (w >= 768 && values.md !== undefined) return values.md;
    if (w >= 640 && values.sm !== undefined) return values.sm;
    return values.base;
  };

  const generatePath = (inset: number = 0) => {
    const { width: cardWidth, height: cardHeight } = size;
    const w = cardWidth - inset * 2;
    const h = cardHeight - inset * 2;
    const r = cornerRadius - inset;
    const notchRadius = r; // Use same radius as card corners for the reverse curve

    const nWidth = getResponsiveValue(notch.width ?? { base: 80 });
    const nDepth = getResponsiveValue(notch.depth ?? { base: 80 });
    const nTopLeft = notch.topLeft ?? 20;
    const nTopRight = notch.topRight ?? 20;
    const nBottomLeft = notch.bottomLeft ?? 20;
    const nBottomRight = notch.bottomRight ?? 20;

    return `
      M ${nDepth + inset},${nTopRight + inset}
      L ${nDepth + inset},${nWidth - nBottomRight + inset}
      Q ${nDepth + inset},${nWidth + inset} ${nDepth - nBottomRight + inset},${nWidth + inset}
      L ${nBottomLeft + inset},${nWidth + inset}
      Q ${inset},${nWidth + inset} ${inset},${nWidth + nBottomLeft + inset}
      L ${inset},${h - r + inset}
      Q ${inset},${h + inset} ${r + inset},${h + inset}
      L ${w - r + inset},${h + inset}
      Q ${w + inset},${h + inset} ${w + inset},${h - r + inset}
      L ${w + inset},${r + inset}
      Q ${w + inset},${inset} ${w - r + inset},${inset}
      L ${nDepth + notchRadius + inset},${inset}
      Q ${nDepth + inset},${inset} ${nDepth + inset},${notchRadius + inset}
      Q ${nDepth + inset},${nTopRight + inset} ${nDepth + inset},${nTopRight + inset}
      Z
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
          (e.currentTarget.style.filter = `drop-shadow(0 15px 25px ${shadowColor})`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.filter = `drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))`)
        }
      >
        <div
          className={`absolute inset-0 ${borderColor}`}
          style={{
            clipPath: `path('${generatePath(0)}')`,
          }}
        />

        <div
          className={`relative bg-white ${widthClass} ${heightClass}`}
          style={{
            clipPath: `path('${generatePath(borderWidth)}')`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}