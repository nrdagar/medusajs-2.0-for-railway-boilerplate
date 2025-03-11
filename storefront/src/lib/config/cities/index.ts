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
  // Check each city's zip codes array
  for (const cityId of Object.keys(CITIES) as CityId[]) {
    const city = CITIES[cityId]
    if (city.zipCodes.includes(pincode)) {
      return city
    }
  }
  
  // Fallback to the simplified implementation for backward compatibility
  if (pincode.startsWith("1")) return CITIES.queens
  if (pincode.startsWith("2")) return CITIES.manhattan
  if (pincode.startsWith("3")) return CITIES.brooklyn
  if (pincode.startsWith("4")) return CITIES.bronx
  
  return undefined
}
