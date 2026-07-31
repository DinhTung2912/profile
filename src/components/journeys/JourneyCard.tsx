import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { Journey } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface JourneyCardProps {
  journey: Journey;
  /** Wide two-column treatment used for the lead journey of a list. */
  featured?: boolean;
  priority?: boolean;
}

export default function JourneyCard({
  journey,
  featured = false,
  priority = false,
}: JourneyCardProps) {
  const categoryName = journey.category || 'Hành trình';

  return (
    <article className={`card group h-full ${featured ? 'md:flex-row' : ''}`}>
      <Link
        href={`/journeys/${journey.slug}`}
        className={`flex h-full flex-col ${featured ? 'md:flex-row' : ''}`}
      >
        <div
          className={`media-frame w-full ${
            featured ? 'aspect-16/10 md:aspect-auto md:w-1/2 md:min-h-80' : 'aspect-16/10'
          }`}
        >
          <Image
            src={journey.image}
            alt=""
            fill
            priority={priority}
            sizes={
              featured
                ? '(max-width: 768px) 100vw, 50vw'
                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            }
            className="object-cover"
          />
        </div>

        <div className={`flex flex-1 flex-col p-5 ${featured ? 'md:w-1/2 md:justify-center md:p-8' : ''}`}>
          <p className="eyebrow">{categoryName}</p>

          <h3
            className={`card-title mt-2.5 text-foreground transition-colors group-hover:text-primary ${
              featured ? 'line-clamp-3 text-xl md:text-2xl' : 'line-clamp-2 text-lg'
            }`}
          >
            {journey.title}
          </h3>

          <p
            className={`mt-2 mb-5 text-sm leading-relaxed text-muted-foreground ${
              featured ? 'line-clamp-4' : 'line-clamp-3'
            }`}
          >
            {journey.description}
          </p>

          <div className="meta-row mt-auto border-t border-border pt-3.5 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5 text-primary" aria-hidden="true" />
              <time dateTime={journey.date}>{formatDate(journey.date)}</time>
            </span>
            {journey.location && (
              <>
                <span className="meta-sep" aria-hidden="true">
                  •
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                  {journey.location}
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
