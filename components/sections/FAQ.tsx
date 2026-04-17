"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    q: "متى يطلق التطبيق؟",
    a: "AiQo حالياً في مرحلة TestFlight، والإطلاق الرسمي على App Store خلال الأشهر القادمة. اشترك بالقائمة البريدية لتكون أول من يعرف.",
  },
  {
    q: "هل يشتغل بدون إنترنت؟",
    a: "أغلب الميزات تعمل بدون إنترنت: تتبّع الصحة، التمارين، النوم، والتحديات. كابتن حمودي يحتاج إنترنت للمحادثات العميقة، لكن بعض التوجيه الأساسي متاح على الجهاز عبر Apple Intelligence.",
  },
  {
    q: "هل أحتاج Apple Watch؟",
    a: "لا. AiQo يعمل بكامل قدرته من iPhone فقط. Apple Watch يضيف دقة أعلى في قياس النبض، النوم، والتمارين — لكنه اختياري.",
  },
  {
    q: "كيف تحمون بياناتي الصحية؟",
    a: "بياناتك الصحية تبقى على جهازك. أي طلب يذهب للسحابة يُجرَّد من هويتك أولاً عبر طبقة PrivacySanitizer. لا نبيع بياناتك. لا إعلانات. أبداً.",
  },
  {
    q: "هل التجربة المجانية تتطلب بطاقة ائتمان؟",
    a: "تتطلب طريقة دفع مسجّلة في حسابك على App Store (كأي اشتراك)، لكن لن يُخصم أي مبلغ خلال السبعة أيام. تقدر تلغي بأي وقت من الإعدادات.",
  },
  {
    q: "ما الفرق بين AiQo Max و Intelligence Pro؟",
    a: "Max هو التطبيق الكامل بأساسياته اليومية — الكابتن، الصحة، النادي، الـVibe، والواتش. Intelligence Pro يضيف فوقه طبقة ذكاء أعلى: ذاكرة موسّعة، نموذج أقوى، صوت Premium، خطط تمارين متكيفة، وPeaks والتحديات الأسطورية الكاملة.",
  },
];

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: idx * 0.04, ease: EASE }}
      className="bg-white/55 backdrop-blur-xl border border-[color:var(--glass-stroke)] rounded-[22px] overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
        aria-expanded={open}
      >
        <span className="text-[16px] md:text-[17px] font-semibold text-ink leading-tight">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="shrink-0 text-ink-soft"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 text-[15px] text-ink-soft leading-[1.7]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] font-medium text-ink-soft tabular-nums tracking-[0.12em]">
              <span className="text-ink">06</span>
              <span className="inline-block w-4 h-px bg-[color:var(--color-mint-vibrant)] mx-1.5 translate-y-[-3px]" />
              <span>06</span>
            </span>
            <span className="eyebrow !mb-0">الأسئلة الشائعة</span>
          </div>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            كل اللي تريد تعرفه.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
