import { Metadata } from "next"
import ContactTemplate from "@modules/contact/templates"
import { STORE_NAME } from "@lib/constants"

export const metadata: Metadata = {
  title: `Contact Us | ${STORE_NAME}`,
  description: "Contact JBS Builder Lic for dumpster rental services in NYC. Get in touch with our team for quotes, questions, or to schedule a delivery.",
  alternates: {
    canonical: "/contact-us",
  },
}

export default function ContactUsPage() {
  return <ContactTemplate />
}
