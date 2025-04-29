"use client"

import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const companies = [
  {
    id: "tesla",
    name: "Tesla",
    description: "Electric vehicles, clean energy generation and storage products.",
    image: "/images/elon/tesla.jpg",
    link: "/elon-companies#tesla",
  },
  {
    id: "spacex",
    name: "SpaceX",
    description: "Advanced rockets and spacecraft to revolutionize space transportation.",
    image: "/images/elon/spacex.png",
    link: "/elon-companies#spacex",
  },
  {
    id: "neuralink",
    name: "Neuralink",
    description: "Developing ultra high bandwidth brain-machine interfaces.",
    image: "/images/elon/neuralink.jpg",
    link: "/elon-companies#neuralink",
  },
  {
    id: "boring",
    name: "The Boring Company",
    description: "Constructing transportation tunnels to alleviate urban congestion.",
    image: "/images/elon/boring.jpg",
    link: "/elon-companies#boring",
  },
]

const CompaniesOverview = () => {
  return (
    <div className="py-16 bg-grey-5" id="companies">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-grey-90">
            Visionary Companies
          </Heading>
          <Text className="text-grey-60 max-w-2xl">
            Elon Musk has founded and led multiple groundbreaking companies across various industries, each pushing the boundaries of innovation.
          </Text>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <LocalizedClientLink href={company.link} key={company.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-200 transform group-hover:shadow-xl group-hover:translate-y-[-5px]">
                <div className="relative h-48 w-full">
                  <Image 
                    src={company.image} 
                    alt={company.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <Heading level="h3" className="text-xl font-bold mb-2 text-grey-90 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </Heading>
                  <Text className="text-grey-60">
                    {company.description}
                  </Text>
                </div>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompaniesOverview
