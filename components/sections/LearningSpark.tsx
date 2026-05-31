"use client";

import { motion } from "framer-motion";
import { SCREENS } from "@/lib/assets";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PictureScreen } from "@/components/Picture";
import { NumberBadge } from "@/components/NumberBadge";
import { KineticHeading } from "@/components/KineticHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Real data, pulled straight from the app ──────────────────────────── */

const STAT_CHIPS = [
  { label: "+1,000 XP", sub: "عند الإكمال", gold: true },
  { label: "مجاني للجميع", sub: "بدون اشتراك" },
  { label: "تحقّق على جهازك", sub: "بدون سيرفر" },
  { label: "كورسات مختارة", sub: "بعناية" },
];

const BENEFITS = [
  "يرفع ثقتك بنفسك عبر إنجاز معرفي واضح.",
  "يزرع عادة التعلّم داخل مسار AiQo من البداية.",
  "يحوّلك من متلقٍّ إلى شخص يتقدّم بوعي.",
];

const STEPS = [
  {
    n: 1,
    asset: SCREENS.lsBattle,
    title: "افتحها من معركة",
    body: "من تبويب معركة، المرحلة الأولى «الاستيقاظ» — اختَر تحدّي شرارة التعلم.",
  },
  {
    n: 2,
    asset: SCREENS.lsCourses,
    title: "اختر كورسك",
    body: "كورسات مجانية مختارة بعناية: إدراك بالعربي، أو Coursera بالإنجليزي.",
  },
  {
    n: 3,
    asset: SCREENS.lsSelect,
    title: "أكمل الكورس",
    body: "افتح المصدر، أكمل الكورس بالكامل، وارجع للتطبيق تثبّت تقدّمك.",
  },
  {
    n: 4,
    asset: SCREENS.lsProof,
    title: "أثبت الإنجاز",
    body: "ارفع صورة الشهادة أو الصق رابطها — والتحقّق يصير على جهازك.",
  },
];

const COURSES = [
  {
    title: "التخطيط لبناء مسار مهني ناجح",
    sub: null as string | null,
    platform: "إدراك",
    lang: "العربية",
    hours: "~6 ساعات",
    desc: "ابنِ خطة واضحة لمسارك المهني وطوّر قرارك الذاتي.",
    url: "https://www.edraak.org/programs/course/miskskill-6-v1/",
  },
  {
    title: "Learning How to Learn",
    sub: "تعلّم كيف تتعلّم",
    platform: "Coursera",
    lang: "الإنجليزية",
    hours: "~15 ساعة",
    desc: "افهم كيف يعمل دماغك في التعلّم وادرس بذكاء أعلى.",
    url: "https://www.coursera.org/learn/learning-how-to-learn",
  },
];

/* ── Inline icons (match Privacy.tsx pattern — no icon-lib dependency) ──── */

const SparkIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </svg>
);

const CheckIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
    <path d="M5 13l4 4 10-11" />
  </svg>
);

const ShieldIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
    <path d="M16 4l10 4v7c0 7-5 11-10 13-5-2-10-6-10-13V8l10-4z" />
    <path d="M12 16l3 3 6-6" />
  </svg>
);

const ExternalIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
    <path d="M7 4H5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-2" />
    <path d="M12 3h5v5" />
    <path d="M9 11l8-8" />
  </svg>
);

export function LearningSpark() {
  return (
    <section id="learning-spark" className="relative py-24 md:py-32 overflow-hidden">
      {/* soft warm/mint glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 78% 18%, rgba(94,205,183,0.16), transparent 60%), radial-gradient(50% 40% at 15% 88%, rgba(235,207,151,0.16), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* ── Hero: copy + benefits + chips | challenge phone ────────────── */}
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
              <NumberBadge n={3} total={8} />
              <span className="eyebrow !mb-0">شرارة التعلم</span>
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
              {"أثبِت لنفسك\nإنك تبدأ وتكمّل."}
            </KineticHeading>

            <p className="text-[18px] text-ink-soft leading-[1.65] mt-6 max-w-[540px]">
              أول تحدّي بـ<span className="text-ink font-semibold"> معركة</span>: تكمّل كورس
              مختار بعناية، تتحقّق من شهادتك على جهازك، وتكسب{" "}
              <span className="text-ink font-semibold">1,000 نقطة</span>. مو بس نقاط — هاي
              عادة التعلّم تبدأ وية AiQo من أول يوم.
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-2.5 mt-7">
              {STAT_CHIPS.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-baseline gap-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-[color:var(--glass-stroke)] px-3.5 py-1.5 shadow-[var(--shadow-aiqo)]"
                >
                  <span
                    className="text-[13.5px] font-bold"
                    style={{ color: c.gold ? "var(--color-sand-deep)" : "var(--color-mint-deep)" }}
                  >
                    {c.label}
                  </span>
                  <span className="text-[11.5px] text-ink-faint font-medium">{c.sub}</span>
                </span>
              ))}
            </div>

            {/* Benefits */}
            <ul className="mt-9 space-y-3.5">
              {BENEFITS.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-white"
                    style={{ background: "var(--color-mint-deep)" }}
                  >
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[16px] text-ink leading-[1.6]">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Challenge phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute -inset-10 -z-10 blur-3xl opacity-40 pointer-events-none"
                style={{ background: "var(--color-mint-soft)" }}
                aria-hidden
              />
              <PhoneFrame size="lg">
                <PictureScreen
                  asset={SCREENS.lsChallenge}
                  sizes="(max-width: 768px) 280px, 360px"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </PhoneFrame>
            </div>
          </motion.div>
        </div>

        {/* ── How it works: 4-step journey ──────────────────────────────── */}
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
              شلون تشتغل؟ أربع خطوات.
            </h3>
            <p className="text-[16px] text-ink-soft leading-[1.65] mt-4">
              من فتح التحدّي لين إثبات الشهادة — كل خطوة واضحة، وما تطلب منك إلا تبدأ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
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
                      sizes="230px"
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
                <p className="text-[14.5px] text-ink-soft leading-[1.6] max-w-[260px]">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Curated courses ───────────────────────────────────────────── */}
        <div className="mt-24 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-center max-w-[560px] mx-auto mb-12"
          >
            <span className="eyebrow">الكورسات المختارة</span>
            <h3
              className="font-display font-bold text-ink mt-3"
              style={{ fontSize: "clamp(26px, 3.6vw, 40px)", lineHeight: 1.08, letterSpacing: "-0.01em" }}
            >
              مساران للبداية. كلها مجانية.
            </h3>
            <p className="text-[16px] text-ink-soft leading-[1.65] mt-4">
              اختر المسار اللي يناسبك — مدفوعة بـ audit مجاني، ومنتقاة لتبني عادة التعلّم بثقة.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {COURSES.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="group flex flex-col bg-white/60 backdrop-blur-xl border border-[color:var(--glass-stroke)] rounded-[28px] p-7 shadow-[var(--shadow-aiqo)] hover:shadow-[var(--shadow-lift)] transition-shadow duration-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-bold text-ink"
                    style={{ background: "var(--color-sand-soft)" }}
                  >
                    {c.platform}
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold text-ink-soft bg-ink/[0.04]">
                    {c.lang}
                  </span>
                </div>

                <h4 className="font-display font-bold text-ink text-[21px] leading-tight">
                  {c.title}
                </h4>
                {c.sub && (
                  <p className="text-[14px] text-ink-faint font-medium mt-1">{c.sub}</p>
                )}

                <p className="text-[15px] text-ink-soft leading-[1.6] mt-3 flex-1">
                  {c.desc}
                </p>

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-[color:var(--stroke)]">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-bold"
                      style={{ background: "var(--color-sand)", color: "var(--color-ink)" }}
                    >
                      مجاني
                    </span>
                    <span className="text-ink-soft font-medium">{c.hours}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[color:var(--color-mint-deep)] group-hover:gap-2.5 transition-[gap] duration-300">
                    فتح المصدر
                    <ExternalIcon className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── On-device verification highlight ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-20 md:mt-28 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden bg-white/60 backdrop-blur-xl border border-[color:var(--glass-stroke)] rounded-[32px] p-8 md:p-10 shadow-[var(--shadow-soft)]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(40% 80% at 92% 50%, rgba(94,205,183,0.10), transparent 70%)" }}
              aria-hidden
            />
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div
                className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                style={{ background: "linear-gradient(150deg, var(--color-mint-vibrant), var(--color-mint-deep))" }}
              >
                <ShieldIcon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <SparkIcon className="w-4 h-4 text-[color:var(--color-sand-deep)]" />
                  <h4 className="font-bold text-ink text-[19px] md:text-[20px]">
                    التحقّق يصير على جهازك — مو على سيرفر
                  </h4>
                </div>
                <p className="text-[15px] text-ink-soft leading-[1.65]">
                  قراءة الشهادة ومطابقتها مع الكورس تتمّ محلياً عبر ذكاء جهازك. صورة شهادتك ما
                  تطلع من تلفونك ولا تنرفع لأي مكان — تخزنها بأمان وتقدر تحذفها بأي لحظة.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
