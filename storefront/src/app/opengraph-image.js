import { join } from 'path'
import { readFileSync } from 'fs'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/svg+xml'

export default function Image() {
  const imageData = readFileSync(join(process.cwd(), 'public', 'opengraph-image.svg'))
  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}
