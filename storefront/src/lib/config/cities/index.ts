import { CityConfig, CityId } from "../../types/city"
import queensConfig from "./queens"
import manhattanConfig from "./manhattan"
import brooklynConfig from "./brooklyn"
import bronxConfig from "./bronx"

export const CITIES: Record<CityId, CityConfig> = {
  queens: queensConfig,
  manhattan: manhattanConfig,
  brooklyn: brooklynConfig,
  bronx: bronxConfig,
}

export const DEFAULT_CITY: CityId = "queens"

export const getCityByName = (name: string): CityConfig | undefined => {
  const cityId = Object.keys(CITIES).find(
    (id) => CITIES[id as CityId].name.toLowerCase() === name.toLowerCase()
  ) as CityId | undefined
  
  return cityId ? CITIES[cityId] : undefined
}

export const getCityByPincode = (pincode: string): CityConfig | undefined => {
  // This is a simplified implementation
  // In a real app, you would have a mapping of pincodes to cities
  // For now, we'll just check if the pincode starts with a certain digit
  if (pincode.startsWith("1")) return CITIES.queens
  if (pincode.startsWith("2")) return CITIES.manhattan
  if (pincode.startsWith("3")) return CITIES.brooklyn
  if (pincode.startsWith("4")) return CITIES.bronx
  
  return undefined
}
