"use client"

import { Heading, Text, Button } from "@medusajs/ui"
// Using inline SVG for phone icon since @medusajs/icons is not available
import LocalizedClientLink from "../../../../modules/common/components/localized-client-link"
import React, { useState } from "react"
import Image from "next/image"
import useToggleState from "@lib/hooks/use-toggle-state"
import PhonePopup from "./phone-popup"

const Services = () => {
  const { state: isPhonePopupOpen, open: openPhonePopup, close: closePhonePopup } = useToggleState(false)
  const [selectedService, setSelectedService] = useState("")

  const services = [
    {
      id: "10-yard",
      title: "10 Yard Dumpster",
      description: "Best for",
      details: [
        "Small remodels",
        "Concrete, asphalt & brick",
        "Dirt & sand"
      ],
      dimensions: {
        length: "14 ft",
        width: "7.5 ft",
        height: "3.5 ft"
      },
      image: "/images/10-yard-dumpster.jpg",
      link: "/services/10-yard",
    },
    {
      id: "15-yard",
      title: "15 Yard Dumpster",
      description: "Best for",
      details: [
        "Roofing projects",
        "Small home remodels",
        "Concrete, asphalt & brick"
      ],
      dimensions: {
        length: "16 ft",
        width: "7.5 ft",
        height: "4.5 ft"
      },
      image: "/images/15-yard-dumpster.jpg",
      link: "/services/15-yard",
    },
    {
      id: "20-yard",
      title: "20 Yard Dumpster",
      description: "Best for",
      details: [
        "Home cleanouts",
        "Small home remodels",
        "Roofing projects"
      ],
      dimensions: {
        length: "22 ft",
        width: "7.5 ft",
        height: "4.5 ft"
      },
      image: "/images/20-yard-dumpster.jpg",
      link: "/services/20-yard",
    },
    {
      id: "30-yard",
      title: "30 Yard Dumpster",
      description: "Best for",
      details: [
        "Mid-sized remodels",
        "House cleanups",
        "Construction projects"
      ],
      dimensions: {
        length: "22 ft",
        width: "7.5 ft",
        height: "6 ft"
      },
      image: "/images/30-yard-dumpster.jpg",
      link: "/services/30-yard",
    },
    {
      id: "40-yard",
      title: "40 Yard Dumpster",
      description: "Best for",
      details: [
        "Large construction",
        "Commercial projects",
        "Industrial cleanups"
      ],
      dimensions: {
        length: "22 ft",
        width: "8 ft",
        height: "8 ft"
      },
      image: "/images/40-yard-dumpster.jpg",
      link: "/services/40-yard",
    },
  ]

  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 px-4">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 text-grey-90">
            Our Dumpster Rental Services
          </Heading>
          <Text className="text-grey-60 max-w-2xl text-base sm:text-lg">
            We offer a variety of dumpster sizes to meet your specific needs. Whether you're cleaning out your garage or managing a large construction project, we have the right solution for you.
          </Text>
        </div>
        
        <div className="relative">
          {/* Dumpster Size Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4 max-w-[1400px] mx-auto">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="bg-gray-900 text-white p-3.5 text-center">
                  <h3 className="text-lg font-bold tracking-wide">{service.title}</h3>
                </div>
                
                {/* Dumpster Image with Dimensions */}
                <div className="p-6 flex justify-center relative">
                  <Image 
                    src={`https://www.dumpsters.com/images/dumpster-sizes/${service.id}-dumpster-no-text.jpg`}
                    alt={service.title} 
                    width={280}
                    height={160}
                    className="object-contain"
                    priority
                  />
                  
                  {/* Dimensions */}
                  <div className="absolute top-2 left-2 text-sm font-bold text-gray-900 bg-white/95 px-2.5 py-1.5 rounded-md shadow-md">
                    {service.dimensions.height}
                  </div>
                  <div className="absolute bottom-2 left-2 text-sm font-bold text-gray-900 bg-white/95 px-2.5 py-1.5 rounded-md shadow-md">
                    {service.dimensions.length}
                  </div>
                  <div className="absolute bottom-2 right-2 text-sm font-bold text-gray-900 bg-white/95 px-2.5 py-1.5 rounded-md shadow-md">
                    {service.dimensions.width}
                  </div>
                </div>
                
                {/* Best For Section */}
                <div className="px-6 pb-6 flex-grow">
                  <h4 className="font-bold text-gray-800 mb-3">{service.description}</h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="mr-2.5 text-orange-500 text-lg">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action Buttons */}
          <div className="mt-12 max-w-[1400px] mx-auto">
            <div className="flex justify-center px-4">
              <a 
                href="tel:5165151951" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-center py-6 px-12 rounded-lg flex items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl font-bold tracking-wide">(516) 515-1951</span>
              </a>
            </div>
            
            {/* Disclaimer */}
            <div className="text-center text-gray-600 text-sm mt-8 px-4 italic">
              Please Note: Exterior dumpster dimensions may vary by manufacturer, but the total volume is accurate.
            </div>
          </div>
        </div>
      </div>
      <PhonePopup isOpen={isPhonePopupOpen} close={closePhonePopup} />
    </div>
  )
}

export default Services
