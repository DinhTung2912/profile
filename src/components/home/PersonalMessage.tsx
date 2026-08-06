import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { profile } from '@/data/profile';

export default function PersonalMessage() {
  return (
    // Sits on `background` so the CTA separates from the footer, which shares
    // the `surface-muted` tone.
    <section className="bg-background">
      <div className="site-container py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Liên hệ</p>
          <h2 className="section-title mt-3 text-foreground">Cùng trao đổi về Odoo</h2>
          <p className="body-copy mx-auto mt-4 text-center">
            Nếu bạn quan tâm đến Odoo ERP, tích hợp hệ thống, xử lý dữ liệu — hay chỉ đơn giản là
            muốn trao đổi về sách, tài chính cá nhân và chuyện nghề — cứ liên hệ với mình nhé.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Gửi lời nhắn
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
