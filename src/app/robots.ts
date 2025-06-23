import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://eugenego.club/sitemap.xml',
    host: 'https://eugenego.club',
  }
}