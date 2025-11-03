import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://godsspiritsays.com';

  const pages = [
    '/',
    '/about',
    '/videos',
    '/videos/breaking-is-not-the-end',
    '/videos/bubbling-love',
    '/videos/circle-of-joy',
    '/videos/fasting',
    '/videos/feeling-nearness',
    '/videos/gods-habituality',
    '/videos/his-love',
    '/blog',
    '/blog/beautifully-shattered',
    '/blog/fish-without-water',
    '/blog/forgiveness',
    '/blog/good-friday',
    '/blog/he-cares',
    '/blog/jesus-heals',
    '/blog/marriage',
    '/blog/pray',
    '/blog/resurrection-embrace',
    '/blog/sweetness-bleeds',
    '/blog/the-beautiful-breaking',
    '/blog/the-prayer-room',
    '/testimonials',
    '/contact',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '/' ? 1 : 0.8,
  }));
}
