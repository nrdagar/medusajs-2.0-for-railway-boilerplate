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
    // Borough and neighborhood specific keywords
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
    "dumpster rental Astoria Queens",
    "dumpster rental Long Island City",
    "dumpster rental Flushing Queens",
    "dumpster rental Jamaica Queens",
    "dumpster rental Williamsburg Brooklyn",
    "dumpster rental Park Slope",
    "dumpster rental DUMBO Brooklyn",
    "dumpster rental Bay Ridge",
    "dumpster rental Upper East Side",
    "dumpster rental Upper West Side",
    "dumpster rental Harlem NYC",
    "dumpster rental Financial District",
    "dumpster rental Riverdale Bronx",
    "dumpster rental Pelham Bay",
    "dumpster rental Throgs Neck",
    "dumpster rental Morris Park",
    // Size and capacity keywords
    "10 yard dumpster rental NYC",
    "20 yard dumpster rental NYC",
    "30 yard dumpster rental NYC",
    "40 yard dumpster rental NYC",
    "small dumpster rental NYC",
    "medium dumpster rental NYC",
    "large dumpster rental NYC",
    "extra large dumpster rental NYC",
    "3 ton dumpster NYC",
    "5 ton dumpster NYC",
    "10 ton dumpster NYC",
    "compact dumpster rental NYC",
    // Service and business type keywords
    "residential dumpster rental NYC",
    "commercial dumpster rental NYC",
    "construction waste removal NYC",
    "demolition dumpster rental NYC",
    "renovation waste container NYC",
    "contractor dumpster rental NYC",
    "business dumpster service NYC",
    "apartment building dumpster NYC",
    "retail store waste removal NYC",
    "restaurant dumpster service NYC",
    "office cleanout dumpster NYC",
    "industrial waste container NYC",
    // Project and use case keywords
    "basement cleanout dumpster NYC",
    "garage cleanout dumpster NYC",
    "roofing debris removal NYC",
    "yard waste removal NYC",
    "home renovation dumpster NYC",
    "construction site dumpster NYC",
    "property cleanout NYC",
    "bathroom remodel dumpster NYC",
    "kitchen renovation waste NYC",
    "landscaping debris removal NYC",
    "estate cleanout dumpster NYC",
    "storm cleanup dumpster NYC",
    "moving cleanout NYC",
    "fire damage cleanup NYC",
    "water damage restoration NYC",
    "hoarding cleanup dumpster NYC",
    "foreclosure cleanout NYC",
    "spring cleaning dumpster NYC",
    "renovation debris removal NYC",
    "remodeling waste container NYC",
    // Material specific keywords
    "concrete disposal NYC",
    "brick removal dumpster NYC",
    "wood debris container NYC",
    "metal recycling dumpster NYC",
    "furniture disposal NYC",
    "appliance removal NYC",
    "carpet removal dumpster NYC",
    "yard waste container NYC",
    "dirt removal dumpster NYC",
    "construction debris NYC",
    // Timing and scheduling keywords
    "same day dumpster rental NYC",
    "next day dumpster delivery NYC",
    "weekend dumpster rental NYC",
    "emergency dumpster service NYC",
    "24 hour dumpster rental NYC",
    "rush delivery dumpster NYC",
    "flexible schedule dumpster NYC",
    "on demand waste removal NYC",
    // Features and benefits
    "same day dumpster delivery NYC",
    "affordable dumpster rental NYC",
    "HOA friendly dumpster service NYC",
    "local dumpster rental company NYC",
    "reliable waste removal NYC",
    "fast dumpster delivery NYC",
    "best dumpster prices NYC",
    "licensed dumpster service NYC",
    "insured dumpster rental NYC",
    "eco friendly waste removal NYC",
    "hassle free dumpster rental NYC",
    "professional waste service NYC",
    // Price and value keywords
    "cheap dumpster rental NYC",
    "budget friendly dumpster NYC",
    "cost effective waste removal NYC",
    "affordable waste container NYC",
    "discount dumpster service NYC",
    "competitive price dumpster NYC",
    "economical waste removal NYC",
    "low cost dumpster rental NYC",
    "best price guarantee NYC",
    "price match dumpster rental NYC",
    // Quality and reputation keywords
    "top rated dumpster service NYC",
    "5 star dumpster rental NYC",
    "best reviewed waste company NYC",
    "trusted dumpster provider NYC",
    "reliable garbage removal NYC",
    "experienced waste service NYC",
    "professional dumpster rental NYC",
    "expert waste management NYC",
    "certified waste removal NYC",
    "accredited dumpster service NYC",
    // Unique selling propositions
    "family owned dumpster service NYC",
    "veteran owned waste removal NYC",
    "locally operated dumpster NYC",
    "woman owned waste service NYC",
    "BBB accredited dumpster NYC",
    "fully licensed waste removal NYC",
    "OSHA compliant dumpster NYC",
    "EPA certified waste service NYC",
    // Nearby cities and regions
    "dumpster rental Long Island NY",
    "dumpster rental Staten Island NY",
    "dumpster rental Yonkers NY",
    "dumpster rental New Rochelle NY",
    "dumpster rental White Plains NY",
    "dumpster rental Mount Vernon NY",
    "dumpster rental Jersey City NJ",
    "dumpster rental Hoboken NJ",
    "dumpster rental Newark NJ",
    "dumpster rental Westchester County NY",
    "dumpster rental Nassau County NY",
    "dumpster rental Bergen County NJ",
    "waste removal Long Island NY",
    "waste container Staten Island NY",
    "construction dumpster Yonkers NY",
    "roll off dumpster Jersey City NJ",
    "garbage removal Westchester NY",
    "debris container Nassau County NY",
    // Dumpster size and capacity variations
    "10 yard container rental NYC",
    "15 yard bin rental NYC",
    "20 yard waste container NYC",
    "30 yard roll off NYC",
    "40 yard construction bin NYC",
    "mini dumpster rental NYC",
    "large capacity dumpster NYC",
    "heavy duty container NYC",
    // Specific use cases and industries
    "apartment renovation dumpster NYC",
    "condo cleanout container NYC",
    "townhouse renovation bin NYC",
    "retail store waste removal NYC",
    "restaurant garbage container NYC",
    "school dumpster rental NYC",
    "church waste removal NYC",
    "hospital waste container NYC",
    "hotel dumpster service NYC",
    "warehouse waste management NYC",
    "factory debris removal NYC",
    "mall waste container NYC",
    // Additional city variations
    "dumpster rental Great Neck NY",
    "waste removal Port Washington NY",
    "garbage container Manhasset NY",
    "dumpster rental Glen Cove NY",
    "waste bin Oyster Bay NY",
    "trash container Roslyn NY",
    "dumpster service Garden City NY",
    "waste management Mineola NY",
    "debris removal Hempstead NY",
    "roll off rental Valley Stream NY",
    // Seasonal and event-specific
    "winter cleanup dumpster NYC",
    "summer cleanout container NYC",
    "fall yard waste removal NYC",
    "spring cleaning dumpster NYC",
    "event cleanup container NYC",
    "festival waste management NYC",
    "concert cleanup dumpster NYC",
    "party waste removal NYC",
    // Manhattan neighborhood specific
    "dumpster rental Lower Manhattan",
    "waste removal Tribeca NY",
    "garbage container SoHo NYC",
    "dumpster rental Greenwich Village",
    "waste bin East Village NY",
    "trash container Chelsea NYC",
    "dumpster service Gramercy NY",
    "waste removal Murray Hill",
    "debris container Midtown East",
    "roll off rental Midtown West",
    "dumpster rental Hell's Kitchen",
    "waste bin Upper West Side NY",
    "garbage removal Upper East Side",
    "dumpster service Morningside Heights",
    "waste container Washington Heights",
    "trash removal Inwood NY",
    // Manhattan landmarks and areas
    "dumpster rental Times Square area",
    "waste removal Central Park vicinity",
    "garbage container Madison Square",
    "dumpster service Penn Station area",
    "waste bin Grand Central area",
    "trash removal Broadway district",
    "dumpster rental Wall Street area",
    "waste container World Trade Center",
    "debris removal Battery Park",
    "roll off rental Hudson Yards",
    // Manhattan business districts
    "dumpster rental Financial District",
    "waste removal Diamond District",
    "garbage container Garment District",
    "dumpster service Theater District",
    "waste bin Restaurant Row NY",
    "trash removal NoMad district",
    "dumpster rental Flatiron District",
    "waste container Union Square",
    // Manhattan specific use cases
    "high rise building dumpster Manhattan",
    "apartment complex waste Manhattan",
    "office building cleanup Manhattan",
    "construction debris Manhattan",
    "renovation waste removal Manhattan",
    "commercial dumpster Manhattan",
    "retail store waste Manhattan",
    "restaurant garbage Manhattan",
    // Brand and company specific keywords
    "JBS Builder dumpster rental",
    "JBS Builder waste removal",
    "JBS Builder garbage service",
    "JBS dumpster phone number",
    "JBS Builder contact info",
    "JBS waste management reviews",
    "JBS Builder customer service",
    "JBS Builder pricing",
    "JBS Builder quotes",
    // Contact and information searches
    "dumpster rental phone number Manhattan",
    "waste removal contact NYC",
    "garbage service number Queens",
    "dumpster rental quote Brooklyn",
    "waste container pricing Bronx",
    "trash removal estimate Manhattan",
    "dumpster service contact info NYC",
    "garbage pickup scheduling NYC",
    "waste management consultation NYC",
    // Question-based searches
    "how much does dumpster rental cost NYC",
    "where to rent dumpster Manhattan",
    "who provides dumpster service Queens",
    "when can I get dumpster delivery Brooklyn",
    "what size dumpster do I need NYC",
    "how to rent roll off container NYC",
    "how long can I keep dumpster NYC",
    "where to place dumpster Manhattan",
    "how to schedule waste pickup NYC",
    // Phone and contact variations
    "dumpster rental companies phone numbers NYC",
    "waste management companies contact Manhattan",
    "garbage service phone directory NYC",
    "dumpster rental business listings NYC",
    "waste removal yellow pages Manhattan",
    "trash service business directory NYC",
    "dumpster rental customer support NYC",
    "waste management help desk Manhattan",
    "garbage service contact center NYC",
    // Brand and competitor variations
    "JBS vs other dumpster companies NYC",
    "best rated dumpster company Manhattan",
    "top dumpster brands NYC",
    "licensed dumpster companies NYC",
    "reliable waste management brands",
    "trusted garbage removal companies",
    "experienced dumpster rental brands",
    "professional waste service companies",
    "local dumpster rental businesses"
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
        url: "/opengraph-image",
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
    images: ["/twitter-image"],
  }
}

export default function Home() {
  // Structured data for the homepage
  const organizationSchema = createOrganizationSchema()
  const localBusinessSchema = createLocalBusinessSchema()
  const faqSchema = createFAQSchema()
  const ratingSchema = createAggregateRatingSchema()
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" }
  ])
  
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
