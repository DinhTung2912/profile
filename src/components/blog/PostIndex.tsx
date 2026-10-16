import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface PostIndexProps {
  posts: Post[];
}

/**
 * Typographic index rather than a card grid. The writing is technical, so an
 * image per row adds nothing and a row of identical bordered cards is the
 * thing that reads as a template.
 */
export default function PostIndex({ posts }: PostIndexProps) {
  return (
    <ol className="divide-y divide-border border-t border-border">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-x-6 gap-y-1 py-7 sm:grid-cols-[3rem_1fr] sm:gap-x-8 sm:py-9"
          >
            <span
              className="font-serif text-xl leading-none text-border-strong tabular-nums transition-colors group-hover:text-primary sm:pt-1.5 sm:text-2xl"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="min-w-0">
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

              <h3 className="card-title mt-2 max-w-2xl text-xl text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                {post.title}
              </h3>

              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <span className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Đọc bài
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
