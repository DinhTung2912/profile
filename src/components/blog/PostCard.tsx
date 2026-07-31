import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
  /** Wide two-column treatment used for the lead article of a list. */
  featured?: boolean;
  /** Only the first card above the fold should load eagerly. */
  priority?: boolean;
}

export default function PostCard({ post, featured = false, priority = false }: PostCardProps) {
  return (
    <article className={`card group h-full ${featured ? 'sm:flex-row' : ''}`}>
      <Link
        href={`/blog/${post.slug}`}
        className={`flex h-full flex-col ${featured ? 'sm:flex-row' : ''}`}
      >
        <div
          className={`media-frame w-full ${
            featured ? 'aspect-16/10 sm:aspect-auto sm:w-1/2 sm:min-h-72' : 'aspect-16/10'
          }`}
        >
          <Image
            src={post.image}
            alt=""
            fill
            priority={priority}
            sizes={
              featured
                ? '(max-width: 640px) 100vw, 50vw'
                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            }
            className="object-cover"
          />
        </div>

        <div className={`flex flex-1 flex-col p-5 ${featured ? 'sm:w-1/2 sm:justify-center sm:p-8' : ''}`}>
          <p className="eyebrow">{post.category}</p>

          <h3
            className={`card-title mt-2.5 text-foreground transition-colors group-hover:text-primary ${
              featured ? 'line-clamp-3 text-xl sm:text-2xl' : 'line-clamp-2 text-lg'
            }`}
          >
            {post.title}
          </h3>

          <p
            className={`mt-2 text-sm leading-relaxed text-muted-foreground ${
              featured ? 'mb-6 line-clamp-4' : 'mb-5 line-clamp-3'
            }`}
          >
            {post.excerpt}
          </p>

          {/* mt-auto keeps the meta row aligned across cards of differing height. */}
          <div className="meta-row mt-auto border-t border-border pt-3.5 text-xs">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="meta-sep" aria-hidden="true">
              •
            </span>
            <span>{post.readingTime} phút đọc</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
