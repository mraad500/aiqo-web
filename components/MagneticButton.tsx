"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  disabled?: boolean;
  "aria-label"?: string;
  tag?: "a" | "button";
  target?: string;
  rel?: string;
};

/** Wraps children in a container that gently pulls toward the cursor. */
export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.25,
  disabled,
  tag,
  target,
  rel,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.5 });

  const handleMove = (e: React.MouseEvent) => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = tag ?? (href ? "a" : "button");
  const MotionTag = motion[Tag as "a" | "button"];

  return (
    <MotionTag
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
      disabled={tag === "button" ? disabled : undefined}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
