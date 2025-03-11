import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
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
        <div style={{ textAlign: 'center', color: '#1a1a1a', marginBottom: '20px' }}>
          JBS Builder Lic
        </div>
        <div style={{ fontSize: '24px', color: '#666', textAlign: 'center' }}>
          NYC's Premier Dumpster Rental Service
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
