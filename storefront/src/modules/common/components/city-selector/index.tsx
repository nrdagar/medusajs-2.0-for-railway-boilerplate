"use client"

import React, { useState } from "react"
import Modal from "../modal"
import { Button, Text } from "@medusajs/ui"
import { useCity } from "@lib/context/city-context"
import { CityId } from "@lib/types/city"

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
            Please enter your pincode to get location-specific information and services.
          </Text>
          
          <div className="w-full">
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
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CitySelector
