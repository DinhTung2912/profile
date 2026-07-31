import Link from 'next/link';
import Image from 'next/image';
import { videos } from '@/data/videos';
import { Play } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { formatDate } from '@/lib/utils';

export default function LatestVlogs() {
  const [featured, ...rest] = videos;
  const upNext = rest.slice(0, 3);

  if (!featured) return null;

  return (
    <section className="section-space border-b border-border bg-surface-muted">
      <div className="site-container">
        <SectionHeading
          eyebrow="Thước phim"
          title="Vlog mới"
          action={{ label: 'Xem tất cả vlog', href: '/vlog' }}
        />

        <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Spotlight */}
          <div className="lg:col-span-8">
            <Link href={`/vlog#${featured.id}`} className="group block">
              <div className="media-frame aspect-video w-full rounded-xl border border-border">
                <Image
                  src={featured.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 group-hover:scale-105">
                    <Play className="ml-0.5 size-6 fill-current" aria-hidden="true" />
                  </span>
                </span>
                {featured.duration && (
                  <span className="absolute bottom-3 right-3 rounded bg-media/85 px-2 py-0.5 text-xs font-semibold tabular-nums text-white">
                    {featured.duration}
                  </span>
                )}
              </div>

              <p className="meta-row mt-4 text-xs">{formatDate(featured.date)}</p>
              <h3 className="card-title mt-1.5 text-xl text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
            </Link>
          </div>

          {/* Up next */}
          {upNext.length > 0 && (
            <div className="lg:col-span-4">
              <h3 className="label-caps">
                Tiếp theo
              </h3>
              <ul className="mt-4 divide-y divide-border border-t border-border">
                {upNext.map((video) => (
                  <li key={video.id}>
                    <Link
                      href={`/vlog#${video.id}`}
                      className="group flex items-center gap-3.5 py-3.5"
                    >
                      <div className="media-frame aspect-video w-24 shrink-0 rounded-md">
                        <Image src={video.thumbnail} alt="" fill sizes="6rem" className="object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                          {video.title}
                        </h4>
                        <p className="meta-row mt-1 text-xs">
                          <span>{formatDate(video.date)}</span>
                          {video.duration && (
                            <>
                              <span className="meta-sep" aria-hidden="true">
                                •
                              </span>
                              <span className="tabular-nums">{video.duration}</span>
                            </>
                          )}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
