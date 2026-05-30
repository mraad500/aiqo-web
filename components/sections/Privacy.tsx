"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const CARDS = [
  {
    title: "بياناتك لا تغادر جهازك",
    body: "معالجة على الجهاز عبر Apple Intelligence. الطلبات السحابية مغفّلة الهوية قبل الإرسال.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden>
        <path d="M16 4l10 4v7c0 7-5 11-10 13-5-2-10-6-10-13V8l10-4z" />
        <path d="M12 16l3 3 6-6" />
      </svg>
    ),
  },
  {
    title: "خصوصية أولاً",
    body: "نتعامل مع بياناتك بأعلى معايير Apple. HealthKit، Secure Enclave، تشفير من طرف لطرف.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden>
        <rect x="7" y="14" width="18" height="13" rx="3" />
        <path d="M11 14V9a5 5 0 0110 0v5" />
      </svg>
    ),
  },
  {
    title: "بدون إعلانات",
    body: "صفر إعلانات. صفر بيع بيانات. أبداً. نموذج عملنا اشتراك، ما بيع انتباهك.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden>
        <circle cx="16" cy="16" r="12" />
        <path d="M7.5 7.5l17 17" />
      </svg>
    ),
  },
  {
    title: "شفافية كاملة",
    body: "كل شي تشاركه، تقدر تشوفه وتحذفه بأي لحظة. تصدير كامل ببيانات منظمة متى ما طلبت.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden>
        <path d="M2 16s5-9 14-9 14 9 14 9-5 9-14 9S2 16 2 16z" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    ),
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-14 max-w-[640px] mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] font-medium text-ink-soft tabular-nums tracking-[0.12em]">
              <span className="text-ink">05</span>
              <span className="inline-block w-4 h-px bg-[color:var(--color-mint-vibrant)] mx-1.5 translate-y-[-3px]" />
              <span>07</span>
            </span>
            <span className="eyebrow !mb-0">الخصوصية</span>
          </div>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.04, letterSpacing: "-0.01em" }}
          >
            بياناتك. ملكك.
          </h2>
          <p className="text-[17px] text-ink-soft font-medium leading-[1.65] mt-5">
            صحتك مو سلعة. هذا التزامنا — مو شعار.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
              className="bg-white/60 backdrop-blur-xl border border-[color:var(--glass-stroke)] rounded-[28px] p-7 md:p-8 shadow-[var(--shadow-aiqo)] hover:shadow-[var(--shadow-lift)] transition-shadow duration-500"
            >
              <div className="text-[color:var(--color-mint-deep)] mb-5">{c.icon}</div>
              <h3 className="text-[19px] md:text-[20px] font-bold text-ink mb-2.5 leading-tight">
                {c.title}
              </h3>
              <p className="text-[15px] text-ink-soft leading-[1.65]">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
