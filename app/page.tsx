"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

/* ───────────────────────────── Nav ───────────────────────────── */
function Navigation() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="AiQo" width={36} height={36} className="rounded-lg" />
          <span className="text-xl font-bold text-ink tracking-tight">AiQo</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-ink/70 hover:text-ink transition-colors">المميزات</a>
          <a href="#captain" className="text-sm text-ink/70 hover:text-ink transition-colors">كابتن حمودي</a>
          <a href="#pricing" className="text-sm text-ink/70 hover:text-ink transition-colors">الأسعار</a>
          <a href="#faq" className="text-sm text-ink/70 hover:text-ink transition-colors">تواصل</a>
          <a
            href="#download"
            className="bg-mint-deep text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-mint-deep/90 transition-colors"
            aria-label="حمّل التطبيق"
          >
            حمّل التطبيق
          </a>
        </div>
        <button
          className="md:hidden p-2"
          aria-label="القائمة"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-mint-50)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight tracking-tight">
            صحتك. بلسانك.
            <br />
            على جهازك.
          </h1>
          <p className="text-lg text-ink/60 max-w-lg leading-relaxed">
            تطبيق AiQo هو أول نظام صحي ذكي بالعربي. كابتن حمودي يدربك، يحفزك، ويرافقك بكل خطوة.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-3 bg-ink text-white px-7 py-4 rounded-[14px] text-base font-medium hover:bg-ink/90 transition-colors"
              aria-label="حمّل من App Store"
            >
              <Apple className="w-5 h-5" />
              حمّل من App Store
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/40 text-ink px-7 py-4 rounded-[14px] text-base font-medium hover:bg-white/80 transition-colors"
              aria-label="شوف كيف يشتغل"
            >
              شوف كيف يشتغل
            </a>
          </div>
        </div>

        {/* Phone mockup placeholder */}
        <div className="flex justify-center lg:justify-start">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[280px] h-[560px] bg-ink/5 rounded-[40px] border-2 border-ink/10 flex items-center justify-center"
          >
            <span className="text-ink/20 text-sm font-medium">iPhone Mockup</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Trust Strip ───────────────────────────── */
function TrustStrip() {
  return (
    <section className="py-6 border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-ink/40 font-medium tracking-wide">
          مصمم في الإمارات &bull; مبني بـ Apple HealthKit &bull; خصوصيتك أولاً
        </p>
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
  },
  {
    icon: Camera,
    title: "مطبخ الكيمياء",
    description: "صور ثلاجتك، واحصل على وجبات ذكية",
  },
  {
    icon: Heart,
    title: "تمارين Zone 2",
    description: "تدريب القلب الأمثل مع Apple Watch",
  },
  {
    icon: Users,
    title: "قبيلتك (إمارة)",
    description: "تنافس مع أصدقائك في تحديات أسبوعية",
  },
  {
    icon: Trophy,
    title: "التحديات الأسطورية",
    description: "مشاريع 16 أسبوع لكسر أرقام قياسية",
  },
  {
    icon: Music,
    title: "My Vibe",
    description: "موسيقى Spotify تتفاعل مع نبضك",
  },
];

function FeaturesGrid() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            كل اللي تحتاجه في تطبيق واحد
          </h2>
          <p className="text-ink/50 text-lg">ميزات مصممة لحياتك الصحية</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[20px] p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_48px_-12px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-mint/40 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-mint-deep" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">{feature.title}</h3>
              <p className="text-ink/50 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Captain Hamoudi ───────────────────────────── */
