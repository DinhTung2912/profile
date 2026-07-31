import { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import { GithubIcon, MailIcon, PhoneIcon } from '@/components/shared/BrandIcons';
import { profile } from '@/data/profile';
import PageHeader from '@/components/shared/PageHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ với Nguyễn Đình Tùng — Odoo Developer.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MailIcon,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: PhoneIcon,
      label: 'Điện thoại',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: profile.social.github.replace('https://', ''),
      href: profile.social.github,
    },
    {
      icon: MapPin,
      label: 'Khu vực',
      value: profile.location,
      href: null,
    },
  ];

  return (
    <div className="page-space">
      <div className="site-container">
        <Breadcrumb items={[{ label: 'Liên hệ' }]} />

        <PageHeader
          badge="Kết nối"
          title="Liên hệ"
          description="Hãy kết nối với mình để trao đổi về công việc Odoo/ERP, chia sẻ kinh nghiệm hoặc cơ hội hợp tác."
        />

        <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="label-caps">
              Thông tin liên hệ
            </h2>

            <ul className="mt-4 divide-y divide-border border-y border-border">
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const external = Boolean(href?.startsWith('http'));

                const body = (
                  <>
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-primary transition-colors group-hover:border-primary">
                      <Icon className="size-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="label-field">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-4 py-4"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-4">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-xl border border-border bg-surface-muted p-6">
              <h3 className="card-title text-lg text-foreground">Trao đổi về Odoo?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hiện mình đang làm Odoo Developer tại {profile.currentCompany}. Nếu bạn muốn hỏi về
                Odoo, tích hợp hệ thống hay xử lý dữ liệu, cứ gửi lời nhắn nhé — mình sẵn sàng trao
                đổi.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
