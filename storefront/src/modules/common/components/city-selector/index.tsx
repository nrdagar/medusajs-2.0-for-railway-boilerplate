"use client"

import React, { useState } from "react"
import Modal from "../modal"
import { Button, Text } from "@medusajs/ui"
import { useCity } from "@lib/context/city-context"
import { CityId } from "@lib/types/city"
import Image from "next/image"
import { CITIES } from "@lib/config/cities"

const CitySelector = () => {
  const { showCitySelector, closeCitySelector, setSelectedCity } = useCity()
  const [pincode, setPincode] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handlePincodeSubmit = () => {
    if (!pincode || pincode.length < 5) {
      setError("Please enter a valid pincode")
      return
    }
    
    // In a real app, you would validate the pincode against a database
    // For now, we'll just check if it starts with a certain digit
    if (pincode.startsWith("1")) {
      setSelectedCity("queens")
    } else if (pincode.startsWith("2")) {
      setSelectedCity("manhattan")
    } else if (pincode.startsWith("3")) {
      setSelectedCity("brooklyn")
    } else if (pincode.startsWith("4")) {
      setSelectedCity("bronx")
    } else {
      setError("Sorry, we don't service this area yet")
    }
  }

  return (
    <Modal isOpen={showCitySelector} close={closeCitySelector} size="medium">
      <Modal.Title>Enter Your Pincode</Modal.Title>
      <Modal.Body>
        <div className="flex flex-col items-center py-4 w-full">
          <Text className="text-center mb-6">
            Please enter your pincode or select your city to get location-specific information and services.
          </Text>
          
          <div className="w-full mb-8">
            <div className="flex gap-2">
              <input
                type="text"
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value)
                  setError(null)
                }}
                placeholder="Enter your pincode"
                className="flex-1 p-2 border border-gray-200 rounded"
                maxLength={5}
              />
              <Button 
                variant="primary" 
                className="bg-orange-500 hover:bg-orange-600"
                onClick={handlePincodeSubmit}
              >
                Submit
              </Button>
            </div>
            {error && (
              <Text className="text-red-500 mt-2 text-sm">{error}</Text>
            )}
          </div>

          <div className="w-full">
            <Text className="text-center mb-4">Or select your city</Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(CITIES).map(([id, city]) => (
                <Button 
                  key={id}
                  variant="secondary"
                  className="border border-gray-200 rounded p-4 flex items-center cursor-pointer hover:bg-gray-50 w-full"
                  onClick={() => setSelectedCity(id as CityId)}
                >
                  <div className="w-12 h-12 mr-4 bg-grey-5 rounded-full flex items-center justify-center">
                    <Image src={city.icon} width={32} height={32} alt={city.name} />
                  </div>
                  <div>
                    <Text className="text-lg font-semibold">
                      {city.name}
                    </Text>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default React.memo(CitySelector)
