"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Lock,
  Eye,
  ChevronDown,
  Apple,
  ArrowLeft,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PhoneGallery } from "@/components/PhoneGallery";
import { FeatureBlock } from "@/components/FeatureBlock";

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
            <Image src="/app-icon-hd.png" alt="AiQo" width={72} height={72} className="rounded-[18px]" />
            <span className="text-xl font-bold text-ink-900 tracking-tight">AiQo</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "التطبيق", href: "#showcase" },
              { label: "الكابتن", href: "#captain" },
              { label: "الأسعار", href: "#pricing" },
              { label: "الأسئلة", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-700 hover:text-mint-600 px-4 py-2 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <button
              disabled
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-ink-300 text-ink-500 cursor-not-allowed opacity-50 mr-2"
              title="قريباً"
            >
              EN
            </button>
            <a
              href="#download"
              className="bg-ink-900 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-ink-700 transition text-sm"
              aria-label="حمّل التطبيق"
            >
              حمّل التطبيق
            </a>
          </div>
          <button className="md:hidden p-2 -m-2" aria-label="القائمة">
            <ChevronDown className="w-5 h-5 text-ink-500" />
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
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-sand-50)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-mint-600 uppercase tracking-widest text-xs font-semibold"
            >
              AiQo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-ink-900 leading-tight tracking-tight"
            >
              ليس تطبيق فقط ، بل بُعد جديد للصحة .
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed mt-6"
            >
              كابتن حمودي يقرأ يومك، يتذكر رحلتك، ويكون معاك بكل خطوة.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            {/* TODO: Replace with real App Store link before launch */}
            <a
              href="https://testflight.apple.com/join/PLACEHOLDER"
              className="group inline-flex items-center gap-3 bg-ink-900 text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-ink-700 transition-all hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.3)]"
              aria-label="حمّل من App Store"
            >
              <Apple className="w-5 h-5" />
              حمّل من App Store
              <ArrowLeft className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/40 text-ink-900 px-7 py-4 rounded-full text-base font-medium hover:bg-white hover:border-white/60 transition-all"
              aria-label="شوف التطبيق"
            >
              شوف التطبيق ↓
            </a>
          </motion.div>
        </div>

        {/* Hero phone — auto-rotating real screenshots */}
        <motion.div
          style={{ y: phoneY }}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneGallery
              images={[
                "/screens/captain-screen.webp",
                "/screens/home.webp",
                "/screens/workout.webp",
                "/screens/vibe.webp",
                "/screens/profile.webp",
              ]}
              alt="AiQo"
              priority
              interval={4000}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Trust Strip ───────────────────────────── */
