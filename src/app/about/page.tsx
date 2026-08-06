import PageHeader from '@/components/shared/PageHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import StorySection from '@/components/about/StorySection';
import Timeline from '@/components/about/Timeline';
import SkillsSection from '@/components/about/SkillsSection';

export const metadata = {
  title: 'Về tôi',
  description:
    'Kinh nghiệm, kỹ năng và quá trình làm việc với Odoo ERP của Nguyễn Đình Tùng.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <div className="page-space pb-0">
        <div className="site-container">
          <Breadcrumb items={[{ label: 'Về tôi' }]} />
          <PageHeader
            badge="Giới thiệu"
            title="Về tôi"
            description="Odoo Developer với hơn 2 năm kinh nghiệm phát triển module, tùy chỉnh quy trình nghiệp vụ và vận hành hệ thống ERP. Ngoài công việc, mình đọc sách, chơi bóng đá và tìm hiểu về tài chính cá nhân."
          />
        </div>
      </div>
      <StorySection />
      <Timeline />
      <SkillsSection />
    </>
  );
}
