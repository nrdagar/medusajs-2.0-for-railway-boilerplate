"use client"

import { Heading, Text } from "@medusajs/ui"
import React, { useState } from "react"
import Image from "next/image"

const galleryItems = [
  {
    id: "tesla-model-s",
    title: "Tesla Model S",
    description: "Elon Musk with the Tesla Model S, the company's premium electric sedan.",
    category: "Tesla",
    image: "/images/elon/gallery-tesla-1.jpg"
  },
  {
    id: "spacex-launch",
    title: "SpaceX Falcon 9 Launch",
    description: "A SpaceX Falcon 9 rocket launching into space.",
    category: "SpaceX",
    image: "/images/elon/gallery-spacex-1.jpg"
  },
  {
    id: "neuralink-chip",
    title: "Neuralink Brain Chip",
    description: "The Neuralink brain-computer interface chip.",
    category: "Neuralink",
    image: "/images/elon/gallery-neuralink-1.jpg"
  },
  {
    id: "boring-tunnel",
    title: "The Boring Company Tunnel",
    description: "A tunnel constructed by The Boring Company for underground transportation.",
    category: "The Boring Company",
    image: "/images/elon/gallery-boring-1.jpg"
  },
  {
    id: "elon-portrait",
    title: "Elon Musk Portrait",
    description: "A portrait of Elon Musk, entrepreneur and innovator.",
    category: "Personal",
    image: "/images/elon/gallery-portrait-1.jpg"
  },
  {
    id: "tesla-factory",
    title: "Tesla Gigafactory",
    description: "Tesla's Gigafactory, where the company manufactures batteries and vehicles.",
    category: "Tesla",
    image: "/images/elon/gallery-tesla-2.jpg"
  },
  {
    id: "spacex-crew",
    title: "SpaceX Crew Dragon",
    description: "The SpaceX Crew Dragon spacecraft, designed to transport astronauts to the ISS.",
    category: "SpaceX",
    image: "/images/elon/gallery-spacex-2.jpg"
  },
  {
    id: "elon-speaking",
    title: "Elon Musk Speaking",
    description: "Elon Musk speaking at a conference about his vision for the future.",
    category: "Personal",
    image: "/images/elon/gallery-portrait-2.jpg"
  },
  {
    id: "tesla-cybertruck",
    title: "Tesla Cybertruck",
    description: "The futuristic Tesla Cybertruck, an all-electric pickup truck.",
    category: "Tesla",
    image: "/images/elon/gallery-tesla-3.jpg"
  },
  {
    id: "spacex-starship",
    title: "SpaceX Starship",
    description: "The SpaceX Starship, designed for missions to Mars and beyond.",
    category: "SpaceX",
    image: "/images/elon/gallery-spacex-3.jpg"
  },
  {
    id: "boring-vegas",
    title: "Las Vegas Convention Center Loop",
    description: "The Boring Company's Las Vegas Convention Center Loop transportation system.",
    category: "The Boring Company",
    image: "/images/elon/gallery-boring-2.jpg"
  },
  {
    id: "neuralink-demo",
    title: "Neuralink Demonstration",
    description: "A demonstration of Neuralink's brain-computer interface technology.",
    category: "Neuralink",
    image: "/images/elon/gallery-neuralink-2.jpg"
  }
]

const MediaGalleryTemplate = () => {
  const [filter, setFilter] = React.useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  
  const categories = ["All", "Tesla", "SpaceX", "Neuralink", "The Boring Company", "Personal"]
  
  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)
  
  return (
    <>
      {/* Hero Section */}
      <div className="h-[50vh] w-full border-b border-ui-border-base relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/elon/gallery-hero.jpg" 
            alt="Elon Musk Media Gallery" 
            fill 
            sizes="100vw"
            className="object-cover brightness-[0.75]"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 bg-gradient-to-br from-black/80 via-black/60 to-transparent">
          <span className="max-w-4xl px-4">
            <Heading
              level="h1"
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-white font-bold mb-4 drop-shadow-lg"
            >
              Media Gallery
            </Heading>
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-normal mb-6 drop-shadow-lg"
            >
              Visual Journey Through Elon Musk's Ventures
            </Heading>
          </span>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className="py-16 bg-white">
        <div className="content-container">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-grey-10 text-grey-70 hover:bg-grey-20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <Heading level="h3" className="text-white text-lg font-bold mb-1">
                      {item.title}
                    </Heading>
                    <Text className="text-white/90 text-sm">
                      {item.category}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <div className="relative w-full h-[60vh]">
                  <Image 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <Heading level="h3" className="text-2xl font-bold mb-2 text-grey-90">
                    {selectedImage.title}
                  </Heading>
                  <Text className="text-grey-60 mb-2">
                    {selectedImage.description}
                  </Text>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MediaGalleryTemplate
