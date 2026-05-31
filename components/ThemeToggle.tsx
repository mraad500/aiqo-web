"use client";

/** Light/dark toggle. The saved theme is applied pre-paint by an inline
 *  script in the layout <head>; this just flips the class + persists. Icon
 *  visibility is driven by the `.dark` class in CSS, so no hydration flash. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("aiqo-theme", isDark ? "dark" : "light");
    } catch {
      /* private mode — ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="تبديل بين الوضع الفاتح والليلي"
      className={`theme-toggle inline-flex items-center justify-center w-8 h-8 rounded-full border border-[color:var(--stroke)] text-ink-soft hover:text-ink hover:border-[color:var(--color-mint-vibrant)] transition-colors ${className}`}
    >
      <svg className="sun w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="moon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />
      </svg>
    </button>
  );
}
