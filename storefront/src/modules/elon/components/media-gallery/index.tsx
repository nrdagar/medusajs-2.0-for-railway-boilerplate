"use client"

import { Heading, Text, Button } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const MediaGalleryPreview = () => {
  return (
    <div className="py-16 bg-grey-5" id="media">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-grey-90">
            Media Gallery
          </Heading>
          <Text className="text-grey-60 max-w-2xl">
            A visual journey through Elon Musk's ventures, innovations, and pivotal moments.
          </Text>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/elon/gallery-1.jpg"
              alt="Elon Musk with Tesla vehicle"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/elon/spacex.png"
              alt="SpaceX Logo"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/elon/gallery-3.jpg"
              alt="Neuralink technology"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md" asChild>
            <LocalizedClientLink href="/elon-gallery">
              View Full Gallery
            </LocalizedClientLink>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MediaGalleryPreview
