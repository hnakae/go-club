import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/api'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eugenego.club'
  const posts = getAllPosts()
  
  // Get current date for lastModified
  const currentDate = new Date().toISOString()
  
  // Base pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]
  
  // Add all blog posts to sitemap
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [...routes, ...postRoutes]
}
