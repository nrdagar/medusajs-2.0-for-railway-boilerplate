"use client"

import React, { createContext, useContext, useEffect } from "react"
import useLocalStorage from "../hooks/use-local-storage"
import { CityConfig, CityId } from "../types/city"
import { CITIES, DEFAULT_CITY } from "../config/cities"
import useToggleState from "../hooks/use-toggle-state"

interface CityContext {
  selectedCity: CityConfig
  setSelectedCity: (city: CityId) => void
  showCitySelector: boolean
  openCitySelector: () => void
  closeCitySelector: () => void
  isFirstVisit: boolean
  setIsFirstVisit: (value: boolean) => void
}

const CityContext = createContext<CityContext | null>(null)

export const CityProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [selectedCityId, setSelectedCityId] = useLocalStorage<CityId>("selectedCity", DEFAULT_CITY)
  const [isFirstVisit, setIsFirstVisit] = useLocalStorage<boolean>("isFirstVisit", true)
  const [showCitySelector, openCitySelector, closeCitySelector] = useToggleState(false)
  
  // Removed automatic city selector on first visit
  // User will now use the zip code search on the landing page

  const setSelectedCity = (cityId: CityId) => {
    setSelectedCityId(cityId)
    if (isFirstVisit) {
      setIsFirstVisit(false)
    }
    closeCitySelector()
  }

  return (
    <CityContext.Provider
      value={{
        selectedCity: CITIES[selectedCityId],
        setSelectedCity,
        showCitySelector,
        openCitySelector,
        closeCitySelector,
        isFirstVisit,
        setIsFirstVisit
      }}
    >
      {children}
    </CityContext.Provider>
  )
}

export const useCity = () => {
  const context = useContext(CityContext)
  if (context === null) {
    throw new Error("useCity must be used within a CityProvider")
  }
  return context
}