function CaptainHamoudi() {
  return (
    <section id="captain" className="py-24 bg-sand-10">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            تعرّف على كابتن حمودي
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed max-w-lg">
            مدربك الشخصي اللي يحچي عراقي، يفهم مزاجك، ويتذكر رحلتك. مبني بذكاء اصطناعي هجين — على جهازك أولاً، وفي السحابة عند الحاجة.
          </p>
          {/* Audio player placeholder */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[20px] p-5 inline-flex items-center gap-4 max-w-sm">
            <div className="w-10 h-10 rounded-full bg-mint-deep flex items-center justify-center shrink-0">
              <Music className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-ink">اسمع كابتن حمودي</p>
              <p className="text-xs text-ink/40">مقطع صوتي تجريبي</p>
            </div>
          </div>
        </div>

        {/* Captain Hamoudi */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-mint/20 blur-2xl rounded-full" />
            <Image
              src="/captain-hamoudi.png"
              alt="كابتن حمودي"
              width={300}
              height={450}
              className="relative drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Privacy ───────────────────────────── */
const privacyPillars = [
  {
    icon: Smartphone,
    title: "معالجة على جهازك",
    description: "Apple Intelligence يشتغل محلياً",
  },
  {
    icon: Database,
    title: "بدون بيع للبيانات",
    description: "أبداً. نقطة.",
  },
  {
    icon: Shield,
    title: "HealthKit آمن",
    description: "نتبع كل قواعد Apple الصارمة",
  },
];

function PrivacySection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            بياناتك ملكك. فقط.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {privacyPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-mint/30 flex items-center justify-center mx-auto mb-5">
                <pillar.icon className="w-7 h-7 text-mint-deep" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">{pillar.title}</h3>
              <p className="text-ink/50 text-sm">{pillar.description}</p>
            </motion.div>
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
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">الأسعار</h2>
          <p className="text-ink/50 text-lg">تجربة مجانية أسبوع كامل</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white/60 backdrop-blur-xl border rounded-[20px] p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] ${
                plan.popular
                  ? "border-mint-deep border-2 md:-translate-y-4 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.12)]"
                  : "border-white/40"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 right-6 bg-mint-deep text-white border-0 px-4 py-1 text-xs font-medium rounded-full">
                  الأكثر شعبية
                </Badge>
              )}
              <h3 className="text-xl font-semibold text-ink mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-ink">{plan.price}</span>
                <span className="text-ink/40 text-sm mr-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-ink/60 flex items-start gap-2">
                    <span className="text-mint-deep mt-0.5">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`block w-full text-center py-3 rounded-[14px] text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-ink text-white hover:bg-ink/90"
                    : "bg-ink/5 text-ink hover:bg-ink/10"
                }`}
                aria-label={`اشترك في ${plan.name}`}
              >
                ابدأ التجربة المجانية
              </a>
            </div>
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
    answer: "قريباً جداً، 2026",
  },
  {
    question: "هل يعمل بدون إنترنت؟",
    answer: "نعم، أغلب الميزات على جهازك",
  },
  {
    question: "هل أحتاج Apple Watch؟",
    answer: "لا، اختياري لكن يضيف قيمة",
  },
  {
    question: "كيف أحمي بياناتي الصحية؟",
    answer: "نتبع HealthKit ولا نرسل شي خام للسحابة",
  },
  {
    question: "هل يدعم لهجات عربية أخرى؟",
    answer: "كابتن حمودي يحچي عراقي، والواجهة فصحى",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-ink/[0.02]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">أسئلة شائعة</h2>
        </div>
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[20px] px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-base font-medium text-ink hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-ink/60 text-sm pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ───────────────────────────── Final CTA ───────────────────────────── */
function FinalCTA() {
  return (
    <section id="download" className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-ink mb-8">
          جاهز تبدي رحلتك؟
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 rounded-[14px] text-base font-medium hover:bg-ink/90 transition-colors"
          aria-label="حمّل AiQo من App Store"
        >
          <Apple className="w-5 h-5" />
          حمّل AiQo من App Store
        </a>
      </div>
    </section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */
function Footer() {
  return (
    <footer className="py-12 border-t border-ink/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <Image src="/app-icon.png" alt="AiQo" width={32} height={32} className="rounded-lg" />
            <div>
              <span className="text-xl font-bold text-ink">AiQo</span>
              <p className="text-sm text-ink/40 mt-1">أول نظام صحي ذكي بالعربي</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm text-ink/50 md:justify-center">
            <a href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-ink transition-colors">Terms</a>
            <a href="/support" className="hover:text-ink transition-colors">Support</a>
          </div>

          {/* Social */}
          <div className="flex gap-6 text-sm text-ink/50 md:justify-end">
            <a href="#" className="hover:text-ink transition-colors" aria-label="Instagram">Instagram</a>
            <a href="#" className="hover:text-ink transition-colors" aria-label="X">X</a>
            <a href="#" className="hover:text-ink transition-colors" aria-label="TikTok">TikTok</a>
          </div>
        </div>
        <div className="border-t border-ink/5 pt-6 text-center text-xs text-ink/30">
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
