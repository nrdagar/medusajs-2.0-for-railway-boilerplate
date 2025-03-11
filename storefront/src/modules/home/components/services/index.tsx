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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col bg-white border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gray-800 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                
                {/* Dumpster Image with Dimensions */}
                <div className="p-4 flex justify-center relative">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={250}
                    height={150}
                    className="object-contain"
                  />
                  
                  {/* Dimensions */}
                  <div className="absolute top-4 left-4 text-xs text-gray-600">
                    {service.dimensions.height}
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs text-gray-600">
                    {service.dimensions.length}
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                    {service.dimensions.width}
                  </div>
                </div>
                
                {/* Best For Section */}
                <div className="p-4 flex-grow">
                  <h4 className="font-semibold mb-2">{service.description}</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {service.details.map((detail, index) => (
                      <li key={index} className="text-gray-700">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action Buttons */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <a 
              href="tel:5165151951" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-center py-4 rounded-md flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">(516) 515-1951</span>
            </a>
            <Button 
              variant="secondary" 
              className="bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-md flex items-center justify-center gap-2" 
              onClick={() => {
                openPhonePopup()
              }}
            >
              <span className="font-semibold">Order Online</span>
            </Button>
          </div>
          
          {/* Disclaimer */}
          <div className="text-center text-gray-500 text-sm mt-6 px-4">
            Please Note: Exterior dumpster dimensions may vary by manufacturer, but the total volume is accurate.
          </div>
        </div>
      </div>
      <PhonePopup isOpen={isPhonePopupOpen} close={closePhonePopup} />
    </div>
  )
}

export default Services
