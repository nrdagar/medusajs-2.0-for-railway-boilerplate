"use client"

import React from "react"
import Modal from "../../../../modules/common/components/modal"
import { Button, Heading, Text } from "@medusajs/ui"
// Removed @medusajs/icons import since it's not available
import { useCity } from "../../../../lib/context/city-context"

const PhonePopup = ({
  isOpen,
  close,
}: {
  isOpen: boolean
  close: () => void
}) => {
  const { selectedCity } = useCity()
  const phoneNumber = selectedCity.phoneNumber.replace(/-/g, "")
  
  return (
    <Modal isOpen={isOpen} close={close}>
      <Modal.Title>Contact Us to Book Your Dumpster</Modal.Title>
      <Modal.Body>
        <div className="flex flex-col items-center py-4">
          <div className="w-12 h-12 text-orange-500 mb-4">📞</div>
          <Text className="text-center mb-2">
            Call us now to book your dumpster rental in {selectedCity.name}:
          </Text>
          <Heading level="h2" className="text-2xl font-bold text-orange-500 mb-6">
            {selectedCity.phoneNumber}
          </Heading>
          <Text className="text-center text-grey-60 text-sm">
            Our team is ready to assist you with your waste management needs.
          </Text>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          onClick={() => {
            window.location.href = `tel:${phoneNumber}`
          }}
        >
          Call Now
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PhonePopup
