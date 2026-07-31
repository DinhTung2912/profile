import { Profile, TimelineItem } from '../lib/types';

export const profile: Profile = {
  name: 'Nguyễn Đình Tùng',
  title: 'Odoo Developer',
  yearsOfExperience: 'hơn 2 năm',
  /** Nơi làm việc hiện tại. */
  currentCompany: 'Minara',
  bio: 'Mình là Nguyễn Đình Tùng, lập trình viên Odoo ERP với hơn 2 năm kinh nghiệm phát triển, tùy chỉnh và vận hành hệ thống Odoo. Hiện mình đang làm Odoo Developer tại Minara, tập trung vào module Kho và Sale Order. Công việc của mình xoay quanh việc xây dựng module, tùy chỉnh quy trình nghiệp vụ, phát triển báo cáo, tích hợp REST API/XML-RPC, xử lý dữ liệu PostgreSQL và hỗ trợ vận hành hệ thống thực tế.',
  avatar: '/images/avatar.jpg',
  email: 'nguyendinhtung9062@gmail.com',
  phone: '0903239062',
  location: 'Dĩ An, Bình Dương',
  social: {
    github: 'https://github.com/DinhTung2912',
    // Dán URL thật vào là icon tự hiện ở footer; để trống thì footer tự ẩn.
    linkedin: '',
    facebook: '',
  },
  skillGroups: [
    {
      category: 'Odoo ERP',
      items: [
        'Odoo 14+',
        'ORM',
        'Model, View, Action, Menu',
        'Workflow',
        'Security Rule, Access Right, Record Rule',
        'QWeb Report',
        'Excel Report',
        'Custom Module',
      ],
    },
    {
      category: 'Ngôn ngữ lập trình',
      items: ['Python', 'JavaScript', 'HTML/CSS', 'XML'],
    },
    {
      category: 'Cơ sở dữ liệu',
      items: [
        'PostgreSQL',
        'SQL Query',
        'Kiểm tra dữ liệu',
        'Xử lý sai lệch dữ liệu',
        'Import/export dữ liệu',
      ],
    },
    {
      category: 'Tích hợp API',
      items: [
        'REST API',
        'Odoo XML-RPC',
        'Odoo Controller',
        'JSON API',
        'Tích hợp hệ thống bên thứ ba',
      ],
    },
    {
      category: 'Công cụ',
      items: [
        'Git',
        'Docker (cơ bản)',
        'Linux (cơ bản)',
        'VS Code',
        'pgAdmin',
        'Excel',
        'Google Sheets',
      ],
    },
    {
      category: 'Module ERP',
      items: ['Sales', 'CRM', 'Purchase', 'Accounting', 'Inventory / Kho', 'Reporting'],
    },
  ],
  softSkills: [
    'Tư duy logic và phân tích dữ liệu',
    'Cẩn thận, tỉ mỉ trong kiểm tra dữ liệu',
    'Khả năng phối hợp với team kỹ thuật và người dùng nghiệp vụ',
    'Chủ động xử lý lỗi và hỗ trợ vận hành hệ thống',
    'Giao tiếp và ghi nhận yêu cầu tốt',
  ],
  certifications: [{ year: '2024', name: 'Odoo Certification' }],
  goals: [
    'Tham gia đội ngũ kỹ thuật phát triển các giải pháp ERP ổn định, dễ mở rộng và dễ bảo trì',
    'Xây dựng các module Odoo mang lại giá trị thực tế cho người dùng nghiệp vụ',
    'Đào sâu về tích hợp hệ thống và xử lý dữ liệu quy mô lớn trên PostgreSQL',
  ],
  personalIntro:
    'Ngoài giờ làm, mình đọc sách, chơi bóng đá và tìm hiểu về tài chính cá nhân.',
  interests: [
    {
      title: 'Đọc sách',
      body: 'Chủ yếu là sách về lập trình, phát triển bản thân và tư duy tài chính.',
    },
    {
      title: 'Bóng đá',
      body: 'Chơi thể thao đều đặn, chủ yếu là bóng đá, để giữ sức khỏe.',
    },
    {
      title: 'Tài chính cá nhân',
      body: 'Tìm hiểu về đầu tư và cách quản lý tiền bạc.',
    },
  ],
  sideWork:
    'Ngoài công việc chính là Odoo Developer, mình làm thêm các công việc liên quan đến voucher, ví điện tử và các nền tảng thanh toán.',
};

