"use client"

import { Heading, Text, Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const timelineEvents = [
  {
    year: "1971",
    title: "Birth in Pretoria",
    description: "Born in Pretoria, South Africa on June 28, 1971."
  },
  {
    year: "1995",
    title: "First Company: Zip2",
    description: "Co-founded Zip2, a city guide software for newspapers."
  },
  {
    year: "2002",
    title: "SpaceX Founding",
    description: "Founded Space Exploration Technologies (SpaceX) to reduce space transportation costs."
  },
  {
    year: "2004",
    title: "Tesla Investment",
    description: "Joined Tesla Motors as chairman and product architect, later becoming CEO."
  },
  {
    year: "2016",
    title: "Neuralink & The Boring Company",
    description: "Founded Neuralink (neurotechnology) and The Boring Company (tunnel construction)."
  }
]

const TimelineSummary = () => {
  return (
    <div className="py-16 bg-white" id="timeline">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-grey-90">
            Life & Career Timeline
          </Heading>
          <Text className="text-grey-60 max-w-2xl">
            Key milestones in Elon Musk's entrepreneurial journey and life.
          </Text>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 md:pl-0 pl-12 relative mb-4 md:mb-0">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-10">
                    <span className="font-bold">{event.year}</span>
                  </div>
                  {/* Mobile vertical line */}
                  <div className="absolute left-0 top-8 h-full w-1 bg-blue-100 md:hidden"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:pr-0 pr-12 text-left">
                  <div className="bg-grey-5 p-6 rounded-lg shadow-md">
                    <Heading level="h3" className="text-xl font-bold mb-2 text-grey-90">
                      {event.title}
                    </Heading>
                    <Text className="text-grey-60">
                      {event.description}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md" asChild>
            <LocalizedClientLink href="/elon-timeline">
              View Complete Timeline
            </LocalizedClientLink>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TimelineSummary
