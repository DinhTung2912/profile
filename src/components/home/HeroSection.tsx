import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { profile } from '@/data/profile';

export default function HeroSection() {
  const mainStack = ['Odoo 14+', 'Python', 'PostgreSQL', 'REST API'];

  return (
    <section className="border-b border-border bg-background">
      <div className="site-container grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="eyebrow">
            {profile.title} · {profile.yearsOfExperience} kinh nghiệm
          </p>

          <h1 className="display-title mt-4 max-w-[18ch] text-foreground">
            Xây dựng hệ thống Odoo ERP ổn định và dễ bảo trì.
          </h1>

          <p className="body-copy mt-6">
            Mình là {profile.name}. Công việc của mình là phát triển module, tùy chỉnh quy trình
            nghiệp vụ, làm báo cáo, tích hợp REST API/XML-RPC và xử lý dữ liệu PostgreSQL cho những
            hệ thống đang chạy thật.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {profile.personalIntro} Mình viết lại ở đây những gì học được trong công việc và trên
            đường phát triển bản thân.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Xem kinh nghiệm
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Liên hệ
            </Link>
          </div>

          <dl className="mt-10 grid gap-x-10 gap-y-5 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <dt className="label-field">Hiện tại</dt>
              <dd className="mt-1.5 text-sm font-semibold text-foreground">
                {profile.currentCompany}
              </dd>
            </div>
            <div>
              <dt className="label-field">Khu vực</dt>
              <dd className="mt-1.5 text-sm font-semibold text-foreground">{profile.location}</dd>
            </div>
            <div>
              <dt className="label-field">Công nghệ chính</dt>
              <dd className="mt-1.5 flex flex-wrap gap-1.5">
                {mainStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="media-frame mx-auto aspect-4/5 w-full max-w-sm rounded-2xl border border-border lg:max-w-none">
            <Image
              src={profile.avatar}
              alt={`Chân dung ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 24rem, 34vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
