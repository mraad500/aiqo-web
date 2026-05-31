"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Inline icons ──────────────────────────────────────────────────────── */
const I = {
  captain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.4A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M12 6.5l1 2.6 2.7.3-2 1.8.6 2.7-2.3-1.4-2.3 1.4.6-2.7-2-1.8 2.7-.3 1-2.6Z" />
    </svg>
  ),
  learn: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H11v15H5.5A2.5 2.5 0 0 0 3 20.5v-15Z" />
      <path d="M21 5.5A2.5 2.5 0 0 0 18.5 3H13v15h5.5a2.5 2.5 0 0 1 2.5 2.5v-15Z" />
      <path d="M16.5 8.5l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6.6-1.5Z" />
    </svg>
  ),
  run: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  sleep: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="6" width="18" height="13" rx="3" />
      <circle cx="12" cy="12.5" r="3.2" />
      <path d="M8 6l1.2-2.2h5.6L16 6" />
    </svg>
  ),
  peaks: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 19h18L14.5 7l-3.2 5.4L9 9l-6 10Z" />
    </svg>
  ),
  vibe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 3v6c0 5-3.5 7.8-8 9-4.5-1.2-8-4-8-9V6l8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

type Cell = {
  icon: ReactNode;
  title: string;
  body: string;
  span?: string;
  tint?: "mint" | "sand";
  big?: boolean;
};

const CELLS: Cell[] = [
  {
    icon: I.captain,
    title: "كابتن حمودي",
    body: "مدرّبك بالذكاء الاصطناعي — يحجي بلهجتك، يتذكّر رحلتك، ويقرأ بياناتك الصحية. مو مساعد عام، شخصية.",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    tint: "mint",
    big: true,
  },
  { icon: I.learn, title: "شرارة التعلم", body: "أكمل كورساً مجانياً، وتحقّق من شهادتك على جهازك، واكسب +1,000 نقطة." },
  { icon: I.run, title: "الجري بالخارج", body: "GPS على خريطة ثلاثية الأبعاد، إحصائيات حيّة، وملخّص تشاركه.", tint: "sand" },
  { icon: I.sleep, title: "النوم الذكي", body: "تحليل نوم على الجهاز + استيقاظ ذكي باللحظة الصح.", tint: "sand" },
  { icon: I.kitchen, title: "المطبخ", body: "صوّر ثلاجتك ← خطة وجبات بثواني من المكوّنات عندك." },
  {
    icon: I.peaks,
    title: "قِمَم",
    body: "تحديات أسطورية مُبرمَجة من 4 إلى 16 أسبوعاً — تتكيّف مع فسيولوجيتك أسبوعياً.",
    span: "sm:col-span-2",
    tint: "sand",
  },
  { icon: I.vibe, title: "My Vibe", body: "موسيقى Spotify تتكيّف مع حالتك الحيوية ووقت يومك." },
  { icon: I.shield, title: "خصوصيتك مقدّسة", body: "معالجة على الجهاز، وتجريد الهوية قبل أي طلب سحابي. بدون إعلانات." },
];

export function BentoGrid() {
  return (
    <section id="system" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 0%, rgba(94,205,183,0.10), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center max-w-[640px] mx-auto mb-14"
        >
          <span className="eyebrow">النظام الكامل</span>
          <h2
            className="font-display font-bold text-ink mt-3"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.04, letterSpacing: "-0.01em" }}
          >
            كل ما تحتاجه لصحتك.{" "}
            <span className="text-ink-soft">بمكان واحد.</span>
          </h2>
          <p className="text-[17px] text-ink-soft leading-[1.65] mt-5">
            نظام واحد متكامل — من الكابتن لتحليل نومك، من مطبخك لتحدّياتك. كله يشتغل سوا، حواليك أنت.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 [grid-auto-flow:dense]">
          {CELLS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: (i % 4) * 0.06, ease: EASE }}
              className={`group relative overflow-hidden rounded-[26px] border border-[color:var(--glass-stroke)] bg-white/60 backdrop-blur-xl p-7 shadow-[var(--shadow-aiqo)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 transition-all duration-500 ${c.span ?? ""} ${c.big ? "flex flex-col justify-between min-h-[260px]" : ""}`}
            >
              <div
                className="absolute -inset-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    c.tint === "sand"
                      ? "radial-gradient(70% 60% at 80% 0%, rgba(235,207,151,0.22), transparent 70%)"
                      : "radial-gradient(70% 60% at 80% 0%, rgba(94,205,183,0.18), transparent 70%)",
                }}
                aria-hidden
              />
              <div
                className={`flex items-center justify-center rounded-2xl ${c.big ? "w-14 h-14" : "w-11 h-11"} text-white`}
                style={{
                  background:
                    c.tint === "sand"
                      ? "linear-gradient(150deg, var(--color-sand), var(--color-sand-deep))"
                      : "linear-gradient(150deg, var(--color-mint-vibrant), var(--color-mint-deep))",
                }}
              >
                <span className={c.big ? "w-7 h-7" : "w-5 h-5"} style={{ display: "block" }}>
                  {c.icon}
                </span>
              </div>
              <div className={c.big ? "mt-auto pt-6" : "mt-5"}>
                <h3 className={`font-bold text-ink ${c.big ? "text-[24px]" : "text-[18px]"} mb-2 leading-tight`}>
                  {c.title}
                </h3>
                <p className={`text-ink-soft leading-[1.6] ${c.big ? "text-[15.5px] max-w-[420px]" : "text-[14px]"}`}>
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
