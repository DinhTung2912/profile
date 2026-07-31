import Link from 'next/link';
import Image from 'next/image';
import { journeys } from '@/data/journeys';
import SectionHeading from '@/components/shared/SectionHeading';
import JourneyCard from '@/components/journeys/JourneyCard';
import { formatDate } from '@/lib/utils';

export default function FeaturedJourneys() {
  const featured = journeys.filter((journey) => journey.featured).slice(0, 3);

  if (featured.length === 0) return null;

  const [lead, ...rest] = featured;

  return (
    <section className="section-space border-b border-border bg-surface-muted">
      <div className="site-container">
        <SectionHeading
          eyebrow="Nhật ký trải nghiệm"
          title="Hành trình nổi bật"
          action={{ label: 'Xem tất cả', href: '/journeys' }}
        />

        {/* Asymmetric: one lead card beside a compact stack, rather than a row of equals. */}
        <div className="mt-9 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <JourneyCard journey={lead} priority />
          </div>

          {rest.length > 0 && (
            <ul className="flex flex-col gap-4 lg:col-span-5">
              {rest.map((journey) => (
                <li key={journey.slug} className="flex-1">
                  <Link
                    href={`/journeys/${journey.slug}`}
                    className="group flex h-full items-center gap-4 rounded-xl border border-border bg-surface p-3 transition-colors hover:border-border-strong sm:gap-5 sm:p-4"
                  >
                    <div className="media-frame aspect-square w-24 shrink-0 rounded-lg sm:w-28">
                      <Image
                        src={journey.image}
                        alt=""
                        fill
                        sizes="7rem"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="meta-row text-xs">
                        <time dateTime={journey.date}>{formatDate(journey.date)}</time>
                        {journey.location && (
                          <>
                            <span className="meta-sep" aria-hidden="true">
                              •
                            </span>
                            <span>{journey.location}</span>
                          </>
                        )}
                      </p>
                      <h3 className="card-title mt-1.5 line-clamp-2 text-base text-foreground transition-colors group-hover:text-primary">
                        {journey.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {journey.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
