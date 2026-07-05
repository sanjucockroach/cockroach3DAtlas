# PLAYBOOK — COCKROACHIAS UPSC WORLD ATLAS
### “Explore the Unexplored” — A 3D Geopolitical & Ecological Intelligence Globe for the Aspirant Who Refuses to Quit

**Document version:** 1.0
**Status:** ⏳ PENDING YOUR APPROVAL (build will not begin until you sign off)
**Prepared by:** Z.ai Code — acting as your technical co-pilot / engineering partner
**Prepared for:** CTO, Web Designer & Product Manager, CockroachIAS
**Date:** 6 July 2026

---

## 0. How to read this document

This playbook is the single source of truth before a single line of Atlas code is written. It locks the **Goal → Role → Framework → Workflow → Design → Layout → Action Plan** so we build the right thing, once.

- Sections 1–4 = the **why and who** (alignment).
- Sections 5–9 = the **what and how** (product + technical framework).
- Sections 10–11 = the **look and feel** (design system + wireframes).
- Sections 12–14 = the **motion and content** (journeys, syllabus logic, data pipeline).
- Sections 15–17 = the **plan** (roadmap, KPIs, risks).
- Section 18 = **open questions for you** + **approval block**.

> ASCII wireframes are representational — they communicate layout intent, not pixel fidelity. True country-boundary fidelity is delivered in the real build via GeoJSON polygons on a WebGL globe.

---

## 1. Executive Summary

CockroachIAS already engineers “interactive cognitive instruments, syllabus mapping engines, and deep question diagnostics.” The **UPSC World Atlas** is the next such instrument — a **3D interactive globe** where an aspirant sees the whole world and, layered over it, every place that matters for UPSC: live natural events from **NASA EONET**, volcanoes, places-in-news (Strait of Hormuz, Iran, Russia–Ukraine, Taiwan Strait…), biodiversity hotspots, Ramsar sites, UNESCO sites, conflict zones, treaties, straits, canals and more — each one click-deep into a sidebar that ties it back to the **UPSC syllabus and Prelims PYQs**.

It turns geography, international relations, environment and disaster management from “static PDFs to memorise” into a **living map you can fly through**. It is the visual embodiment of *“Explore the Unexplored.”*

**In one line:** A CockroachIAS-branded (White / Black / Red `#D32F2F`) 3D world globe that fuses NASA’s live Earth-event data with a curated UPSC knowledge layer, so every hotspot opens into a syllabus-mapped, PYQ-linked, mains-ready deep-dive.

---

## 2. My Understanding of CockroachIAS (so you know I get it)

I read your home, about and resources pages (both the uploaded PDFs and the live staging site) and ran visual analysis to extract your exact palette and voice.

### 2.1 Vision, Mission & Ultimate Goal
- **Vision:** Civil services preparation reimagined around *resilience*, not pressure. The aspirant is a survivor, not a customer.
- **Mission:** “COCKROACH IAS is not about an insect — it is about the human capacity to persist when the world expects you to quit. **We are your companions.**”
- **Ultimate goal:** Build an empathetic, honest, dignified ecosystem of *cognitive instruments* that turn pressure into structured, unbreakable focus — affordable (modules from ₹249), no pushy sales, mental-well-being first.
- **Brand metaphor:** The cockroach = ultimate survivor: absolute endurance, unbeatable adaptability, high physical resilience. We empower students to cultivate these exact traits.

### 2.2 Voice & Mantras (Atlas copy must inherit these)
- “For Those Who Refuse to Quit.”
- “Explore the Unexplored.”
- “Your journey to the ultimate training ground.”
- “UPSC is a marathon. Walk slow, walk long.”
- “Built on the bedrock of Resilience.”
- Tone: **minimalist, bold, empathetic, honest, no corporate fluff.**

### 2.3 Confirmed Brand Palette (locked)
| Role | Hex | Usage |
|---|---|---|
| Paper / Background | `#FFFFFF` | App background, panels |
| Ink / Primary text | `#000000` | Headlines, body |
| Cockroach Red (accent) | `#D32F2F` | Header rule, section titles, hotspot glow, CTAs, active states |
| Survivor Gray | `#666666` | Secondary copy |
| Hairline / borders | `#E0E0E0` | Dividers, card outlines |
| Promise Green (restraint) | `#4CAF50` | Used *only* for the “Shoulder Promise” trust accents — not the Atlas default |
| Space Black (globe void) | `#0A0A0A` | The dark canvas behind the 3D globe so red hotspots pop |

> No indigo, no blue, no purple. The Atlas is strictly **White · Black · Red**.

