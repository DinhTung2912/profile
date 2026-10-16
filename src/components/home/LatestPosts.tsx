import { posts } from '@/data/posts';
import SectionHeading from '@/components/shared/SectionHeading';
import PostIndex from '@/components/blog/PostIndex';

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

        <div className="mt-9">
          <PostIndex posts={latestPosts} />
        </div>
      </div>
    </section>
  );
}
