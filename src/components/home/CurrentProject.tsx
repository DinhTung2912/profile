import { BookOpen } from 'lucide-react';
import { profile } from '@/data/profile';

export default function CurrentProject() {
  const project = profile.currentProject;
  if (!project) return null;

  return (
    <section className="section-space border-b border-border bg-surface-muted">
      <div className="site-container">
        <article className="overflow-hidden rounded-xl border border-border bg-surface sm:flex">
          {/* Stand-in cover: the book has no artwork yet, and a mock cover reads
              as "in progress" better than a placeholder photo would. */}
          <div
            className="flex shrink-0 items-center justify-center bg-primary-soft px-8 py-10 sm:px-10"
            aria-hidden="true"
          >
            <div className="flex aspect-3/4 w-32 flex-col justify-between rounded-md border border-primary/25 bg-surface p-4 sm:w-36">
              <BookOpen className="size-5 text-primary" />
              <p className="card-title text-[15px] leading-tight text-foreground">
                {project.title}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {project.status}
              </span>
              <span className="label-caps">{project.kind}</span>
            </div>

            <h2 className="section-title mt-3.5 text-foreground">
              &ldquo;{project.title}&rdquo;
            </h2>

            <p className="mt-2 text-sm font-medium text-foreground">{project.summary}</p>

            <p className="body-copy mt-3 text-[15px]">{project.body}</p>

            <p className="mt-5 text-xs text-muted-foreground">
              Sách chưa phát hành — mình sẽ cập nhật tại đây khi có thông tin.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