### 2.4 Where the Atlas lives
Inside the **Resources** page, under the existing **“COCKROACHIAS REPOSITORY — Explore the Unexplored”** banner. The Atlas becomes the flagship instrument of the Repository, sitting alongside (not replacing) the Prelims Command System and Mains Blueprint Engine.

---

## 3. The Goal (North Star)

> **Make every place that UPSC can ask about visible, clickable, syllabus-mapped and PYQ-linked — on a single 3D globe — so an aspirant builds spatial intuition instead of memorising lists.**

Success = an aspirant can, in under 10 seconds, go from “I just heard about the Strait of Hormuz on the news” → see it on the globe → read why it matters for GS2 (IR) → see the last 3 Prelims PYQs that referenced it → save it to their personal atlas for revision.

---

## 4. My Role (how I operate as your partner)

I am your **engineering co-pilot and product thinking partner**, not a code dispenser. Concretely:

1. **I doubt less, confirm more** — I’ll state assumptions explicitly and flag only decisions that need your judgement. I won’t paralyse you with questions.
2. **I build frontend-first** so you *see* the product early, then wire the backend.
3. **I honour the brand** — every component is White/Black/Red, empathetic tone, minimalist.
4. **I engineer, not compile** — real data (NASA EONET + curated UPSC layer), real interactions, real caching, real DB — not mockups.
5. **I self-verify** in a headless browser before I ever tell you “done.”
6. **I think ahead** — I propose features you didn’t ask for, and tell you which are moonshots.
7. **I keep you in control** — this playbook is your approval gate.

---

## 5. Product Vision — The UPSC World Atlas

### 5.1 What it is
A full-screen **3D WebGL globe** of the Earth showing **all countries with demarcated boundaries**, overlaid with **layers of UPSC-relevant hotspots**. Clicking any hotspot opens a **branded detail sidebar**. The globe is filterable by syllabus lens, searchable, and bookmarkable.

### 5.2 The layer taxonomy (the “many more” you mentioned, made concrete)

| # | Layer | Source | UPSC relevance |
|---|---|---|---|
| L1 | **Live Earth Events** | NASA EONET v3 (`/events/geojson`) | Disaster management, GS3, geography |
| L2 | **Volcanoes & Seismic** | EONET `category=volcanoes` + curated | Geomorphology GS1 |
| L3 | **Places in News** | Curated (+ scraping-ready) | GS2 IR, current affairs |
| L4 | **Biodiversity Hotspots** | Curated (36 global hotspots) | GS3 environment |
| L5 | **Ramsar Wetlands** | Curated (India + global) | GS3 environment |
| L6 | **UNESCO Heritage Sites** | Curated | GS1 culture, GS3 |
| L7 | **Straits · Canals · Passes** | Curated | GS1 geo, GS2 IR |
| L8 | **Rivers · Mountains · Deserts** | Curated | GS1 geo |
| L9 | **Conflict & Border Zones** | Curated | GS2 IR, internal security |
| L10 | **Treaties / Org HQ** | Curated | GS2 IR |
| L11 | **Mineral & Industrial Regions** | Curated | GS3 economy |
| L12 | **Trade / Migration Arcs** | Curated arcs on globe | GS2/GS3 |

Every hotspot carries **syllabus tags** + **PYQ links** + **mains hooks** (see §13).

### 5.3 Why this is “no one can reach”
- Most UPSC map tools are **static PDF atlases** or 2D clickable maps. We give a **live, 3D, NASA-fed, syllabus-mapped, PYQ-linked** instrument that *updates itself* with real Earth events. That combination is genuinely rare.

---

## 6. Feature Framework (yours + my value-adds)

### Tier 1 — MVP (must ship in v1)
1. **3D globe** with all country boundaries (GeoJSON polygons).
2. **NASA EONET live layer** (wildfires, storms, volcanoes, floods, earthquakes, landslides, ice, dust, temp extremes) — auto-refreshing.
3. **Curated UPSC layers** L3–L11 seeded (Places in News, Biodiversity, Ramsar, UNESCO, Straits, Rivers, Conflicts, Treaties, Minerals).
4. **Click → detail sidebar** with description, coords, syllabus tags, sources.
5. **Layer toggle panel** (left) + **legend**.
6. **Search & fly-to** (type “Hormuz” → globe rotates and zooms).
7. **Syllabus lens filter** (GS1/GS2/GS3/GS4 + subject sub-filters).
8. **Bookmark / personal atlas** (Zustand + localStorage).
9. **Fully responsive** (mobile = drawers, not crippled).

