import { Metadata } from "next"
import BiographyTemplate from "@modules/elon/templates/biography"
import { STORE_NAME } from "@lib/constants"

export const metadata: Metadata = {
  title: `Biography | ${STORE_NAME}`,
  description: "Explore the life and achievements of Elon Musk, from his early days in South Africa to founding revolutionary companies like Tesla, SpaceX, Neuralink, and The Boring Company.",
  alternates: {
    canonical: "/about-us",
  },
}

export default function AboutUsPage() {
  return <BiographyTemplate />
}
