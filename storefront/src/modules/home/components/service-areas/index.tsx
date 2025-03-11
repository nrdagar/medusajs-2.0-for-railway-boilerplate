"use client"

import { Heading, Text } from "@medusajs/ui"
import React from "react"
import Image from "next/image"
import { CITIES } from "@lib/config/cities"

const ServiceAreas = () => {
  const areas = Object.values(CITIES)

  return (
    <div className="py-16 bg-grey-5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 z-0 bg-gradient-to-br from-orange-50 to-orange-100"></div>
      <div className="content-container relative z-10">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 px-4">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-grey-90">
            Our Service Areas
          </Heading>
          <Text className="text-grey-60 max-w-2xl text-base sm:text-lg">
            We provide fast, reliable dumpster rental services throughout New York City's boroughs.
          </Text>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-0">
          {areas.map((area) => (
            <div key={area.id} className="flex flex-col p-8 sm:p-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:translate-y-[-5px] border-t-4 border-orange-600">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 mr-5 bg-orange-100 rounded-lg flex items-center justify-center shadow-md">
                  <Image src={area.icon} width={36} height={36} alt={area.name} className="text-orange-600" />
                </div>
                <Heading level="h3" className="text-2xl sm:text-3xl font-bold text-grey-90">
                  {area.name}
                </Heading>
              </div>
              <Text className="text-grey-60 text-base sm:text-lg leading-relaxed">
                {area.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceAreas
