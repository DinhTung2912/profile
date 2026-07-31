import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="site-container flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-serif text-7xl font-semibold text-primary sm:text-8xl">404</p>

      <h1 className="section-title mt-5 text-foreground">Trang không tồn tại</h1>

      <p className="body-copy mx-auto mt-4 text-center">
        Có vẻ như bạn đã đi lạc. Trang bạn đang tìm kiếm có thể đã bị xóa, thay đổi tên hoặc tạm thời
        không truy cập được.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        <Home className="size-4" aria-hidden="true" />
        Trở về Trang chủ
      </Link>
    </div>
  );
}
