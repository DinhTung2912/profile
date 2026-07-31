import type { MetadataRoute } from 'next';
import { posts } from '@/data/posts';
import { journeys } from '@/data/journeys';

const baseUrl = 'https://tungprofile.dev';

/** Newest date across a content collection, so `lastModified` tracks real edits
 *  instead of moving on every build. */
function latestDate(dates: string[]): Date {
  const newest = dates.slice().sort().at(-1);
  return newest ? new Date(newest) : new Date(0);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const postDates = posts.map((post) => post.date);
  const journeyDates = journeys.map((journey) => journey.date);
  const newestOverall = latestDate([...postDates, ...journeyDates]);

  const staticRoutes = [
    { path: '', lastModified: newestOverall, priority: 1 },
    { path: '/about', lastModified: latestDate(journeyDates), priority: 0.8 },
    { path: '/journeys', lastModified: latestDate(journeyDates), priority: 0.8 },
    { path: '/blog', lastModified: latestDate(postDates), priority: 0.8 },
    { path: '/vlog', lastModified: newestOverall, priority: 0.5 },
    { path: '/contact', lastModified: newestOverall, priority: 0.6 },
  ];

  return [
    ...staticRoutes.map(({ path, lastModified, priority }) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: path === '/blog' ? ('weekly' as const) : ('monthly' as const),
      priority,
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...journeys.map((journey) => ({
      url: `${baseUrl}/journeys/${journey.slug}`,
      lastModified: new Date(journey.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
