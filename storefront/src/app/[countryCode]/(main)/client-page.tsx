"use client"

import Script from "next/script"
import { createLocalBusinessSchema, createOrganizationSchema } from "@lib/util/structured-data"
import ElonHeroSection from "@modules/elon/components/hero-section"
import BiographyHighlights from "@modules/elon/components/biography-highlights"
import CompaniesOverview from "@modules/elon/components/companies-overview"
import AchievementsSection from "@modules/elon/components/achievements"
import MediaGalleryPreview from "@modules/elon/components/media-gallery"
import TimelineSummary from "@modules/elon/components/timeline"
// import CitySelector from "@modules/common/components/city-selector" // Removed as it's not relevant for Elon Musk site

export default function ClientPage() {
  const organizationSchema = createOrganizationSchema()
  const localBusinessSchema = createLocalBusinessSchema()
  
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* <CitySelector /> */} {/* Removed as it's not relevant for Elon Musk site */}
      <ElonHeroSection />
      <BiographyHighlights />
      <CompaniesOverview />
      <AchievementsSection />
      <MediaGalleryPreview />
      <TimelineSummary />
    </>
  )
}
