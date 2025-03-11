import Script from "next/script"
import { createLocalBusinessSchema, createOrganizationSchema } from "../../../lib/util/structured-data"

import Hero from "../../../modules/home/components/hero"
import Services from "../../../modules/home/components/services"
import UseCases from "../../../modules/home/components/use-cases"
import ServiceAreas from "../../../modules/home/components/service-areas"
import WhyChooseUs from "../../../modules/home/components/why-choose-us"
import CallToAction from "../../../modules/home/components/call-to-action"
import CitySelector from "../../../modules/common/components/city-selector"

export { metadata } from "./metadata"

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
      
      <CitySelector />
      <Hero />
      <Services />
      <UseCases />
      <ServiceAreas />
      <WhyChooseUs />
      <CallToAction />
    </>
  )
}
