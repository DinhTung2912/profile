import { Metadata } from 'next';
import { journeys } from '@/data/journeys';
import JourneyCard from '@/components/journeys/JourneyCard';
import PageHeader from '@/components/shared/PageHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import EmptyState from '@/components/shared/EmptyState';

export const metadata: Metadata = {
  title: 'Hành trình',
  description:
    'Những cột mốc trong quá trình học tập và làm việc với Odoo ERP.',
  alternates: { canonical: '/journeys' },
};

export default function JourneysPage() {
  const sorted = [...journeys].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const [lead, ...others] = sorted;

  return (
    <div className="page-space">
      <div className="site-container">
        <Breadcrumb items={[{ label: 'Hành trình' }]} />

        <PageHeader
          badge="Chặng đường"
          title="Hành trình"
          description="Những cột mốc trong quá trình học tập và làm việc với Odoo ERP — từ khi còn là thực tập sinh đến khi phát triển và vận hành hệ thống thực tế."
          aside={
            <dl className="flex gap-8 text-sm">
              <div>
                <dt className="label-field">
                  Cột mốc
                </dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-foreground">
                  {journeys.length}
                </dd>
              </div>
              <div>
                <dt className="label-field">
                  Kinh nghiệm
                </dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-foreground">2+ năm</dd>
              </div>
            </dl>
          }
        />

        {sorted.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              title="Chưa có hành trình"
              description="Chưa có hành trình nào được chia sẻ."
            />
          </div>
        ) : (
          <section className="mt-9 space-y-6 lg:space-y-8" aria-labelledby="danh-sach-hanh-trinh">
            {/* Card titles are h3, so the list needs an h2 to keep the document
                outline from jumping h1 -> h3. */}
            <h2 id="danh-sach-hanh-trinh" className="sr-only">
              Danh sách hành trình
            </h2>

            {/* Newest journey leads at full width; the archive follows in two columns. */}
            <JourneyCard journey={lead} featured priority />

            {others.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {others.map((journey) => (
                  <JourneyCard key={journey.slug} journey={journey} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
