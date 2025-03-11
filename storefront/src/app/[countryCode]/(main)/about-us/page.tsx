import { Metadata } from "next"
import AboutUsTemplate from "@modules/about/templates"
import { STORE_NAME } from "@lib/constants"

export const metadata: Metadata = {
  title: `About Us | ${STORE_NAME}`,
  description: "Learn about JBS Builder Lic, your trusted partner for dumpster rental services in NYC. Discover our story, values, and commitment to customer satisfaction.",
  alternates: {
    canonical: "/about-us",
  },
}

export default function AboutUsPage() {
  return <AboutUsTemplate />
}
