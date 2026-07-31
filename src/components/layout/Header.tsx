'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/components/shared/ThemeProvider';
import Logo from '@/components/shared/Logo';
import { navigation } from '@/data/navigation';

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  // The panel is stored as "open on this route", so any navigation — including
  // browser back/forward — closes it without needing an effect to reset state.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  const themeLabel = theme === 'light' ? 'Bật giao diện tối' : 'Bật giao diện sáng';

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Điều hướng chính">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative px-3 py-2 text-sm transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-primary after:transition-transform ${
                isActive(item.href)
                  ? 'font-semibold text-foreground after:scale-x-100'
                  : 'font-medium text-muted-foreground after:scale-x-0 hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
            aria-label={themeLabel}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-full text-foreground"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Điều hướng di động"
          className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background md:hidden"
        >
          <div className="site-container flex flex-col py-4">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className="flex items-baseline justify-between gap-4 border-b border-border py-4"
              >
                <span
                  className={`font-serif text-2xl tracking-tight ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </span>
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
