import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/data/posts';
import SectionHeading from '@/components/shared/SectionHeading';
import { formatDate } from '@/lib/utils';

export default function LatestPosts() {
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  if (latestPosts.length === 0) return null;

  return (
    <section className="section-space border-b border-border bg-background">
      <div className="site-container">
        <SectionHeading
          eyebrow="Góc chia sẻ"
          title="Bài viết mới nhất"
          action={{ label: 'Xem tất cả bài viết', href: '/blog' }}
        />

        {/* An editorial list, deliberately different from the card grids elsewhere. */}
        <ul className="mt-9 divide-y divide-border border-y border-border">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col-reverse gap-4 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              >
                <div className="min-w-0 flex-1">
                  <p className="meta-row text-xs">
                    <span className="eyebrow">{post.category}</span>
                    <span className="meta-sep" aria-hidden="true">
                      •
                    </span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="meta-sep" aria-hidden="true">
                      •
                    </span>
                    <span>{post.readingTime} phút đọc</span>
                  </p>

                  <h3 className="card-title mt-2 text-lg text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {post.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>

                <div className="media-frame aspect-16/10 w-full shrink-0 rounded-lg sm:w-40">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 10rem"
                    className="object-cover"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
