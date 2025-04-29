"use client"

import { Heading, Text } from "@medusajs/ui"
import React from "react"
import Image from "next/image"

const companies = [
  {
    id: "tesla",
    name: "Tesla, Inc.",
    founded: "2003",
    role: "CEO & Product Architect (joined 2004)",
    description: "Tesla, Inc. is an American electric vehicle and clean energy company. Tesla designs and manufactures electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services.",
    mission: "To accelerate the world's transition to sustainable energy.",
    achievements: [
      "Produced the first highway-legal production all-electric car (Tesla Roadster)",
      "Developed the Model S, the first electric sedan to top monthly sales rankings",
      "Created the Model 3, making electric vehicles more accessible to mass market",
      "Expanded into energy generation and storage with Solar Roof and Powerwall",
      "Pioneered over-the-air software updates for vehicles"
    ],
    image: "/images/elon/tesla-detail.jpg"
  },
  {
    id: "spacex",
    name: "SpaceX (Space Exploration Technologies Corp.)",
    founded: "2002",
    role: "Founder, CEO & Chief Engineer",
    description: "SpaceX is an American aerospace manufacturer and space transportation services company. It was founded with the goal of reducing space transportation costs to enable the colonization of Mars.",
    mission: "Make humanity multiplanetary by establishing a self-sustaining city on Mars.",
    achievements: [
      "First privately funded company to send a spacecraft to the International Space Station",
      "Developed reusable orbital-class rockets (Falcon 9 and Falcon Heavy)",
      "Created the Dragon spacecraft for cargo and crew transport",
      "Launched Starlink, a satellite internet constellation providing global coverage",
      "Developing Starship, a fully reusable transportation system for interplanetary travel"
    ],
    image: "/images/elon/spacex-detail.jpg"
  },
  {
    id: "neuralink",
    name: "Neuralink Corporation",
    founded: "2016",
    role: "Co-founder & CEO",
    description: "Neuralink is a neurotechnology company developing implantable brain–machine interfaces (BMIs). The company's initial focus is on creating devices to treat serious brain diseases, with the eventual goal of human enhancement.",
    mission: "Develop ultra high bandwidth brain-machine interfaces to connect humans and computers.",
    achievements: [
      "Developed a sewing machine-like robot to implant ultra-thin threads into the brain",
      "Created flexible threads (thinner than human hair) with electrodes to detect neural activity",
      "Designed custom high-density chips for processing neural signals",
      "Demonstrated a working prototype in pigs and monkeys",
      "Working toward human clinical trials for medical applications"
    ],
    image: "/images/elon/neuralink-detail.jpg"
  },
  {
    id: "boring",
    name: "The Boring Company",
    founded: "2016",
    role: "Founder",
    description: "The Boring Company is an American infrastructure and tunnel construction services company. It was founded to solve the problem of traffic congestion in cities through the construction of underground transportation tunnels.",
    mission: "Create safe, fast-to-dig, and low-cost transportation, utility, and freight tunnels.",
    achievements: [
      "Completed the Las Vegas Convention Center Loop, a tunnel transportation system",
      "Developed tunnel boring machines designed to be faster and more efficient",
      "Created a system for turning excavated dirt into construction bricks",
      "Proposed and developed concepts for underground transportation networks in multiple cities",
      "Working on Loop and Hyperloop transportation systems"
    ],
    image: "/images/elon/boring-detail.jpg"
  }
]

const CompaniesTemplate = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-[50vh] w-full border-b border-ui-border-base relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/elon/companies-hero.jpg" 
            alt="Elon Musk's Companies" 
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
              Visionary Companies
            </Heading>
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-normal mb-6 drop-shadow-lg"
            >
              Revolutionizing Multiple Industries
            </Heading>
          </span>
        </div>
      </div>
      
      {/* Companies Section */}
      <div className="py-16 bg-white">
        <div className="content-container">
          <div className="space-y-24">
            {companies.map((company) => (
              <div key={company.id} id={company.id} className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image 
                      src={company.image} 
                      alt={company.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-2 text-grey-90">
                      {company.name}
                    </Heading>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Founded: {company.founded}</span>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Role: {company.role}</span>
                    </div>
                    <Text className="text-grey-60 mb-4">
                      {company.description}
                    </Text>
                    <div className="mb-6">
                      <Heading level="h3" className="text-xl font-semibold mb-2 text-grey-90">
                        Mission
                      </Heading>
                      <Text className="text-grey-60 italic">
                        "{company.mission}"
                      </Text>
                    </div>
                    <div>
                      <Heading level="h3" className="text-xl font-semibold mb-3 text-grey-90">
                        Key Achievements
                      </Heading>
                      <ul className="list-disc pl-5 space-y-2 text-grey-60">
                        {company.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Divider except for last item */}
                {company.id !== "boring" && (
                  <div className="border-b border-grey-20 mt-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CompaniesTemplate
