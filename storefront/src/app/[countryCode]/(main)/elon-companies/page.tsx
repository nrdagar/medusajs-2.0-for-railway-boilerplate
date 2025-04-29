import { Metadata } from "next"
import CompaniesTemplate from "@modules/elon/templates/companies"
import { STORE_NAME } from "@lib/constants"

export const metadata: Metadata = {
  title: `Companies | ${STORE_NAME}`,
  description: "Explore Elon Musk's revolutionary companies including Tesla, SpaceX, Neuralink, and The Boring Company. Learn about their missions, achievements, and impact on various industries.",
  alternates: {
    canonical: "/elon-companies",
  },
}

export default function CompaniesPage() {
  return <CompaniesTemplate />
}
