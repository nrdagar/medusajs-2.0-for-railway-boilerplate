"use client"

import { useState, useEffect } from "react"

/**
 * A hook to manage localStorage values
 * @param key - The localStorage key
 * @param initialValue - The initial value
 * @returns A stateful value and a function to update it
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // After hydration, sync with localStorage
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue))
      }
    } catch (error) {
      console.error(error)
    }
  }, [key, initialValue])

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
