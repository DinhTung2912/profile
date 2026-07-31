import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://tungprofile.dev/sitemap.xml',
    host: 'https://tungprofile.dev',
  };
}
