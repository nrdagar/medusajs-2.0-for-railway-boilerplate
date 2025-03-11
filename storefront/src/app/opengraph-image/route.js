export const runtime = 'nodejs'

export async function GET() {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white"/>
    <text x="50%" y="40%" text-anchor="middle" font-family="Arial" font-size="48" fill="#1a1a1a">JBS Builder Lic</text>
    <text x="50%" y="60%" text-anchor="middle" font-family="Arial" font-size="24" fill="#666">NYC's Premier Dumpster Rental Service</text>
  </svg>`

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}
