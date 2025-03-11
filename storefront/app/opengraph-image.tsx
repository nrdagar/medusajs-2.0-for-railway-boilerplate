import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = "JBS Builder Lic Dumpster Rental Services - NYC's Premier Waste Management Solution"
export const size = {
  width: 1200,
  height: 630,
}
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          JBS Builder Lic
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#666',
            textAlign: 'center',
          }}
        >
          NYC's Premier Dumpster Rental Service
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    }
  )
}
