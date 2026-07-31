import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  /** Renders a trailing "see all" link on the same baseline as the title. */
  action?: { label: string; href: string };
  className?: string;
}

export default function SectionHeading({
  title,
  eyebrow,
  subtitle,
  align = 'left',
  action,
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${
        centered ? 'sm:flex-col sm:items-center' : ''
      } ${className}`}
    >
      <div className={centered ? 'max-w-2xl text-center' : 'max-w-2xl'}>
        {eyebrow && <p className="eyebrow mb-2.5">{eyebrow}</p>}
        <h2 className="section-title text-foreground">{title}</h2>
        {subtitle && <p className="body-copy mt-3">{subtitle}</p>}
      </div>

      {action && (
        <Link
          href={action.href}
          className="group inline-flex w-fit shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          <span>{action.label}</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
