"use client";

import type { ReactNode } from "react";

type Size = "sm" | "md" | "lg";

const SIZE: Record<Size, { wrap: string; inner: string }> = {
  sm: { wrap: "w-[230px] h-[478px] md:w-[250px] md:h-[519px]", inner: "rounded-[44px]" },
  md: { wrap: "w-[280px] h-[580px] md:w-[320px] md:h-[660px]", inner: "rounded-[52px]" },
  lg: { wrap: "w-[320px] h-[662px] md:w-[360px] md:h-[743px]", inner: "rounded-[56px]" },
};

export function PhoneFrame({
  children,
  size = "md",
  className = "",
  style,
}: {
  children: ReactNode;
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
}) {
  const s = SIZE[size];
  return (
    <div className={`relative mx-auto ${s.wrap} ${className}`} style={style}>
      <div className="relative w-full h-full rounded-[52px] bg-gradient-to-b from-[#2a2a2a] to-[#0f0f0f] p-[3px] shadow-[0_40px_100px_-20px_rgba(10,10,10,0.32),_0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        <div className="absolute inset-[1px] rounded-[51px] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-20" />
        <div className={`relative w-full h-full ${s.inner} overflow-hidden bg-[#0a0a0a]`}>
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[88px] h-[26px] md:w-[100px] md:h-[28px] bg-black rounded-full z-10" />
          {children}
          {/* Glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent pointer-events-none z-10" />
        </div>
      </div>
      {/* Side buttons */}
      <div className="absolute -left-[1.5px] top-[120px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute -right-[1.5px] top-[88px] w-[3px] h-[28px] bg-[#2a2a2a] rounded-r-sm" />
      <div className="absolute -right-[1.5px] top-[124px] w-[3px] h-[32px] bg-[#2a2a2a] rounded-r-sm" />
    </div>
  );
}
