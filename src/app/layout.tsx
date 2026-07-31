import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const inter = Inter({ subsets: ['vietnamese'], variable: '--font-inter' });
const lora = Lora({ subsets: ['vietnamese'], variable: '--font-lora' });
const siteUrl = 'https://tungprofile.dev';

const siteTitle = 'Nguyễn Đình Tùng — Odoo Developer';
const siteDescription =
  'Nguyễn Đình Tùng — Odoo Developer với hơn 2 năm kinh nghiệm phát triển module, tùy chỉnh quy trình nghiệp vụ, làm báo cáo, tích hợp REST API/XML-RPC và xử lý dữ liệu PostgreSQL.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s — Nguyễn Đình Tùng',
    default: siteTitle,
  },
  description: siteDescription,
  alternates: { canonical: '/' },
  authors: [{ name: 'Nguyễn Đình Tùng' }],
  creator: 'Nguyễn Đình Tùng',
  keywords: [
    'Nguyễn Đình Tùng',
    'Odoo Developer',
    'Odoo ERP',
    'Python',
    'PostgreSQL',
    'XML-RPC',
    'REST API',
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Nguyễn Đình Tùng',
    locale: 'vi_VN',
    type: 'website',
    images: [
      { url: '/images/og-image.jpg', width: 1200, height: 630, alt: siteTitle },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/images/og-image.jpg'] },
  robots: { index: true, follow: true },
};

// Applies the stored theme before first paint so dark-mode visitors never see
// a flash of the light palette. Mirrors the resolution order in ThemeProvider.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <a href="#main-content" className="fixed left-4 top-3 z-100 -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0">
            Bỏ qua điều hướng
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
