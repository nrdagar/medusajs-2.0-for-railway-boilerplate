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
          className="object-cover brightness-[0.5] contrast-[1.1]"
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-8 bg-gradient-to-br from-black/95 via-black/90 to-black/70">
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
        <div className="w-full max-w-2xl px-4 mb-12">
          <div className="bg-white/98 backdrop-blur-md p-10 rounded-lg shadow-2xl border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Find Dumpster Rentals Near You</h3>
            <ZipCodeSearch 
              buttonText="Get Started" 
              placeholder="Enter your ZIP code"
              className="text-lg font-medium"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
          <Button variant="primary" size="large" className="bg-orange-600 hover:bg-orange-700 px-10 py-5 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:translate-y-[-3px] rounded-md" asChild>
            <a href="#services" onClick={(e) => {
              e.preventDefault()
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}>View Services</a>
          </Button>
          <Button variant="primary" size="large" className="bg-green-600 hover:bg-green-700 px-10 py-5 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:translate-y-[-3px] rounded-md" asChild>
            <a href="tel:5165151951">CALL TODAY (516) 515-1951</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
