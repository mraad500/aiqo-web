import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AiQo Support",
  description:
    "Contact AiQo support for app issues, feedback, or feature requests.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "AiQo Support",
    description:
      "Contact AiQo support for app issues, feedback, or feature requests.",
    url: "https://aiqo.app/support",
    type: "website",
  },
};

const EMAIL = "appaiqo5@gmail.com";

export default function SupportPage() {
  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-24 px-5 md:px-8">
      <div className="mesh opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13.5px] text-ink-soft hover:text-ink transition-colors"
        >
          <span aria-hidden>←</span>
          <span>العودة للرئيسية</span>
        </Link>

        <h1
          className="font-display font-bold text-ink mt-8"
          style={{
            fontSize: "clamp(36px, 5.2vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.012em",
          }}
        >
          AiQo Support
        </h1>
        <p className="eyebrow-ar mt-3">الدعم</p>

        <section
          className="mt-10 bg-white/60 backdrop-blur-xl border border-[color:var(--glass-stroke)] rounded-[28px] p-7 md:p-10 shadow-[var(--shadow-aiqo)]"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="sr-only">
            تواصل معنا
          </h2>

          <p className="text-[16px] md:text-[17px] text-ink leading-[1.8] font-medium">
            لأي مشاكل في التطبيق، ملاحظات، أو اقتراحات ميزات — تواصل معنا عبر
            البريد الإلكتروني.
          </p>

          <p
            className="text-[14.5px] text-ink-soft leading-[1.75] mt-4"
            dir="ltr"
            style={{ textAlign: "left" }}
          >
            For app issues, feedback, or feature requests, contact us at:
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="btn-shine inline-flex items-center gap-2.5 mt-7 rounded-full bg-ink text-white px-6 py-3.5 text-[15px] font-bold hover:bg-ink-2 transition-colors shadow-[var(--shadow-lift)]"
            dir="ltr"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {EMAIL}
          </a>

          <p className="text-[12.5px] text-ink-faint mt-6">
            نرد عادةً خلال ٢٤–٤٨ ساعة · We usually reply within 24–48 hours.
          </p>
        </section>
      </div>
    </main>
  );
}
