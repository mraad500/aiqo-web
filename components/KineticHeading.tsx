"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Reveals each word of an Arabic headline with stagger on scroll-in. */
export function KineticHeading({
  children,
  className = "",
  style,
  as: Tag = "h2",
  delay = 0,
}: {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  // Preserve newlines: split on spaces but keep explicit breaks as their own token.
  const tokens = children.split(/(\n)/g).flatMap((chunk) =>
    chunk === "\n" ? ["\n"] : chunk.split(/(\s+)/g),
  );

  return (
    <Tag className={className} style={style}>
      <span className="sr-only">{children}</span>
      <span aria-hidden>
        {tokens.map((t, i) => {
          if (t === "\n") return <br key={i} />;
          if (/^\s+$/.test(t)) return <span key={i}>{t}</span>;
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.75,
                delay: delay + i * 0.05,
                ease: EASE,
              }}
              style={{ display: "inline-block" }}
            >
              {t as ReactNode}
            </motion.span>
          );
        })}
      </span>
    </Tag>
  );
}
