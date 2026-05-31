"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const VALUES: { icon: ReactNode; title: string; body: string }[] = [
  {
    title: "عربي أولاً",
    body: "بلهجتك وثقافتك وسياقك — مو تطبيق غربي مترجم.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
      </svg>
    ),
  },
  {
    title: "خصوصية مقدّسة",
    body: "بياناتك على جهازك، وتُجرَّد هويتك قبل أي طلب. بدون إعلانات.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l8 3v6c0 5-3.5 7.8-8 9-4.5-1.2-8-4-8-9V6l8-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "جوهر لا ضجّة",
    body: "مشاريع مدروسة طويلة المدى — مو موضات يومية عابرة.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l2.2 5.6L20 9l-4.2 3.7L17 19l-5-3.2L7 19l1.2-6.3L4 9l5.8-.4L12 3Z" />
      </svg>
    ),
  },
];

export function Story() {
  return (
    <section id="story" className="relative py-24 md:py-36 overflow-hidden">
      <div className="aurora opacity-50" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(60% 50% at 50% 100%, rgba(235,207,151,0.12), transparent 65%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="eyebrow">القصة</span>
          <h2
            className="font-display font-bold text-ink mt-3"
            style={{ fontSize: "clamp(32px, 4.6vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.012em" }}
          >
            ليش بنينا{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(105deg, var(--color-mint-deep), var(--color-mint-vibrant) 55%, var(--color-sand-deep))",
              }}
            >
              AiQo
            </span>
            ؟
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-7 space-y-5 text-[17px] md:text-[18px] text-ink-soft leading-[1.8]"
        >
          <p>
            AiQo بدأه{" "}
            <span className="text-ink font-semibold">محمد رعد</span> — مؤسّس عراقي 🇮🇶 يبني من
            الإمارات 🇦🇪 — بقناعة وحدة: الناطق بالعربي يستاهل رفيقاً صحياً يفهمه بلهجته، يحترم
            خصوصيته، ويُبنى <span className="text-ink font-semibold">له</span>، مو يُترجَم له تطبيق غربي.
          </p>
          <p>
            ما بنينا «متتبّع خطوات» ثاني. بنينا نظاماً صحياً حيوياً-رقمياً محوره الإنسان — جسمك هو
            المُدخل، والذكاء هو الواجهة، وكابتن حمودي هو الصوت اللي يمشي وياك كل يوم.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          className="mt-10 font-display font-bold text-ink"
          style={{ fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.3, letterSpacing: "-0.01em" }}
        >
          «الجوهر قبل الضجّة. الخصوصية قبل البيانات.{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(105deg, var(--color-mint-deep), var(--color-sand-deep))" }}
          >
            أنت قبل كل شي
          </span>
          .»
        </motion.blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 text-right">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
              className="bg-white/60 backdrop-blur-xl border border-[color:var(--glass-stroke)] rounded-[24px] p-6 shadow-[var(--shadow-aiqo)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-500"
            >
              <span
                className="inline-flex items-center justify-center w-11 h-11 rounded-2xl text-white mb-4"
                style={{ background: "linear-gradient(150deg, var(--color-mint-vibrant), var(--color-mint-deep))" }}
              >
                <span className="w-5 h-5" style={{ display: "block" }}>{v.icon}</span>
              </span>
              <h3 className="text-[17px] font-bold text-ink mb-1.5">{v.title}</h3>
              <p className="text-[14px] text-ink-soft leading-[1.6]">{v.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="inline-flex items-center gap-3 mt-12 rounded-full bg-white/60 backdrop-blur-xl border border-[color:var(--glass-stroke)] px-5 py-3 shadow-[var(--shadow-aiqo)]"
        >
          <img src="/brand/icon/180.png" alt="" width={30} height={30} className="rounded-[8px]" draggable={false} />
          <span className="text-[14.5px] text-ink-soft font-medium">
            <span className="text-ink font-bold">محمد رعد</span> · مؤسّس AiQo
            <span aria-hidden> 🇮🇶</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
