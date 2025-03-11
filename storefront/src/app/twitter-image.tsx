import { ImageResponse } from 'next/server'
import { STORE_NAME } from "../lib/constants"
import React from 'react'
 
export const runtime = 'edge'
export const alt = "JBS Builder Lic Dumpster Rental Services - NYC's Premier Waste Management Solution"
export const size = {
  width: 1200,
  height: 630,
}
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '40px',
        }}
      >
        <img
          src="/images/dumpster.jpg"
          alt="Dumpster"
          style={{
            width: '60%',
            height: 'auto',
            marginBottom: '40px',
          }}
        />
        <div style={{ textAlign: 'center', color: '#1a1a1a', marginBottom: '20px' }}>
          {STORE_NAME}
        </div>
        <div style={{ fontSize: '24px', color: '#666', textAlign: 'center' }}>
          NYC's Premier Dumpster Rental Service
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
