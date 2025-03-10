import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000"
  
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/*/products/", "/*/categories/", "/*/collections/"],
      disallow: ["/*/admin/", "/*/account/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
