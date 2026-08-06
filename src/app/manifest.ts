import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.title}`,
    short_name: 'Tùng ERP',
    description: profile.bio,
    start_url: '/',
    display: 'standalone',
    lang: 'vi',
    // Matches --background / --primary in globals.css.
    background_color: '#fdfaf6',
    theme_color: '#ad5010',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
