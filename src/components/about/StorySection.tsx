import Image from 'next/image';
import { profile } from '@/data/profile';
import { Boxes, Database, Plug } from 'lucide-react';

// Each highlight maps to a skill area listed on the CV.
const highlights = [
  {
    icon: Boxes,
    tone: 'text-primary',
    title: 'Phát triển module Odoo',
    body: 'Xây dựng và tùy chỉnh model, view, action, menu, workflow, phân quyền và báo cáo QWeb/Excel.',
  },
  {
    icon: Plug,
    tone: 'text-accent-teal',
    title: 'Tích hợp hệ thống',
    body: 'Kết nối Odoo với hệ thống bên ngoài qua REST API, XML-RPC, Odoo Controller và JSON API.',
  },
  {
    icon: Database,
    tone: 'text-accent-rose',
    title: 'Xử lý dữ liệu',
    body: 'Truy vấn, kiểm tra, làm sạch và đối chiếu dữ liệu vận hành trên PostgreSQL.',
  },
];

export default function StorySection() {
  return (
    <section className="section-space">
      <div className="site-container grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="media-frame mx-auto aspect-3/4 w-full max-w-sm rounded-2xl border border-border lg:sticky lg:top-24 lg:max-w-none">
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

        <div className="lg:col-span-7">
          <p className="eyebrow">Đôi lời</p>
          <h2 className="section-title mt-3 text-foreground">
            Mình làm ERP, và mình viết về nó
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{profile.bio}</p>
            <p>
              Mình quen với việc ngồi cùng người dùng nghiệp vụ để bóc tách yêu cầu, rồi chuyển
              chúng thành module chạy được và bảo trì được. Phần lớn thời gian của mình là tùy chỉnh
              quy trình, viết báo cáo, đối soát dữ liệu và xử lý những lỗi phát sinh khi hệ thống
              đang chạy thật.
            </p>
            <p>
              Mình giữ thói quen học thêm công nghệ mới và nâng dần chuyên môn mỗi ngày, rồi viết
              lại những gì rút ra được — cả trong công việc lẫn trong quá trình phát triển bản thân.
            </p>
          </div>

          <dl className="mt-9 divide-y divide-border border-y border-border">
            {highlights.map(({ icon: Icon, tone, title, body }) => (
              <div key={title} className="flex items-start gap-4 py-4">
                <Icon className={`mt-0.5 size-5 shrink-0 ${tone}`} aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-foreground">{title}</dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{body}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-9">
            <h3 className="label-caps">
              Mục tiêu nghề nghiệp
            </h3>
            <ul className="mt-4 space-y-2.5">
              {profile.goals.map((goal) => (
                <li key={goal} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 border-t border-border pt-8">
            <h3 className="label-caps">
              Ngoài giờ làm
            </h3>

            <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-3">
              {profile.interests.map((interest) => (
                <div key={interest.title}>
                  <dt className="text-sm font-semibold text-foreground">{interest.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {interest.body}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{profile.sideWork}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
