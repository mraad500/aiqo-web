"use client";

import { motion } from "framer-motion";
import { Apple, Crown, HeartPulse, Check } from "lucide-react";
import { siteConfig } from "@/lib/config";

const EASE = [0.22, 1, 0.36, 1] as const;

const PRO_FEATURES = [
  "كل ما في Max",
  "ذاكرة موسّعة: ٥٠٠ ذكرى بدل ٢٠٠",
  "نموذج ذكاء أقوى للتحليل والتخطيط",
  "صوت كابتن حمودي Premium",
  "Insights أسبوعية مخصصة",
  "خطط تمارين متعددة الأسابيع + تحليل فورمة بالتصوير",
  "دخول كامل إلى Peaks والتحديات الأسطورية",
  "ميزات جديدة قبل Max بأسابيع",
];

const MAX_FEATURES = [
  "كابتن حمودي — محادثة كاملة بلهجتك",
  "لوحة صحتك اليومية من Apple Health",
  "النادي، التمارين، والتحديات الأساسية",
  "Apple Watch companion",
  "تتبع النوم، الماء، الخطوات، السعرات، المسافة",
  "My Vibe / DJ حمودي",
  "إنجازات، badges، وXP",
];

export function Pricing() {
  const { approved, url } = siteConfig.appStore;
  const ctaHref = approved && url ? url : "";

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[140px] opacity-20"
          style={{ background: "var(--color-sand)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-14 max-w-[620px] mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] font-medium text-ink-soft tabular-nums tracking-[0.12em]">
              <span className="text-ink">07</span>
              <span className="inline-block w-4 h-px bg-[color:var(--color-mint-vibrant)] mx-1.5 translate-y-[-3px]" />
              <span>08</span>
            </span>
            <span className="eyebrow !mb-0">الأسعار</span>
          </div>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.04, letterSpacing: "-0.01em" }}
          >
            خطة لكل هدف.
          </h2>
          <p className="text-[16px] text-ink-soft font-medium mt-4">
            ٧ أيام تجربة مجانية · بدون بطاقة ائتمان · إلغاء بأي وقت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 items-stretch">
          {/* Pro card (featured) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="gold-shimmer relative rounded-[40px] p-[1.5px] overflow-hidden"
            style={{
              background:
                "linear-gradient(140deg, var(--color-sand) 0%, var(--color-sand-deep) 40%, rgba(235,207,151,0.3) 100%)",
            }}
          >
            <div
              className="relative h-full rounded-[38.5px] p-8 md:p-10 text-white"
              style={{ background: "var(--color-ink-2)" }}
            >
              <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[11px] font-bold text-ink tracking-wide" style={{ background: "var(--color-sand)" }}>
                الأكثر اختياراً
              </div>

              <div className="flex items-center gap-2 mt-6">
                <Crown className="w-5 h-5" style={{ color: "var(--color-sand)" }} />
                <h3 className="text-[22px] md:text-[26px] font-bold">AiQo Intelligence Pro</h3>
              </div>
              <p className="text-[14px] mt-1.5" style={{ color: "var(--color-sand-soft)" }}>
                الأقوى لكسر الأرقام والتحليل
              </p>

              <div className="mt-7 flex items-baseline gap-2">
                <span className="font-display font-bold tabular-nums" style={{ fontSize: "clamp(44px, 6vw, 56px)", lineHeight: 1 }}>
                  $19.99
                </span>
                <span className="text-[17px]" style={{ color: "var(--color-sand-soft)" }}>
                  /شهرياً
                </span>
              </div>
              <p className="text-[13px] text-white/60 mt-2">
                ٧ أيام مجانية. يتجدّد تلقائياً.
              </p>

              <div className="h-px bg-white/10 my-7" />

              <ul className="space-y-3.5">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] text-white/90 leading-[1.55]">
                    <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--color-sand)" }} strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {approved && ctaHref ? (
                <a
                  href={ctaHref}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-[15px] font-bold text-ink transition-all hover:brightness-105"
                  style={{ background: "var(--color-sand)" }}
                >
                  <Apple className="w-4 h-4" />
                  ابدأ التجربة المجانية
                </a>
              ) : (
                <div
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-[14px] font-semibold"
                  style={{
                    background: "rgba(235,207,151,0.12)",
                    color: "var(--color-sand-soft)",
                    border: "1px solid rgba(235,207,151,0.18)",
                  }}
                  aria-label="قريباً على App Store"
                >
                  <Apple className="w-4 h-4" />
                  قريباً على App Store
                </div>
              )}
            </div>
          </motion.div>

          {/* Max card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="relative rounded-[40px] bg-white border border-[color:var(--stroke)] p-8 md:p-10 shadow-[var(--shadow-aiqo)]"
          >
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-[color:var(--color-mint-vibrant)]" />
              <h3 className="text-[22px] md:text-[24px] font-bold text-ink">AiQo Max</h3>
            </div>
            <p className="text-[14px] text-ink-soft mt-1.5">
              كل أساسيات AiQo لحياتك اليومية
            </p>

            <div className="mt-7 flex items-baseline gap-2">
              <span className="font-display font-bold text-ink tabular-nums" style={{ fontSize: "clamp(38px, 5vw, 44px)", lineHeight: 1 }}>
                $9.99
              </span>
              <span className="text-[16px] text-ink-soft">/شهرياً</span>
            </div>
            <p className="text-[13px] text-ink-faint mt-2">٧ أيام مجانية.</p>

            <div className="h-px bg-[color:var(--stroke)] my-7" />

            <ul className="space-y-3.5">
              {MAX_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14.5px] text-ink leading-[1.55]">
                  <Check className="w-4 h-4 mt-1 shrink-0 text-[color:var(--color-mint-vibrant)]" strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {approved && ctaHref ? (
              <a
                href={ctaHref}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-[15px] font-bold text-ink transition-all hover:brightness-95"
                style={{ background: "var(--color-mint-vibrant)" }}
              >
                <Apple className="w-4 h-4" />
                ابدأ التجربة المجانية
              </a>
            ) : (
              <div
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-[14px] font-semibold text-ink-soft"
                style={{
                  background: "color-mix(in srgb, var(--color-mint-vibrant) 10%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--color-mint-vibrant) 22%, transparent)",
                }}
                aria-label="قريباً على App Store"
              >
                <Apple className="w-4 h-4" />
                قريباً على App Store
              </div>
            )}
          </motion.div>
        </div>

        <p className="text-center text-[12.5px] text-ink-faint mt-8 font-medium">
          {approved ? "الاشتراكات تُدار عبر متجر التطبيقات." : "في انتظار موافقة Apple · التسعير النهائي قد يتغيّر."}
        </p>
      </div>
    </section>
  );
}
