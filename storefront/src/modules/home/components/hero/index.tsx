"use client"

import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { STORE_NAME } from "@lib/constants"
import Image from "next/image"
import ZipCodeSearch from "@modules/common/components/zip-code-search"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full border-b border-ui-border-base relative">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/dumpster.jpg" 
          alt="Dumpster rental service" 
          fill 
          sizes="100vw"
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 bg-gradient-to-br from-black/90 via-black/70 to-black/30">
        <span className="max-w-5xl px-4">
          <Heading
            level="h1"
            className="text-4xl sm:text-5xl lg:text-7xl leading-tight text-white font-extrabold mb-4 drop-shadow-xl"
          >
            JBS Builder Lic Dumpster Rental Services
          </Heading>
          <Heading
            level="h2"
            className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-medium mb-6 drop-shadow-xl"
          >
            Fast, Reliable, and Convenient Waste Management Solutions in NYC
          </Heading>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-xl">
            Get the dumpster you need fast and at an affordable price! Serving Queens, Manhattan, Brooklyn, and Bronx with same-day delivery available.
          </p>
        </span>
        
        {/* Zip Code Search Box */}
        <div className="w-full max-w-md px-4 mb-6">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Find Dumpster Rentals Near You</h3>
            <ZipCodeSearch 
              buttonText="Get Started" 
              placeholder="Enter your ZIP code"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Button variant="primary" size="large" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105" asChild>
            <a href="#services" onClick={(e) => {
              e.preventDefault()
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}>View Services</a>
          </Button>
          <Button variant="primary" size="large" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105" asChild>
            <a href="tel:5165151951">CALL TODAY (516) 515-1951</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
