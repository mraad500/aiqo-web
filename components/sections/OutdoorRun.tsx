"use client";

import { motion } from "framer-motion";
import { SCREENS } from "@/lib/assets";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PictureScreen } from "@/components/Picture";
import { NumberBadge } from "@/components/NumberBadge";
import { KineticHeading } from "@/components/KineticHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

const STAT_CHIPS = [
  { label: "خريطة 3D", sub: "قمر صناعي" },
  { label: "نبض حيّ", sub: "من Apple Watch" },
  { label: "إعادة عرض المسار", sub: "تشاركها" },
  { label: "مجاني للجميع", sub: "بدون اشتراك" },
];

const STEPS = [
  {
    n: 1,
    asset: SCREENS.runStart,
    title: "ابدأ من كارديو",
    body: "النادي ← كارديو ← الجري بالخارج، واضغط «ابدأ الجري». الخريطة الثلاثية تتبعك من فوق.",
  },
  {
    n: 2,
    asset: SCREENS.runActive,
    title: "تتبّع حيّ",
    body: "مسافتك، سرعتك، نبضك من Apple Watch، والسعرات — كلها لحظية، والمسار يترسم وأنت تركض.",
  },
  {
    n: 3,
    asset: SCREENS.runSummary,
    title: "ملخّص تشاركه",
    body: "بنهاية الجلسة: مسارك كامل، الارتفاع، متوسط النبض، والسرعة — بتصميم جاهز للمشاركة.",
  },
];

export function OutdoorRun() {
  return (
    <section id="outdoor-run" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 20% 16%, rgba(94,205,183,0.15), transparent 60%), radial-gradient(50% 42% at 88% 86%, rgba(235,207,151,0.15), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* ── Hero: copy + chips | live-summary video ────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <NumberBadge n={4} total={8} />
              <span className="eyebrow !mb-0">الجري بالخارج</span>
            </div>

            <KineticHeading
              as="h2"
              className="font-display font-bold text-ink"
              style={{
                fontSize: "clamp(34px, 5vw, 60px)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
              }}
            >
              {"اركض.\nوالخريطة تركض وياك."}
            </KineticHeading>

            <p className="text-[18px] text-ink-soft leading-[1.65] mt-6 max-w-[540px]">
              جري بنظام GPS على خريطة قمر صناعي ثلاثية الأبعاد، مع كاميرا تتبعك وإحصائيات حيّة —
              مسافة، سرعة، نبض، سعرات، وارتفاع. وبالنهاية، ملخص كامل بمسارك تقدر تشاركه.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {STAT_CHIPS.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-baseline gap-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-[color:var(--glass-stroke)] px-3.5 py-1.5 shadow-[var(--shadow-aiqo)]"
                >
                  <span className="text-[13.5px] font-bold text-[color:var(--color-mint-deep)]">
                    {c.label}
                  </span>
                  <span className="text-[11.5px] text-ink-faint font-medium">{c.sub}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Live summary video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE }}
            className="order-1 lg:order-2 flex flex-col items-center"
          >
            <div className="relative">
              <div
                className="absolute -inset-10 -z-10 blur-3xl opacity-40 pointer-events-none"
                style={{ background: "var(--color-mint-soft)" }}
                aria-hidden
              />
              <PhoneFrame size="lg">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  poster={SCREENS.runSummary.defaultWebp}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="ملخص جلسة جري بالخارج مسجّل داخل تطبيق AiQo"
                >
                  <source src="/video/run-summary.mp4" type="video/mp4" />
                </video>
              </PhoneFrame>
            </div>
            <p className="text-[12.5px] text-ink-faint font-medium mt-5 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-mint-deep)]" aria-hidden />
              تسجيل حقيقي من داخل التطبيق — ملخّص جلسة جري
            </p>
          </motion.div>
        </div>

        {/* ── How it works: 3-step journey ──────────────────────────────── */}
        <div className="mt-24 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-center max-w-[560px] mx-auto mb-14"
          >
            <span className="eyebrow">الرحلة</span>
            <h3
              className="font-display font-bold text-ink mt-3"
              style={{ fontSize: "clamp(26px, 3.6vw, 40px)", lineHeight: 1.08, letterSpacing: "-0.01em" }}
            >
              من أول خطوة لين المشاركة.
            </h3>
            <p className="text-[16px] text-ink-soft leading-[1.65] mt-4">
              ثلاث لحظات: تبدأ، تتبع نفسك حيّاً، وتطلع بملخص يستاهل المشاركة.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 md:gap-6 max-w-5xl mx-auto">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div
                    className="absolute -inset-6 -z-10 blur-2xl opacity-30 pointer-events-none"
                    style={{ background: "var(--color-mint-soft)" }}
                    aria-hidden
                  />
                  <PhoneFrame size="sm">
                    <PictureScreen
                      asset={s.asset}
                      sizes="250px"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </PhoneFrame>
                </div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold text-ink"
                    style={{ background: "var(--color-sand)", border: "1px solid var(--color-mint-vibrant)" }}
                  >
                    {s.n}
                  </span>
                  <h4 className="font-bold text-ink text-[17px]">{s.title}</h4>
                </div>
                <p className="text-[14.5px] text-ink-soft leading-[1.6] max-w-[280px]">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