### Tier 2 — Enhanced (v1.x)
10. **PYQ connector** — past Prelims questions per location (year + question + answer key).
11. **Mains answer hooks** — 3–5 ready dimensions per hotspot.
12. **“In the News” timeline** — recent current-affairs items tied to the place.
13. **Hotspot of the Day** — featured rotation in the header ticker.
14. **Region deep-dive** — click a country → capital, neighbours, key IR facts.
15. **Map layers opacity & clustering** for dense areas.

### Tier 3 — Moonshot (v2, flagged for your nod)
16. **Quiz mode** — “locate this place on the globe” mini-game, scored.
17. **Comparison mode** — pin two hotspots side-by-side (two straits, two conflicts).
18. **Aspirant notes & revision tags** per location (requires accounts → ties into NextAuth).
19. **Time-travel scrubber** — replay EONET events over a date range.
20. **LLM “explain like a topper”** — on-demand, syllabus-tuned explanation of any hotspot (z-ai backend).
21. **Daily current-affairs auto-ingest** — scrape news → geocode → propose new Places-in-News for your editorial approval.

> I recommend shipping Tier 1 fully, then deciding Tier 2/3 by usage. Your call.

---

## 7. Data Architecture

### 7.1 Two data families, one globe
```
                ┌───────────────────────────────────────────────┐
                │              UPSC WORLD ATLAS DATA             │
                └───────────────────────────────────────────────┘
                                 │
          ┌──────────────────────┴──────────────────────┐
          ▼                                             ▼
  ┌───────────────────┐                     ┌────────────────────┐
  │  LIVE (dynamic)   │                     │  CURATED (static)  │
  │  NASA EONET v3    │                     │  UPSC knowledge    │
  └───────────────────┘                     └────────────────────┘
          │                                             │
   server fetch+cache                           Prisma (SQLite) +
   (Next API route)                             seed JSON file
          │                                             │
          └──────────────────┬──────────────────────────┘
                             ▼
                 unified GeoJSON feed to the globe
```

### 7.2 Live layer — NASA EONET
- **Endpoints used:** `/events/geojson`, `/categories`, `/sources`, `/layers`, `/magnitudes`.
- **Proxy via Next.js API route** (`/api/atlas/eonet`) to: avoid browser CORS, cache server-side, normalise to a unified hotspot shape, attach syllabus tags by category.
- **Cache:** in-memory cache, **TTL 20 min** (EONET updates roughly hourly; 20 min balances freshness vs. rate limits). Stale-while-revalidate.
- **Filters supported:** `status` (open/all), `category`, `days`, `limit`, `bbox` (for region deep-dive).
- **Category → syllabus mapping** (auto-tag):
  | EONET category | UPSC tag |
  |---|---|
  | wildfires | GS3 environment / disaster mgmt |
  | severeStorms | GS1 climatology / GS3 disaster |
  | volcanoes | GS1 geomorphology |
  | earthquakes | GS1 geomorphology / GS3 disaster |
  | floods | GS3 disaster mgmt |
  | landslides | GS3 disaster mgmt |
  | seaLakeIce | GS1 climatology |
  | snow | GS1 climatology |
  | dustHaze | GS1 environment |
  | manMade | GS3 internal security / economy |
  | tempExtremes | GS3 climate change |

### 7.3 Curated UPSC layer
- Stored in **Prisma (SQLite)** so it is editable later (admin route in v2) and survives restarts.
- **Schema sketch** (final in build):
  ```
  model Hotspot {
    id          String   @id @default(cuid())
    layer       String   // L3..L11
    title       String
    description String
    lat         Float
    lng         Float
    country     String?
    region      String?
    syllabusTags String  // "GS1:Geo,GS2:IR"
    pyqIds      String?  // comma-sep refs
    mainsHooks  String?  // newline-sep
    sources     String?  // JSON array of {title,url}
    image       String?
    createdAt   DateTime @default(now())
    updatedAt   DateTime @updatedAt
  }
  model Pyq {
    id       String @id @default(cuid())
    year     Int
    paper    String // "Prelims" / "Mains GS1"
    question String
    answer   String?
    hotspotIds String? // back-link
  }
  ```
- **Seed file:** `prisma/seed-atlas.ts` bootstraps ~120–180 curated hotspots across L3–L11 to start (I author these, you review).
- **Refresh:** curated layer is versioned; live EONET refreshes itself.