export const timeline: TimelineItem[] = [
  {
    year: '06/2026 - Hiện tại',
    startedAt: '2026-06',
    title: 'Odoo Developer',
    org: 'Minara',
    description:
      'Phát triển và tùy chỉnh Odoo, tập trung vào module Kho (Inventory) và Sale Order, cùng nhiều dự án khác.',
    highlights: [
      'Phát triển và tùy chỉnh module Kho (Inventory) theo quy trình vận hành thực tế.',
      'Xử lý nghiệp vụ liên quan đến Sale Order và luồng đơn hàng.',
      'Tham gia nhiều dự án Odoo khác trong nội bộ công ty.',
    ],
    type: 'work',
  },
  {
    year: '07/2024 - 04/2026',
    startedAt: '2024-07',
    title: 'Odoo Developer',
    org: 'DoctorCheck',
    description:
      'Phát triển và tùy chỉnh các module Odoo liên quan đến doanh thu, hoa hồng, dịch vụ, khách hàng, báo cáo và vận hành nội bộ.',
    highlights: [
      'Tùy chỉnh model, view, action, menu, workflow, phân quyền, access right và record rule theo yêu cầu nghiệp vụ.',
      'Tích hợp Odoo với hệ thống HIS bên ngoài thông qua REST API và XML-RPC để đồng bộ, kiểm tra và đối soát dữ liệu.',
      'Làm việc với PostgreSQL để truy vấn, kiểm tra, làm sạch và đối chiếu dữ liệu vận hành.',
      'Hỗ trợ vận hành hệ thống, xử lý lỗi, debug và hỗ trợ người dùng nhằm đảm bảo hệ thống hoạt động ổn định hằng ngày.',
      'Phối hợp với team nghiệp vụ để phân tích yêu cầu, tài liệu hóa quy trình và đề xuất cải tiến hệ thống.',
    ],
    type: 'work',
  },
  {
    year: '2024',
    startedAt: '2024-12',
    title: 'Odoo Certification',
    description: 'Hoàn thành chứng chỉ Odoo Certification.',
    type: 'certification',
  },
  {
    year: '03/2024 - 07/2024',
    startedAt: '2024-03',
    title: 'Odoo Developer',
    org: 'Tada Labs',
    description:
      'Tùy chỉnh module Odoo phục vụ quy trình vận hành nội bộ và theo yêu cầu khách hàng.',
    highlights: [
      'Customize model, form view, tree view, menu, action và workflow trên Odoo.',
      'Làm việc với Python, XML, JavaScript, PostgreSQL để phát triển tính năng, xử lý dữ liệu và hỗ trợ triển khai.',
      'Hỗ trợ kiểm thử chức năng, fix bug và ghi nhận phản hồi người dùng.',
    ],
    type: 'work',
  },
  {
    year: '06/2023 - 02/2024',
    startedAt: '2023-06',
    title: 'Odoo Developer Intern',
    org: 'Tam Khoa Corporation',
    description: 'Hỗ trợ phát triển hệ thống Odoo cho các module CRM, Sales và HR.',
    highlights: [
      'Tùy chỉnh form view, tree view, menu, action và tìm hiểu kiến trúc Odoo ORM.',
      'Hỗ trợ kiểm thử chức năng, ghi nhận lỗi và viết tài liệu hướng dẫn cơ bản cho người dùng nội bộ.',
    ],
    type: 'work',
  },
  {
    year: '2019 - 2023',
    startedAt: '2019-09',
    title: 'Cử nhân Công nghệ thông tin',
    org: 'Trường Đại học Nông Lâm TP.HCM',
    description: 'Tốt nghiệp chuyên ngành Công nghệ thông tin.',
    type: 'education',
  },
];
