"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Apple } from "lucide-react";
import { SCREENS } from "@/lib/assets";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PictureScreen } from "@/components/Picture";
import { siteConfig } from "@/lib/config";
import { MagneticButton } from "@/components/MagneticButton";
import { KineticHeading } from "@/components/KineticHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const phonesY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const { approved, url } = siteConfig.appStore;

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mesh" aria-hidden />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden />

      <div className="relative z-[2] mx-auto max-w-7xl w-full px-5 md:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
        {/* Text */}
        <motion.div style={{ y: headlineY, opacity }} className="order-2 lg:order-1 text-right">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow mb-5"
          >
            AIQO &nbsp;·&nbsp; مقرّها الإمارات
          </motion.p>

          <KineticHeading
            as="h1"
            className="font-display text-ink font-bold"
            style={{
              fontSize: "clamp(40px, 7.5vw, 96px)",
              lineHeight: 0.96,
              letterSpacing: "-0.015em",
            }}
          >
            {"ليس تطبيقاً.\nبُعدٌ جديد للصحة."}
          </KineticHeading>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
            className="text-[17px] md:text-[19px] text-ink-soft leading-[1.65] font-medium mt-7 max-w-[520px] mr-0 ml-auto"
            style={{ marginInlineStart: "auto", marginInlineEnd: 0 }}
          >
            كابتن حمودي يقرأ يومك، يتذكّر رحلتك، ويكون معاك بكل خطوة — بلهجتك.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.34, ease: EASE }}
            className="flex flex-wrap items-center gap-3 mt-9"
          >
            {approved && url ? (
              <MagneticButton
                href={url}
                className="btn-shine inline-flex items-center gap-2.5 bg-ink text-white rounded-full px-6 py-3.5 text-[15px] font-bold shadow-[0_16px_32px_-12px_rgba(10,10,10,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(10,10,10,0.5)] transition-shadow duration-500"
                aria-label="حمّل من App Store"
              >
                <Apple className="w-4 h-4" />
                حمّل من App Store
              </MagneticButton>
            ) : null}

            <MagneticButton
              href="#showcase"
              strength={0.15}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-[color:var(--glass-stroke)] text-ink rounded-full px-6 py-3.5 text-[15px] font-semibold hover:bg-white transition-colors"
            >
              شوف كيف يشتغل
              <span aria-hidden>↓</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-10 text-[13px] text-ink-soft font-medium"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[color:var(--color-mint-vibrant)]" />
              صُمم في الإمارات
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[color:var(--color-mint-vibrant)]" />
              متكامل مع Apple Health
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[color:var(--color-mint-vibrant)]" />
              خصوصيتك مقدّسة
            </span>
          </motion.div>
        </motion.div>

        {/* Phones */}
        <motion.div
          style={{ y: phonesY }}
          className="order-1 lg:order-2 relative flex justify-center items-center min-h-[520px] md:min-h-[660px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
            className="relative"
          >
            <div
              className="absolute inset-0 -z-10 blur-[140px] opacity-35 pointer-events-none"
              style={{ background: "var(--color-mint-soft)" }}
              aria-hidden
            />

            {/* Secondary — Captain chat (desktop only) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1.3, delay: 0.25, ease: EASE }}
              className="absolute inset-0 hidden lg:block lg:[transform:translateX(-28%)_rotate(-8deg)]"
            >
              <PhoneFrame size="md">
                <PictureScreen
                  asset={SCREENS.captainChat}
                  sizes="320px"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </PhoneFrame>
            </motion.div>

            {/* Primary — Home */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 lg:[transform:rotate(6deg)]"
            >
              <PhoneFrame size="md">
                <PictureScreen
                  asset={SCREENS.home}
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </PhoneFrame>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
