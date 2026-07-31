import { Journey } from '../lib/types';

// Các cột mốc dưới đây bám theo mốc thời gian trong CV. Phần nội dung là ghi
// chép cá nhân — Tùng có thể viết lại theo giọng của mình bất cứ lúc nào.
export const journeys: Journey[] = [
  {
    slug: 'bat-dau-tai-minara',
    title: 'Bắt đầu công việc mới tại Minara',
    date: '2026-06-08',
    location: 'Minara',
    image: '/images/journey-1.jpg',
    category: 'Sự nghiệp',
    description:
      'Từ 08/06/2026: phát triển Odoo với trọng tâm là module Kho và Sale Order, cùng nhiều dự án khác.',
    content: `
      <p>Ngày 08/06/2026 mình bắt đầu công việc mới tại Minara với vị trí Odoo Developer. Sau hai năm gắn bó với một hệ thống quen thuộc, việc chuyển sang một môi trường mới đồng nghĩa với việc phải đọc lại từ đầu: cấu trúc module, quy ước code của team, và quan trọng nhất là quy trình nghiệp vụ mà hệ thống đang phục vụ.</p>
      <p>Trọng tâm công việc hiện tại của mình là module Kho (Inventory) và các nghiệp vụ liên quan đến Sale Order. Đây là hai mảng gắn chặt với nhau — một thay đổi ở luồng đơn hàng thường kéo theo ảnh hưởng tới tồn kho, và ngược lại. Bên cạnh đó mình cũng tham gia vào một số dự án Odoo khác của công ty.</p>
      <p>Điều mình rút ra trong những tuần đầu là kinh nghiệm cũ giúp mình đọc code nhanh hơn, nhưng không thay thế được việc hỏi. Mỗi doanh nghiệp có cách vận hành riêng, và giả định dựa trên dự án trước là cách nhanh nhất để làm sai.</p>
    `,
    lesson:
      'Kinh nghiệm cũ giúp đọc code nhanh hơn, nhưng vẫn phải hỏi lại quy trình nghiệp vụ ở từng nơi.',
    featured: true,
  },
  {
    slug: 'hai-nam-lam-odoo-tai-doctorcheck',
    title: 'Hai năm làm Odoo tại DoctorCheck',
    date: '2026-04-30',
    location: 'DoctorCheck',
    image: '/images/journey-2.jpg',
    category: 'Sự nghiệp',
    description:
      'Giai đoạn 07/2024 – 04/2026: phát triển module doanh thu, hoa hồng, dịch vụ, báo cáo và tích hợp Odoo với hệ thống HIS.',
    content: `
      <p>Đây là quãng thời gian mình gắn bó lâu nhất với một hệ thống Odoo đang chạy thật. Công việc xoay quanh các module liên quan đến doanh thu, hoa hồng, dịch vụ, khách hàng, báo cáo và vận hành nội bộ — những phần mà chỉ cần sai một chút là bộ phận nghiệp vụ nhận ra ngay.</p>
      <p>Phần lớn thời gian mình dành cho việc tùy chỉnh model, view, action, menu và workflow theo yêu cầu nghiệp vụ, kèm theo đó là phân quyền: access right và record rule. Càng làm mình càng thấy phân quyền không phải phần phụ — nó quyết định ai nhìn thấy dữ liệu gì, và làm sai thì hậu quả không nhỏ.</p>
      <p>Một mảng lớn khác là tích hợp. Odoo ở đây phải nói chuyện với hệ thống HIS bên ngoài qua REST API và XML-RPC để đồng bộ, kiểm tra và đối soát dữ liệu. Việc này kéo theo rất nhiều giờ làm việc với PostgreSQL: truy vấn, kiểm tra, làm sạch và đối chiếu dữ liệu vận hành để tìm ra chỗ hai bên lệch nhau.</p>
      <p>Ngoài code, mình còn hỗ trợ vận hành hằng ngày — xử lý lỗi, debug, trả lời người dùng — và phối hợp với team nghiệp vụ để phân tích yêu cầu, tài liệu hóa quy trình và đề xuất cải tiến. Nhìn lại, chính phần "sau khi lên production" mới dạy mình nhiều nhất.</p>
    `,
    lesson:
      'Hệ thống chạy thật thì việc đối soát dữ liệu và phân quyền quan trọng ngang với việc viết tính năng mới.',
    featured: true,
  },
  {
    slug: 'lay-chung-chi-odoo',
    title: 'Hoàn thành Odoo Certification',
    date: '2024-12-15',
    location: 'Online',
    image: '/images/journey-4.jpg',
    category: 'Học tập',
    description:
      'Hệ thống hóa lại những gì đã làm rải rác trong công việc thành một nền tảng kiến thức rõ ràng hơn.',
    content: `
      <p>Sau hơn một năm làm Odoo, mình nhận ra kiến thức của mình khá "vá víu": chỗ nào gặp trong công việc thì biết rất kỹ, chỗ nào chưa đụng tới thì gần như trống. Đó là lý do mình quyết định ôn và thi Odoo Certification.</p>
      <p>Quá trình ôn buộc mình quay lại những phần nền: ORM hoạt động thế nào, vòng đời của record, cách view được kế thừa, cơ chế security rule, và cách các module chuẩn như Sales, Purchase, Inventory, Accounting liên kết với nhau. Nhiều thứ mình từng dùng theo thói quen, giờ mới hiểu tại sao nó được thiết kế như vậy.</p>
      <p>Chứng chỉ tự nó không làm mình code giỏi hơn ngay lập tức. Nhưng nó lấp được những khoảng trống mà công việc hằng ngày không tự nhiên chạm tới, và giúp mình tự tin hơn khi phải giải thích một quyết định kỹ thuật cho người khác.</p>
    `,
    lesson:
      'Kinh nghiệm dự án cho chiều sâu, nhưng phải chủ động học lại phần nền thì kiến thức mới đủ rộng.',
    featured: true,
  },
  {
    slug: 'bon-thang-tai-tada-labs',
    title: 'Bốn tháng ở Tada Labs',
    date: '2024-07-15',
    location: 'Tada Labs',
    image: '/images/journey-3.jpg',
    category: 'Sự nghiệp',
    description:
      'Giai đoạn 03/2024 – 07/2024: tùy chỉnh module Odoo cho quy trình nội bộ và theo yêu cầu khách hàng.',
    content: `
      <p>Ở Tada Labs, mình làm việc với module Odoo phục vụ cả quy trình vận hành nội bộ lẫn yêu cầu riêng của khách hàng. Điểm khác so với giai đoạn thực tập là mình phải tự chịu trách nhiệm cho phần mình làm, từ lúc nhận yêu cầu đến lúc nó chạy được.</p>
      <p>Công việc chủ yếu là customize model, form view, tree view, menu, action và workflow. Bên cạnh đó là dùng Python, XML, JavaScript và PostgreSQL để phát triển tính năng, xử lý dữ liệu và hỗ trợ triển khai.</p>
      <p>Mình cũng tham gia kiểm thử chức năng, fix bug và ghi nhận phản hồi người dùng. Việc trực tiếp nghe người dùng nói "chỗ này khó dùng" khác hẳn với việc đọc một dòng mô tả yêu cầu — và nó thay đổi cách mình thiết kế view sau này.</p>
    `,
    lesson:
      'Phản hồi trực tiếp từ người dùng là nguồn thông tin tốt hơn bất kỳ bản mô tả yêu cầu nào.',
    featured: true,
  },
  {
    slug: 'thuc-tap-odoo-tai-tam-khoa',
    title: 'Thực tập Odoo tại Tam Khoa Corporation',
    date: '2024-02-20',
    location: 'Tam Khoa Corporation',
    image: '/images/journey-5.jpg',
    category: 'Sự nghiệp',
    description:
      'Giai đoạn 06/2023 – 02/2024: những tháng đầu tiên tiếp cận Odoo qua các module CRM, Sales và HR.',
    content: `
      <p>Đây là nơi mình gặp Odoo lần đầu. Nhiệm vụ ban đầu khá cơ bản: hỗ trợ phát triển hệ thống cho các module CRM, Sales và HR, tùy chỉnh form view, tree view, menu và action.</p>
      <p>Thứ tốn nhiều thời gian nhất không phải là cú pháp, mà là hiểu kiến trúc Odoo ORM — cách model kế thừa nhau, cách field tính toán, cách một thay đổi nhỏ ở module này lại ảnh hưởng tới module khác. Giai đoạn đó mình đọc source của module chuẩn nhiều hơn là viết code mới.</p>
      <p>Mình cũng hỗ trợ kiểm thử chức năng, ghi nhận lỗi và viết tài liệu hướng dẫn cơ bản cho người dùng nội bộ. Viết tài liệu nghe có vẻ là việc phụ, nhưng nó ép mình phải thật sự hiểu tính năng trước khi giải thích cho người khác.</p>
    `,
    lesson:
      'Muốn tùy chỉnh Odoo tốt thì phải đọc module chuẩn trước, đừng vội viết module mới từ đầu.',
    featured: false,
  },
  {
    slug: 'tot-nghiep-nong-lam',
    title: 'Tốt nghiệp Công nghệ thông tin, Đại học Nông Lâm TP.HCM',
    date: '2023-06-01',
    location: 'TP. Hồ Chí Minh',
    image: '/images/cover.jpg',
    category: 'Học tập',
    description:
      'Bốn năm 2019 – 2023 và bước chuyển từ bài tập trên lớp sang hệ thống của doanh nghiệp.',
    content: `
      <p>Mình học Công nghệ thông tin tại Trường Đại học Nông Lâm TP.HCM từ 2019 đến 2023. Chương trình cho mình nền tảng về lập trình, cơ sở dữ liệu và tư duy hệ thống — những thứ mà sau này khi đụng vào ERP mình mới thấy hết giá trị.</p>
      <p>Điều khác biệt lớn nhất giữa trường học và công việc thật là ràng buộc. Ở trường, bài tập có đề bài rõ ràng và dữ liệu sạch. Ngoài thực tế, yêu cầu thường mơ hồ, dữ liệu thì lệch, và phần khó nhất là hỏi đúng câu hỏi để làm rõ vấn đề trước khi bắt đầu code.</p>
      <p>Thời điểm tốt nghiệp cũng gần trùng với lúc mình bắt đầu thực tập Odoo. Nhìn lại, việc bước vào ERP sớm là một lựa chọn may mắn: đây là mảng buộc mình phải hiểu nghiệp vụ chứ không chỉ hiểu code.</p>
    `,
    lesson:
      'Nền tảng ở trường là điểm khởi đầu; hiểu nghiệp vụ mới là thứ quyết định khi làm hệ thống doanh nghiệp.',
    featured: false,
  },
];