### 7.4 Unified hotspot shape (what the globe renders)
```ts
type AtlasHotspot = {
  id: string
  source: 'eonet' | 'curated'
  layer: string                 // L1..L12
  category: string              // eonet category or curated type
  title: string
  description?: string
  lat: number
  lng: number
  geometry?: GeoJSON.Geometry   // polygons for EONET area events
  magnitude?: { value: number; unit: string }
  date?: string                 // ISO
  status?: 'open' | 'closed'
  syllabusTags: string[]
  pyqs?: PyqRef[]
  mainsHooks?: string[]
  sources?: { title: string; url: string }[]
}
```

---

## 8. Technical Framework

### 8.1 Stack (all already in your project — no new heavy deps except the globe lib)
| Concern | Choice |
|---|---|
| Framework | Next.js 16 App Router (locked) |
| Language | TypeScript 5 (locked) |
| 3D globe | **`react-globe.gl`** (React wrapper over `three.js` + `globe.gl`) — renders country polygons, points w/ altitude, polygons, arcs, labels, custom shaders. **Best-in-class for this exact use case.** |
| Country boundaries | **`world-atlas` / Natural Earth countries GeoJSON** (TopoJSON → GeoJSON) — all countries, demarcated. |
| Earth texture | NASA Blue Marble / night-lights (public domain) OR a clean dark “space” material to match brand. I recommend **dark space + subtle country outlines in hairline gray, hotspots glow red**. |
| Styling | Tailwind 4 + shadcn/ui (New York) |
| Server state | TanStack Query (EONET polling) |
| Client state | Zustand (filters, bookmarks, selected hotspot) |
| DB | Prisma + SQLite (curated layer + PYQs) |
| Backend AI | z-ai-web-dev-sdk (backend only) — for future Tier-3 “explain like a topper” |
| Motion | framer-motion (sidebar slide, globe fly-to easing, ticker) |

### 8.2 New dependency to install
- `react-globe.gl` (+ peer `three`). Single, well-maintained, MIT. Nothing else needed.

### 8.3 API surface (Next.js route handlers, all backend, all relative paths)
```
GET /api/atlas/eonet            → cached, normalised live EONET hotspots
GET /api/atlas/hotspots         → curated UPSC hotspots (filterable ?layer=&tag=)
GET /api/atlas/hotspots/:id     → full detail (curated) or enriched (eonet)
GET /api/atlas/pyqs?hotspot=    → PYQs for a hotspot
GET /api/atlas/search?q=        → fly-to + hotspot search
GET /api/atlas/countries        → country GeoJSON (served locally, cached)
GET /api/atlas/spotlight        → Hotspot of the Day
```

### 8.4 Folder plan (inside existing project)
```
src/
  app/
    page.tsx                         ← Atlas mounts here (single route, per your rule)
    api/atlas/...                    ← route handlers above
  components/atlas/
    WorldGlobe.tsx                   ← react-globe.gl wrapper
    layers/                          ← per-layer render configs
    FilterPanel.tsx                  ← left panel (layers + syllabus lens)
    DetailSidebar.tsx                ← right sidebar
    SearchBar.tsx
    HotspotTicker.tsx                ← bottom “Hotspot of the Day”
    Legend.tsx
    BookmarkBar.tsx
    atlas-shell.tsx                  ← layout wrapper (header/globe/sidebar/footer)
  lib/atlas/
    eonet.ts                         ← fetch+normalise+cache
    syllabus.ts                      ← tag maps
    flyto.ts                         ← camera helpers
    types.ts
  store/atlas.ts                     ← Zustand store
prisma/
  schema.prisma                      ← +Hotspot, +Pyq models
  seed-atlas.ts                      ← curated seed
```

### 8.5 Performance & resilience
- EONET fetched **server-side only**, cached 20 min, never from the browser.
- Country GeoJSON served **locally** (bundled in `/public`), so boundaries always render even if external CDNs fail.
- Globe points **clustered** above a density threshold to keep 60fps.
- `prefers-reduced-motion` respected (fly-to becomes instant cut).
- Graceful fallback: if EONET is down, show curated layers + a small “live events temporarily unavailable” pill (no broken map).

---

## 9. Information Architecture

```
UPSC WORLD ATLAS
├── Header bar
│   ├── CockroachIAS mark + "WORLD ATLAS — Explore the Unexplored"
│   ├── Search (fly-to)
│   ├── Hotspot of the Day ticker
│   └── Bookmark count
├── Left panel (FilterPanel)
│   ├── Layer toggles (L1..L12) with counts
│   ├── Syllabus lens (GS1/2/3/4 + subjects)
│   ├── Status (open/closed/all) for live layer
│   └── Legend
├── Centre (WorldGlobe) — full bleed
│   ├── 3D Earth + country boundaries
│   ├── Hotspot points (red, altitude = relevance/magnitude)
│   ├── Polygons for area events
│   └── Arcs for trade/migration (Tier 2)
├── Right (DetailSidebar) — slides in on selection
│   ├── Title + layer badge
│   ├── Coords + date + status
│   ├── Description
│   ├── Syllabus tags
│   ├── PYQ connector
│   ├── Mains hooks
│   ├── Sources (incl. EONET source links)
│   └── Bookmark / notes
└── Footer (sticky) — CockroachIAS mantras
```

