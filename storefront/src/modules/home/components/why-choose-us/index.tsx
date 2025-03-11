import { Heading, Text } from "@medusajs/ui"
import React from "react"
import Image from "next/image"

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      title: "HOA-Friendly",
      description: "Our dumpsters are all HOA-friendly and will not damage your driveway. We are a licensed, insured, and family-owned-and-operated business.",
      icon: "/icons/hoa-friendly.svg"
    },
    {
      id: 2,
      title: "Affordable Pricing",
      description: "We offer the most competitive pricing around. Call or text now to see our current rates...you will not be disappointed!",
      icon: "/icons/affordable.svg"
    },
    {
      id: 3,
      title: "Flexible Rental Periods",
      description: "We offer anywhere from 1 day to 14 days standard rental periods. Service available 7 days a week.",
      icon: "/icons/calendar.svg"
    }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 px-4">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 text-grey-90">
            Why Choose Us?
          </Heading>
          <Text className="text-grey-60 max-w-2xl text-base sm:text-lg">
            We pride ourselves on providing exceptional service and value to our customers.
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 px-4 sm:px-0">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col p-8 sm:p-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:translate-y-[-5px] border-t-4 border-orange-600">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-16 h-16 mr-5 sm:mr-6 bg-orange-600 flex items-center justify-center rounded-lg shadow-lg">
                  <Image src={benefit.icon} width={36} height={36} alt={benefit.title} className="text-white" />
                </div>
                <Heading level="h3" className="text-xl sm:text-2xl font-bold text-grey-90">
                  {benefit.title}
                </Heading>
              </div>
              <Text className="text-grey-60 text-base sm:text-lg leading-relaxed">
                {benefit.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
