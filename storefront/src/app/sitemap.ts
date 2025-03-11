import { MetadataRoute } from 'next'
import { listRegions } from "@lib/data/regions"

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'
  
  // Get all regions
  const regions = await listRegions()
  const countryCodes = regions
    ?.map((r) => r.countries?.map((c) => c.iso_2))
    .flat()
    .filter(Boolean) as string[]
  
  if (!countryCodes || countryCodes.length === 0) {
    return []
  }
  
  // Create sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add home pages for each country
  countryCodes.forEach(code => {
    sitemapEntries.push({
      url: `${baseUrl}/${code}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    })
  })
  
  // Add service area pages
  const boroughs = [
    { name: 'queens', zip: '11354' },
    { name: 'brooklyn', zip: '11201' },
    { name: 'manhattan', zip: '10001' },
    { name: 'bronx', zip: '10451' }
  ]
  
  boroughs.forEach(borough => {
    countryCodes.forEach(code => {
      sitemapEntries.push({
        url: `${baseUrl}/${code}?location=${borough.zip}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    })
  })
  
  return sitemapEntries
}
