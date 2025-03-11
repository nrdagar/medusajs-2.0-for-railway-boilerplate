"use client"

import "styles/globals.css"
import { CityProvider } from "@lib/context/city-context"
import { metadata } from "./metadata"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <CityProvider>
          <main className="relative">{props.children}</main>
        </CityProvider>
      </body>
    </html>
  )
}
