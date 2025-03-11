import { CityConfig } from "../../types/city"

const bronxConfig: CityConfig = {
  id: "bronx",
  name: "Bronx",
  phoneNumber: "718-555-9012",
  description: "Prompt delivery and excellent customer service guaranteed",
  icon: "/icons/bronx.svg",
  slug: "bronx-ny",
  fullName: "Bronx, NY",
  metaDescription: "Professional dumpster rental in Bronx, NY. Prompt delivery and excellent customer service guaranteed. Serving all Bronx neighborhoods.",
  heroTitle: "Dumpster Rental in Bronx, NY",
  heroSubtitle: "Reliable and Professional Waste Removal Services",
  acceptedMaterials: [
    "Residential waste",
    "Construction debris",
    "Garden waste",
    "Furniture removal",
    "Renovation materials",
    "Commercial waste"
  ],
  prohibitedMaterials: [
    "Hazardous waste",
    "Chemical products",
    "Paint materials",
    "Motor oil",
    "Propane tanks",
    "Contaminated soil"
  ],
  zipCodes: ["10451", "10452", "10453", "10454", "10455", "10456", "10457", "10458", "10459", "10460"],
  mapImageUrl: "/images/bronx-map.jpg",
  neighborhoods: ["Riverdale", "Pelham Bay", "Throgs Neck", "Fordham", "Morris Park", "Mott Haven", "Kingsbridge"]
}

export default bronxConfig
