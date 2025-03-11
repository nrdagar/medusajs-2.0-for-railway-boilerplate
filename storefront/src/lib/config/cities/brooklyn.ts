import { CityConfig } from "../../types/city"

const brooklynConfig: CityConfig = {
  id: "brooklyn",
  name: "Brooklyn",
  phoneNumber: "718-555-5678",
  description: "Reliable service with multiple dumpster size options",
  icon: "/icons/brooklyn.svg",
  slug: "brooklyn-ny",
  fullName: "Brooklyn, NY",
  metaDescription: "Reliable dumpster rental in Brooklyn, NY. Multiple dumpster sizes available with competitive rates. Serving all Brooklyn neighborhoods.",
  heroTitle: "Dumpster Rental in Brooklyn, NY",
  heroSubtitle: "Flexible Solutions for All Your Waste Management Needs",
  acceptedMaterials: [
    "Home renovation debris",
    "Yard waste",
    "Furniture disposal",
    "Construction materials",
    "Business cleanouts",
    "Moving waste"
  ],
  prohibitedMaterials: [
    "Toxic materials",
    "Liquid waste",
    "Paint products",
    "Car batteries",
    "Pesticides",
    "Fluorescent tubes"
  ],
  zipCodes: ["11201", "11203", "11204", "11205", "11206", "11207", "11208", "11209", "11210", "11211", "11212"],
  mapImageUrl: "/images/brooklyn-map.jpg",
  neighborhoods: ["Williamsburg", "DUMBO", "Park Slope", "Brooklyn Heights", "Bushwick", "Bedford-Stuyvesant", "Crown Heights"]
}

export default brooklynConfig
