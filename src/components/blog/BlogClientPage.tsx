'use client';

import { useMemo, useState } from 'react';
import { posts } from '@/data/posts';
import PostCard from '@/components/blog/PostCard';
import PageHeader from '@/components/shared/PageHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import EmptyState from '@/components/shared/EmptyState';

const ALL = 'Tất cả';

export default function BlogClientPage() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
  );

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(sortedPosts.map((post) => post.category)))],
    [sortedPosts],
  );

  const filteredPosts =
    activeCategory === ALL
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === activeCategory);

  const [lead, ...others] = filteredPosts;

  return (
    <div className="page-space">
      <div className="site-container">
        <Breadcrumb items={[{ label: 'Blog' }]} />

        <PageHeader
          badge="Ghi chép"
          title="Blog"
          description="Ghi chép kỹ thuật về Odoo, Python, PostgreSQL và tích hợp hệ thống — cùng những bài học rút ra từ công việc và quá trình phát triển bản thân."
          aside={
            // Reflects the active filter, so the count never contradicts the list.
            <p aria-live="polite" className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredPosts.length}</span> bài viết
            </p>
          }
        />

        {posts.length === 0 ? (
          <div className="mt-10">
            <EmptyState title="Chưa có bài viết" description="Chưa có bài viết nào được xuất bản." />
          </div>
        ) : (
          <>
            <div
              role="group"
              aria-label="Lọc theo danh mục"
              className="mt-9 flex flex-wrap gap-2"
            >
              {categories.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      active
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="mt-8">
                <EmptyState
                  title="Không có bài viết"
                  description="Chưa có bài viết nào trong danh mục này."
                />
              </div>
            ) : (
              <section className="mt-8 space-y-6 lg:space-y-8" aria-labelledby="danh-sach-bai-viet">
                {/* Card titles are h3, so the list needs an h2 to keep the
                    document outline from jumping h1 -> h3. */}
                <h2 id="danh-sach-bai-viet" className="sr-only">
                  Danh sách bài viết
                </h2>

                {/* Lead article gets a wide treatment; the rest sit in a two-column grid. */}
                <PostCard post={lead} featured priority />

                {others.length > 0 && (
                  <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                    {others.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                )}
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}
