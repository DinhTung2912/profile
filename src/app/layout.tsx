import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { SITE_URL } from '@/lib/site';
import StructuredData from '@/components/shared/StructuredData';

const inter = Inter({ subsets: ['vietnamese'], variable: '--font-inter' });
const lora = Lora({ subsets: ['vietnamese'], variable: '--font-lora' });


const siteTitle = 'Nguyễn Đình Tùng — Odoo Developer';
const siteDescription =
  'Nguyễn Đình Tùng — Odoo Developer với hơn 2 năm kinh nghiệm phát triển module, tùy chỉnh quy trình nghiệp vụ, làm báo cáo, tích hợp REST API/XML-RPC và xử lý dữ liệu PostgreSQL.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s — Nguyễn Đình Tùng',
    default: siteTitle,
  },
  description: siteDescription,
  // No `alternates.canonical` here: child segments inherit it, which would make
  // every page declare the homepage as its canonical. Each page sets its own.
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
  // The share image comes from src/app/opengraph-image.png, which Next wires
  // into both og:image and twitter:image automatically — no manual URLs to
  // drift out of sync.
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: 'Nguyễn Đình Tùng',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
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
        <StructuredData />
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
