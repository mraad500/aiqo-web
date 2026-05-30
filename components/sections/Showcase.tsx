"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCREENS, type ScreenAsset } from "@/lib/assets";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PictureScreen } from "@/components/Picture";

const EASE = [0.22, 1, 0.36, 1] as const;

type Panel = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  asset: ScreenAsset;
  extra?: React.ReactNode;
};

const PeaksTimeline = () => (
  <div className="mt-7 space-y-4">
    {[
      {
        n: "1",
        title: "قياس المحرك",
        latin: "Engine Test",
        body: "فحص دقيق للياقتك عبر Apple Watch — نحدد نقطة انطلاقك الحقيقية.",
      },
      {
        n: "2",
        title: "خطة حية تتنفس معك",
        latin: "Dynamic AI Plan",
        body: "لا جداول ثابتة. خطتك تُكتب أسبوعياً، مبنية على بياناتك الفعلية.",
      },
      {
        n: "3",
        title: "ضبط البوصلة الأسبوعي",
        latin: "Weekly Review",
        body: "نهاية كل أسبوع، مراجعة مع الكابتن — ثم خطة الأسبوع التالي.",
      },
    ].map((s) => (
      <div key={s.n} className="flex gap-3.5">
        <div
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold text-ink"
          style={{
            background: "var(--color-sand)",
            border: "1px solid var(--color-mint-vibrant)",
          }}
        >
          {s.n}
        </div>
        <div>
          <p className="font-bold text-ink text-[15px]">
            {s.title}
            <span className="text-ink-soft font-medium text-[12px] ms-2">
              {s.latin}
            </span>
          </p>
          <p className="text-[14px] text-ink-soft leading-relaxed mt-1">
            {s.body}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const PANELS: Panel[] = [
  {
    id: "home",
    eyebrow: "الرئيسية",
    title: "يومك بنظرة واحدة.",
    body: "كل اللي يهمك بصحتك — خطواتك، نومك، طاقتك — مرتّب بهدوء بمكان واحد.",
    asset: SCREENS.home,
  },
  {
    id: "sleep",
    eyebrow: "النوم",
    title: "نوم أعمق. صحوة أذكى.",
    body: "تحليل لنومك بكل تفاصيله، مع صحوة باللحظة الصح — بدون ما تصحى متعب.",
    asset: SCREENS.sleepHero,
  },
  {
    id: "kitchen",
    eyebrow: "المطبخ",
    title: "كل وجبة تخدم هدفك.",
    body: "صوّر ثلاجتك، ويبنيلك AiQo خطة وجبات بثواني من المكوّنات عندك.",
    asset: SCREENS.kitchenScan,
  },
  {
    id: "peaks",
    eyebrow: "قِمَم",
    title: "أرقام قياسية، نكسرها بذكاء بايولوجي.",
    body: "اختر رقماً قياسياً، ويبنيلك كابتن حمودي مشروع 16 أسبوعاً يتكيّف مع فسيولوجيتك.",
    asset: SCREENS.peaksPlan,
    extra: <PeaksTimeline />,
  },
  {
    id: "quests",
    eyebrow: "التحديات اليومية",
    title: "تقدّم يومي. مكافآت حقيقية.",
    body: "مهام صغيرة كل يوم تخليك تتحرك. تنجزها، تكسب نقاط، وترتفع خطوة خطوة.",
    asset: SCREENS.dailyQuest,
  },
  {
    id: "workout",
    eyebrow: "التمارين",
    title: "كل تمرين، مفصّل لك.",
    body: "خطط تمرين تتكيّف مع مستواك، ومعاك كابتن يدرّبك صوتياً وأنت تتمرّن.",
    asset: SCREENS.workout,
  },
  {
    id: "vibe",
    eyebrow: "My Vibe",
    title: "الموسيقى الصح بالوقت الصح.",
    body: "طاقة الموسيقى تتغيّر وية إيقاع يومك — هدوء الصبح، دفعة الظهر، استرخاء الليل.",
    asset: SCREENS.myVibe,
  },
];

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const panels = el.querySelectorAll<HTMLElement>("[data-panel]");
    if (!panels.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        let bestIdx = -1;
        let bestRatio = 0;
        entries.forEach((e) => {
          const idx = Number((e.target as HTMLElement).dataset.idx);
          if (!Number.isFinite(idx)) return;
          if (e.isIntersecting && e.intersectionRatio > bestRatio) {
            bestIdx = idx;
            bestRatio = e.intersectionRatio;
          }
        });
        if (bestIdx >= 0) setActive(bestIdx);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, []);

  const currentAsset = PANELS[active].asset;

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] font-medium text-ink-soft tabular-nums tracking-[0.12em]">
              <span className="text-ink">02</span>
              <span className="inline-block w-4 h-px bg-[color:var(--color-mint-vibrant)] mx-1.5 translate-y-[-3px]" />
              <span>07</span>
            </span>
            <span className="eyebrow !mb-0">التطبيق</span>
          </div>
          <h2
            className="font-display font-bold text-ink max-w-[680px] mx-auto"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            AiQo بعينك. <span className="text-ink-soft">كل شاشة مدروسة.</span>
          </h2>
        </div>

        {/* Desktop: sticky showcase */}
        <div className="hidden lg:grid grid-cols-[1fr_1.1fr] gap-16 relative">
          {/* Text column */}
          <div className="space-y-[45vh] py-[20vh]">
            {PANELS.map((p, i) => (
              <div key={p.id} data-panel data-idx={i} className="min-h-[40vh]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] font-medium text-ink-soft tabular-nums tracking-[0.12em]">
                    <span className="text-ink">{(i + 1).toString().padStart(2, "0")}</span>
                    <span className="inline-block w-3 h-px bg-[color:var(--color-mint-vibrant)] mx-1.5 translate-y-[-3px]" />
                    <span>{PANELS.length.toString().padStart(2, "0")}</span>
                  </span>
                  <span className="eyebrow !mb-0">{p.eyebrow}</span>
                </div>
                <h3
                  className="font-display font-bold text-ink mb-4"
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 44px)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-[17px] text-ink-soft leading-[1.65] max-w-[460px]">
                  {p.body}
                </p>
                {p.extra}
              </div>
            ))}
          </div>

          {/* Sticky phone — wrapper MUST stretch (no items-start) so sticky has room */}
          <div className="relative h-full">
            <div className="sticky top-[14vh] flex items-center justify-center gap-6">
              {/* Progress rail */}
              <ol className="flex flex-col gap-2.5">
                {PANELS.map((p, i) => (
                  <li key={p.id} className="flex items-center gap-3">
                    <span
                      className="progress-dot"
                      data-active={active === i}
                    />
                    <span
                      className={`text-[12px] font-medium tabular-nums transition-all duration-300 ${
                        active === i ? "text-ink opacity-100" : "text-ink-soft opacity-50"
                      }`}
                      style={{ minWidth: "80px" }}
                    >
                      {p.eyebrow}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="relative">
                <div
                  className="absolute -inset-10 -z-10 blur-3xl opacity-35 pointer-events-none"
                  style={{ background: "var(--color-mint-soft)" }}
                  aria-hidden
                />
                <PhoneFrame size="md">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={currentAsset.defaultWebp}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="absolute inset-0"
                    >
                      <PictureScreen
                        asset={currentAsset}
                        sizes="320px"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: stacked */}
        <div className="lg:hidden space-y-20">
          {PANELS.map((p, i) => (
            <div key={p.id} className="flex flex-col items-center text-center">
              <div className="mb-8">
                <PhoneFrame size="sm">
                  <PictureScreen
                    asset={p.asset}
                    sizes="280px"
                    priority={i === 0}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </PhoneFrame>
              </div>
              <p className="eyebrow mb-3">{p.eyebrow}</p>
              <h3
                className="font-display font-bold text-ink mb-3"
                style={{ fontSize: "clamp(24px, 5vw, 32px)", lineHeight: 1.15 }}
              >
                {p.title}
              </h3>
              <p className="text-[16px] text-ink-soft leading-relaxed max-w-[420px]">
                {p.body}
              </p>
              {p.extra && <div className="w-full max-w-[460px] text-right">{p.extra}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
