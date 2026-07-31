interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  /** Optional right-hand slot: counts, filters, a secondary link. */
  aside?: React.ReactNode;
}

export default function PageHeader({ title, description, badge, aside }: PageHeaderProps) {
  return (
    <header className="border-b border-border pb-9 sm:pb-11">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="max-w-2xl">
          {badge && <p className="eyebrow mb-3">{badge}</p>}
          <h1 className="display-title text-foreground">{title}</h1>
          {description && <p className="body-copy mt-4">{description}</p>}
        </div>
        {aside && <div className="shrink-0 sm:pb-1.5">{aside}</div>}
      </div>
    </header>
  );
}
