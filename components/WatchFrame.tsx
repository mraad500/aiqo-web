"use client";

import type { ReactNode } from "react";

/**
 * Apple Watch Series 10 (46mm) shell.
 * Natural pixel dimensions ~ 240 × 286 (shell) with 208 × 250 screen.
 */
export function WatchFrame({
  children,
  className = "",
  size = "md",
  style,
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}) {
  const W =
    size === "sm" ? 220 : size === "lg" ? 320 : 270;
  const H = W * 1.2;
  const screenInset = W * 0.055;
  const screenRadius = W * 0.22;

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: W, height: H, ...style }}
    >
      {/* Digital Crown */}
      <div
        className="absolute rounded-[4px] bg-gradient-to-b from-[#2b2b2b] to-[#111]"
        style={{
          right: -6,
          top: H * 0.28,
          width: 12,
          height: W * 0.12,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
        aria-hidden
      />
      {/* Side button */}
      <div
        className="absolute rounded-[3px] bg-gradient-to-b from-[#262626] to-[#0e0e0e]"
        style={{
          right: -5,
          top: H * 0.48,
          width: 10,
          height: W * 0.18,
        }}
        aria-hidden
      />

      {/* Titanium frame */}
      <div
        className="relative w-full h-full"
        style={{
          background:
            "linear-gradient(145deg, #1a1a1c 0%, #0a0a0a 50%, #1a1a1c 100%)",
          borderRadius: screenRadius + 8,
          padding: screenInset,
          boxShadow:
            "0 30px 80px -20px rgba(10,10,10,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 -2px 8px rgba(0,0,0,0.3) inset",
        }}
      >
        {/* Outer bezel highlight */}
        <div
          className="absolute inset-[1px] pointer-events-none"
          style={{
            borderRadius: screenRadius + 7,
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.08), transparent 40%)",
          }}
          aria-hidden
        />

        {/* Screen */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            borderRadius: screenRadius,
            background: "#000",
          }}
        >
          {children}

          {/* Subtle glass reflection */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.035) 0%, transparent 40%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
