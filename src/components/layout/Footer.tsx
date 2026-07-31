import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { profile } from '@/data/profile';
import Logo from '@/components/shared/Logo';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/shared/BrandIcons';

// Channels are only included once they have a URL, so the row never renders a
// dead link — fill in `social.linkedin` / `social.facebook` and they appear.
const channels = [
  { label: 'GitHub', href: profile.social.github, Icon: GithubIcon },
  ...(profile.social.linkedin
    ? [{ label: 'LinkedIn', href: profile.social.linkedin, Icon: LinkedinIcon }]
    : []),
  ...(profile.social.facebook
    ? [{ label: 'Facebook', href: profile.social.facebook, Icon: FacebookIcon }]
    : []),
  { label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: 'Điện thoại', href: `tel:${profile.phone}`, Icon: PhoneIcon },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-footer">
      <div className="site-container py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {/* Thương hiệu */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Mình xây dựng và vận hành hệ thống Odoo ERP — rồi viết lại những gì học được trên
              đường đi.
            </p>
          </div>

          {/* Điều hướng */}
          <nav aria-label="Điều hướng chân trang">
            <h2 className="label-caps">
              Điều hướng
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kết nối */}
          <div>
            <h2 className="label-caps">
              Kết nối
            </h2>

            {/* The address stays as readable text — the icon row below is for
                quick actions, not for repeating it. */}
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 -mx-1 block truncate rounded-md px-1 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {profile.email}
            </a>

            <ul className="mt-4 flex flex-wrap gap-2">
              {channels.map(({ label, href, Icon }) => {
                const external = href.startsWith('http');
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      title={label}
                      className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            {profile.title} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