---

## 10. Design System (brand-locked)

### 10.1 Color tokens (CSS variables)
```css
--ci-paper:       #FFFFFF;   /* backgrounds, panels */
--ci-ink:         #000000;   /* headlines, body */
--ci-red:         #D32F2F;   /* accent, hotspot glow, active */
--ci-gray:        #666666;   /* secondary copy */
--ci-hairline:    #E0E0E0;   /* borders */
--ci-space:       #0A0A0A;   /* globe void */
--ci-red-soft:    rgba(211,47,47,0.12);  /* active pill bg */
--ci-red-glow:    rgba(211,47,47,0.55);  /* hotspot halo */
```

### 10.2 Typography
- Sans-serif (system stack / Inter fallback). **Bold** all-caps for section titles with a red hairline beneath (matches your existing section title treatment). Regular for body. Mono for coordinates.

### 10.3 Hotspot visual language
| Layer family | Marker |
|---|---|
| Live EONET (open) | Pulsing red dot + altitude bar (magnitude) |
| Live EONET (closed) | Hollow red ring |
| Volcanoes | Red triangle ▲ |
| Places in News | Red diamond ◆ |
| Biodiversity | Green-tinged dot (restraint use of `#4CAF50` ok here) — *flag for your approval* |
| Ramsar | Blue… **NO** — per brand, use a red-outlined droplet |
| UNESCO | Red-outlined star |
| Straits/Canals | Red dashed line |
| Conflicts | Red crosshair |
| Treaties/Org HQ | Red flag pin |

> To stay strictly on-brand, **all markers default to red variants**; shape encodes layer, not color. I only propose green for biodiversity as an option — **your call**.

### 10.4 Motion
- Sidebar: slide-in-right 280ms ease-out (framer-motion).
- Globe fly-to: 1200ms cubic-bezier, altitude arcs.
- Hotspot hover: scale 1.15 + label tooltip.
- Pulsing live events: 1.4s infinite, red glow.
- Respect `prefers-reduced-motion`.

---

## 11. Layout & Wireframes (ASCII)

### 11.1 Desktop — full Atlas view

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  ◆ COCKROACHIAS   WORLD ATLAS — “Explore the Unexplored”        🔎 Search place…   🗺 5 │
│  ─────────────────────────────────────────────────────────────────────────────────── │  ← red hairline
│  ▸ HOTSPOT OF THE DAY: Strait of Hormuz — why 20% of world oil flows here. GS2 (IR)  │  ← ticker
├────────────┬─────────────────────────────────────────────────────────┬───────────────┤
│ LAYERS     │                                                         │  DETAIL       │
│            │                       . .  *  .                         │               │
│ [x]L1 Live │                   *  . (globe)  . *                     │  STRAIT OF    │
│  events 42 │                .      ●●●●●       .                     │  HORMUZ       │
│ [x]L2 Volc │             .    ●●  EARTH  ●●    .                     │  ────────────  │
│ [ ]L3 News │            .   ●●  (3D sphere)  ●●   .                  │  Layer: L7    │
│ [x]L4 Bio  │             .    ●●  ◐ rotating ●●    .                 │  Straits/Can. │
│ [x]L5 Rams │                .      ●●●●●       .                     │  26.57°N      │
│ [x]L6 UNES │                   *  .         . *                      │  56.25°E      │
│ [x]L7 Strat│                       '  *  '                           │  Status: —    │
│ …          │                                                         │               │
│            │                                                         │  One-fifth of │
│ SYLLABUS   │        (hairline gray country borders,                 │  global oil…  │
│ LENS       │         red glowing hotspots,                           │               │
│ ( )All     │         pulsing = live EONET)                           │  #GS2 IR      │
│ (•)GS2 IR  │                                                         │  #GS3 Econ    │
│ ( )GS3 Env │                                                         │               │
│ ( )GS1 Geo │                                                         │  ▸ PYQs (3)   │
│            │                                                         │   2021 Pre…   │
│ STATUS     │                                                         │   2019 Pre…   │
│ (•)Open    │                                                         │               │
│ ( )Closed  │                                                         │  ▸ Mains hooks│
│ ( )All     │                                                         │   • Energy…  │
│            │                                                         │   • Choke…   │
│ ──LEGEND── │                                                         │               │
│ ● live     │                                                         │  Sources:     │
│ ◆ news     │                                                         │  • EONET      │
│ ▲ volcano  │                                                         │  • MEA brief  │
│            │                                                         │               │
│            │                                                         │  [♡ Bookmark] │
├────────────┴─────────────────────────────────────────────────────────┴───────────────┤
│  Your journey to the ultimate training ground.   •   UPSC is a marathon. Walk slow.  │  ← sticky footer
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### 11.2 The 3D globe — stylised representation

