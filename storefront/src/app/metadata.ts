import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { STORE_NAME } from "@lib/constants"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    template: `%s | Elon Musk Biography`,
    default: `Elon Musk - Visionary Entrepreneur & Innovator`,
  },
  description: "Explore the life and achievements of Elon Musk, founder of Tesla, SpaceX, Neuralink, and more. Learn about his vision, companies, and impact on technology and innovation.",
  keywords: ["Elon Musk", "Tesla", "SpaceX", "Neuralink", "The Boring Company", "entrepreneur", "innovation", "electric vehicles", "space exploration", "technology visionary", "renewable energy", "brain-computer interface"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getBaseURL(),
    siteName: "Elon Musk Biography",
    title: `Elon Musk - Visionary Entrepreneur & Innovator`,
    description: "Explore the life and achievements of Elon Musk, founder of Tesla, SpaceX, Neuralink, and more. Learn about his vision, companies, and impact on technology and innovation.",
    images: [
      {
        url: `${getBaseURL()}/images/elon/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Elon Musk - Visionary Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Elon Musk - Visionary Entrepreneur & Innovator`,
    description: "Explore the life and achievements of Elon Musk, founder of Tesla, SpaceX, Neuralink, and more. Learn about his vision, companies, and impact on technology and innovation.",
    images: [`${getBaseURL()}/images/elon/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
}
