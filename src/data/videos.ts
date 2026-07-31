import { Video } from '../lib/types';

// CV không nêu kênh YouTube nào, và các mục trước đây là dữ liệu mẫu (tất cả
// đều trỏ tới cùng một youtubeId không liên quan). Danh sách được để trống cho
// tới khi có video thật — trang /vlog sẽ tự hiển thị empty state.
//
// Khi có video, thêm vào theo cấu trúc:
// {
//   id: 'vlog-01',
//   title: 'Tiêu đề video',
//   date: '2026-07-29',
//   youtubeId: 'ID_VIDEO_YOUTUBE',
//   thumbnail: '/images/ten-anh.jpg',
//   description: 'Mô tả ngắn.',
//   duration: '10:05',
// }
export const videos: Video[] = [];
