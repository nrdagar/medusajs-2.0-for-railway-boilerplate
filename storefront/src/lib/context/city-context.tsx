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
}

const CityContext = createContext<CityContext | null>(null)

export const CityProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [selectedCityId, setSelectedCityId] = useLocalStorage<CityId>("selectedCity", DEFAULT_CITY)
  const [isFirstVisit, setIsFirstVisit] = useLocalStorage<boolean>("isFirstVisit", true)
  const [showCitySelector, openCitySelector, closeCitySelector] = useToggleState(false)
  
  // Show city selector on first visit and handle closing
  useEffect(() => {
    console.log('First Visit Effect:', { isFirstVisit, showCitySelector })
    if (isFirstVisit) {
      console.log('Opening city selector...')
      openCitySelector()
    }
  }, [isFirstVisit, openCitySelector, showCitySelector])

  // Update first visit status when modal is closed
  useEffect(() => {
    console.log('Modal Close Effect:', { showCitySelector, isFirstVisit })
    if (!showCitySelector && isFirstVisit) {
      console.log('Setting first visit to false')
      setIsFirstVisit(false)
    }
  }, [showCitySelector, isFirstVisit, setIsFirstVisit])

  const setSelectedCity = (cityId: CityId) => {
    console.log('Setting selected city:', cityId)
    setSelectedCityId(cityId)
    if (isFirstVisit) {
      console.log('Setting first visit to false after city selection')
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
        isFirstVisit
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
