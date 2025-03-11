import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000"
  
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/*/service-area/", "/*/about-us/", "/*/contact-us/"],
      disallow: ["/*/admin/", "/*/account/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