```
                        .---"""""---.
                    .-'      |        '-.
                 .'          |           '.
                /     ___----+----___      \
               |    .'       |       '.     |
               |   /  EUROPE | ASIA    \    |
               |  |    ····  |  ··○···  |   |
               |  |   /    \ | /      \ |   |
               |  |  | AFR  | |  PAC   | |   |
               |   \  \    / | \      / /   |
               |    '. ····  |  ······ .'    |
               |      \______|______/        |
                \             |             /
                 '.           |           .'
                   '-.        |        .-'
                      '---...|...---'
                          N Pole
   (meridians + parallels render as faint hairlines; country boundaries as
    slightly brighter hairlines; hotspots as red glowing pins with altitude
    bars proportional to magnitude/relevance. Globe auto-rotates slowly until
    interacted with.)
```

### 11.3 Flat political reference (continent demarcation intent)

```
        LONGITUDE →
 -180  -120   -60    0    60   120   180
  ┌─────┬─────┬─────┬─────┬─────┬─────┐  +90 N
  │     │ N.  │     │N.AS │     │     │
  │ NAM │ AMR │     │EUROP│     │ ARC │
  ├─────┴──┬──┴─────┴──┬──┴─────┴─────┤  +30
  │       │   ATLAN.   │              │
  │ C.AM  │   OCEAN    │   ASIA       │
  │       │            │              │
  ├───────┴────┬───────┴────┬──────────┤    0
  │  S.AMERICA │  AFRICA    │  INDIAN  │
  │            │            │  OCEAN   │
  ├────────────┴────┬───────┴──────────┤  -30
  │                 │   OCEANIA /      │
  │                 │   AUSTRALIA      │
  ├─────────────────┴──────────────────┤  -60
  │            ANTARCTICA              │
  └────────────────────────────────────┘  -90 S
   (real build = full country polygons, not this schematic)
```

### 11.4 Mobile — drawers instead of panels

```
┌─────────────────────────────┐
│ ◆ WORLD ATLAS      🔎 🗁(5) │
│ ─────────────────────────── │
│ ▸ Strait of Hormuz • GS2 IR │  ← ticker (tap to open)
├─────────────────────────────┤
│                             │
│          (globe             │
│           full-bleed,       │
│            3D)              │
│                             │
│         ●  ◆  ▲             │
│                             │
├─────────────────────────────┤
│ [☰ Layers]   [◇ Detail]     │  ← tap → bottom sheet
└─────────────────────────────┘
   ┌─ bottom sheet (Layers) ──┐
   │ L1 Live ●(42)  L3 News ◆ │
   │ L4 Bio  ●(36) L5 Ramsar ●│
   │ SYLLABUS: [All][GS1][GS2]│
   │ [Apply]                   │
   └───────────────────────────┘
```

### 11.5 Detail sidebar — empty vs filled

```
EMPTY                           FILLED (after click)
┌────────────────────┐          ┌────────────────────┐
│                    │          │ STRAIT OF HORMUZ   │
│   (no hotspot      │   ──►    │ ────────────────   │
│    selected)       │          │ L7 · Straits/Canal │
│                    │          │ 26.57N · 56.25E    │
│ Click any marker   │          │                    │
│ on the globe to    │          │ ~20% of global oil │
│ begin exploring.   │          │ transits this…     │
│                    │          │                    │
│ "Explore the       │          │ #GS2 #GS3 #Energy  │
│  Unexplored."      │          │                    │
│                    │          │ ▸ PYQs (3)         │
│                    │          │ ▸ Mains hooks (5)  │
│                    │          │ ▸ Sources (2)      │
│                    │          │                    │
│                    │          │ [♡ Save to Atlas]  │
└────────────────────┘          └────────────────────┘
```

### 11.6 FilterPanel — layer + syllabus lens

