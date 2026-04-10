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
}

export function FeatureBlock({
  alignment,
  eyebrow,
  title,
  body,
  images,
  interval,
  priority,
}: FeatureBlockProps) {
  const phoneFirst = alignment === "phone-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid md:grid-cols-2 gap-12 md:gap-20 items-center py-16 md:py-28"
    >
      <div className={phoneFirst ? "md:order-1" : "md:order-2"}>
        <PhoneGallery
          images={images}
          alt={title}
          interval={interval}
          priority={priority}
        />
      </div>

      <div className={phoneFirst ? "md:order-2" : "md:order-1"}>
        <p className="text-sm font-bold text-mint-600 tracking-wide mb-4">
          {eyebrow}
        </p>
        <h3 className="text-3xl md:text-[2.75rem] font-bold text-ink-900 mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-lg text-ink-700 font-medium leading-relaxed max-w-lg">
          {body}
        </p>
      </div>
    </motion.div>
  );
}
