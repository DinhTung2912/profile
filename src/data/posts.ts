import { Post } from '../lib/types';

// Bài viết thuộc đúng mảng chuyên môn trong CV (Odoo, Python, PostgreSQL,
// tích hợp API). Đây là bản nháp — nên đọc lại và chỉnh theo giọng văn riêng
// trước khi công bố.
export const posts: Post[] = [
  {
    slug: 'hieu-dung-odoo-orm',
    title: 'Hiểu đúng Odoo ORM trước khi viết module đầu tiên',
    date: '2025-11-18',
    category: 'Odoo',
    image: '/images/blog-1.jpg',
    excerpt:
      'Model, field, kế thừa và vòng đời record — những khái niệm nền mà nếu nắm chắc sẽ tiết kiệm rất nhiều thời gian debug về sau.',
    content: `
      <p>Khi mới làm Odoo, phản xạ tự nhiên của mình là tạo model mới cho mọi thứ. Sau một thời gian mình nhận ra phần lớn yêu cầu đều có thể giải quyết bằng cách mở rộng model sẵn có — và hiểu ORM là điều kiện để làm được điều đó.</p>

      <h2>Ba kiểu kế thừa và khi nào dùng</h2>
      <p>Odoo có ba cơ chế kế thừa, mỗi cơ chế phục vụ một mục đích khác nhau:</p>
      <ul>
        <li><strong>Kế thừa cổ điển</strong> (<code>_inherit</code> không kèm <code>_name</code>): thêm field hoặc method vào chính model đang có. Đây là trường hợp dùng nhiều nhất khi tùy chỉnh.</li>
        <li><strong>Kế thừa mở rộng</strong> (<code>_inherit</code> kèm <code>_name</code> mới): tạo model mới sao chép cấu trúc từ model gốc, dữ liệu tách biệt.</li>
        <li><strong>Kế thừa ủy quyền</strong> (<code>_inherits</code>): model mới giữ tham chiếu tới bản ghi của model gốc, ví dụ quan hệ giữa nhân viên và người dùng.</li>
      </ul>

      <h2>Field tính toán và chuyện lưu trữ</h2>
      <p>Một <code>compute</code> field mặc định không lưu vào database, nghĩa là nó được tính lại mỗi lần đọc. Khi cần lọc hoặc nhóm theo field đó, ta phải đặt <code>store=True</code> — và khi đã lưu thì phải khai báo <code>@api.depends</code> thật chính xác, nếu không giá trị sẽ cũ mà không có dấu hiệu báo lỗi.</p>
      <p>Đây là nguồn bug hay gặp: field hiển thị đúng lúc mới tạo, nhưng không cập nhật khi dữ liệu liên quan thay đổi, chỉ vì thiếu một phụ thuộc trong <code>depends</code>.</p>

      <h2>Đọc module chuẩn trước khi viết mới</h2>
      <p>Trước khi thêm một tính năng, mình thường mở source module chuẩn tương ứng ra đọc. Rất nhiều bài toán đã có cách giải sẵn trong core, và bám theo quy ước của core giúp module dễ bảo trì hơn nhiều khi lên phiên bản mới.</p>
    `,
    readingTime: 6,
  },
  {
    slug: 'tich-hop-odoo-xmlrpc-rest-api',
    title: 'Tích hợp Odoo với hệ thống ngoài: XML-RPC hay REST API?',
    date: '2025-08-22',
    category: 'Tích hợp',
    image: '/images/blog-2.jpg',
    excerpt:
      'So sánh hai hướng tích hợp phổ biến nhất khi cần đồng bộ dữ liệu giữa Odoo và một hệ thống bên thứ ba.',
    content: `
      <p>Khi cần kết nối Odoo với một hệ thống khác, thường có hai lựa chọn: dùng XML-RPC có sẵn, hoặc tự viết controller để expose REST API. Cả hai đều dùng được, nhưng phù hợp với những tình huống khác nhau.</p>

      <h2>XML-RPC: có sẵn, không cần code phía Odoo</h2>
      <p>XML-RPC là giao thức Odoo hỗ trợ mặc định. Hệ thống bên ngoài có thể xác thực rồi gọi thẳng các method của ORM như <code>search_read</code>, <code>create</code> hay <code>write</code> mà không cần thêm dòng code nào trong Odoo.</p>
      <p>Điểm mạnh là triển khai nhanh. Điểm yếu là phía gọi phải biết cấu trúc model của Odoo, nên hai hệ thống bị ràng buộc chặt vào nhau: đổi tên field trong Odoo có thể làm hỏng bên tích hợp.</p>

      <h2>REST API qua controller: kiểm soát tốt hơn</h2>
      <p>Cách còn lại là viết controller và tự định nghĩa endpoint. Ta chủ động được định dạng dữ liệu trả về, tách biệt cấu trúc nội bộ của Odoo khỏi hệ thống bên ngoài, và kiểm soát được việc xác thực cũng như khối lượng dữ liệu mỗi lần gọi.</p>
      <p>Đổi lại là phải viết và bảo trì thêm code — bao gồm cả xử lý lỗi, phân trang và ghi log.</p>

      <h2>Phần khó không nằm ở giao thức</h2>
      <p>Theo trải nghiệm của mình, chọn giao thức nào là phần dễ. Phần tốn thời gian là đối soát: xử lý bản ghi trùng, xác định đâu là nguồn dữ liệu đúng khi hai bên lệch nhau, và đảm bảo một lần gọi lặp lại không tạo ra dữ liệu nhân đôi. Nên tính tới những chuyện đó ngay từ khi thiết kế, đừng để tới lúc production mới xử lý.</p>
    `,
    readingTime: 7,
  },
  {
    slug: 'doi-soat-du-lieu-postgresql',
    title: 'Đối soát dữ liệu vận hành với PostgreSQL',
    date: '2025-05-09',
    category: 'PostgreSQL',
    image: '/images/blog-3.jpg',
    excerpt:
      'Vài truy vấn mình hay dùng để tìm bản ghi trùng, dữ liệu mồ côi và sai lệch giữa Odoo với hệ thống bên ngoài.',
    content: `
      <p>Khi hệ thống đã chạy thật, câu hỏi hay gặp nhất không phải "tính năng này viết thế nào" mà là "tại sao số ở đây không khớp với số ở kia". Lúc đó SQL là công cụ nhanh nhất để tìm câu trả lời.</p>

      <h2>Tìm bản ghi trùng</h2>
      <p>Sau mỗi đợt import hoặc đồng bộ, việc đầu tiên nên làm là kiểm tra trùng lặp theo khóa nghiệp vụ — mã khách hàng, mã chứng từ, số điện thoại. Gom nhóm theo trường đó rồi lọc những nhóm có số lượng lớn hơn một là đủ để lộ ra vấn đề.</p>

      <h2>Dữ liệu mồ côi</h2>
      <p>Trường hợp hay gặp thứ hai là bản ghi con trỏ tới một bản ghi cha đã không còn tồn tại, thường xuất phát từ việc xóa dữ liệu thủ công. Một phép <code>LEFT JOIN</code> rồi lọc những dòng có phía cha là <code>NULL</code> sẽ chỉ ra ngay.</p>

      <h2>Luôn kiểm tra trước khi sửa</h2>
      <p>Nguyên tắc mình giữ chặt: chạy <code>SELECT</code> xem trước tập bản ghi sẽ bị ảnh hưởng, đối chiếu lại với bộ phận nghiệp vụ, rồi mới thực hiện thay đổi — và bọc trong transaction để còn đường lùi.</p>
      <p>Cũng cần nhớ rằng sửa trực tiếp dưới database sẽ bỏ qua toàn bộ logic của ORM: các compute field không được tính lại, message log không được ghi. Với dữ liệu có ràng buộc nghiệp vụ, sửa qua ORM vẫn là lựa chọn an toàn hơn.</p>
    `,
    readingTime: 6,
  },
  {
    slug: 'phan-quyen-trong-odoo',
    title: 'Phân quyền trong Odoo: access right và record rule',
    date: '2025-02-14',
    category: 'Odoo',
    image: '/images/blog-4.jpg',
    excerpt:
      'Phân biệt hai tầng phân quyền của Odoo và vì sao cấu hình sai record rule lại khó phát hiện đến vậy.',
    content: `
      <p>Phân quyền là phần mình từng xem nhẹ khi mới làm, và cũng là phần khiến mình mất nhiều thời gian nhất khi xử lý sự cố. Odoo tách phân quyền thành hai tầng, hiểu rõ ranh giới giữa chúng là điều cần thiết.</p>

      <h2>Access right: quyền trên model</h2>
      <p>Tầng này trả lời câu hỏi "nhóm người dùng này có được đọc / tạo / sửa / xóa trên model này không". Nó áp dụng cho toàn bộ model, không phân biệt bản ghi cụ thể.</p>

      <h2>Record rule: quyền trên từng bản ghi</h2>
      <p>Tầng thứ hai lọc xuống mức bản ghi, ví dụ "nhân viên chỉ thấy đơn hàng của chính mình". Điểm cần lưu ý là cách các rule kết hợp với nhau: rule global luôn được áp dụng và giao với các rule khác, trong khi các rule theo nhóm thì hợp lại với nhau. Nắm sai điểm này rất dễ dẫn tới việc quyền bị siết chặt hoặc nới lỏng ngoài ý muốn.</p>

      <h2>Vì sao lỗi phân quyền khó phát hiện</h2>
      <p>Vì hệ thống không báo lỗi. Người dùng chỉ đơn giản là thấy ít bản ghi hơn thực tế, hoặc thấy nhiều hơn mức được phép — và không ai nhận ra cho tới khi đối chiếu báo cáo. Mình có thói quen kiểm tra bằng cách đăng nhập trực tiếp bằng tài khoản của từng nhóm sau mỗi lần đổi cấu hình phân quyền.</p>
    `,
    readingTime: 5,
  },
  {
    slug: 'lam-bao-cao-qweb-va-excel',
    title: 'Làm báo cáo trong Odoo: QWeb hay xuất Excel?',
    date: '2024-10-05',
    category: 'Odoo',
    image: '/images/blog-5.jpg',
    excerpt:
      'Kinh nghiệm chọn giữa báo cáo QWeb dạng PDF và file Excel, dựa trên việc người dùng thực sự làm gì với báo cáo đó.',
    content: `
      <p>Gần như dự án ERP nào cũng đến lúc phải làm báo cáo. Câu hỏi đầu tiên mình luôn hỏi không phải "làm bằng gì" mà là "sau khi nhận báo cáo, anh chị làm gì tiếp theo với nó".</p>

      <h2>QWeb khi báo cáo là chứng từ</h2>
      <p>Nếu đầu ra cần in, ký, gửi khách hàng hoặc lưu hồ sơ — hóa đơn, phiếu giao hàng, báo giá — thì QWeb là lựa chọn phù hợp. Bố cục cố định, format nhất quán, và có thể kế thừa template chuẩn để chỉnh theo nhận diện của doanh nghiệp.</p>

      <h2>Excel khi báo cáo là dữ liệu để phân tích tiếp</h2>
      <p>Nếu người nhận sẽ lọc, pivot, hoặc ghép với dữ liệu từ nguồn khác, xuất Excel sẽ hữu ích hơn nhiều so với một file PDF đẹp nhưng không thao tác được. Trong trường hợp này, cấu trúc cột rõ ràng quan trọng hơn việc trình bày.</p>

      <h2>Vài lưu ý khi báo cáo nặng dần</h2>
      <p>Báo cáo chạy nhanh lúc mới làm nhưng chậm dần khi dữ liệu tăng là chuyện bình thường. Vài điểm mình hay để ý: giới hạn khoảng thời gian mặc định, tránh truy vấn lặp trong vòng lặp, và với báo cáo tổng hợp phức tạp thì cân nhắc gom dữ liệu bằng một truy vấn SQL thay vì duyệt qua ORM.</p>
    `,
    readingTime: 5,
  },
];
