import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { posts } from '@/data/posts';
import { formatDate } from '@/lib/utils';
import PostCard from '@/components/blog/PostCard';
import Breadcrumb from '@/components/shared/Breadcrumb';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Không tìm thấy',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Prefer same-category posts, then top up with the most recent others — most
  // categories hold a single post, and an article should never dead-end.
  const others = posts.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others
    .filter((p) => p.category !== post.category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const relatedPosts = [...sameCategory, ...rest].slice(0, 2);

  return (
    <div className="page-space">
      <article>
        <header className="reading-container">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

          <p className="eyebrow">{post.category}</p>

          <h1 className="display-title mt-3 text-foreground">{post.title}</h1>

          <div className="meta-row mt-5 border-t border-border pt-4 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4 text-primary" aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="meta-sep" aria-hidden="true">
              •
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              {post.readingTime} phút đọc
            </span>
          </div>
        </header>

        {/* `fill` needs a positioned, sized parent — `.media-frame` supplies both. */}
        <div className="site-container mt-9">
          <div className="media-frame aspect-16/9 w-full rounded-xl border border-border">
            <Image
              src={post.image}
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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {relatedPosts.length > 0 && (
        <aside className="site-container mt-16 border-t border-border pt-10">
          <h2 className="section-title text-foreground">Đọc tiếp</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </aside>
      )}
    </div>
  );
}
