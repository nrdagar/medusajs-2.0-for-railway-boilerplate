"use client"

import { Heading, Text } from "@medusajs/ui"

const achievements = [
  {
    id: "electric-revolution",
    title: "Electric Vehicle Revolution",
    description: "Transformed the automotive industry by making electric vehicles desirable, practical, and increasingly affordable.",
    icon: "⚡",
  },
  {
    id: "reusable-rockets",
    title: "Reusable Rocket Technology",
    description: "Pioneered the development and landing of orbital-class reusable rockets, drastically reducing the cost of space access.",
    icon: "🚀",
  },
  {
    id: "global-internet",
    title: "Starlink Global Internet",
    description: "Creating a constellation of satellites to provide high-speed internet access globally, including remote areas.",
    icon: "🌐",
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Solutions",
    description: "Advanced solar energy and battery technology through Tesla Energy, offering sustainable power solutions for homes and businesses.",
    icon: "☀️",
  },
  {
    id: "brain-interface",
    title: "Brain-Computer Interfaces",
    description: "Developing revolutionary neural technology through Neuralink to address brain and spinal cord injuries and enhance human capabilities.",
    icon: "🧠",
  },
  {
    id: "transportation",
    title: "Underground Transportation",
    description: "Creating tunnel networks through The Boring Company to revolutionize urban transportation and reduce traffic congestion.",
    icon: "🚇",
  },
]

const AchievementsSection = () => {
  return (
    <div className="py-16 bg-white" id="achievements">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12">
          <Heading level="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-grey-90">
            Revolutionary Achievements
          </Heading>
          <Text className="text-grey-60 max-w-2xl">
            Groundbreaking innovations and accomplishments that are reshaping multiple industries and our future.
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-grey-5 p-8 rounded-lg hover:shadow-md transition-all duration-200">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <Heading level="h3" className="text-xl font-bold mb-3 text-grey-90">
                {achievement.title}
              </Heading>
              <Text className="text-grey-60">
                {achievement.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AchievementsSection
