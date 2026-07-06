/**
 * CockroachIAS — UPSC World Atlas
 * GET /api/atlas/eonet
 *
 * Proxies NASA EONET (free, public, keyless) with a 20-minute server cache.
 * No API key, no separate backend — this runs as a Next.js route handler.
 *
 * Query params:
 *   ?status=open|closed|all   (default: open)
 *   ?days=N                   (default: 60)
 *   ?force=1                  (bypass cache)
 */
import { NextResponse } from 'next/server'
import { getEonetHotspots } from '@/lib/atlas/eonet'

export const dynamic = 'force-dynamic'
export const revalidate = 1200 // 20 min

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = (searchParams.get('status') as 'open' | 'closed' | 'all') || 'open'
  const days = Math.min(Math.max(Number(searchParams.get('days')) || 60, 1), 365)
  const force = searchParams.get('force') === '1'

  const data = await getEonetHotspots({ status, days, force })

  return NextResponse.json(
    { count: data.length, hotspots: data, cached: !force },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=3600',
      },
    }
  )
}
