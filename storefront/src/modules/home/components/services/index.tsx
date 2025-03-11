"use client"

import { Heading, Text, Button } from "@medusajs/ui"
import LocalizedClientLink from "../../../../modules/common/components/localized-client-link"
import React, { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import useToggleState from "@lib/hooks/use-toggle-state"
import PhonePopup from "./phone-popup"
import useEmblaCarousel from 'embla-carousel-react'

const Services = () => {
  const { state: isPhonePopupOpen, open: openPhonePopup, close: closePhonePopup } = useToggleState(false)
  const [selectedService, setSelectedService] = useState("")
  
  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false
  })
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])
  
  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

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
      image: "/images/dumpster-sizes/10-yard-dumpster.jpg",
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
      image: "/images/dumpster-sizes/15-yard-dumpster.jpg",
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
      image: "/images/dumpster-sizes/20-yard-dumpster.jpg",
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
      image: "/images/dumpster-sizes/30-yard-dumpster.jpg",
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
      image: "/images/dumpster-sizes/40-yard-dumpster.jpg",
      link: "/services/40-yard",
    },
  ]

  return (
    <div id="services" className="py-16 bg-white">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 px-4">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 text-grey-90">
            Our Dumpster Rental Services
          </Heading>
          <Text className="text-grey-60 max-w-2xl text-base sm:text-lg">
            We offer a variety of dumpster sizes to meet your specific needs. Whether you're cleaning out your garage or managing a large construction project, we have the right solution for you.
          </Text>
        </div>
        
        <div className="relative max-w-[1200px] mx-auto px-4">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {services.map((service) => (
                <div key={service.id} className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] px-2">
                  <div className="flex flex-col h-full border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#1B2A4A] text-white p-3.5 text-center">
                      <h3 className="text-lg font-bold tracking-wide">{service.title}</h3>
                    </div>
                    
                    {/* Dumpster Image with Dimensions */}
                    <div className="p-6 flex justify-center relative bg-white">
                      <div className="relative w-full h-[180px]">
                        <Image 
                          src={service.image}
                          alt={service.title} 
                          fill
                          className="object-contain"
                          priority
                        />
                        
                        {/* Dimensions */}
                        <div className="absolute top-2 right-2 text-sm font-bold text-gray-900 bg-white/95 px-2.5 py-1.5 rounded-md shadow-md">
                          {service.dimensions.height}
                        </div>
                        <div className="absolute bottom-2 left-2 text-sm font-bold text-gray-900 bg-white/95 px-2.5 py-1.5 rounded-md shadow-md">
                          {service.dimensions.length}
                        </div>
                        <div className="absolute bottom-2 right-2 text-sm font-bold text-gray-900 bg-white/95 px-2.5 py-1.5 rounded-md shadow-md">
                          {service.dimensions.width}
                        </div>
                      </div>
                    </div>
                    
                    {/* Best For Section */}
                    <div className="px-6 pb-6 flex-grow bg-white">
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
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <PhonePopup isOpen={isPhonePopupOpen} close={closePhonePopup} />
    </div>
  )
}

export default Services
