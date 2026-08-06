import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { journeys } from '@/data/journeys';
import { formatDate } from '@/lib/utils';
import Breadcrumb from '@/components/shared/Breadcrumb';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return journeys.map((journey) => ({
    slug: journey.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const journey = journeys.find((j) => j.slug === slug);

  if (!journey) {
    return {
      title: 'Không tìm thấy',
    };
  }

  return {
    title: journey.title,
    description: journey.description,
    alternates: { canonical: `/journeys/${slug}` },
  };
}

export default async function JourneyDetailPage({ params }: Props) {
  const { slug } = await params;

  // Walk the archive in date order, not array order, so "mới hơn / cũ hơn"
  // always means what it says regardless of how the data file is arranged.
  const byDate = [...journeys].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const currentIndex = byDate.findIndex((j) => j.slug === slug);
  const journey = byDate[currentIndex];

  if (!journey) {
    notFound();
  }

  const newerJourney = currentIndex > 0 ? byDate[currentIndex - 1] : null;
  const olderJourney = currentIndex < byDate.length - 1 ? byDate[currentIndex + 1] : null;

  return (
    <div className="page-space">
      <article>
        <header className="reading-container">
          <Breadcrumb items={[{ label: 'Hành trình', href: '/journeys' }, { label: journey.title }]} />

          <h1 className="display-title text-foreground">{journey.title}</h1>

          <div className="meta-row mt-5 border-t border-border pt-4 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4 text-primary" aria-hidden="true" />
              <time dateTime={journey.date}>{formatDate(journey.date)}</time>
            </span>
            {journey.location && (
              <>
                <span className="meta-sep" aria-hidden="true">
                  •
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {journey.location}
                </span>
              </>
            )}
          </div>
        </header>

        <div className="site-container mt-9">
          <div className="media-frame aspect-16/9 w-full rounded-xl border border-border">
            <Image
              src={journey.image}
              alt=""
              fill
              priority
              sizes="(max-width: 1088px) 100vw, 68rem"
              className="object-cover"
            />
          </div>
        </div>

        <div
          className="reading-container prose mt-10"
          dangerouslySetInnerHTML={{ __html: journey.content }}
        />

        {journey.lesson && (
          <div className="reading-container mt-10">
            <div className="rounded-xl border border-border bg-surface-muted p-6">
              <h2 className="eyebrow">Bài học rút ra</h2>
              <p className="mt-2.5 font-serif text-lg italic leading-relaxed text-foreground">
                {journey.lesson}
              </p>
            </div>
          </div>
        )}
      </article>

      {(newerJourney || olderJourney) && (
        <nav
          aria-label="Điều hướng hành trình"
          className="reading-container mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
        >
          {newerJourney ? (
            <Link
              href={`/journeys/${newerJourney.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-border-strong"
            >
              <ChevronLeft className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="min-w-0">
                <span className="label-field">Mới hơn</span>
                <span className="mt-0.5 line-clamp-1 block text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {newerJourney.title}
                </span>
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}

          {olderJourney && (
            <Link
              href={`/journeys/${olderJourney.slug}`}
              className="group flex items-center justify-end gap-3 rounded-xl border border-border p-4 text-right transition-colors hover:border-border-strong sm:col-start-2"
            >
              <span className="min-w-0">
                <span className="label-field">Cũ hơn</span>
                <span className="mt-0.5 line-clamp-1 block text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {olderJourney.title}
                </span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
