import { Metadata } from 'next';
import BlogClientPage from '@/components/blog/BlogClientPage';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Ghi chép kỹ thuật về Odoo, Python, PostgreSQL và tích hợp hệ thống.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return <BlogClientPage />;
}
