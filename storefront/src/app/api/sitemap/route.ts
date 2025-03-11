import { MetadataRoute } from 'next'
import { getCollectionsList } from "@lib/data/collections"
import { getCategoriesList } from "@lib/data/categories"
import { listRegions } from "@lib/data/regions"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'
  
  // Only use US region since this is a US-only business
  const countryCode = 'us'
  const countryCodes = [countryCode]
  
  // Get collections and categories
  const { collections } = await getCollectionsList()
  const { product_categories } = await getCategoriesList()
  
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
  

  
  // Add collection pages
  collections.forEach(collection => {
    countryCodes.forEach(code => {
      sitemapEntries.push({
        url: `${baseUrl}/${code}/collections/${collection.handle}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })
  
  // Add category pages
  product_categories.forEach(category => {
    countryCodes.forEach(code => {
      sitemapEntries.push({
        url: `${baseUrl}/${code}/categories/${category.handle}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  // Add service area pages
  const serviceAreas = ['bronx', 'queens', 'brooklyn', 'manhattan']
  serviceAreas.forEach(area => {
    countryCodes.forEach(code => {
      sitemapEntries.push({
        url: `${baseUrl}/${code}/service-area/${area}-ny`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    })
  })
  
  return sitemapEntries
}
