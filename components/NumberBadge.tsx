/** "01 / 08" style numeric chapter label — hyper-professional, Apple-grade. */
export function NumberBadge({
  n,
  total,
  className = "",
}: {
  n: number;
  total: number;
  className?: string;
}) {
  const pad = (x: number) => x.toString().padStart(2, "0");
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-ink-soft tabular-nums tracking-[0.12em] ${className}`}
      aria-hidden
    >
      <span className="text-ink">{pad(n)}</span>
      <span className="w-4 h-px bg-[color:var(--color-mint-vibrant)]" />
      <span>{pad(total)}</span>
    </span>
  );
}
