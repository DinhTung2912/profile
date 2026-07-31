'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { Video } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface VideoCardProps {
  video: Video;
  /** Receives the video's own id — youtubeId is not unique across the sample data. */
  onPlay: (videoId: string) => void;
  priority?: boolean;
}

export default function VideoCard({ video, onPlay, priority = false }: VideoCardProps) {
  return (
    // A real <button> rather than a click handler on a div, so the card is
    // reachable by keyboard and announced as an activatable control.
    <button
      type="button"
      id={video.id}
      onClick={() => onPlay(video.id)}
      aria-label={`Phát video: ${video.title}`}
      className="card group h-full scroll-mt-24 text-left"
    >
      <div className="media-frame aspect-video w-full">
        <Image
          src={video.thumbnail}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 group-hover:scale-105">
            <Play className="ml-0.5 size-5 fill-current" aria-hidden="true" />
          </span>
        </span>
        {video.duration && (
          <span className="absolute bottom-2.5 right-2.5 rounded bg-media/85 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-white">
            {video.duration}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="card-title line-clamp-2 text-lg text-foreground transition-colors group-hover:text-primary">
          {video.title}
        </h3>
        <p className="mt-2 mb-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {video.description}
        </p>
        <div className="meta-row mt-auto border-t border-border pt-3.5 text-xs">
          <span>{formatDate(video.date)}</span>
        </div>
      </div>
    </button>
  );
}
