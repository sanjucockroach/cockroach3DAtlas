'use client'

/**
 * CockroachIAS — UPSC World Atlas — 3D Globe
 *
 * Visual spec (per CTO):
 *   - Background: pure white
 *   - World map (land): pure black
 *   - Country boundaries: white hairlines (demarcation)
 *   - Markings: red / blue / green (by layer family)
 *   - Live EONET events: pulsing red rings
 *
 * Uses react-globe.gl (three.js). WebGL — browser only (ssr:false via dynamic import).
 */
import { useEffect, useMemo, useRef, useState } from 'react'
import Globe, { type GlobeMethods } from 'react-globe.gl'
import * as THREE from 'three'
import { useAtlasStore, colorOf } from '@/store/atlas'
import type { AtlasHotspot } from '@/lib/atlas/types'

interface Props {
  hotspots: AtlasHotspot[]
  loading?: boolean
}

export default function WorldGlobe({ hotspots, loading }: Props) {
  const globeEl = useRef<GlobeMethods | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState({ w: 800, h: 600 })
  const [countries, setCountries] = useState<any[] | null>(null)

  const selectedId = useAtlasStore((s) => s.selectedId)
  const select = useAtlasStore((s) => s.select)
  const flyTo = useAtlasStore((s) => s.flyTo)
  const clearFlyTo = useAtlasStore((s) => s.clearFlyTo)

  // measure container
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect
      setSize({ w: Math.max(r.width, 320), h: Math.max(r.height, 320) })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // load country boundaries (local, no external dependency at runtime)
  useEffect(() => {
    fetch('/geo/countries.geojson')
      .then((r) => r.json())
      .then((d) => setCountries(d.features ?? []))
      .catch(() => setCountries([]))
  }, [])

  // init camera + controls + material
  useEffect(() => {
    const g = globeEl.current
    if (!g) return
    // white sphere so ocean merges with the white page
    const mat = new THREE.MeshPhongMaterial({
      color: new THREE.Color('#ffffff'),
      shininess: 6,
      specular: new THREE.Color('#eeeeee'),
    })
    g.globeMaterial(mat)
    g.pointOfView({ lat: 22, lng: 80, altitude: 2.4 }, 0) // start over India
    const controls = g.controls() as any
    if (controls) {
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.35
      controls.enableZoom = true
      controls.minDistance = 180
      controls.maxDistance = 600
      controls.enableDamping = true
      controls.dampingFactor = 0.12
    }
  }, [])

  // stop auto-rotate once the user interacts
  useEffect(() => {
    const g = globeEl.current
    if (!g) return
    const controls = g.controls() as any
    if (!controls) return
    const stop = () => {
      controls.autoRotate = false
    }
    const el = g.renderer().domElement as HTMLElement
    el.addEventListener('pointerdown', stop, { once: true })
    el.addEventListener('wheel', stop, { once: true })
    return () => {
      el.removeEventListener('pointerdown', stop)
      el.removeEventListener('wheel', stop)
    }
  }, [])

  // fly-to
  useEffect(() => {
    const g = globeEl.current
    if (!g || !flyTo) return
    g.pointOfView(
      { lat: flyTo.lat, lng: flyTo.lng, altitude: flyTo.alt ?? 1.2 },
      1200
    )
    const t = setTimeout(clearFlyTo, 1300)
    return () => clearTimeout(t)
  }, [flyTo, clearFlyTo])

  // live (open EONET) hotspots -> pulsing rings
  const ringsData = useMemo(
    () =>
      hotspots
        .filter((h) => h.source === 'eonet' && h.status === 'open')
        .map((h) => ({
          lat: h.lat,
          lng: h.lng,
          color: colorOf(h),
        })),
    [hotspots]
  )

  // points
  const pointsData = useMemo(() => hotspots, [hotspots])

  const pointAltitude = (d: any) => {
    const h = d as AtlasHotspot
    if (h.source === 'eonet') return 0.025
    return 0.015
  }
  const pointRadius = (d: any) => {
    const h = d as AtlasHotspot
    if (h.id === selectedId) return 0.42
    if (h.source === 'eonet') return 0.28
    return 0.22
  }
  const pointColor = (d: any) => colorOf(d as AtlasHotspot)

  const pointLabel = (d: any) => {
    const h = d as AtlasHotspot
    const tag = h.syllabusTags?.slice(0, 3).join(' · ') || ''
    return `
      <div style="background:#000;color:#fff;border-left:3px solid #d32f2f;
                  padding:8px 10px;font:12px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;
                  max-width:240px;box-shadow:0 6px 20px rgba(0,0,0,.18);border-radius:2px;">
        <div style="font-weight:700;letter-spacing:.3px;">${escapeHtml(h.title)}</div>
        <div style="color:#9aa;margin-top:2px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;">
          ${h.category} · ${h.source === 'eonet' ? 'LIVE · NASA EONET' : h.layer}
        </div>
        ${tag ? `<div style="color:#d32f2f;margin-top:4px;font-size:10px;">${escapeHtml(tag)}</div>` : ''}
        <div style="color:#bbb;margin-top:4px;font-size:10px;">${h.lat.toFixed(2)}°, ${h.lng.toFixed(2)}°</div>
      </div>`
  }

  return (
    <div ref={containerRef} className="relative h-full w-full bg-white">
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#e0e0e0] border-t-[#d32f2f]" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#666]">
              Loading the world…
            </p>
          </div>
        </div>
      )}

      {countries && size.w > 0 && (
        <Globe
          ref={globeEl as any}
          width={size.w}
          height={size.h}
          backgroundColor="#ffffff"
          showAtmosphere={false}
          // country polygons: black land, white borders
          polygonsData={countries ?? []}
          polygonCapColor={() => 'rgba(0,0,0,0.96)'}
          polygonSideColor={() => 'rgba(0,0,0,0.96)'}
          polygonStrokeColor={() => 'rgba(255,255,255,0.85)'}
          polygonsTransitionDuration={300}
          // hotspot points
          pointsData={pointsData}
          pointLat={(d: any) => (d as AtlasHotspot).lat}
          pointLng={(d: any) => (d as AtlasHotspot).lng}
          pointAltitude={pointAltitude}
          pointRadius={pointRadius}
          pointColor={pointColor}
          pointLabel={pointLabel}
          onPointClick={(d: any) => {
            select((d as AtlasHotspot).id)
          }}
          pointsTransitionDuration={400}
          // pulsing rings for live events
          ringsData={ringsData}
          ringColor={(d: any) => (d as any).color}
          ringMaxRadius={(d: any) => 4}
          ringPropagationSpeed={(d: any) => 2}
          ringRepeatPeriod={(d: any) => 1200}
          // click empty ocean -> deselect
          onGlobeClick={() => select(null)}
        />
      )}

    </div>
  )
}

function escapeHtml(s: string) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
