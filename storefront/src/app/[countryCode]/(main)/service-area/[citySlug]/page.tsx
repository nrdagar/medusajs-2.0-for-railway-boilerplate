import { Metadata } from "next"
import { notFound } from "next/navigation"
import { CITIES } from "@lib/config/cities"
import ServiceAreaTemplate from "@modules/service-area/templates"
import { STORE_NAME } from "@lib/constants"

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
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/service-area/${city.slug}`,
    },
    openGraph: {
      title: `Dumpster Rental in ${city.fullName} | ${STORE_NAME}`,
      description: city.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/service-area/${city.slug}`,
      type: "website",
      locale: "en_US",
      siteName: STORE_NAME,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Dumpster Rental Services in ${city.fullName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Dumpster Rental in ${city.fullName} | ${STORE_NAME}`,
      description: city.metaDescription,
      images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/images/og-image.jpg`],
    },
    keywords: [
      `dumpster rental ${city.fullName}`,
      `${city.fullName} waste management`,
      `construction dumpster ${city.fullName}`,
      `roll off dumpster ${city.fullName}`,
      `${city.fullName} junk removal`,
      `affordable dumpster rental ${city.fullName}`,
    ],
  }
}

export default function ServiceAreaPage({ params }: Props) {
  const city = Object.values(CITIES).find(
    (city) => city.slug === params.citySlug
  )

  if (!city) {
    notFound()
  }

  return <ServiceAreaTemplate city={city} />
}
