import { Heading, Text } from "@medusajs/ui"
import React from "react"
import Image from "next/image"

const UseCases = () => {
  const cases = [
    { id: 1, title: "Fire & Water Restoration", icon: "/icons/fire-water.svg" },
    { id: 2, title: "Commercial Construction", icon: "/icons/construction.svg" },
    { id: 3, title: "Demolitions", icon: "/icons/demolition.svg" },
    { id: 4, title: "Moving", icon: "/icons/moving.svg" },
    { id: 5, title: "Basement Purge", icon: "/icons/basement.svg" },
    { id: 6, title: "Roofing Tear off", icon: "/icons/roofing.svg" },
    { id: 7, title: "Remodeling", icon: "/icons/remodeling.svg" },
    { id: 8, title: "Downsizing", icon: "/icons/downsizing.svg" },
    { id: 9, title: "Garage Cleanouts", icon: "/icons/garage.svg" },
    { id: 10, title: "Estate Cleanouts", icon: "/icons/estate.svg" }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 px-4">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 text-grey-90">
            Our Dumpster Rental Services Are Great For...
          </Heading>
          <Text className="text-grey-60 max-w-2xl text-base sm:text-lg">
            Whatever your project, we have the right dumpster size to handle your waste removal needs.
          </Text>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 px-4 sm:px-0">
          {cases.map((useCase) => (
            <div key={useCase.id} className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:translate-y-[-5px] border border-grey-20">
              <div className="w-18 h-18 mb-5 sm:mb-6 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <Image src={useCase.icon} width={36} height={36} alt={useCase.title} className="text-white" />
              </div>
              <Heading level="h3" className="text-center text-grey-90 text-base sm:text-lg font-semibold">
                {useCase.title}
              </Heading>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UseCases
