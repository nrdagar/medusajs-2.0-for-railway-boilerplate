import { Metadata } from "next"
import MediaGalleryTemplate from "@modules/elon/templates/media-gallery"
import { STORE_NAME } from "@lib/constants"

export const metadata: Metadata = {
  title: `Media Gallery | ${STORE_NAME}`,
  description: "Browse a collection of images showcasing Elon Musk's companies, innovations, and key moments throughout his career at Tesla, SpaceX, Neuralink, and The Boring Company.",
  alternates: {
    canonical: "/elon-gallery",
  },
}

export default function GalleryPage() {
  return <MediaGalleryTemplate />
}
