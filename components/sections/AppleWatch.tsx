"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WatchFrame } from "@/components/WatchFrame";
import { WatchDailyGoal, WatchWorkouts } from "@/components/WatchScreens";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AppleWatch() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const w1Y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const w2Y = useTransform(scrollYProgress, [0, 1], [-10, 40]);

  return (
    <section
      id="watch"
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, #0A0A0A 18%, #0A0A0A 82%, transparent 100%)",
      }}
    >
      {/* Ambient mint glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(55% 40% at 20% 60%, rgba(94,205,183,0.12) 0%, transparent 60%), radial-gradient(45% 35% at 85% 25%, rgba(235,207,151,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center [&>*]:min-w-0">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="order-2 lg:order-1 text-white"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] font-medium tabular-nums tracking-[0.12em] text-white/60">
              <span className="text-white">04</span>
              <span className="inline-block w-4 h-px bg-[color:var(--color-mint-vibrant)] mx-1.5 translate-y-[-3px]" />
              <span>07</span>
            </span>
            <span
              className="text-[13px] font-semibold"
              style={{ color: "var(--color-mint-soft)" }}
            >
              Apple Watch
            </span>
          </div>

          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(36px, 5.2vw, 68px)",
              lineHeight: 1,
              letterSpacing: "-0.015em",
            }}
          >
            معاك على معصمك.
          </h2>

          <p
            className="text-white/70 font-medium leading-[1.65] mt-6 max-w-[520px]"
            style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
          >
            AiQo على Apple Watch — دوائر نشاطك الحيّة، قائمة تمارين مسبقة، ومحادثة سريعة مع كابتن حمودي. بيانات جسدك تتدفّق مباشرةً إلى التطبيق.
          </p>

          {/* Feature chips */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[520px]">
            {[
              { t: "هدف يومي حيّ", s: "Deep metric rings" },
              { t: "تمارين بلمسة", s: "Workouts shortcut" },
              { t: "نبض في الوقت الفعلي", s: "Real-time HR" },
              { t: "كابتن على معصمك", s: "Voice check-ins" },
            ].map((f) => (
              <li
                key={f.t}
                className="rounded-[18px] px-4 py-3 border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-white font-semibold text-[14px]">{f.t}</p>
                <p className="text-white/50 text-[11px] font-medium mt-0.5">
                  {f.s}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Watches */}
        <div className="order-1 lg:order-2 relative flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6 md:gap-10 min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: EASE }}
            style={{ y: w1Y }}
          >
            <WatchFrame size="md">
              <WatchDailyGoal percent={33} />
            </WatchFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            style={{ y: w2Y }}
          >
            <WatchFrame size="md">
              <WatchWorkouts />
            </WatchFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
