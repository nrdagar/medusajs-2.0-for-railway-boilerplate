"use client"

import { Heading, Text, Button } from "@medusajs/ui"
import React from "react"
import Image from "next/image"
import { CityConfig } from "@lib/types/city"
import { createServiceSchema, createLocalBusinessSchema } from "@lib/util/structured-data"
import Script from "next/script"
import Services from "@modules/home/components/services"
import WhyChooseUs from "@modules/home/components/why-choose-us"
import ContactForm from "@modules/common/components/contact-form"

interface ServiceAreaTemplateProps {
  city: CityConfig
}

const ServiceAreaTemplate: React.FC<ServiceAreaTemplateProps> = ({ city }) => {
  const localBusinessSchema = createLocalBusinessSchema()
  const serviceSchema = createServiceSchema({
    name: `Dumpster Rental in ${city.fullName}`,
    description: city.metaDescription,
    image: "/images/dumpster.jpg"
  })

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Hero Section */}
      <div className="h-[75vh] w-full border-b border-ui-border-base relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/dumpster.jpg" 
            alt={`Dumpster rental service in ${city.name}`} 
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
              {city.heroTitle}
            </Heading>
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-normal mb-6 drop-shadow-lg"
            >
              {city.heroSubtitle}
            </Heading>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Get the dumpster you need fast and at an affordable price in {city.name}! Same-day delivery available.
            </p>
          </span>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button variant="primary" size="large" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105" asChild>
              <a href="#services" onClick={(e) => {
                e.preventDefault()
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}>View Services</a>
            </Button>
            <Button variant="primary" size="large" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105" asChild>
              <a href={`tel:${city.phoneNumber.replace(/-/g, "")}`}>CALL TODAY {city.phoneNumber}</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <Services />
      
      {/* Service Area Information */}
      <div className="py-16 bg-grey-5">
        <div className="content-container">
          <div className="flex flex-col items-center text-center mb-12">
            <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-grey-90">
              Dumpster Rental in {city.name}
            </Heading>
            <Text className="text-grey-60 max-w-2xl text-base sm:text-lg">
              {city.description}
            </Text>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <Heading level="h3" className="text-2xl font-bold mb-4 text-grey-90">
                Service Areas in {city.name}
              </Heading>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-6">
                  <Text className="text-grey-60 mb-4">
                    We provide dumpster rental services throughout {city.name}, including the following neighborhoods:
                  </Text>
                  <div className="grid grid-cols-2 gap-2">
                    {city.neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-orange-500 mr-2">✓</span>
                        <Text>{neighborhood}</Text>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Text className="text-grey-60 mb-4">
                    We service the following zip codes in {city.name}:
                  </Text>
                  <div className="flex flex-wrap gap-2">
                    {city.zipCodes.map((zipCode, index) => (
                      <span key={index} className="bg-grey-5 px-2 py-1 rounded text-sm">
                        {zipCode}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Heading level="h3" className="text-2xl font-bold mb-4 text-grey-90">
                {city.name} Service Area Map
              </Heading>
              <div className="bg-white p-4 rounded-lg shadow-md h-[400px] relative overflow-hidden">
                <Image 
                  src={city.mapImageUrl || "/images/map-placeholder.jpg"} 
                  alt={`${city.name} service area map`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Heading level="h3" className="text-2xl font-bold mb-4 text-grey-90">
                Accepted Materials
              </Heading>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Text className="text-grey-60 mb-4">
                  Our dumpsters can accommodate a wide variety of materials, including:
                </Text>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {city.acceptedMaterials.map((material, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-orange-500 mr-2">✓</span>
                      <Text>{material}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Heading level="h3" className="text-2xl font-bold mb-4 text-grey-90">
                Prohibited Materials
              </Heading>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Text className="text-grey-60 mb-4">
                  For safety and environmental reasons, the following materials cannot be placed in our dumpsters:
                </Text>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {city.prohibitedMaterials.map((material, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <Text>{material}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Contact Form Section */}
      <div className="py-16 bg-white">
        <div className="content-container">
          <div className="flex flex-col items-center text-center mb-12">
            <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-grey-90">
              Contact Us for {city.name} Dumpster Rental
            </Heading>
            <Text className="text-grey-60 max-w-2xl text-base sm:text-lg">
              Get in touch with our team to schedule your dumpster rental in {city.name} or to ask any questions.
            </Text>
          </div>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceAreaTemplate
