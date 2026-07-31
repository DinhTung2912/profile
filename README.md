# Nguyễn Đình Tùng — Odoo Developer

Website cá nhân: hồ sơ năng lực, ghi chép kỹ thuật và các cột mốc nghề nghiệp.
Xây dựng bằng **Next.js App Router**, **Tailwind CSS v4** và **TypeScript**.

- Light/Dark mode, áp dụng trước khi paint nên không nháy màu khi tải trang
- Toàn bộ trang được pre-render tĩnh (SSG)
- Không dùng thư viện animation; chuyển động chỉ bằng CSS transition
- Màu sắc đạt WCAG AA ở cả hai theme

## Chạy local

Yêu cầu Node.js 18+.

```bash
npm install
```

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
```

```bash
npm start
```

## Kiểm tra code

```bash
npm run lint
```

---

## Chỉnh sửa nội dung

Toàn bộ nội dung nằm trong `src/data/`, tách riêng khỏi component. Kiểu dữ liệu
được định nghĩa trong `src/lib/types.ts` — sửa sai cấu trúc thì `npm run build`
sẽ báo lỗi ngay.

### Thông tin cá nhân — `src/data/profile.ts`

| Trường | Ý nghĩa |
| --- | --- |
| `name`, `title`, `bio` | Thông tin cơ bản |
| `yearsOfExperience`, `currentCompany` | Hiển thị ở Hero |
| `email`, `phone`, `location` | Dùng ở trang Liên hệ và Footer |
| `social` | `github` bắt buộc; `linkedin` / `facebook` để trống thì Footer tự ẩn icon |
| `skillGroups` | Mảng `{ category, items[] }` — mỗi nhóm là một khối ở trang Giới thiệu |
| `softSkills`, `certifications`, `goals` | Danh sách hiển thị ở trang Giới thiệu |
| `personalIntro`, `interests`, `sideWork` | Phần "Ngoài giờ làm" |

### Kinh nghiệm — mảng `timeline` trong `profile.ts`

```typescript
{
  year: '06/2026 - Hiện tại',   // chuỗi tự do, chỉ để hiển thị
  startedAt: '2026-06',          // YYYY-MM, dùng để sắp xếp
  title: 'Odoo Developer',
  org: 'Minara',                 // tùy chọn
  description: 'Mô tả ngắn.',
  highlights: ['Đầu việc 1', 'Đầu việc 2'],  // tùy chọn
  type: 'work',                  // 'work' | 'education' | 'certification'
}
```

`year` là chuỗi tự do nên không parse được — thứ tự luôn lấy từ `startedAt`.

### Bài viết — `src/data/posts.ts`

```typescript
{
  slug: 'duong-dan-bai-viet',    // không dấu, dùng gạch ngang
  title: 'Tiêu đề bài viết',
  date: '2026-07-28',            // YYYY-MM-DD
  category: 'Odoo',              // cũng là bộ lọc ở trang Blog
  image: '/images/ten-anh.jpg',
  excerpt: 'Mô tả ngắn hiển thị ở card.',
  content: '<p>Nội dung HTML…</p>',
  readingTime: 5,                // phút
}
```

### Hành trình — `src/data/journeys.ts`

```typescript
{
  slug: 'hanh-trinh-moi',
  title: 'Tiêu đề',
  date: '2026-07-28',
  location: 'Địa điểm',
  image: '/images/ten-anh.jpg',
  category: 'Sự nghiệp',
  description: 'Mô tả ngắn.',
  content: '<p>Nội dung HTML…</p>',
  lesson: 'Bài học rút ra.',
  featured: true,                // true thì lên Trang chủ
}
```

Bài mới nhất tự động thành card lớn dẫn đầu danh sách.

### Vlog — `src/data/videos.ts`

Mảng đang để trống, trang `/vlog` hiển thị trạng thái rỗng. Thêm video:

```typescript
{
  id: 'vlog-01',                 // dùng làm anchor: /vlog#vlog-01
  title: 'Tiêu đề video',
  date: '2026-07-28',
  youtubeId: 'ID_VIDEO_YOUTUBE',
  thumbnail: '/images/ten-anh.jpg',
  description: 'Mô tả ngắn.',
  duration: '10:05',
}
```

### Hình ảnh — `public/images/`

Tỉ lệ khuyến nghị:

- Ảnh chân dung (`avatar.jpg`): dọc 4:5 — Hero và Giới thiệu đều dùng khung dọc
- Ảnh bài viết / hành trình: 16:10
- `og-image.jpg`: 1200×630

---

## Cấu trúc thư mục

```
src/
├── app/                 Route (Next.js App Router)
│   ├── about/  blog/  journeys/  vlog/  contact/
│   ├── layout.tsx       Metadata, font, script chống nháy theme
│   ├── globals.css      Design token + utility class dùng chung
│   ├── sitemap.ts       Sinh từ dữ liệu nội dung
│   └── robots.ts
├── components/
│   ├── layout/          Header, Footer, ScrollToTop
│   ├── shared/          Logo, PageHeader, SectionHeading, Breadcrumb,
│   │                    EmptyState, BrandIcons, ThemeProvider
│   └── home/ about/ blog/ journeys/ vlog/ contact/
├── data/                Toàn bộ nội dung
└── lib/                 Kiểu dữ liệu và hàm tiện ích
```

### Design token

Màu, khoảng cách và kiểu chữ khai báo tập trung trong `src/app/globals.css`:

- Biến màu ở `:root` và `.dark` — đổi một chỗ, áp dụng toàn site
- `.site-container` (68rem) và `.reading-container` (46rem cho bài viết)
- `.eyebrow` / `.label-caps` / `.label-field` — ba vai trò nhãn chữ hoa nhỏ
- `.card`, `.media-frame`, `.prose`, `.meta-row`

Không thêm mã màu trực tiếp vào component — dùng token để giữ light/dark đồng bộ.

---

## Cần cập nhật trước khi deploy

- Thay `https://tungprofile.dev` bằng domain thật trong `src/app/layout.tsx`,
  `src/app/sitemap.ts` và `src/app/robots.ts`
- Điền `social.linkedin` / `social.facebook` trong `profile.ts` nếu muốn hiện icon
- Form liên hệ hiện chỉ mô phỏng việc gửi (`setTimeout` trong
  `src/components/contact/ContactForm.tsx`) — cần nối vào API thật
