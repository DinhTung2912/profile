import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import FeaturedJourneys from '@/components/home/FeaturedJourneys';
import LatestPosts from '@/components/home/LatestPosts';
import LatestVlogs from '@/components/home/LatestVlogs';
import PersonalMessage from '@/components/home/PersonalMessage';

// No `title` here on purpose: `title.template` from the root layout does not
// apply to a page in the same segment, so overriding it would drop the name
// from the homepage tab. The layout's `title.default` is the right title.
export const metadata: Metadata = {
  description:
    'Nguyễn Đình Tùng — Odoo Developer. Kinh nghiệm phát triển module, tùy chỉnh quy trình nghiệp vụ, báo cáo, tích hợp REST API/XML-RPC và xử lý dữ liệu PostgreSQL.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedJourneys />
      <LatestPosts />
      <LatestVlogs />
      <PersonalMessage />
    </>
  );
}
