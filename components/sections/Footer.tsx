import Link from "next/link";

const LINKS = [
  { href: "/privacy", label: "الخصوصية" },
  { href: "/terms", label: "الشروط" },
  { href: "/support", label: "الدعم" },
  { href: "/support#contact", label: "تواصل" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--stroke)] py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 items-start">
          <div className="flex items-start gap-3">
            <img
              src="/brand/icon/180.png"
              alt=""
              width={44}
              height={44}
              className="rounded-[10px]"
              draggable={false}
            />
            <div>
              <span className="text-[17px] font-bold text-ink block">AiQo</span>
              <p className="text-[13px] text-ink-soft mt-1 leading-relaxed max-w-[260px]">
                ليس تطبيقاً. بُعدٌ جديد للصحة.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold text-ink-faint uppercase tracking-[0.12em] mb-4">
              روابط
            </p>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-ink-soft hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold text-ink-faint uppercase tracking-[0.12em] mb-4">
              تابعنا
            </p>
            <a
              href="https://instagram.com/aiqoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-ink-soft hover:text-ink transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @aiqoapp
            </a>
            <p className="mt-6 text-[13px] text-ink-soft">
              صُمم بحبّ في الإمارات <span aria-hidden>🇦🇪</span>
            </p>
            <p className="mt-2 text-[12.5px] text-ink-soft leading-relaxed">
              Founder &amp; CEO · <span className="text-ink font-semibold">Mohammed Raad</span> <span aria-hidden>🇮🇶</span>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-[color:var(--stroke)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[12px] text-ink-faint">
            © 2026 AiQo. جميع الحقوق محفوظة.
          </p>
          <p className="text-[11px] text-ink-faint max-w-[520px] leading-relaxed">
            Apple، Apple Watch، Apple Health، و Spotify علامات تجارية لأصحابها. AiQo ليست مرتبطة بأي من هذه الشركات.
          </p>
        </div>
      </div>
    </footer>
  );
}
