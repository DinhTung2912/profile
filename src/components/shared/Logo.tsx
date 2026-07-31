import Link from 'next/link';

// Shared by the header and the footer so the wordmark can never drift apart.
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tùng ERP — Trang chủ"
      className={`inline-flex items-baseline gap-1.5 ${className}`}
    >
      <span className="font-serif text-xl font-semibold tracking-tight text-foreground">Tùng</span>
      <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-primary">ERP</span>
    </Link>
  );
}
