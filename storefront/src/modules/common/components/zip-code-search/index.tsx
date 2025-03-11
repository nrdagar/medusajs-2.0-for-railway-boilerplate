"use client"

import React, { useState } from "react"
import { Button, Text } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import { CITIES } from "../../../../lib/config/cities"
import { useCity } from "../../../../lib/context/city-context"
import { CityId } from "../../../../lib/types/city"

type ZipCodeSearchProps = {
  className?: string
  buttonText?: string
  placeholder?: string
  onZipCodeSubmit?: (zipCode: string) => void
}

const ZipCodeSearch: React.FC<ZipCodeSearchProps> = ({
  className = "",
  buttonText = "Search",
  placeholder = "Enter your ZIP code",
  onZipCodeSubmit,
}) => {
  const [zipCode, setZipCode] = useState("")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { setSelectedCity } = useCity()

  const validateZipCode = (zipCode: string) => {
    // Check each city's zip codes
    for (const [cityId, city] of Object.entries(CITIES)) {
      if (city.zipCodes.includes(zipCode)) {
        setSelectedCity(cityId as CityId)
        return city
      }
    }
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!zipCode || zipCode.length < 5) {
      setError("Please enter a valid ZIP code")
      return
    }

    const city = validateZipCode(zipCode)
    
    if (city) {
      if (onZipCodeSubmit) {
        onZipCodeSubmit(zipCode)
      } else {
        // Redirect to service area page
        router.push(`/service-area/${city.slug}`)
      }
    } else {
      setError("Sorry, we don't service this area yet")
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={zipCode}
            onChange={(e) => {
              setZipCode(e.target.value)
              setError(null)
            }}
            placeholder={placeholder}
            className="flex-1 p-4 border-2 border-gray-200 rounded-lg text-lg font-medium focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all"
            maxLength={5}
          />
          <Button 
            type="submit"
            variant="primary" 
            className="bg-orange-600 hover:bg-orange-700 px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:translate-y-[-2px]"
          >
            {buttonText}
          </Button>
        </div>
        {error && (
          <Text className="text-red-500 mt-1 text-sm">{error}</Text>
        )}
      </form>
    </div>
  )
}

export default ZipCodeSearch
