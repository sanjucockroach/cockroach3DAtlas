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
