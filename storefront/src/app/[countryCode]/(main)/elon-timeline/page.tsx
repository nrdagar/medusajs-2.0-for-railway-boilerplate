import { Metadata } from "next"
import TimelineTemplate from "@modules/elon/templates/timeline"
import { STORE_NAME } from "@lib/constants"

export const metadata: Metadata = {
  title: `Timeline | ${STORE_NAME}`,
  description: "Explore the chronological timeline of Elon Musk's life, from his early days in South Africa to his groundbreaking achievements with Tesla, SpaceX, and beyond.",
  alternates: {
    canonical: "/elon-timeline",
  },
}

export default function TimelinePage() {
  return <TimelineTemplate />
}
