import Image from 'next/image';
import { profile } from '@/data/profile';

export default function CurrentProject() {
  const project = profile.currentProject;
  if (!project) return null;

  return (
    <section className="section-space border-b border-border bg-surface-muted">
      <div className="site-container">
        <article className="overflow-hidden rounded-xl border border-border bg-surface sm:flex">
          <div className="flex shrink-0 items-center justify-center bg-primary-soft px-8 py-10 sm:px-10 sm:py-12">
            {/* Draft cover — sized by its own aspect ratio rather than `fill`, so
                the artwork is never cropped. */}
            <Image
              src={project.cover}
              alt={`Bìa nháp cuốn sách ${project.title}`}
              width={647}
              height={839}
              sizes="(max-width: 640px) 11rem, 13rem"
              className="w-44 rounded-sm shadow-md sm:w-52"
            />
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
              Bìa là bản nháp. Sách chưa phát hành — mình sẽ cập nhật tại đây khi có thông tin.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
