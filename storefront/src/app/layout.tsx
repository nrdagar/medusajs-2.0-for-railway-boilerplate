import "styles/globals.css"
import { CityProvider } from "@lib/context/city-context"
import { Metadata } from "next"
import { getBaseURL } from "@lib/util/env"
import { STORE_NAME } from "@lib/constants"
import Script from "next/script"
import { createOrganizationSchema, createLocalBusinessSchema, createFAQSchema } from "@lib/util/structured-data"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    template: `%s | ${STORE_NAME}`,
    default: `${STORE_NAME} - Dumpster Rental Services in NYC`,
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <CityProvider>
          <main className="relative">{props.children}</main>
        </CityProvider>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createOrganizationSchema()) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createLocalBusinessSchema()) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createFAQSchema()) }}
        />
      </body>
    </html>
  )
}
