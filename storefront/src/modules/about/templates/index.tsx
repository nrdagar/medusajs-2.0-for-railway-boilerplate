"use client"

import { Heading, Text } from "@medusajs/ui"
import React from "react"
import Image from "next/image"
import { createOrganizationSchema } from "@lib/util/structured-data"
import Script from "next/script"
import WhyChooseUs from "@modules/home/components/why-choose-us"
import CallToAction from "@modules/home/components/call-to-action"

const AboutUsTemplate = () => {
  const organizationSchema = createOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Hero Section */}
      <div className="h-[50vh] w-full border-b border-ui-border-base relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/dumpster.jpg" 
            alt="About JBS Builder Lic Dumpster Rental" 
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
              About JBS Builder Lic
            </Heading>
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-normal mb-6 drop-shadow-lg"
            >
              Your Trusted Partner for Dumpster Rental in NYC
            </Heading>
          </span>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-6 text-grey-90">
                Our Story
              </Heading>
              <div className="space-y-4 text-grey-60">
                <Text>
                  JBS Builder Lic was founded with a simple mission: to provide reliable, affordable, and hassle-free dumpster rental services to the residents and businesses of New York City.
                </Text>
                <Text>
                  With years of experience in the construction and waste management industry, we understand the unique challenges of waste disposal in a busy urban environment like NYC. That's why we've designed our services to be as convenient and efficient as possible.
                </Text>
                <Text>
                  What started as a small family business has grown into one of the most trusted dumpster rental companies in the city, serving thousands of satisfied customers across Queens, Manhattan, Brooklyn, and the Bronx.
                </Text>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/about-us.jpg" 
                alt="JBS Builder Lic team" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div className="py-16 bg-grey-5">
        <div className="content-container">
          <div className="flex flex-col items-center text-center mb-12">
            <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-grey-90">
              Our Values
            </Heading>
            <Text className="text-grey-60 max-w-2xl text-base sm:text-lg">
              At JBS Builder Lic, we're guided by a set of core values that define everything we do.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Image src="/icons/customer-service.svg" width={32} height={32} alt="Customer Service" />
              </div>
              <Heading level="h3" className="text-xl font-bold mb-4 text-grey-90 text-center">
                Customer Satisfaction
              </Heading>
              <Text className="text-grey-60 text-center">
                We go above and beyond to ensure our customers are completely satisfied with our services. Your satisfaction is our top priority.
              </Text>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Image src="/icons/reliability.svg" width={32} height={32} alt="Reliability" />
              </div>
              <Heading level="h3" className="text-xl font-bold mb-4 text-grey-90 text-center">
                Reliability
              </Heading>
              <Text className="text-grey-60 text-center">
                When we make a promise, we keep it. You can count on us for on-time delivery and pickup, every time.
              </Text>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Image src="/icons/environment.svg" width={32} height={32} alt="Environmental Responsibility" />
              </div>
              <Heading level="h3" className="text-xl font-bold mb-4 text-grey-90 text-center">
                Environmental Responsibility
              </Heading>
              <Text className="text-grey-60 text-center">
                We're committed to environmentally responsible waste management practices, ensuring proper disposal and recycling whenever possible.
              </Text>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default AboutUsTemplate
