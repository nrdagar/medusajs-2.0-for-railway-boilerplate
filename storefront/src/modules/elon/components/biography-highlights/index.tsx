"use client"

import { Heading, Text } from "@medusajs/ui"

const BiographyHighlights = () => {
  return (
    <div className="py-16 bg-white">
      <div className="content-container">
        <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-8 text-center text-grey-90">
          Biography Highlights
        </Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-2xl font-bold">1971</span>
            </div>
            <Heading level="h3" className="mb-2 text-xl font-semibold">Early Life</Heading>
            <Text className="text-grey-60">
              Born in Pretoria, South Africa, Elon showed an early interest in computing and entrepreneurship, creating and selling a video game by the age of 12.
            </Text>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-2xl font-bold">1995</span>
            </div>
            <Heading level="h3" className="mb-2 text-xl font-semibold">Early Ventures</Heading>
            <Text className="text-grey-60">
              After studying at the University of Pennsylvania, Elon co-founded Zip2, which was acquired for nearly $300 million, followed by X.com which later became PayPal.
            </Text>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-2xl font-bold">2002+</span>
            </div>
            <Heading level="h3" className="mb-2 text-xl font-semibold">Vision & Impact</Heading>
            <Text className="text-grey-60">
              Founded SpaceX in 2002 and became CEO of Tesla in 2008, revolutionizing space travel and electric vehicles while pursuing goals of sustainable energy and making humanity multiplanetary.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BiographyHighlights
