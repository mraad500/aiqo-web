"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Moon,
  Camera,
  Heart,
  Users,
  Trophy,
  Music,
  Shield,
  Smartphone,
  Database,
  ChevronDown,
  Apple,
  Play,
  ArrowLeft,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

/* ─── Fade-in wrapper ─── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────── Nav ───────────────────────────── */
function Navigation() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <div className="flex items-center justify-between bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl px-6 py-3 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)]">
          <a href="/" className="flex items-center gap-2.5">
            <Image src="/app-icon.png" alt="AiQo" width={34} height={34} className="rounded-[10px]" />
            <span className="text-lg font-bold text-ink tracking-tight">AiQo</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "المميزات", href: "#features" },
              { label: "كابتن حمودي", href: "#captain" },
              { label: "الأسعار", href: "#pricing" },
              { label: "تواصل", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink/60 hover:text-ink hover:bg-ink/[0.04] px-4 py-2 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              className="bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-ink/85 transition-colors mr-2"
              aria-label="حمّل التطبيق"
            >
              حمّل التطبيق
            </a>
          </div>
          <button className="md:hidden p-2 -m-2" aria-label="القائمة">
            <ChevronDown className="w-5 h-5 text-ink/60" />
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,_var(--color-mint-50)_0%,_transparent_50%)] opacity-80" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-sand-10)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-mint-card/80 text-mint-deep text-xs font-semibold px-4 py-2 rounded-full border border-mint/40"
            >
              <span className="w-2 h-2 rounded-full bg-mint-deep animate-pulse" />
              قريباً على App Store
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-ink leading-[1.1] tracking-tight"
            >
              صحتك. بلسانك.
              <br />
              <span className="bg-gradient-to-l from-mint-deep to-mint bg-clip-text text-transparent">على جهازك.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-ink/50 max-w-md leading-relaxed"
            >
              تطبيق AiQo هو أول نظام صحي ذكي بالعربي. كابتن حمودي يدربك، يحفزك، ويرافقك بكل خطوة.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#download"
              className="group inline-flex items-center gap-3 bg-ink text-white px-7 py-4 rounded-2xl text-base font-medium hover:bg-ink/85 transition-all hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.3)]"
              aria-label="حمّل من App Store"
            >
              <Apple className="w-5 h-5" />
              حمّل من App Store
              <ArrowLeft className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl border border-ink/[0.06] text-ink px-7 py-4 rounded-2xl text-base font-medium hover:bg-white hover:border-ink/10 transition-all"
              aria-label="شوف كيف يشتغل"
            >
              شوف كيف يشتغل
            </a>
          </motion.div>
        </div>

        {/* Phone mockup with real screenshot */}
        <motion.div
          style={{ y: phoneY }}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Phone glow */}
            <div className="absolute -inset-8 bg-mint/15 blur-3xl rounded-full" />
            {/* Phone frame */}
            <div className="relative w-[280px] h-[600px] rounded-[44px] border-[8px] border-ink/[0.08] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] bg-white">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-ink/[0.08] rounded-b-2xl z-10" />
              <Image
                src="/app-screenshot.png"
                alt="شاشة AiQo الرئيسية"
                fill
                className="object-cover object-center"
                sizes="280px"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Trust Strip ───────────────────────────── */
function TrustStrip() {
  const items = [
    "مصمم في الإمارات",
    "مبني بـ Apple HealthKit",
    "خصوصيتك أولاً",
  ];
  return (
    <section className="py-8 border-y border-ink/[0.04]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-mint-deep/60" />
              <span className="text-sm text-ink/35 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Features ───────────────────────────── */
const features = [
  {
    icon: Moon,
    title: "هندسة النوم",
    description: "تتبع مراحل نومك واحسب أفضل وقت للاستيقاظ",
    tone: "sand" as const,
  },
  {
    icon: Camera,
    title: "مطبخ الكيمياء",
    description: "صور ثلاجتك، واحصل على وجبات ذكية",
    tone: "mint" as const,
  },
  {
    icon: Heart,
    title: "تمارين Zone 2",
    description: "تدريب القلب الأمثل مع Apple Watch",
    tone: "mint" as const,
  },
  {
    icon: Users,
    title: "قبيلتك (إمارة)",
    description: "تنافس مع أصدقائك في تحديات أسبوعية",
    tone: "mint" as const,
  },
  {
    icon: Trophy,
    title: "التحديات الأسطورية",
    description: "مشاريع 16 أسبوع لكسر أرقام قياسية",
    tone: "sand" as const,
  },
  {
    icon: Music,
    title: "My Vibe",
    description: "موسيقى Spotify تتفاعل مع نبضك",
    tone: "mint" as const,
  },
];

function FeaturesGrid() {
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center mb-20">
          <p className="text-mint-deep text-sm font-semibold mb-3 tracking-wide">المميزات</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-5">
            كل اللي تحتاجه في تطبيق واحد
          </h2>
          <p className="text-ink/40 text-lg max-w-md mx-auto">ميزات مصممة لحياتك الصحية، تعمل معاك كل يوم</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.06}>
              <div
                className={`group rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)] ${
                  feature.tone === "sand"
                    ? "bg-sand-card/50 border-sand/20 hover:border-sand/40"
                    : "bg-mint-card/50 border-mint/20 hover:border-mint/40"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                    feature.tone === "sand" ? "bg-sand/30" : "bg-mint/30"
                  }`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${
                      feature.tone === "sand" ? "text-sand" : "text-mint-deep"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{feature.title}</h3>
                <p className="text-ink/45 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Captain Hamoudi ───────────────────────────── */
function CaptainHamoudi() {
  return (
    <section id="captain" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-sand-10 via-transparent to-mint-50/30" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn className="space-y-8">
          <p className="text-sand text-sm font-semibold tracking-wide">مدربك الشخصي</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight">
            تعرّف على
            <br />
            <span className="bg-gradient-to-l from-sand to-sand-card bg-clip-text text-transparent">كابتن حمودي</span>
          </h2>
          <p className="text-lg text-ink/50 leading-relaxed max-w-lg">
            مدربك الشخصي اللي يحچي عراقي، يفهم مزاجك، ويتذكر رحلتك. مبني بذكاء اصطناعي هجين — على جهازك أولاً، وفي السحابة عند الحاجة.
          </p>
          {/* Audio player */}
          <div className="group bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-4 inline-flex items-center gap-4 max-w-sm shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1)] transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-mint-deep flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-white fill-white mr-[-2px]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">اسمع كابتن حمودي</p>
              <p className="text-xs text-ink/35 mt-0.5">مقطع صوتي تجريبي &bull; 0:30</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-12 bg-gradient-to-t from-mint/20 to-sand/10 blur-3xl rounded-full" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/captain-hamoudi.png"
                alt="كابتن حمودي"
                width={340}
                height={500}
                className="relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                priority
              />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── Privacy ───────────────────────────── */
const privacyPillars = [
  {
    icon: Smartphone,
    title: "معالجة على جهازك",
    description: "Apple Intelligence يشتغل محلياً على جهازك بدون ما يطلع منه شي",
  },
  {
    icon: Database,
    title: "بدون بيع للبيانات",
    description: "ما نبيع بياناتك لأحد. أبداً. هذا وعد.",
  },
  {
    icon: Shield,
    title: "HealthKit آمن",
    description: "نتبع كل قواعد Apple الصارمة لحماية بياناتك الصحية",
  },
];

function PrivacySection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center mb-20">
          <div className="w-16 h-16 rounded-2xl bg-mint-card/80 border border-mint/30 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-mint-deep" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4">
            بياناتك ملكك. فقط.
          </h2>
          <p className="text-ink/40 text-lg max-w-md mx-auto">نحن نبني تقنية تحترم خصوصيتك من الأساس</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {privacyPillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 text-center hover:border-mint/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-mint/20 flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-7 h-7 text-mint-deep" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-3">{pillar.title}</h3>
                <p className="text-ink/45 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Pricing ───────────────────────────── */
const plans = [
  {
    name: "AiQo Core",
    price: "$9.99",
    period: "/شهر",
    features: ["المميزات الأساسية", "كابتن حمودي", "تتبع النوم والنشاط"],
    popular: false,
  },
  {
    name: "AiQo Pro",
    price: "$19.99",
    period: "/شهر",
    features: [
      "كل ميزات Core",
      "Peaks و HRR",
      "خطط أسبوعية مخصصة",
      "تحديات متقدمة",
    ],
    popular: true,
  },
  {
    name: "AiQo Intelligence",
    price: "$39.99",
    period: "/شهر",
    features: [
      "كل ميزات Pro",
      "ذاكرة كابتن موسعة",
      "نموذج ذكاء اصطناعي أقوى",
      "أولوية الدعم",
    ],
    popular: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-28 bg-ink/[0.015]">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center mb-20">
          <p className="text-mint-deep text-sm font-semibold mb-3 tracking-wide">الأسعار</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-5">خطة لكل هدف</h2>
          <p className="text-ink/40 text-lg">تجربة مجانية أسبوع كامل &bull; بدون التزام</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative bg-white/80 backdrop-blur-xl border rounded-3xl p-8 transition-all ${
                  plan.popular
                    ? "border-mint-deep/40 border-2 md:-translate-y-4 shadow-[0_20px_60px_-15px_rgba(94,205,183,0.25)]"
                    : "border-ink/[0.06] hover:border-ink/10 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.04)]"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3.5 right-6 bg-mint-deep text-white border-0 px-4 py-1.5 text-xs font-semibold rounded-full shadow-[0_4px_12px_-2px_rgba(94,205,183,0.5)]">
                    الأكثر شعبية
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-ink mb-1">{plan.name}</h3>
                <div className="mb-8 mt-4">
                  <span className="text-5xl font-bold text-ink">{plan.price}</span>
                  <span className="text-ink/35 text-sm mr-1">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-ink/55 flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-mint-card flex items-center justify-center shrink-0">
                        <span className="text-mint-deep text-xs">&#10003;</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  className={`block w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-ink text-white hover:bg-ink/85 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)]"
                      : "bg-ink/[0.04] text-ink hover:bg-ink/[0.08]"
                  }`}
                  aria-label={`اشترك في ${plan.name}`}
                >
                  ابدأ التجربة المجانية
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── FAQ ───────────────────────────── */
const faqs = [
  {
    question: "متى يطلق التطبيق؟",
    answer: "قريباً جداً، 2026. سجّل الآن وراح نرسلك إشعار أول ما ينزل.",
  },
  {
    question: "هل يعمل بدون إنترنت؟",
    answer: "نعم، أغلب الميزات تشتغل على جهازك مباشرة بدون ما تحتاج اتصال.",
  },
  {
    question: "هل أحتاج Apple Watch؟",
    answer: "لا، التطبيق يشتغل بدونها. لكن Apple Watch تضيف قيمة كبيرة لتتبع النشاط ونبض القلب.",
  },
  {
    question: "كيف أحمي بياناتي الصحية؟",
    answer: "نتبع معايير Apple HealthKit بالكامل. بياناتك تبقى على جهازك ولا نرسل شي خام للسحابة.",
  },
  {
    question: "هل يدعم لهجات عربية أخرى؟",
    answer: "كابتن حمودي يحچي عراقي، والواجهة بالعربي الفصيح. ندرس إضافة لهجات أخرى مستقبلاً.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-mint-deep text-sm font-semibold mb-3 tracking-wide">أسئلة شائعة</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">عندك سؤال؟</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white/70 backdrop-blur-xl border border-ink/[0.05] rounded-2xl px-6 overflow-hidden hover:border-ink/10 transition-colors"
              >
                <AccordionTrigger className="text-base font-medium text-ink hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ink/50 text-sm pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── Final CTA ───────────────────────────── */
function FinalCTA() {
  return (
    <section id="download" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="relative bg-ink rounded-[32px] px-8 py-20 md:px-16 text-center overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mint-deep/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-sand/10 to-transparent" />

            <div className="relative">
              <Image src="/app-icon.png" alt="AiQo" width={56} height={56} className="rounded-2xl mx-auto mb-8 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3)]" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                جاهز تبدي رحلتك؟
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
                حمّل AiQo وابدأ أسبوع تجربة مجانية اليوم
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-white text-ink px-8 py-4 rounded-2xl text-base font-semibold hover:bg-white/90 transition-all hover:shadow-[0_8px_30px_-6px_rgba(255,255,255,0.3)]"
                aria-label="حمّل AiQo من App Store"
              >
                <Apple className="w-5 h-5" />
                حمّل من App Store
                <ArrowLeft className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */
function Footer() {
  return (
    <footer className="py-16 border-t border-ink/[0.04]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12">
          <div className="flex items-start gap-3">
            <Image src="/app-icon.png" alt="AiQo" width={40} height={40} className="rounded-xl" />
            <div>
              <span className="text-lg font-bold text-ink block">AiQo</span>
              <p className="text-sm text-ink/35 mt-1 leading-relaxed">أول نظام صحي ذكي بالعربي.<br />مصمم في الإمارات.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/40 md:justify-center">
            <a href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-ink transition-colors">Terms</a>
            <a href="/support" className="hover:text-ink transition-colors">Support</a>
          </div>

          <div className="flex gap-6 text-sm text-ink/40 md:justify-end">
            <a href="#" className="hover:text-ink transition-colors" aria-label="Instagram">Instagram</a>
            <a href="#" className="hover:text-ink transition-colors" aria-label="X">X</a>
            <a href="#" className="hover:text-ink transition-colors" aria-label="TikTok">TikTok</a>
          </div>
        </div>
        <div className="border-t border-ink/[0.04] pt-8 text-center text-xs text-ink/25">
          &copy; 2026 AiQo. صُمم بحب في الإمارات.
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────── Page ───────────────────────────── */
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustStrip />
        <FeaturesGrid />
        <CaptainHamoudi />
        <PrivacySection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
