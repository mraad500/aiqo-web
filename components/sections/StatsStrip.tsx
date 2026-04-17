"use client";

import { motion } from "framer-motion";
import { RollingNumber } from "@/components/RollingNumber";

const EASE = [0.22, 1, 0.36, 1] as const;

type Stat = {
  value: number | "∞";
  suffix?: string;
  unit: string;
  title: string;
  body: string;
};

const STATS: Stat[] = [
  {
    value: 16,
    unit: "أسبوع",
    title: "رحلة التحديات الأسطورية",
    body: "مشاريع طويلة مدروسة — مو تحديات يومية عابرة.",
  },
  {
    value: 22,
    suffix: "+",
    unit: "مستوى",
    title: "نظام تطوّر مدروس",
    body: "كل خطوة ترفع مستواك، وتقرّبك من النسخة الأقوى منك.",
  },
  {
    value: "∞",
    unit: "ذكريات",
    title: "كابتن يتذكّرك",
    body: "كل ما تحچي معاه، يصير أقرب إلك وأذكى بفهمك.",
  },
];


export function StatsStrip() {
  return (
    <section
      className="relative py-24 md:py-32"
      style={{ background: "color-mix(in srgb, var(--color-mint-soft) 22%, transparent)" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-14 max-w-[620px] mx-auto"
        >
          <p className="eyebrow mb-4">أرقام حقيقية</p>
          <h2
            className="font-display font-bold text-ink"
            style={{
              fontSize: "clamp(30px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            تقدّم تشوفه، مو تسمع عنه.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
              className="bg-white/60 backdrop-blur-xl border border-[color:var(--glass-stroke)] rounded-[28px] p-8 text-center shadow-[var(--shadow-aiqo)]"
            >
              <p
                className="font-display font-bold text-ink tabular-nums"
                style={{
                  fontSize: "clamp(64px, 8vw, 96px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value === "∞" ? (
                  <span>∞</span>
                ) : (
                  <RollingNumber to={s.value} suffix={s.suffix ?? ""} />
                )}
              </p>
              <p className="eyebrow mt-3">{s.unit}</p>
              <h3 className="text-[17px] font-bold text-ink mt-5 mb-2">
                {s.title}
              </h3>
              <p className="text-[14.5px] text-ink-soft leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
