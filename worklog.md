# CockroachIAS — UPSC World Atlas — Project Worklog

This is the shared worklog for all agents working on the CockroachIAS UPSC World Atlas feature.
Each agent MUST read previous entries before starting and append (never overwrite) a new section after finishing.

---
Task ID: 0-research
Agent: Z.ai Code (orchestrator)
Task: Research CockroachIAS brand identity, existing platform, and NASA EONET API to prepare a comprehensive build playbook for the UPSC World Atlas feature.

Work Log:
- Extracted text from 3 uploaded PDFs (home, about, resources pages). PDFs are website print-screens; minimal extractable text but confirmed tagline, footer mantras, and section names.
- Converted all PDF pages to PNG (/tmp/cockroach_pages/*.png) and ran VLM (glm-4.6v) analysis across home/about/resources to extract exact brand colors, typography, layout, tone, and full visible copy.
- Fetched live staging site (update-gules-chi.vercel.app/#home|about|resources) via page_reader.
- Reviewed NASA EONET v3 API documentation provided by user (events, events/geojson, categories, sources, layers, magnitudes endpoints + filter params).
- Inspected existing Next.js 16 project structure, package.json, and shadcn/ui component inventory.

Stage Summary (BRAND — source of truth for all agents):
- Brand: CockroachIAS — "For Those Who Refuse to Quit".
- Mission line: "COCKROACH IAS is not about an insect — it is about the human capacity to persist when the world expects you to quit. We are your companions."
- Footer mantras: "Your journey to the ultimate training ground." / "© 2026 CockroachIAS Companion Institute. Built on the bedrock of Resilience." / "UPSC is a marathon. Walk slow, walk long."
- Nav structure: Home | Classroom | Survivor's Resources | Our Honest Story (about).
- Repository section (integration home for the Atlas): "COCKROACHIAS REPOSITORY — Explore the Unexplored — We do not sell generic PDF books or copy-pasted compilations. We engineer interactive cognitive instruments, syllabus mapping engines, and deep question diagnostics to build your administrative persistence."
- Workspaces exist: "Prelims Command System" (syllabus mapping engines, Article diagnostics, MCQ trap tracking) and "Mains Blueprint Engine".
- Colors (confirmed by VLM): Background White #FFFFFF; Primary Text Black #000000; Accent Red #D32F2F (headers, thin header rule, buttons, section titles); Secondary Gray #666666; Light borders #E0E0E0; occasional Green #4CAF50 only for "promise/handshake" accent.
- Typography: clean sans-serif (system/Helvetica-like), bold headlines, regular body, ample white space, minimalist + bold + empathetic + resilient tone.
- Tech baseline: Next.js 16 App Router, TS5, Tailwind 4, shadcn/ui (New York), Prisma+SQLite, Zustand, TanStack Query, framer-motion, z-ai-web-dev-sdk (backend only).
- Deliverable produced: /home/z/my-project/PLAYBOOK_UPSC_WORLD_ATLAS.md (pending user approval before build begins).

---
Task ID: 3-data
Agent: general-purpose (dataset author)
Task: Author India-first curated UPSC hotspot dataset

Work Log:
- Read `/home/z/my-project/worklog.md` (Task 0-research) and `PLAYBOOK_UPSC_WORLD_ATLAS.md` for brand context, layer taxonomy (L1–L12), syllabus tag convention (`["GS2","IR","..."]`), color palette (white/black/red with restraint green + blue/green only for the curated layer shape-coding), and the "Explore the Unexplored" voice.
- Designed an India-first entry budget across L3–L11 to hit ≥55% South Asia share inside a 140–170 entry target. Final plan: L3=22, L4=11, L5=27, L6=22, L7=19, L8=29, L9=10, L10=14, L11=16 = 170 total.
- Used `z-ai function -n web_search` to verify uncertain WGS84 coordinates (Tso Moriri 33.72,78.30; Tso Kar 33.30,77.80; Kabartal 25.42,86.13; Lipulekh 30.21,81.05; Banihal 33.50,75.20; Bailadila 18.69,81.22; Hutti 16.18,76.63; Zawar 24.35,73.70; Malanjkhand 22.02,80.72; Singareni/Kothagudem 17.56,80.62; Ghawar 25.40,49.70; Pantanal −18.00,−56.50). Corrected three initial guesses (Tso Moriri, Bailadila, Malanjkhand) based on mindat/Wikipedia evidence. Did not fabricate any coordinate.
- Authored `/home/z/my-project/src/data/atlas/hotspots.ts` exporting `ColorFamily`, `LayerId`, `CuratedHotspot` interface, `curatedHotspots: CuratedHotspot[]` (170 entries), plus convenience exports `curatedHotspotCounts`, `curatedHotspotTotal`, `CURATED_HOTSPOT_LAYER_COLORS`.
- Strict layer→color mapping honoured: L3 red, L4 green, L5 blue, L6 green, L7 red, L8 mixed (rivers blue / mountains & deserts green — per-entry `colorFamily` carries the truth), L9 red, L10 red, L11 green.
- Wrote 2–4 sentence descriptions in a dignified UPSC voice (e.g., Chilika, Strait of Hormuz, LoC, Jharia coalfield), each ending with an explicit UPSC syllabus hook. Every entry carries 1–2 credible sources (Ramsar RSIS, UNESCO WHC, Wikipedia, MEA India, CEPF, EIA, PIB).
- Built an audit script (`/tmp/audit-hotspots.mjs`) and ran it against the dataset. Final result: 170 entries, 0 schema issues, 0 out-of-range coordinates, all IDs and titles unique, 95/170 (55.88%) South Asia. `bunx tsc --noEmit` passes cleanly.

Stage Summary:
- File: `/home/z/my-project/src/data/atlas/hotspots.ts` (2,847 lines).
- Entry count: 170 (target 140–170 ✓).
- India / South Asia share: 95 entries (55.88% ✓, target ≥55%).
- Per-layer counts: L3=22, L4=11, L5=27, L6=22, L7=19, L8=29, L9=10, L10=14, L11=16.
- Per-color totals: red=65, blue=46, green=59.
- Exports: `curatedHotspots` (array), `curatedHotspotCounts` (per-layer Record), `curatedHotspotTotal` (number), `CURATED_HOTSPOT_LAYER_COLORS` (layer→default color helper).
- India-first emphasis confirmed: 21 Indian Ramsar sites, 15 Indian UNESCO sites, 13 Indian rivers, 7 Indian Himalayan passes + Palk Strait, 5 India-related border zones (LoC, LAC, Sir Creek, McMahon, Durand), 14 Indian mineral/industrial regions, plus 9 South Asian neighbours in L3 Places in News.
- Next action for build agent: consume `curatedHotspots` directly (no DB seed required for MVP), or load via Prisma seed from this file if persistence is preferred. Per-entry `colorFamily` is the source of truth for marker rendering (do NOT rely on the layer-level default for L8).

---
Task ID: 1-5 (build)
Agent: Z.ai Code (orchestrator + build)
Task: Build the CockroachIAS UPSC World Atlas v1 (MVP) per approved playbook + CTO decisions.

CTO decisions locked:
- Globe skin: pure white background, pure black world map (land), white country-border hairlines, markers in red+blue+green. (Overrode earlier dark-space rec.)
- No backend / no API keys. NASA EONET is keyless & public → safe. Curated UPSC layer ships as static TS data file (no Prisma/DB). EONET proxied via a Next.js route handler (part of the same app, no separate backend).
- India-first curated seed (Ramsar, biodiversity, rivers, mountains, straits, UNESCO, conflicts, minerals).
- No bookmarks in v1.
- Tier 2/3 deferred to post-v1 review.
- Copy in CockroachIAS voice.

Work Log:
- Installed react-globe.gl + three + @types/three.
- Downloaded Natural Earth countries GeoJSON (177 features) to /public/geo/countries.geojson for local, always-available boundaries.
- Added brand tokens to globals.css (--ci-paper/ink/red/gray/hairline + marking colors) + pulse animation + custom scrollbar + red hairline utility.
- src/lib/atlas/types.ts — AtlasHotspot, LayerId, LAYERS, COLOR_HEX, EONET_CATEGORY_MAP (category→layer/colorFamily/syllabus tags).
- src/lib/atlas/eonet.ts — server-side fetch + normalise (Point & Polygon centroid) + syllabus auto-tagging + 20-min in-memory cache with stale fallback.
- src/lib/atlas/curated.ts — adapter from static dataset to AtlasHotspot[].
- src/app/api/atlas/eonet/route.ts — keyless route handler, force-dynamic, revalidate 1200s, status/days/force query params.
- src/store/atlas.ts — Zustand store (activeLayers, syllabusLens, liveStatus, selectedId, query, flyTo) + colorOf helper.
- src/data/atlas/hotspots.ts — 170 curated entries, 55.88% India/South Asia (authored by Task 3-data subagent, coordinates web-verified).
- src/components/atlas/WorldGlobe.tsx — react-globe.gl (dynamic ssr:false): white sphere material, black land polygons, white borders, red/blue/green points, pulsing rings for open EONET events, fly-to via pointOfView, auto-rotate until interaction, ResizeObserver sizing.
- src/components/atlas/FilterPanel.tsx — layer toggles with live counts + syllabus lens + live-status + legend.
- src/components/atlas/DetailSidebar.tsx — framer-motion slide-in: layer badge, coords, status, magnitude, description, syllabus tags, sources, re-center button, EONET provenance note.
- src/components/atlas/SearchBar.tsx — autocomplete fly-to search across all hotspots.
- src/components/atlas/atlas-shell.tsx — orchestration: TanStack Query for EONET (20-min stale, refetch), merge curated, apply filters, header (brand + live ticker + hotspot-of-the-day + search + mobile Filters btn), full-bleed globe, floating left panel (desktop) / Sheet (mobile), floating right sidebar (desktop) / bottom Sheet (mobile), sticky footer with mantras.
- src/app/page.tsx mounts AtlasShell; layout.tsx metadata updated to CockroachIAS branding.
- Lint clean (eslint . → 0 errors).
- Headless-browser self-verification (agent-browser):
  * Initial render: pure white bg, black landmasses, white country borders, 3D rotating globe, red/blue/green markers, branding, panels, footer — no console/page errors.
  * Click "Hotspot of the Day" (North Korea) → detail sidebar with L3 badge, coords, description, GS2/IR/Internal Security/Nuclear tags, sources, re-center btn. No overlap.
  * Search "Chilika" → fly-to India + sidebar (L5, 19.71°N 85.32°E, Ramsar 1981, Irrawaddy dolphin, GS3/Environment/Biodiversity/Wetlands tags, Ramsar + Wikipedia sources).
  * GS2 syllabus lens → button highlighted, only red IR markers remain, blue/green filtered out.
  * Mobile (390×844) → globe full-screen, left panel collapsed into "Filters" button, header + sticky footer intact, no horizontal overflow.
  * Dev log: GET / 200, GET /api/atlas/eonet 200 (cached 16ms on 2nd call), zero errors.

Stage Summary:
- v1 MVP SHIPPED & browser-verified on http://localhost:3000/ (preview panel).
- Live layer: NASA EONET (500 open events at verify time), 20-min server cache, no API key, no separate backend.
- Curated layer: 170 India-first UPSC hotspots (L3–L11) across red/blue/green families.
- Brand: strict White·Black·Red UI chrome; globe = white bg + black land + white borders + red/blue/green markers.
- 3D globe: all countries demarcated, auto-rotating, drag/zoom, fly-to, pulsing live rings.
- Interactions: layer toggles, syllabus lens, live-status filter, search fly-to, detail sidebar, responsive (desktop floating panels / mobile Sheets).
- Sticky footer with CockroachIAS mantras.
- Deferred to post-v1 review (Tier 2/3): PYQ connector UI, mains hooks, hotspot-of-the-day as a dedicated panel, region deep-dive, quiz mode, comparison mode, LLM explain, daily news auto-ingest. (PYQ dataset to be supplied by CTO later; curated data structure is ready to extend.)
- Files: see src/components/atlas/*, src/lib/atlas/*, src/store/atlas.ts, src/data/atlas/hotspots.ts, src/app/api/atlas/eonet/route.ts, public/geo/countries.geojson.
