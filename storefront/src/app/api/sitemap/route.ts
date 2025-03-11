import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'
  
  // Create sitemap entries for US-only business
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add homepage
  sitemapEntries.push({
    url: `${baseUrl}/us`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  })

  // Add about us page
  sitemapEntries.push({
    url: `${baseUrl}/us/about-us`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  // Add service area pages
  const serviceAreas = [
    { slug: 'bronx-ny', name: 'Bronx' },
    { slug: 'queens-ny', name: 'Queens' },
    { slug: 'brooklyn-ny', name: 'Brooklyn' },
    { slug: 'manhattan-ny', name: 'Manhattan' }
  ]
  
  serviceAreas.forEach(area => {
    sitemapEntries.push({
      url: `${baseUrl}/us/service-area/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })
  
  return sitemapEntries
}
