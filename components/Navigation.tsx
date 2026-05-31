"use client";

import { useEffect, useState } from "react";
import { Apple, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { MagneticButton } from "@/components/MagneticButton";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "الكابتن", href: "#captain", id: "captain" },
  { label: "التطبيق", href: "#showcase", id: "showcase" },
  { label: "شرارة التعلم", href: "#learning-spark", id: "learning-spark" },
  { label: "الجري", href: "#outdoor-run", id: "outdoor-run" },
  { label: "الساعة", href: "#watch", id: "watch" },
  { label: "الأسعار", href: "#pricing", id: "pricing" },
  { label: "الأسئلة", href: "#faq", id: "faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => !!e);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        let bestId: string | null = null;
        let bestRatio = 0;
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > bestRatio) {
            bestRatio = e.intersectionRatio;
            bestId = (e.target as HTMLElement).id;
          }
        });
        if (bestId) setActive(bestId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  const { approved, url } = siteConfig.appStore;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-[color:var(--stroke)]"
          : "bg-white/40 backdrop-blur-xl border-b border-transparent"
      }`}
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="AiQo">
          <img
            src="/brand/icon/180.png"
            alt=""
            width={28}
            height={28}
            className="rounded-[7px]"
            draggable={false}
          />
          <span className="text-[17px] font-bold text-ink tracking-tight">AiQo</span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[13.5px] font-medium px-3 py-1.5 rounded-full transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink/5"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    aria-hidden
                  />
                )}
                <span className="relative z-[1]">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            className="text-[12px] font-semibold text-ink-soft hover:text-ink border border-[color:var(--stroke)] rounded-full px-3 py-1 h-7 transition-colors"
            aria-label="اللغة"
          >
            EN
          </button>
          {approved && url ? (
            <MagneticButton
              href={url}
              className="btn-shine inline-flex items-center gap-1.5 bg-[color:var(--color-mint-vibrant)] text-ink rounded-full px-4 py-2 text-[13px] font-bold hover:bg-[color:var(--color-mint-deep)] hover:text-white transition-colors"
              aria-label="حمّل التطبيق"
            >
              <Apple className="w-3.5 h-3.5" />
              حمّل التطبيق
            </MagneticButton>
          ) : null}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-[color:var(--stroke)] overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-ink py-3 px-2 rounded-lg hover:bg-ink/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              {approved && url ? (
                <>
                  <div className="h-px bg-[color:var(--stroke)] my-2" />
                  <a
                    href={url}
                    className="inline-flex items-center justify-center gap-2 bg-[color:var(--color-mint-vibrant)] text-ink rounded-full px-5 py-3 text-[14px] font-bold"
                  >
                    <Apple className="w-4 h-4" />
                    حمّل التطبيق
                  </a>
                </>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
