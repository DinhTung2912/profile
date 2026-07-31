import { profile } from '@/data/profile';
import { Award } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

export default function SkillsSection() {
  const { skillGroups, softSkills, certifications } = profile;

  return (
    <section className="section-space border-t border-border">
      <div className="site-container">
        <SectionHeading
          eyebrow="Chuyên môn"
          title="Kỹ năng & Công cụ"
          subtitle="Những công nghệ mình sử dụng hằng ngày để xây dựng và vận hành hệ thống Odoo."
        />

        <div className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="label-caps">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5 border-t border-border pt-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-[13px] text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 border-t border-border pt-9 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="label-caps">
              Kỹ năng mềm
            </h3>
            <ul className="mt-4 space-y-2.5">
              {softSkills.map((skill) => (
                <li key={skill} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {certifications.length > 0 && (
            <div className="lg:col-span-5">
              <h3 className="label-caps">
                Chứng chỉ
              </h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center gap-3.5 rounded-xl border border-border bg-surface p-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                      <Award className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        {cert.name}
                      </span>
                      <span className="mt-0.5 block text-xs tabular-nums text-muted-foreground">
                        {cert.year}
                      </span>
                    </span>
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