```
┌─ LAYERS ──────────────┐
│ [x] L1 Live events 42 │
│ [x] L2 Volcanoes   12 │
│ [ ] L3 Places News   │
│ [x] L4 Biodiversity  │
│ [x] L5 Ramsar sites  │
│ [x] L6 UNESCO sites  │
│ [x] L7 Straits/Canal │
│ [ ] L8 Rivers/Mtns   │
│ [ ] L9 Conflict zones│
│ [ ] L10 Treaties/Org │
│ [ ] L11 Minerals/Ind │
├─ SYLLABUS LENS ───────┤
│ ( ) All               │
│ (•) GS2 — IR          │
│ ( ) GS3 — Environment │
│ ( ) GS1 — Geography   │
│ ( ) GS3 — Disaster    │
├─ LIVE STATUS ────────┤
│ (•) Open   ( ) Closed │
└───────────────────────┘
```

### 11.7 Data flow (architecture, ASCII)

```
  BROWSER (client)                         SERVER (Next.js)
  ┌───────────────────┐                    ┌──────────────────────────┐
  │  WorldGlobe.tsx   │  TanStack Query    │  /api/atlas/eonet        │
  │  react-globe.gl   │ ◄────────────────► │   → fetch EONET          │
  │  + country GeoJSON│                    │   → normalise            │
  ├───────────────────┤                    │   → cache 20min (memory) │
  │  FilterPanel      │                    │   → attach syllabus tags │
  │  DetailSidebar    │  /api/atlas/...    ├──────────────────────────┤
  │  Zustand store    │ ◄────────────────► │  /api/atlas/hotspots     │
  │  (filters,        │                    │   → Prisma (curated)     │
  │   bookmarks,      │                    ├──────────────────────────┤
  │   selection)      │                    │  /api/atlas/pyqs         │
  └───────────────────┘                    │   → Prisma (PYQs)        │
                                           ├──────────────────────────┤
                                           │  /api/atlas/countries    │
                                           │   → serve local GeoJSON  │
                                           └──────────────────────────┘
                                                    │   │
                                          EONET API ┘   └ Prisma SQLite
                                          (NASA, public)   (curated seed)
```

---

## 12. Interaction & Workflow (user journeys)

**Journey A — Discover (default)**
1. Aspirant opens Resources → clicks “World Atlas”.
2. Globe loads, auto-rotates, live EONET events pulse in red.
3. Hovers a pulsing dot → tooltip “Wildfire — California, USA · GS3”.
4. Clicks → sidebar slides in with description, syllabus tags, sources.
5. Toggles syllabus lens to “GS2 IR” → globe re-points to Places in News.

**Journey B — Search (targeted study)**
1. Types “Hormuz” in search.
2. Globe flies to 26.57N, 56.25E, zooms in.
3. Sidebar opens pre-filled with Hormuz deep-dive + PYQs.

**Journey C — Revise (personal atlas)**
1. Bookmarks 6 hotspots over the week.
2. Opens Bookmark bar → sees her saved atlas → revisits each.

**Journey D — Current affairs connect**
1. Hears about a flood on the news.
2. Opens Atlas → live layer shows the EONET flood polygon.
3. Reads disaster-management mains hooks → ready for answer writing.

---

## 13. Syllabus Mapping Logic (the brains)

Every hotspot, live or curated, resolves to a tag set:
```
syllabusTags = [ paper, subject, subtopic? ]
e.g. ["GS2","IR","Energy security"]
     ["GS3","Disaster management","Floods"]
     ["GS1","Geomorphology","Volcanism"]
```
- **EONET auto-tags** via category→tag map (§7.2).
- **Curated hotspots** hand-tagged at seed time.
- **PYQ link** = `Hotspot.pyqIds` → renders year + paper + question + answer.
- **Mains hooks** = 3–5 bullet dimensions (causes, implications, India’s stakes, way forward) authored per curated hotspot; for EONET live events, generated from a template until Tier-3 LLM enrichment.

This is what makes the Atlas a *cognitive instrument*, not a map widget.

---

## 14. Content Strategy & Data Pipeline

**v1 seed (I author, you review):** ~120–180 curated hotspots across L3–L11, each with description, coords, syllabus tags, 1–3 PYQ refs where applicable, 3–5 mains hooks, 1–2 sources. Prioritise high-yield UPSC regions: India + neighbourhood, West Asia (oil/strait geopolitics), Indo-Pacific, Europe, Africa, SCO/BRICS/UN geography.

**v1.x growth:** editorial pipeline — you approve new hotspots; I add via seed updates (and later an admin route).

**v2 (moonshot):** daily current-affairs scrape → geocode → LLM proposes new Places-in-News with draft syllabus tags → lands in a **review queue** for your editorial approval before going live. Keeps quality under your control (no hallucinated hotspots).

