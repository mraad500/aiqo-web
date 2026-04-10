"use client";

import { motion } from "framer-motion";
import { PhoneGallery } from "./PhoneGallery";

interface FeatureBlockProps {
  alignment: "phone-start" | "phone-end";
  eyebrow: string;
  title: string;
  body: string;
  images: string[];
  interval?: number;
  priority?: boolean;
  children?: React.ReactNode;
}

export function FeatureBlock({
  alignment,
  eyebrow,
  title,
  body,
  images,
  interval,
  priority,
  children,
}: FeatureBlockProps) {
  const phoneFirst = alignment === "phone-start";

  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center py-16 md:py-28">
      <motion.div
        initial={{ opacity: 0, x: phoneFirst ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={phoneFirst ? "md:order-1" : "md:order-2"}
      >
        <PhoneGallery
          images={images}
          alt={title}
          interval={interval}
          priority={priority}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={phoneFirst ? "md:order-2" : "md:order-1"}
      >
        <p className="text-sm font-bold text-mint-600 tracking-wide mb-4">
          {eyebrow}
        </p>
        <h3 className="text-3xl md:text-[2.75rem] font-bold text-ink-900 mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-lg text-ink-700 font-medium leading-relaxed max-w-lg">
          {body}
        </p>
        {children}
      </motion.div>
    </div>
  );
}
