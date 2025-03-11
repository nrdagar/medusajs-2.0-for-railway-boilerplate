import { Metadata } from "next"
import { notFound } from "next/navigation"
import { CITIES } from "@lib/config/cities"
import ServiceAreaTemplate from "@modules/service-area/templates"
import { STORE_NAME } from "@lib/constants"
import { Suspense } from "react"

type Props = {
  params: { citySlug: string; countryCode: string }
}

export async function generateStaticParams() {
  const cityParams = Object.values(CITIES).map((city) => ({
    citySlug: city.slug,
    countryCode: "us"
  }))

  return cityParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = Object.values(CITIES).find(
    (city) => city.slug === params.citySlug
  )

  if (!city) {
    notFound()
  }

  return {
    title: `Dumpster Rental in ${city.fullName} | ${STORE_NAME}`,
    description: city.metaDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/us/service-area/${city.slug}`,
    },
  }
}

export default function ServiceAreaPage({ params }: Props) {
  const city = Object.values(CITIES).find(
    (city) => city.slug === params.citySlug
  )

  if (!city) {
    notFound()
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceAreaTemplate city={city} />
    </Suspense>
  )
}
