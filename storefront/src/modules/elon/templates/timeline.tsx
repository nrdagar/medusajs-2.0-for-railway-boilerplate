"use client"

import { Heading, Text } from "@medusajs/ui"
import React from "react"
import Image from "next/image"

const timelineEvents = [
  {
    year: "1971",
    title: "Birth in Pretoria",
    description: "Elon Reeve Musk was born on June 28, 1971, in Pretoria, South Africa.",
    category: "Personal"
  },
  {
    year: "1983",
    title: "First Computer Program",
    description: "At age 12, Musk sold his first software, a space game called Blastar, for approximately $500.",
    category: "Technology"
  },
  {
    year: "1989",
    title: "Moved to Canada",
    description: "At age 17, Musk moved to Canada to attend Queen's University and avoid mandatory service in the South African military.",
    category: "Personal"
  },
  {
    year: "1992",
    title: "University Education",
    description: "Transferred to the University of Pennsylvania, where he earned bachelor's degrees in physics and economics.",
    category: "Education"
  },
  {
    year: "1995",
    title: "Founded Zip2",
    description: "Co-founded Zip2, a company providing business directories and maps for newspapers.",
    category: "Business"
  },
  {
    year: "1999",
    title: "Zip2 Acquisition",
    description: "Compaq acquired Zip2 for nearly $300 million. Musk received $22 million for his 7% share.",
    category: "Business"
  },
  {
    year: "1999",
    title: "Founded X.com",
    description: "Founded X.com, an online financial services and payment company.",
    category: "Business"
  },
  {
    year: "2000",
    title: "X.com Merged with Confinity",
    description: "X.com merged with Confinity, which had a money transfer service called PayPal.",
    category: "Business"
  },
  {
    year: "2001",
    title: "X.com Renamed PayPal",
    description: "X.com was renamed PayPal, focusing on the money transfer service.",
    category: "Business"
  },
  {
    year: "2002",
    title: "PayPal Acquisition",
    description: "eBay acquired PayPal for $1.5 billion. Musk, the largest shareholder, received $165 million.",
    category: "Business"
  },
  {
    year: "2002",
    title: "Founded SpaceX",
    description: "Founded Space Exploration Technologies (SpaceX) with the goal of reducing space transportation costs and enabling Mars colonization.",
    category: "Business"
  },
  {
    year: "2004",
    title: "Joined Tesla Motors",
    description: "Joined Tesla Motors as chairman and product architect, investing $6.5 million in the company.",
    category: "Business"
  },
  {
    year: "2006",
    title: "SolarCity Founded",
    description: "Helped his cousins start SolarCity, a solar energy services company (later acquired by Tesla).",
    category: "Business"
  },
  {
    year: "2008",
    title: "Became Tesla CEO",
    description: "Assumed the role of CEO at Tesla Motors while remaining product architect.",
    category: "Business"
  },
  {
    year: "2008",
    title: "SpaceX Falcon 1 Success",
    description: "SpaceX's Falcon 1 became the first privately developed liquid-fuel rocket to reach orbit.",
    category: "Achievement"
  },
  {
    year: "2010",
    title: "Tesla IPO",
    description: "Tesla Motors launched its initial public offering on NASDAQ, raising $226 million.",
    category: "Business"
  },
  {
    year: "2012",
    title: "SpaceX Dragon Success",
    description: "SpaceX's Dragon spacecraft became the first commercial vehicle to deliver cargo to the International Space Station.",
    category: "Achievement"
  },
  {
    year: "2015",
    title: "Tesla Energy Launch",
    description: "Launched Tesla Energy, a suite of batteries for homes, businesses, and utilities.",
    category: "Business"
  },
  {
    year: "2016",
    title: "Founded Neuralink",
    description: "Co-founded Neuralink, a neurotechnology company developing implantable brain–machine interfaces.",
    category: "Business"
  },
  {
    year: "2016",
    title: "Founded The Boring Company",
    description: "Founded The Boring Company to construct tunnels to reduce urban traffic congestion.",
    category: "Business"
  },
  {
    year: "2017",
    title: "Tesla Model 3 Launch",
    description: "Tesla began production of the Model 3, its first mass-market electric vehicle.",
    category: "Business"
  },
  {
    year: "2018",
    title: "SpaceX Falcon Heavy Launch",
    description: "SpaceX successfully launched the Falcon Heavy, the most powerful operational rocket in the world.",
    category: "Achievement"
  },
  {
    year: "2020",
    title: "SpaceX Crew Dragon Success",
    description: "SpaceX's Crew Dragon became the first private spacecraft to carry astronauts to the International Space Station.",
    category: "Achievement"
  },
  {
    year: "2021",
    title: "Time Person of the Year",
    description: "Named Time magazine's Person of the Year.",
    category: "Achievement"
  },
  {
    year: "2022",
    title: "Twitter Acquisition",
    description: "Acquired Twitter (now X) for approximately $44 billion.",
    category: "Business"
  }
]