function TrustStrip() {
  return (
    <section className="py-8 border-y border-ink-300/20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-ink-500 font-medium">
          صُمم في الإمارات &bull; متكامل مع Apple Health &bull; خصوصيتك مقدّسة
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────── Captain Hamoudi ───────────────────────────── */
function CaptainHamoudi() {
  return (
    <section id="captain" className="relative py-28 overflow-hidden bg-sand-100/40">
      <div className="absolute inset-0 bg-gradient-to-bl from-sand-50 via-transparent to-mint-50/30" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn className="space-y-8">
          <p className="text-sand-600 uppercase tracking-widest text-xs font-semibold">القلب اللي يخفق فيه التطبيق</p>
          <h2 className="text-4xl md:text-6xl font-bold text-ink-900 leading-tight">
            هذا كابتن حمودي.
          </h2>
          <div className="space-y-4 max-w-lg">
            <p className="text-lg text-ink-700 leading-relaxed">ما هو مساعد ذكي. هو شخصية.</p>
            <p className="text-lg text-ink-700 leading-relaxed">يحچي بلهجتك، يفهم مزاجك، ويتذكر التفاصيل اللي تشاركها وياه.</p>
            <p className="text-lg text-ink-700 leading-relaxed">أول مرة بحياتك، عندك مدرب عربي يفهمك بدون ما تترجم.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-mint-200/40 blur-3xl rounded-full scale-110" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/screens/captain-portrait.webp"
                alt="كابتن حمودي"
                width={360}
                height={360}
                className="relative rounded-full ring-8 ring-white/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]"
                priority
              />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── History (You're not starting from zero) ───────────────────────────── */
function HistorySection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-cream-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight">
            إنت مو شخص يبدأ من صفر ،
            <br />
            <span className="bg-gradient-to-l from-sand-500 to-sand-300 bg-clip-text text-transparent">إنت جاي ويا تاريخ .</span>
          </h2>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto mt-6">
            AiQo يقرأ تاريخك الصحي الكامل من Apple Health ويحدد مستواك من أول لحظة.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex justify-center">
            <PhoneGallery
              images={[
                "/screens/history-1.webp",
                "/screens/history-2.webp",
              ]}
              alt="إنت مو شخص يبدأ من صفر"
              interval={4000}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── Proof ───────────────────────────── */
function ProofSection() {
  const cards = [
    {
      number: "16",
      label: "أسبوع",
      title: "رحلة التحديات الأسطورية",
      subtitle: "مشاريع طويلة مدروسة، مو تحديات يومية عابرة",
      color: "text-mint-600",
    },
    {
      number: "22+",
      label: "مستوى",
      title: "نظام تطور مدروس",
      subtitle: "كل خطوة ترفع مستواك، وتقربك من النسخة الأقوى منك",
      color: "text-sand-500",
    },
    {
      number: "∞",
      label: "ذكريات",
      title: "كابتن يتذكرك",
      subtitle: "كل ما تحچي معاه، يصير أقرب إلك وأذكى بفهمك",
      color: "text-mint-600",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center">
          <p className="text-mint-600 uppercase tracking-widest text-xs font-semibold">أرقام حقيقية</p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mt-4">
            تقدم تشوفه، مو تسمع عنه.
          </h2>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto mt-4">
            AiQo مبني على مبدأ واحد: نتيجة حقيقية، أو لا شي.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-500">
                <p className={`text-7xl font-bold ${card.color}`}>{card.number}</p>
                <p className="text-sm text-ink-500 mt-2">{card.label}</p>
                <p className="text-lg font-bold text-ink-900 mt-4">{card.title}</p>
                <p className="text-sm text-ink-500 mt-2">{card.subtitle}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Showcase ───────────────────────────── */
function ShowcaseSection() {
  return (
    <section id="showcase" className="py-32 md:py-48 bg-gradient-to-b from-white via-cream-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center mb-20 md:mb-32">
          <p className="text-mint-600 text-sm font-semibold mb-3 tracking-wide">شوف التطبيق</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-5">
            AiQo بعينك.
          </h2>
          <p className="text-ink-500 text-lg max-w-lg mx-auto leading-relaxed">
            كل شاشة صُممت بعناية. كل تفاصيل مدروسة. هذا اللي راح تشوفه أول يوم تفتح التطبيق.
          </p>
        </FadeIn>

        <div className="space-y-8 md:space-y-0">
          <FeatureBlock
            alignment="phone-end"
            eyebrow="الرئيسية"
            title="يومك بنظرة واحدة."
            body="كل اللي يهمك بصحتك — خطواتك، نومك، طاقتك — مرتب بهدوء بمكان واحد. بدون فوضى أرقام."
            images={["/screens/home.webp"]}
            priority
          />

          <FeatureBlock
            alignment="phone-start"
            eyebrow="النوم"
            title="نوم أعمق. صحوة أذكى."
            body="AiQo يحلل نومك بكل تفاصيله، ويوقظك باللحظة الصح اللي جسمك جاهز فيها. ما تصحى متعب بعد اليوم."
            images={[
              "/screens/sleep-1.webp",
              "/screens/sleep-2.webp",
              "/screens/sleep-3.webp",
              "/screens/sleep-4.webp",
              "/screens/sleep-5.webp",
            ]}
          />

          <FeatureBlock
            alignment="phone-end"
            eyebrow="المطبخ"
            title="كل وجبة تخدم هدفك."
            body="صوّر ثلاجتك، وخل AiQo يبني لك خطة وجبات بثواني — من المكونات اللي عندك، مصممة لجسمك."
            images={[
              "/screens/kitchen-1.webp",
              "/screens/kitchen-2.webp",
              "/screens/kitchen-3.webp",
              "/screens/kitchen-4.webp",
            ]}
          />

          <FeatureBlock
            alignment="phone-start"
            eyebrow="التحديات الأسطورية"
            title="مشاريع 16 أسبوع تغيّرك."
            body="ما هي تحديات يومية. هاي رحلات طويلة، مدروسة، توصلك لمستوى ما تخيلته. كل أسبوع خطوة. كل خطوة قريبك من النسخة الأقوى منك."
            images={[
              "/screens/legendary-1.webp",
              "/screens/legendary-2.webp",
              "/screens/legendary-3.webp",
              "/screens/legendary-4.webp",
              "/screens/legendary-5.webp",
              "/screens/legendary-6.webp",
              "/screens/legendary-7.webp",
              "/screens/legendary-8.webp",
              "/screens/legendary-9.webp",
              "/screens/legendary-10.webp",
            ]}
            interval={4000}
          />

          <FeatureBlock
            alignment="phone-end"
            eyebrow="التحديات اليومية"
            title="تقدّم يومي. مكافآت حقيقية."
            body="كل يوم مهام صغيرة تخليك تتحرك. تنجزها، تكسب نقاط، وترتفع بمستواك خطوة خطوة."
            images={[
              "/screens/daily-quest-1.webp",
              "/screens/daily-quest-2.webp",
            ]}
          />

          <FeatureBlock
            alignment="phone-start"
            eyebrow="التمارين"
            title="كل تمرين، مفصّل لك."
            body="خطط تمرين تتكيف مع مستواك، تتطور معاك، ومعاك كابتن يدربك صوتياً وأنت تتمرن."
            images={["/screens/workout.webp"]}
          />

          <FeatureBlock
            alignment="phone-end"
            eyebrow="My Vibe"
            title="موسيقى تتناغم مع نبضك."
            body="جسمك يشتغل، والموسيقى تتغير معاه. AiQo يختار اللي يناسب طاقتك بكل لحظة."
            images={["/screens/vibe.webp"]}
          />

          <FeatureBlock
            alignment="phone-start"
            eyebrow="الملف الشخصي"
            title="رحلتك كلها بمكان واحد."
            body="مستواك، رصيدك، بيانات جسمك، وتقارير أسبوعية — كلها مرتبة بملفك الشخصي. تابع تقدمك وشوف وين وصلت."
            images={["/screens/profile.webp"]}
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Privacy ───────────────────────────── */
const privacyPillars = [
  {
    icon: Shield,
    title: "خصوصية أولاً",
    description: "نتعامل مع بياناتك بأعلى معايير Apple.",
  },
  {
    icon: Lock,
    title: "بدون إعلانات",
    description: "صفر إعلانات. صفر بيع بيانات. أبداً.",
  },
  {
    icon: Eye,
    title: "شفافية كاملة",
    description: "كل شي تشاركه، تقدر تشوفه وتحذفه بأي لحظة.",
  },
];

function PrivacySection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center mb-20">
          <p className="text-mint-600 uppercase tracking-widest text-xs font-semibold mb-4">الخصوصية</p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            بياناتك. ملكك.
          </h2>
          <p className="text-ink-500 text-lg max-w-2xl mx-auto">صحتك مو سلعة. هذا التزامنا، مو شعار.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {privacyPillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 text-center hover:border-mint-300/40 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-mint-100 flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-mint-600" />
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-3">{pillar.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{pillar.description}</p>
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
    tagline: "الأساس اليومي",
    price: "$9.99",
    period: "/شهر",
    features: [
      "كابتن حمودي — محادثة كاملة بلهجتك",
      "خطط تمرين وتغذية مخصصة",
      "تحليل النوم والاستيقاظ الذكي",
      "تتبع كامل للنشاط والصحة",
      "نظام مستويات وإنجازات",
      "تجربة Apple Watch متكاملة",
    ],
    popular: false,
  },
  {
    name: "AiQo Intelligence Pro",
    tagline: "للي يريد الأقصى",
    price: "$19.99",
    period: "/شهر",
    features: [
      "كل مزايا Core",
      "ذكاء أعمق وأكثر تفصيلاً",
      "ذاكرة موسعة — الكابتن يتذكر أكثر",
      "My Vibe — موسيقى تتناغم مع نبضك",
      "التحديات الأسطورية الكاملة",
      "إنشاء قبيلتك الخاصة",
    ],
    popular: true,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-28 bg-cream-100/50">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center mb-20">
          <p className="text-mint-600 text-sm font-semibold mb-3 tracking-wide">الأسعار</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 mb-5">خطة لكل هدف.</h2>
          <p className="text-ink-500 text-lg">7 أيام تجربة مجانية &bull; بدون التزام &bull; إلغاء بأي وقت</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative bg-white/80 backdrop-blur-xl border rounded-3xl p-8 transition-all ${
                  plan.popular
                    ? "border-2 border-mint-500 md:scale-105 shadow-[0_20px_60px_-15px_rgba(94,205,183,0.25)]"
                    : "border-ink-300/20 hover:border-ink-300/40 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.04)]"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-mint-200 text-mint-700 border-0 px-4 py-1 text-xs font-semibold rounded-full">
                    الأكثر تطوراً
                  </Badge>
                )}
                <p className={`text-xs uppercase tracking-widest font-semibold mb-2 ${plan.popular ? "text-mint-600" : "text-sand-600"}`}>
                  {plan.tagline}
                </p>
                <h3 className="text-2xl font-bold text-ink-900 mb-1">{plan.name}</h3>
                <div className="mb-8 mt-4">
                  <span className="text-5xl font-bold text-ink-900">{plan.price}</span>
                  <span className="text-ink-400 text-sm mr-1">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-ink-700 flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-mint-100 flex items-center justify-center shrink-0">
                        <span className="text-mint-500 text-xs">&#10003;</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* TODO: Replace with real App Store link before launch */}
                <a
                  href="https://testflight.apple.com/join/PLACEHOLDER"
                  className={`block w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-ink-900 text-white hover:bg-ink-700 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)]"
                      : "bg-ink-900/[0.04] text-ink-900 hover:bg-ink-900/[0.08]"
                  }`}
                  aria-label={`اشترك في ${plan.name}`}
                >
                  ابدأ التجربة المجانية
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-center text-ink-500 text-sm mt-10">
          7 أيام مجانية بالكامل &bull; لا تحتاج بطاقة ائتمان &bull; إلغاء بأي وقت
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────── FAQ ───────────────────────────── */
const faqs = [
  {
    question: "متى يطلق التطبيق؟",
    answer: "قريباً جداً. AiQo بمراحله النهائية، والإطلاق الرسمي خلال 2026.",
  },
  {
    question: "هل يشتغل بدون إنترنت؟",
    answer: "أغلب المميزات تشتغل من جهازك مباشرة. تحتاج إنترنت لميزات معينة فقط.",
  },
  {
    question: "هل أحتاج Apple Watch؟",
    answer: "لا، اختياري. لكن إذا عندك، التجربة تصير أعمق وأذكى.",
  },
  {
    question: "كيف تحمون بياناتي الصحية؟",
    answer: "نتبع أعلى معايير Apple للخصوصية. بياناتك تبقى تحت سيطرتك الكاملة.",
  },
  {
    question: "هل التجربة المجانية تتطلب بطاقة ائتمان؟",
    answer: "لا. 7 أيام كاملة بدون أي بطاقة، بدون أي التزام.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-mint-600 text-sm font-semibold mb-3 tracking-wide">أسئلة شائعة</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">كل اللي تريد تعرفه.</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white/70 backdrop-blur-xl border border-ink-300/10 rounded-2xl px-6 overflow-hidden hover:border-ink-300/20 transition-colors"
              >
                <AccordionTrigger className="text-base font-medium text-ink-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ink-500 text-sm pb-5 leading-relaxed">
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
    <section id="download" className="py-28 bg-[radial-gradient(ellipse_at_center,_var(--color-mint-100)_0%,_transparent_70%)]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-bold text-ink-900 leading-tight">
            جاهز تتعرف على كابتن حمودي؟
          </h2>
          <p className="text-lg text-ink-500 mt-4">
            7 أيام مجانية. بدون بطاقة. بدون التزام.
          </p>
          {/* TODO: Replace with real App Store link before launch */}
          <a
            href="https://testflight.apple.com/join/PLACEHOLDER"
            className="group inline-flex items-center gap-3 bg-ink-900 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-ink-700 transition-all hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.3)] mt-10"
            aria-label="حمّل AiQo"
          >
            <Apple className="w-6 h-6" />
            حمّل AiQo
            <ArrowLeft className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */
function Footer() {
  return (
    <footer className="py-16 border-t border-ink-300/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12">
          {/* Right column (RTL start) — brand */}
          <div className="flex items-start gap-3">
            <Image src="/app-icon-hd.png" alt="AiQo" width={80} height={80} className="rounded-[20px]" />
            <div>
              <span className="text-lg font-bold text-ink-900 block">AiQo</span>
              <p className="text-sm text-ink-500 mt-1 leading-relaxed">ليس تطبيق فقط ، بل بُعد جديد للصحة .</p>
              <p className="text-xs text-ink-400 mt-1">&copy; 2026 AiQo</p>
            </div>
          </div>

          {/* Center column — links */}
          <div className="md:text-center">
            <p className="text-ink-500 text-xs uppercase tracking-widest font-semibold mb-4">روابط</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-700 md:justify-center">
              <a href="/privacy" className="hover:text-mint-600 transition-colors">الخصوصية</a>
              <a href="/terms" className="hover:text-mint-600 transition-colors">الشروط</a>
              <a href="/support" className="hover:text-mint-600 transition-colors">الدعم</a>
              <a href="/support#contact" className="hover:text-mint-600 transition-colors">تواصل معنا</a>
            </div>
          </div>

          {/* Left column (RTL end) — social */}
          <div className="md:text-left">
            <p className="text-ink-500 text-xs uppercase tracking-widest font-semibold mb-4">تابعنا</p>
            <a
              href="https://instagram.com/aiqoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-700 hover:text-mint-600 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @aiqoapp
            </a>
          </div>
        </div>
        <div className="border-t border-ink-300/20 pt-8 text-center text-xs text-ink-500">
          صُمم بحب في الإمارات
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
        <CaptainHamoudi />
        <HistorySection />
        <ProofSection />
        <ShowcaseSection />
        <PrivacySection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
