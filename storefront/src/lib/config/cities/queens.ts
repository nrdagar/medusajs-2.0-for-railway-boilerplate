import { CityConfig } from "../../types/city"

const queensConfig: CityConfig = {
  id: "queens",
  name: "Queens",
  phoneNumber: "516-515-1951",
  description: "Same-day service available with flexible scheduling and competitive rates",
  icon: "/icons/queens.svg",
  slug: "queens-ny",
  fullName: "Queens, NY",
  metaDescription: "Affordable dumpster rental in Queens, NY. Same-day delivery available with flexible scheduling and competitive rates. Serving all Queens neighborhoods.",
  heroTitle: "Dumpster Rental in Queens, NY",
  heroSubtitle: "Fast, Reliable, and Affordable Waste Management Solutions",
  acceptedMaterials: [
    "Household junk",
    "Furniture",
    "Appliances",
    "Construction debris",
    "Yard waste",
    "Renovation materials"
  ],
  prohibitedMaterials: [
    "Hazardous waste",
    "Paint",
    "Oil",
    "Batteries",
    "Tires",
    "Electronics"
  ],
  zipCodes: ["11361", "11362", "11363", "11364", "11354", "11355", "11356", "11357", "11358", "11359", "11360"],
  mapImageUrl: "/images/queens-map.jpg",
  neighborhoods: ["Astoria", "Long Island City", "Flushing", "Jamaica", "Forest Hills", "Bayside", "Ridgewood"]
}

export default queensConfig
