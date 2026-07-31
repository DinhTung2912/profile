import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  /** Trail after "Trang chủ". The last entry renders as plain text. */
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Trang chủ
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-1.5">
              <ChevronRight className="size-3.5 shrink-0 text-border-strong" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  // On article pages the last crumb is the full title, which
                  // already appears as the h1 below — keep it to one line.
                  className="max-w-[16rem] truncate font-medium text-foreground sm:max-w-md"
                  aria-current={isLast ? 'page' : undefined}
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="shrink-0 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