**Live layer:** fully automatic via EONET; no editorial burden.

---

## 15. Action Plan / Roadmap

> Builds only start **after you approve this playbook.** Frontend-first so you see results early.

| Phase | Scope | Deliverable | Est. |
|---|---|---|---|
| **P0 — Approve** | You sign off this playbook | ✅ this doc | now |
| **P1 — Scaffold** | Install `react-globe.gl`+`three`; globe shell on `/`; dark space + country boundaries; brand header/footer | Spinning branded globe | 1 step |
| **P2 — Live layer** | `/api/atlas/eonet` (fetch+cache+normalise+tag); render EONET points/polygons; legend | Live events glowing | 1 step |
| **P3 — Curated layer** | Prisma schema + seed (~120 hotspots + PYQs); `/api/atlas/hotspots`; render curated markers | UPSC hotspots on globe | 1 step |
| **P4 — Interaction** | FilterPanel (layers + syllabus lens + status); DetailSidebar; search fly-to; bookmarks (Zustand) | Full MVP (Tier 1) | 1 step |
| **P5 — Polish** | Hotspot of the Day ticker, responsive drawers, motion, reduced-motion, empty/error states, self-verify in browser | Ship-ready v1 | 1 step |
| **P6 (optional)** | Tier 2 features (PYQ UI, mains hooks UI, region deep-dive) | v1.x | by your nod |
| **P7 (moonshot)** | Tier 3 (quiz, compare, LLM explain, auto-ingest) | v2 | by your nod |

I will execute P1→P5 myself (frontend-first, then backend, then self-verify in a headless browser). I will use subagents for parallelisable slices (e.g., seed-data authoring vs. API build) and log everything to `worklog.md`.

---

## 16. Success Metrics (KPIs)

- **Adoption:** % of Resources visitors who open the Atlas.
- **Engagement:** avg. hotspots clicked per session; avg. session length.
- **Utility:** bookmarks created per user; PYQ panels expanded.
- **Performance:** globe ≥ 50fps on mid laptop; first paint < 2.5s.
- **Reliability:** EONET fallback never shows broken map; curated layer always loads.
- **Learning signal (qualitative):** aspirant feedback that the Atlas replaced their static map PDF.

---

## 17. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| EONET downtime / rate limits | Server cache 20 min + graceful “live temporarily unavailable” pill; curated layer unaffected |
| Globe perf on low-end devices | Point clustering; cap rendered events; `prefers-reduced-motion`; lazy-load globe |
| Curated data accuracy | You review seed before live; sources cited per hotspot; no LLM-only facts in v1 |
| Off-brand drift | Locked tokens (§10); lint rule forbidding blue/indigo |
| Single-route constraint | Atlas lives on `/` per platform rule; integrated into Resources conceptually via branding |
| Mobile usability | Drawers + bottom sheets; globe stays interactive |

---

## 18. Open Questions for You + Approval

A few decisions only you can make. Defaults are my recommendations — I’ll proceed with them unless you override.

1. **Globe skin:** (a) Dark space + hairline country borders + red hotspots **[my rec — most on-brand, red pops]** · (b) NASA Blue Marble day texture · (c) Minimalist paper-white globe. Which?
2. **Biodiversity/Ramsar marker color:** strictly red (shape-encodes-layer) **[my rec]**, or allow green/blue accents? 
3. **Scope of v1 seed:** ~120–180 curated hotspots OK, or want a specific priority list (e.g., India-first)?
4. **PYQ dataset:** will you provide an official PYQ corpus, or should I seed from publicly known questions (clearly cited)?
5. **Accounts/bookmarks:** v1 bookmarks are local-only (no login) **[my rec]** — OK, or do you want NextAuth login from day one?
6. **Tier 2/3:** green-light any now, or review after v1?
7. **Copy:** may I write Atlas copy in your voice (“Explore the Unexplored”, companion tone), or will you supply final strings?

---

### ✅ APPROVAL BLOCK

```
[ ]  APPROVED — proceed to build (P1→P5)
[ ]  APPROVED WITH CHANGES — see my notes below
[ ]  NOT APPROVED — let’s revise

Notes / overrides:
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

Signed (CTO, CockroachIAS): ____________________  Date: ________
```

---

**Next action on approval:** I begin Phase 1 (scaffold + branded spinning globe with country boundaries on `/`), frontend-first, then build the EONET live layer and curated UPSC layer, self-verify in a headless browser, and report back with a live preview. No build starts before your sign-off.

*— Z.ai Code, your companion in engineering. “Walk slow, walk long.”*
