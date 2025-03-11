import { Metadata } from "next"
import { STORE_NAME } from "../../../lib/constants"

export const metadata: Metadata = {
  title: `${STORE_NAME} - NYC Dumpster Rental Services | Queens, Brooklyn, Manhattan, Bronx`,
  description: "Top-rated dumpster rental in NYC. 10-40 yard dumpsters for construction, demolition, renovation & cleanouts. Same-day delivery in Queens, Brooklyn, Manhattan & Bronx. HOA-friendly service.",
  keywords: [
    "dumpster rental NYC",
    "roll off dumpster Queens",
    "construction dumpster Brooklyn",
    "waste container rental Manhattan",
    "debris removal Bronx",
    "10 yard dumpster rental",
    "20 yard dumpster rental",
    "30 yard dumpster rental",
    "40 yard dumpster rental",
    "residential dumpster rental",
    "commercial dumpster rental",
    "construction waste removal",
    "demolition dumpster rental",
    "renovation waste container",
    "HOA friendly dumpster service",
    "same day dumpster delivery NYC"
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
