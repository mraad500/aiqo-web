"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { MagneticButton } from "@/components/MagneticButton";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FinalCTA() {
  const { approved, url } = siteConfig.appStore;

  return (
    <section id="download" className="relative py-28 md:py-40 overflow-hidden">
      <div className="aurora opacity-70" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div
          className="w-[800px] h-[800px] rounded-full blur-[200px] opacity-40"
          style={{ background: "var(--color-mint-soft)" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-display font-bold text-ink"
          style={{ fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.015em" }}
        >
          جاهز تتعرّف على{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(105deg, var(--color-mint-deep) 0%, var(--color-mint-vibrant) 50%, var(--color-sand-deep) 100%)",
            }}
          >
            كابتن حمودي
          </span>
          ؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-[17px] md:text-[19px] text-ink-soft mt-6 font-medium"
        >
          {approved && url ? "٧ أيام مجانية. بدون التزام." : "في انتظار موافقة Apple — الإطلاق قريباً."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-10"
        >
          {approved && url ? (
            <MagneticButton
              href={url}
              strength={0.35}
              className="btn-shine inline-flex items-center gap-2.5 bg-ink text-white rounded-full px-10 py-5 text-[17px] md:text-[19px] font-bold hover:bg-ink-2 transition-colors shadow-[var(--shadow-lift)]"
              aria-label="حمّل AiQo"
            >
              <Apple className="w-5 h-5" />
              حمّل AiQo
            </MagneticButton>
          ) : (
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[15px] md:text-[16px] font-semibold text-ink-soft"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--glass-stroke)",
              }}
              aria-label="قريباً على App Store"
            >
              <Apple className="w-4 h-4" />
              قريباً على App Store
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
