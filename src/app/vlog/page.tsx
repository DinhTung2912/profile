import { Metadata } from 'next';
import VlogPageContent from '@/components/vlog/VlogPageContent';

export const metadata: Metadata = {
  title: 'Vlog',
  description: 'Những video chia sẻ về công việc và quá trình làm Odoo.',
};

export default function VlogPage() {
  return <VlogPageContent />;
}
