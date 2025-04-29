"use client"

import { Heading, Text } from "@medusajs/ui"
import React from "react"
import Image from "next/image"
import { createOrganizationSchema } from "@lib/util/structured-data"
import Script from "next/script"

const BiographyTemplate = () => {
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
            src="/images/elon/biography-hero.jpg" 
            alt="Elon Musk Portrait" 
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
              Elon Musk: The Biography
            </Heading>
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-normal mb-6 drop-shadow-lg"
            >
              The Life and Vision of a Modern Innovator
            </Heading>
          </span>
        </div>
      </div>
      
      {/* Early Life Section */}
      <div className="py-16 bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-6 text-grey-90">
                Early Life & Education
              </Heading>
              <div className="space-y-4 text-grey-60">
                <Text>
                  Born on June 28, 1971, in Pretoria, South Africa, Elon Reeve Musk showed an early aptitude for technology and entrepreneurship. As a child, he was an avid reader and self-learner, developing an interest in computing at the age of 10.
                </Text>
                <Text>
                  At just 12 years old, Musk sold his first software, a space game called Blastar, for approximately $500. This early success foreshadowed his future as a tech entrepreneur.
                </Text>
                <Text>
                  After completing his schooling in South Africa, Musk moved to Canada at age 17, attending Queen's University before transferring to the University of Pennsylvania, where he earned bachelor's degrees in physics and economics.
                </Text>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/elon/early-life.jpg" 
                alt="Young Elon Musk" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Entrepreneurial Journey Section */}
      <div className="py-16 bg-grey-5">
        <div className="content-container">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-8 text-center text-grey-90">
            Entrepreneurial Journey
          </Heading>
          
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heading level="h3" className="text-2xl font-bold mb-4 text-grey-90 border-b border-grey-20 pb-2">
                Zip2 & PayPal (1995-2002)
              </Heading>
              <Text className="text-grey-60 mb-4">
                In 1995, Musk co-founded Zip2, a company that provided business directories and maps for newspapers. The company was acquired by Compaq for nearly $300 million in 1999, earning Musk $22 million for his 7% share.
              </Text>
              <Text className="text-grey-60">
                Following this success, Musk co-founded X.com, an online payment company that later merged with Confinity to form PayPal. When eBay acquired PayPal in 2002 for $1.5 billion, Musk, the largest shareholder, received $165 million.
              </Text>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heading level="h3" className="text-2xl font-bold mb-4 text-grey-90 border-b border-grey-20 pb-2">
                SpaceX (2002-Present)
              </Heading>
              <Text className="text-grey-60 mb-4">
                With a vision to reduce space transportation costs and enable the colonization of Mars, Musk founded Space Exploration Technologies (SpaceX) in 2002. The company developed the Falcon 1, Falcon 9, and Falcon Heavy launch vehicles, as well as the Dragon spacecraft.
              </Text>
              <Text className="text-grey-60">
                SpaceX achieved numerous milestones, including being the first private company to send a spacecraft to the International Space Station, successfully land and reuse orbital-class rockets, and send astronauts to the ISS. The company continues to work toward its ultimate goal of making humanity a multi-planetary species.
              </Text>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heading level="h3" className="text-2xl font-bold mb-4 text-grey-90 border-b border-grey-20 pb-2">
                Tesla (2004-Present)
              </Heading>
              <Text className="text-grey-60 mb-4">
                In 2004, Musk joined Tesla Motors (now Tesla, Inc.) as chairman and product architect, becoming CEO in 2008. Under his leadership, Tesla has revolutionized the automotive industry with its electric vehicles, including the Roadster, Model S, Model 3, Model X, and Model Y.
              </Text>
              <Text className="text-grey-60">
                Beyond vehicles, Tesla expanded into clean energy generation and storage products, including solar panels, Solar Roof, and Powerwall. The company's mission is to accelerate the world's transition to sustainable energy.
              </Text>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heading level="h3" className="text-2xl font-bold mb-4 text-grey-90 border-b border-grey-20 pb-2">
                Neuralink & The Boring Company (2016-Present)
              </Heading>
              <Text className="text-grey-60 mb-4">
                In 2016, Musk co-founded Neuralink, a neurotechnology company developing implantable brain–machine interfaces. The company aims to help people with neurological conditions and, eventually, to enable a symbiosis between humans and artificial intelligence.
              </Text>
              <Text className="text-grey-60">
                That same year, Musk founded The Boring Company to construct tunnels to reduce urban traffic congestion. The company has completed projects like the Las Vegas Convention Center Loop and continues to develop tunnel networks for various transportation needs.
              </Text>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vision & Philosophy Section */}
      <div className="py-16 bg-white">
        <div className="content-container">
          <div className="flex flex-col items-center text-center mb-12">
            <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-grey-90">
              Vision & Philosophy
            </Heading>
            <Text className="text-grey-60 max-w-2xl">
              Elon Musk's approach to business and innovation is guided by several core principles and long-term visions.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-grey-5 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
                1
              </div>
              <Heading level="h3" className="text-xl font-bold mb-4 text-grey-90 text-center">
                First Principles Thinking
              </Heading>
              <Text className="text-grey-60 text-center">
                Musk approaches problems by breaking them down to their fundamental truths and reasoning up from there, rather than reasoning by analogy.
              </Text>
            </div>
            <div className="bg-grey-5 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
                2
              </div>
              <Heading level="h3" className="text-xl font-bold mb-4 text-grey-90 text-center">
                Long-Term Vision
              </Heading>
              <Text className="text-grey-60 text-center">
                His companies focus on long-term goals that address existential challenges for humanity, such as sustainable energy and becoming a multi-planetary species.
              </Text>
            </div>
            <div className="bg-grey-5 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
                3
              </div>
              <Heading level="h3" className="text-xl font-bold mb-4 text-grey-90 text-center">
                Risk Tolerance
              </Heading>
              <Text className="text-grey-60 text-center">
                Musk is known for his willingness to take significant risks, investing his own fortune in ventures that many considered impossible or impractical.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BiographyTemplate
