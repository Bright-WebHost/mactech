import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.mactechoman.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
  ]
}
