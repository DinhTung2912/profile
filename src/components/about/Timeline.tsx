import { timeline } from '@/data/profile';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const TYPES = {
  education: { icon: GraduationCap, dot: 'bg-mark-study', label: 'Học vấn' },
  work: { icon: Briefcase, dot: 'bg-mark-work', label: 'Công việc' },
  certification: { icon: Award, dot: 'bg-mark-life', label: 'Chứng chỉ' },
} as const;

export default function Timeline() {
  // `year` is free text ("07/2024 - 04/2026"), so sort on the explicit start key.
  const sortedTimeline = [...timeline].sort((a, b) => b.startedAt.localeCompare(a.startedAt));

  return (
    <section className="section-space border-t border-border bg-surface-muted">
      <div className="site-container">
        <SectionHeading
          eyebrow="Dòng thời gian"
          title="Kinh nghiệm & Học vấn"
          subtitle="Quá trình làm việc với Odoo ERP, từ thực tập đến phát triển và vận hành hệ thống thực tế."
        />

        {/* Single left rail: reads the same on mobile and desktop, unlike an
            alternating layout that has to collapse on small screens. */}
        <ol className="relative mt-10 border-l border-border pl-8 sm:pl-10">
          {sortedTimeline.map((item) => {
            const { icon: Icon, dot, label } = TYPES[item.type] ?? TYPES.work;

            return (
              <li key={`${item.startedAt}-${item.title}`} className="pb-10 last:pb-0">
                <span
                  className={`absolute -left-4 grid size-8 place-items-center rounded-full ring-4 ring-surface-muted ${dot}`}
                  aria-hidden="true"
                >
                  <Icon className="size-4 text-white" />
                </span>

                <p className="meta-row text-xs">
                  <span className="font-semibold tabular-nums text-foreground">{item.year}</span>
                  <span className="meta-sep" aria-hidden="true">
                    •
                  </span>
                  <span>{label}</span>
                </p>

                <h3 className="card-title mt-1.5 text-lg text-foreground">{item.title}</h3>

                {item.org && (
                  <p className="mt-0.5 text-sm font-semibold text-primary">{item.org}</p>
                )}

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-3 max-w-2xl space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-border-strong"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
