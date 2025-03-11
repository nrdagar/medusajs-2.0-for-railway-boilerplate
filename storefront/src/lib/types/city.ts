export interface CityConfig {
  id: string
  name: string
  phoneNumber: string
  description: string
  icon: string
  slug: string
  fullName: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  acceptedMaterials: string[]
  prohibitedMaterials: string[]
  zipCodes: string[]
  mapImageUrl: string
  neighborhoods: string[]
}

export type CityId = "queens" | "manhattan" | "brooklyn" | "bronx"
