"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BRAND } from "@/lib/assets";
import { PictureBrand } from "@/components/Picture";
import { NumberBadge } from "@/components/NumberBadge";
import { KineticHeading } from "@/components/KineticHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

const QUOTES = [
  { quote: "شلونك اليوم؟ نمت زين؟", label: "محادثة يومية" },
  {
    quote: "تذكّر لمن قلتلي تريد تخف ٥ كيلو؟ واصل، باقيلك ٢.",
    label: "ذاكرة حقيقية",
  },
  {
    quote: "اليوم طاقتك أقل من المعدل. خل نخففها شوي.",
    label: "ذكاء سياقي",
  },
];

export function Captain() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [40, -60]);

  return (
    <section
      id="captain"
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 30%, rgba(235,207,151,0.18), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <NumberBadge n={1} total={6} />
            <span className="eyebrow !mb-0">الشخصية</span>
          </div>
          <KineticHeading
            as="h2"
            className="font-display font-bold text-ink"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            {"مو مساعد.\nشخصية."}
          </KineticHeading>
          <p className="text-[18px] text-ink-soft leading-[1.65] mt-6 max-w-[520px]">
            بلهجتك. بمزاجك. بذاكرتك. كابتن حمودي مش AI عام — هو مدرّب عربي
            مصمّم لك، يفهمك بدون ما تترجم.
          </p>

          <div className="mt-10 space-y-3">
            {QUOTES.map((q, i) => (
              <motion.div
                key={q.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="bg-white/55 backdrop-blur-xl border border-[color:var(--glass-stroke)] rounded-[22px] p-5 shadow-[var(--shadow-aiqo)]"
              >
                <p className="text-[16px] md:text-[17px] font-semibold text-ink leading-relaxed">
                  «{q.quote}»
                </p>
                <p className="text-[12px] font-bold text-[color:var(--color-mint-deep)] mt-2 tracking-wide">
                  {q.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          style={{ y: portraitY }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE }}
            className="relative w-full max-w-[460px]"
          >
            <div
              className="absolute -inset-8 -z-10 rounded-full blur-3xl opacity-35"
              style={{ background: "var(--color-mint-soft)" }}
              aria-hidden
            />
            <motion.div
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[40px] overflow-hidden border border-[color:var(--stroke)] shadow-[var(--shadow-lift)]"
              style={{
                aspectRatio: `${BRAND.captainPortraitNatural.width} / ${BRAND.captainPortraitNatural.height}`,
                background:
                  "linear-gradient(160deg, #F5E8CC 0%, #EBCF97 40%, #D9B26A 100%)",
              }}
            >
              <PictureBrand
                asset={BRAND.captainPortraitNatural}
                sizes="(max-width: 768px) 90vw, 460px"
                className="w-full h-full object-cover"
                priority
              />
              {/* soft warm glow at the top */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 40%, rgba(10,10,10,0) 70%, rgba(10,10,10,0.08) 100%)",
                }}
                aria-hidden
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
