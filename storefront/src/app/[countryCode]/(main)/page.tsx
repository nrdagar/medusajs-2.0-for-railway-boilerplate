import { Metadata } from "next"
import Script from "next/script"
import { STORE_NAME } from "@lib/constants"
import { createLocalBusinessSchema, createOrganizationSchema } from "@lib/util/structured-data"

import Hero from "@modules/home/components/hero"
import Services from "@modules/home/components/services"
import UseCases from "@modules/home/components/use-cases"
import ServiceAreas from "@modules/home/components/service-areas"
import WhyChooseUs from "@modules/home/components/why-choose-us"
import CallToAction from "@modules/home/components/call-to-action"

export const metadata: Metadata = {
  title: `${STORE_NAME} - NYC Dumpster Rental Services | Queens, Brooklyn, Manhattan, Bronx`,
  description: "Top-rated dumpster rental in NYC. 10-40 yard dumpsters for construction, demolition, renovation & cleanouts. Same-day delivery in Queens, Brooklyn, Manhattan & Bronx. HOA-friendly service.",
  keywords: [
    // Borough-specific keywords
    "dumpster rental Queens NY 11354",
    "dumpster rental Brooklyn NY 11201",
    "dumpster rental Manhattan NY 10001",
    "dumpster rental Bronx NY 10451",
    "roll off dumpster Queens",
    "construction dumpster Brooklyn",
    "waste container rental Manhattan",
    "debris removal Bronx",
    "junk removal Queens",
    "waste management Brooklyn",
    "trash container Manhattan",
    "garbage removal Bronx",
    // Size-specific keywords
    "10 yard dumpster rental NYC",
    "20 yard dumpster rental NYC",
    "30 yard dumpster rental NYC",
    "40 yard dumpster rental NYC",
    "small dumpster rental NYC",
    "medium dumpster rental NYC",
    "large dumpster rental NYC",
    "extra large dumpster rental NYC",
    // Service-specific keywords
    "residential dumpster rental NYC",
    "commercial dumpster rental NYC",
    "construction waste removal NYC",
    "demolition dumpster rental NYC",
    "renovation waste container NYC",
    "basement cleanout dumpster NYC",
    "garage cleanout dumpster NYC",
    "roofing debris removal NYC",
    "yard waste removal NYC",
    "home renovation dumpster NYC",
    "construction site dumpster NYC",
    "property cleanout NYC",
    // Project-specific keywords
    "bathroom remodel dumpster NYC",
    "kitchen renovation waste NYC",
    "landscaping debris removal NYC",
    "estate cleanout dumpster NYC",
    "storm cleanup dumpster NYC",
    "moving cleanout NYC",
    // Features and benefits
    "same day dumpster delivery NYC",
    "affordable dumpster rental NYC",
    "HOA friendly dumpster service NYC",
    "local dumpster rental company NYC",
    "reliable waste removal NYC",
    "fast dumpster delivery NYC",
    "best dumpster prices NYC",
    "licensed dumpster service NYC"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${STORE_NAME} - NYC Dumpster Rental Services | Queens, Brooklyn, Manhattan, Bronx`,
    description: "Top-rated dumpster rental in NYC. 10-40 yard dumpsters for construction, demolition, renovation & cleanouts. Same-day delivery in Queens, Brooklyn, Manhattan & Bronx. HOA-friendly service.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JBS Builder Lic Dumpster Rental Services - NYC's Premier Waste Management Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${STORE_NAME} - NYC Dumpster Rental Services`,
    description: "Top-rated dumpster rental in NYC. 10-40 yard dumpsters for construction, demolition, renovation & cleanouts. Same-day delivery in Queens, Brooklyn, Manhattan & Bronx.",
    images: ["/images/og-image.jpg"],
  }
}

export default function Home() {
  // Structured data for the homepage
  const organizationSchema = createOrganizationSchema()
  const localBusinessSchema = createLocalBusinessSchema()
  
  return (
    <>
      {/* JSON-LD structured data */}
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
      
      <Hero />
      <Services />
      <UseCases />
      <ServiceAreas />
      <WhyChooseUs />
      <CallToAction />
    </>
  )
}
