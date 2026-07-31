'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { videos } from '@/data/videos';
import VideoCard from '@/components/vlog/VideoCard';
import PageHeader from '@/components/shared/PageHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import EmptyState from '@/components/shared/EmptyState';

export default function VlogPageContent() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const selectedVideo = videos.find((video) => video.id === selectedVideoId);

  const handlePlay = (videoId: string) => {
    setSelectedVideoId(videoId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-space">
      <div className="site-container">
        <Breadcrumb items={[{ label: 'Vlog' }]} />

        <PageHeader
          badge="Thước phim"
          title="Vlog"
          description="Những video chia sẻ về công việc và quá trình làm Odoo."
          aside={
            videos.length > 0 ? (
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{videos.length}</span> video
              </p>
            ) : undefined
          }
        />

        {selectedVideo && (
          <div className="relative mt-9 overflow-hidden rounded-xl border border-border bg-media">
            <div className="aspect-video w-full">
              <iframe
                key={selectedVideo.id}
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full border-0"
              />
            </div>
            <button
              type="button"
              onClick={() => setSelectedVideoId(null)}
              className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-media/80 text-white backdrop-blur-sm transition-colors hover:bg-media"
              aria-label="Đóng video"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
        )}

        {videos.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              title="Chưa có video"
              description="Mình chưa đăng video nào. Trong lúc chờ, bạn có thể xem các ghi chép kỹ thuật ở mục Blog."
            />
          </div>
        ) : (
          <section aria-labelledby="danh-sach-video">
            {/* Card titles are h3, so the list needs an h2 to keep the document
                outline from jumping h1 -> h3. */}
            <h2 id="danh-sach-video" className="sr-only">
              Danh sách video
            </h2>
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {videos.map((video, index) => (
                <VideoCard key={video.id} video={video} onPlay={handlePlay} priority={index === 0} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
