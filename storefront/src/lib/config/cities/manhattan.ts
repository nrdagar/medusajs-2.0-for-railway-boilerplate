import { CityConfig } from "../../types/city"

const manhattanConfig: CityConfig = {
  id: "manhattan",
  name: "Manhattan",
  phoneNumber: "212-555-1234",
  description: "Fast delivery and pickup with special solutions for tight spaces",
  icon: "/icons/manhattan.svg",
  slug: "manhattan-ny",
  fullName: "Manhattan, NY",
  metaDescription: "Professional dumpster rental in Manhattan, NY. Fast delivery and pickup with special solutions for tight spaces. Serving all Manhattan neighborhoods.",
  heroTitle: "Dumpster Rental in Manhattan, NY",
  heroSubtitle: "Expert Waste Management Solutions for Urban Projects",
  acceptedMaterials: [
    "Construction debris",
    "Renovation waste",
    "Office cleanouts",
    "Residential junk",
    "Commercial waste",
    "Event cleanup"
  ],
  prohibitedMaterials: [
    "Hazardous materials",
    "Chemical waste",
    "Paint cans",
    "Automotive fluids",
    "Asbestos",
    "Medical waste"
  ],
  zipCodes: ["10001", "10002", "10003", "10004", "10005", "10006", "10007", "10009", "10010", "10011", "10012"],
  mapImageUrl: "/images/manhattan-map.jpg",
  neighborhoods: ["Upper East Side", "Upper West Side", "Midtown", "Chelsea", "Greenwich Village", "Financial District", "Harlem"]
}

export default manhattanConfig
