"use client"

import { Heading } from "@medusajs/ui"
import Image from "next/image"

const ElonHeroSection = () => {
  return (
    <div className="h-[80vh] w-full border-b border-ui-border-base relative">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/elon/hero-elon.jpg" 
          alt="Elon Musk" 
          fill 
          sizes="100vw"
          className="object-cover brightness-[0.6]"
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-8 bg-gradient-to-br from-black/80 via-black/70 to-black/50">
        <span className="max-w-5xl px-4">
          <Heading
            level="h1"
            className="text-4xl sm:text-5xl lg:text-7xl leading-tight text-white font-extrabold mb-4 drop-shadow-xl"
          >
            Elon Musk
          </Heading>
          <Heading
            level="h2"
            className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-medium mb-6 drop-shadow-xl"
          >
            Visionary Entrepreneur &amp; Engineer
          </Heading>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-xl">
            Exploring the life and work of one of the world's most influential innovators, from Tesla and SpaceX to Neuralink and beyond.
          </p>
        </span>
      </div>
    </div>
  )
}

export default ElonHeroSection
