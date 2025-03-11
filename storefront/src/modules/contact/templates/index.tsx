"use client"

import { Heading, Text } from "@medusajs/ui"
import React from "react"
import Image from "next/image"
import { createOrganizationSchema } from "@lib/util/structured-data"
import Script from "next/script"
import ContactForm from "@modules/common/components/contact-form"
import WhyChooseUs from "@modules/home/components/why-choose-us"
import CallToAction from "@modules/home/components/call-to-action"

const ContactTemplate = () => {
  const organizationSchema = createOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Hero Section */}
      <div className="h-[40vh] w-full border-b border-ui-border-base relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/dumpster.jpg" 
            alt="Contact JBS Builder Lic Dumpster Rental" 
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
              Contact Us
            </Heading>
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-normal mb-6 drop-shadow-lg"
            >
              Get in Touch with Our Dumpster Rental Experts
            </Heading>
          </span>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="py-16 bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-6 text-grey-90">
                Send Us a Message
              </Heading>
              <div className="space-y-4 text-grey-60 mb-8">
                <Text>
                  Have questions about our dumpster rental services? Need a quote for your project? We're here to help!
                </Text>
                <Text>
                  Fill out the form and one of our dumpster rental experts will get back to you as soon as possible. You can also call us directly at <a href="tel:5165151951" className="text-orange-600 font-medium hover:underline">(516) 515-1951</a>.
                </Text>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level="h3" className="text-lg font-semibold text-grey-90 mb-1">
                      Phone
                    </Heading>
                    <Text className="text-grey-60">
                      <a href="tel:5165151951" className="hover:text-orange-600 transition-colors">(516) 515-1951</a>
                    </Text>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level="h3" className="text-lg font-semibold text-grey-90 mb-1">
                      Email
                    </Heading>
                    <Text className="text-grey-60">
                      <a href="mailto:info@jbsdumpster.com" className="hover:text-orange-600 transition-colors">info@jbsdumpster.com</a>
                    </Text>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level="h3" className="text-lg font-semibold text-grey-90 mb-1">
                      Address
                    </Heading>
                    <Text className="text-grey-60">
                      87-40 121 street<br />
                      Richmond Hill, NY 11418
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-grey-5 p-8 rounded-lg shadow-lg">
              <ContactForm />
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

export default ContactTemplate