const TimelineTemplate = () => {
  const [filter, setFilter] = React.useState("All")
  const categories = ["All", "Personal", "Education", "Business", "Achievement", "Technology"]
  
  const filteredEvents = filter === "All" 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === filter)
  
  return (
    <>
      {/* Hero Section - Commented out due to persistent parsing error 
      <div className="h-[50vh] w-full border-b border-ui-border-base relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/elon/timeline-hero.jpg"
            alt="Elon Musk Timeline"
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
              Elon Musk Timeline
            </Heading>
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-white/90 font-normal mb-6 drop-shadow-lg"
            >
              A Chronological Journey Through His Life & Achievements
            </Heading>
          </span>
        </div>
      </div>
      */}
      {/* Timeline Section */}
      <div className="py-16 bg-white">
        <div className="content-container">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-grey-10 text-grey-70 hover:bg-grey-20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform md:translate-x-[-0.5px]"></div>
            
            <div className="space-y-12">
              {filteredEvents.map((event, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start`}>
                  <div className="md:w-1/2 flex md:justify-end md:pr-12 md:pl-0 pl-12 relative mb-4 md:mb-0">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg absolute left-0 md:static z-10">
                      <span className="font-bold text-sm">{event.year}</span>
                    </div>
                    {index % 2 === 0 ? null : (
                      <div className="hidden md:block text-left">
                        <div className={`bg-grey-5 p-6 rounded-lg shadow-md border-l-4 ${
                          event.category === 'Personal' ? 'border-purple-500' :
                          event.category === 'Education' ? 'border-green-500' :
                          event.category === 'Business' ? 'border-blue-500' :
                          event.category === 'Achievement' ? 'border-orange-500' :
                          'border-red-500' // Technology
                        }`}>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${
                            event.category === 'Personal' ? 'bg-purple-100 text-purple-800' :
                            event.category === 'Education' ? 'bg-green-100 text-green-800' :
                            event.category === 'Business' ? 'bg-blue-100 text-blue-800' :
                            event.category === 'Achievement' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800' // Technology
                          }`}>
                            {event.category}
                          </span>
                          <Heading level="h3" className="text-xl font-bold mb-2 text-grey-90">
                            {event.title}
                          </Heading>
                          <Text className="text-grey-60">
                            {event.description}
                          </Text>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:pr-0 pr-0 text-left">
                    {index % 2 === 0 ? (
                      <div className={`bg-grey-5 p-6 rounded-lg shadow-md border-l-4 ${
                        event.category === 'Personal' ? 'border-purple-500' :
                        event.category === 'Education' ? 'border-green-500' :
                        event.category === 'Business' ? 'border-blue-500' :
                        event.category === 'Achievement' ? 'border-orange-500' :
                        'border-red-500' // Technology
                      }`}>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${
                          event.category === 'Personal' ? 'bg-purple-100 text-purple-800' :
                          event.category === 'Education' ? 'bg-green-100 text-green-800' :
                          event.category === 'Business' ? 'bg-blue-100 text-blue-800' :
                          event.category === 'Achievement' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800' // Technology
                        }`}>
                          {event.category}
                        </span>
                        <Heading level="h3" className="text-xl font-bold mb-2 text-grey-90">
                          {event.title}
                        </Heading>
                        <Text className="text-grey-60">
                          {event.description}
                        </Text>
                      </div>
                    ) : (
                      <div className="md:hidden">
                        <div className={`bg-grey-5 p-6 rounded-lg shadow-md border-l-4 ${
                          event.category === 'Personal' ? 'border-purple-500' :
                          event.category === 'Education' ? 'border-green-500' :
                          event.category === 'Business' ? 'border-blue-500' :
                          event.category === 'Achievement' ? 'border-orange-500' :
                          'border-red-500' // Technology
                        }`}>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${
                            event.category === 'Personal' ? 'bg-purple-100 text-purple-800' :
                            event.category === 'Education' ? 'bg-green-100 text-green-800' :
                            event.category === 'Business' ? 'bg-blue-100 text-blue-800' :
                            event.category === 'Achievement' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800' // Technology
                          }`}>
                            {event.category}
                          </span>
                          <Heading level="h3" className="text-xl font-bold mb-2 text-grey-90">
                            {event.title}
                          </Heading>
                          <Text className="text-grey-60">
                            {event.description}
                          </Text>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimelineTemplate
