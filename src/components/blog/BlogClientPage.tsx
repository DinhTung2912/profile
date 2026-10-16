'use client';

import { useMemo, useState } from 'react';
import { posts } from '@/data/posts';
import PostIndex from '@/components/blog/PostIndex';
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

  return (
    <div className="page-space">
      <div className="site-container">
        <Breadcrumb items={[{ label: 'Blog' }]} />

        <PageHeader
          badge="Ghi chép"
          title="Blog"
          description="Ghi chép kỹ thuật về Odoo, Python, PostgreSQL và tích hợp hệ thống — cùng những bài học rút ra từ công việc và quá trình phát triển bản thân."
        />

        {posts.length === 0 ? (
          <div className="mt-10">
            <EmptyState title="Chưa có bài viết" description="Chưa có bài viết nào được xuất bản." />
          </div>
        ) : (
          <section className="mt-10" aria-labelledby="danh-sach-bai-viet">
            {/* Row titles are h3, so the list needs an h2 to keep the document
                outline from jumping h1 -> h3. */}
            <h2 id="danh-sach-bai-viet" className="sr-only">
              Danh sách bài viết
            </h2>

            {/* Text filters, not pills: five posts do not need a control bar. */}
            <div
              role="group"
              aria-label="Lọc theo danh mục"
              className="meta-row gap-x-1 text-sm"
            >
              {categories.map((category, index) => {
                const active = activeCategory === category;
                return (
                  <span key={category} className="flex items-center gap-x-1">
                    {index > 0 && (
                      <span className="meta-sep mr-1" aria-hidden="true">
                        /
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={active}
                      className={`py-1 transition-colors ${
                        active
                          ? 'font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  </span>
                );
              })}
              <span className="ml-auto text-xs" aria-live="polite">
                {filteredPosts.length} bài
              </span>
            </div>

            <div className="mt-5">
              {filteredPosts.length === 0 ? (
                <EmptyState
                  title="Không có bài viết"
                  description="Chưa có bài viết nào trong danh mục này."
                />
              ) : (
                <PostIndex posts={filteredPosts} />
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
