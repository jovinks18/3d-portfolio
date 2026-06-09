# COWORK.md — 3D Portfolio Operating Manual

> Practical reference for future Cowork sessions. Read this before touching any code.

---

## Tech Stack

| Layer | Tech | Version |
|---|---|---|
| Framework | Next.js App Router | 14.2.3 |
| UI | React + TypeScript | 18 / 5 |
| Styling | Tailwind CSS v3, SCSS Modules, shadcn/ui (Radix) | — |
| 3D scene | `@splinetool/react-spline` + `@splinetool/runtime` | 4.1.0 / 1.12.95 |
| Scroll animation | GSAP + ScrollTrigger | 3.12.5 |
| UI animation | Framer Motion | 11 |
| Smooth scroll | Lenis | 1.1.6 |
| Fonts | Inter (`--font-sans`), Archivo Black (`--font-display`) | — |
| Email | Resend API | 4.0.0 |
| Realtime | Socket.io client (env-gated, off by default) | 4.7.5 |
| Blog | MDX via `next-mdx-remote` + `gray-matter` | — |
| Analytics | Umami (env-gated, off by default) | — |
| Deployment | Vercel — `https://3d-portfolio-steel-delta-62.vercel.app` | — |

Dark mode controlled via `class` on `<html>` (managed by `next-themes`, default: dark).  
ESLint is suppressed during builds (`eslint.ignoreDuringBuilds: true`). TypeScript errors will still fail a deploy; ESLint errors will not.

---

## Environment Variables (`.env.local`)

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | **Yes** | Contact form — silently fails without it |
| `NEXT_PUBLIC_WS_URL` | No | Socket.io server URL — leave empty to disable realtime |
| `UMAMI_DOMAIN` | No | Analytics script src |
| `UMAMI_SITE_ID` | No | Analytics site ID |

---

## Folder Structure

```
src/
  app/
    page.tsx                      ← Main single-page portfolio route
    layout.tsx                    ← Root layout: Header + Footer + Providers + AppOverlays
    globals.css                   ← CSS variables, Tailwind directives
    projects/page.tsx             ← Server redirect → /#projects (not stale content)
    blogs/                        ← Blog route (MDX)
    api/send/route.ts             ← Contact form handler (Resend)
    not-found.tsx                 ← 404 page (uses 404.spline)
  components/
    sections/                     ← hero, skills, experience, projects, contact, section-header
    animated-background.tsx       ← FRAGILE: Spline scene + all GSAP scroll logic
    animated-background-config.ts ← FRAGILE: Keyboard 3D transforms per section
    ui/
      animated-modal.tsx          ← FRAGILE: Custom modal (has known bug — see Issues)
      section-wrapper.tsx         ← Framer Motion scroll-fade wrapper — all sections must use this
      floating-dock.tsx           ← Skill icon dock in project modals
    header/config.ts              ← Nav links — safe to edit
    footer/config.ts              ← Footer links — safe to edit
    providers.tsx                 ← Provider stack: ThemeProvider > Preloader > Socket > Tooltip
    app-overlays.tsx              ← ElasticCursor, Particles, RemoteCursors, EasterEggs, RadialMenu
  data/
    config.ts                     ← Author info, social links, site URL, SEO — safe to edit
    constants.ts                  ← SKILLS record + SkillNames enum + EXPERIENCE array
    projects.tsx                  ← Homepage project array — primary edit target
  content/blogs/                  ← MDX blog posts
public/assets/
  skills-keyboard.spline          ← DO NOT RENAME/MOVE — binary 3D scene
  404.spline                      ← 404 scene
  projects-screenshots/           ← Project images, organised by slug
  keycap-sounds/                  ← press.mp3, release.mp3
```

---

## Main Page Structure (`src/app/page.tsx`)

Sections render in this order inside `<SmoothScroll>`:

```
<AnimatedBackground />           ← fixed full-screen Spline canvas
<HeroSection      id="hero">
<SkillsSection    id="skills">   ← header only; keyboard interaction is Spline
<ExperienceSection id="experience">
<ProjectsSection  id="projects">
<ContactSection   id="contact">
```

**The section `id` values are load-bearing.** `animated-background.tsx` hardcodes `"#skills"`, `"#projects"`, and `"#contact"` as GSAP ScrollTrigger anchors. The URL hash also updates from these IDs on scroll. Changing or removing any section `id` silently breaks the keyboard animation.

Every section uses `<SectionWrapper id="...">`, which applies Framer Motion scroll-based opacity + scale fade. Any new section must use this wrapper.

---

## Provider Stack

`ThemeProvider > Preloader > SocketContextProvider > TooltipProvider`

The `Preloader` context exposes `isLoading` — the hero section gates its content on this until Spline is ready. New sections don't need to handle this.

---

## App Overlays

Always-on, rendered outside main page content:

- **`ElasticCursor`** — replaces the OS cursor. Interactive elements that should trigger the hover state need `className="cursor-can-hover"`.
- **`Particles`** — canvas particle background, fixed, z-index −10.
- **`RemoteCursors`** — other visitors' cursors (requires `NEXT_PUBLIC_WS_URL`).
- **`EasterEggs`** — devtools-triggered.
- **`RadialMenu`** — right-click radial menu.

---

## Project System

### Where projects live

`src/data/projects.tsx` — the array rendered on the homepage. Currently 3 entries: `ab-inbev`, `maki`, `goodfoods`.

`src/app/projects/page.tsx` — server redirect to `/#projects`. Not a content page.

### Project object schema

```ts
type Skill = {
  title: string;   // label in FloatingDock tooltip
  bg: string;      // unused by FloatingDock — keep for type consistency
  fg: string;      // unused by FloatingDock — keep for type consistency
  icon: ReactNode; // icon rendered in FloatingDock
};

type Project = {
  id: string;          // kebab-case slug, used as React key
  category: string;    // white badge on card — keep ≤3 words
  title: string;       // card overlay + modal header
  src: string;         // card thumbnail — see image domain rule below
  screenshots: string[]; // defined but currently unused (rendering commented out)
  skills: {
    frontend: Skill[]; // shown in modal FloatingDock
    backend: Skill[];  // conditionally rendered — omit or pass [] to hide
  };
  live: string;        // "#" = no live link; see behaviour note below
  content: React.ReactNode; // JSX getter — see rule below
};
```

**Image domain rule** — `next.config.mjs` only allows `images.unsplash.com` as a remote hostname. Any other external image host will crash `next/image` at runtime. For project thumbnails, use either:
1. A file in `public/assets/projects-screenshots/<slug>/` referenced as `/assets/...`
2. An `images.unsplash.com` URL

To use any other host, add it to `remotePatterns` in `next.config.mjs` first.

**`live: "#"` behaviour** — setting `live` to `"#"`:
- Hides the "View Project Case Study" button inside modal body (checked in `<ProjectsLinks>`)
- Also hides the modal footer "Visit" button (gated with `project.live !== "#"` in `sections/projects.tsx`)
- The Cancel button always renders

**`content` getter rule** — `content` must be a JavaScript getter, not a method or plain value:

```ts
get content() {
  return (
    <div>
      <TypographyP className="font-mono">...</TypographyP>
      <ProjectsLinks live={this.live} />
    </div>
  );
}
```

It references `this.live` and is called as `project.content` (no parentheses). Using a function instead breaks it.

### Where cards and modals render

Cards: `src/components/sections/projects.tsx` — 3-column grid, each cell is `<Modall>` (double-L — intentional typo in codebase, do not rename).

Modals: same file. Each `<Modal>` creates its own isolated `ModalProvider` — they are not global. The modal body has a `<SmoothScroll isInsideModal={true}>` wrapper for inner scroll; do not remove it.

The `ModalBody` in `projects.tsx` overrides the base component default width: `className="md:max-w-4xl md:max-h-[80%] overflow-auto"`. The base default is `md:max-w-[40%]`.

### How to add a new project

1. Drop thumbnail in `public/assets/projects-screenshots/<slug>/landing.png` (or use an Unsplash URL)
2. Add a `PROJECT_SKILLS` entry in `projects.tsx` if needed
3. Add the project object to the `projects` array
4. No routing, nav, or Spline changes required

---

## Two Skill Systems — Do Not Confuse

| System | File | Used by | Must match Spline? |
|---|---|---|---|
| `PROJECT_SKILLS` | `src/data/projects.tsx` | Modal FloatingDock only | No |
| `SKILLS` + `SkillNames` | `src/data/constants.ts` | 3D keyboard + Experience badges | **Yes** |

They are completely separate. Adding to one does not affect the other.

---

## Skills & Experience (`src/data/constants.ts`)

### `SkillNames` enum — fragile

Each value is a string (e.g. `PYTHON = "python"`) that **must exactly match the name of the corresponding object in `skills-keyboard.spline`**. A mismatch causes silent failure — no error, hover/press just does nothing on that key. Never rename an existing enum value.

### `SKILLS: Record<SkillNames, Skill>`

Fields: `id` (sequential int), `name` (matches enum value), `label` (display text), `shortDescription` (rendered in Spline text variables on hover), `color` (brand hex, currently unused in UI), `icon` (CDN URL used as `<img src>` in Experience badges).

### `EXPERIENCE: Experience[]`

Fields: `id`, `startDate`, `endDate`, `title`, `company`, `description: string[]`, `skills: SkillNames[]`. The `skills` array drives badge rendering on experience cards — only reference `SkillNames` values that exist in the `SKILLS` record.

---

## Spline — How It Works

The scene `public/assets/skills-keyboard.spline` is lazy-loaded as a fixed full-screen canvas behind all page content. In dark mode the page background is transparent and Spline shows through; in light mode `bg-slate-100` on `<main>` covers it.

`onLoad` receives a runtime `Application` instance. GSAP + ScrollTrigger animate the keyboard's position/rotation/scale as the user scrolls. Skill key hovers and presses update Spline variables `"heading"` and `"desc"`, which render text inside the 3D scene.

### Named objects used at runtime

| Object | Purpose |
|---|---|
| `"keyboard"` | Main keyboard — GSAP target for all transforms |
| `"bongo-cat"`, `"frame-1"`, `"frame-2"` | Bongo cat animation in Projects section |
| `"keycap"`, `"keycap-desktop"`, `"keycap-mobile"` | Reveal bounce animation on load |
| `"text-desktop-dark"`, `"text-desktop"`, `"text-mobile-dark"`, `"text-mobile"` | Keyboard label text by theme + device |
| `"<skill-name>"` | Each skill keycap — name must match `SkillNames` value |

### Spline runtime variables

| Variable | Set to |
|---|---|
| `"heading"` | `skill.label` on hover/keydown |
| `"desc"` | `skill.shortDescription` on hover/keydown |

---

## Safe-to-Edit vs Fragile

### Safe to edit freely
- `src/data/projects.tsx` — add/edit projects
- `src/data/constants.ts` → `EXPERIENCE[]`, `SKILLS` labels / descriptions / icons / colors
- `src/data/config.ts` — author info, social links, site URL, SEO
- `src/components/header/config.ts` — nav links
- `src/components/footer/config.ts` + `footer.tsx`
- `src/components/sections/hero.tsx` — hero text, buttons
- `src/components/sections/experience.tsx` — card layout/styling
- `src/components/sections/contact.tsx` — copy/layout
- `src/content/blogs/*.mdx` — blog posts
- `public/assets/projects-screenshots/` — add image folders

### Edit with caution
- `src/data/constants.ts` → `SkillNames` enum values — changing breaks Spline
- `src/components/sections/skills.tsx` — the `id="skills"` prop is a GSAP anchor, do not change it
- `src/app/page.tsx` — section order affects GSAP scroll sequence
- `src/components/ui/section-wrapper.tsx` — affects all section scroll animations
- `next.config.mjs` — image domain additions go here
- `src/app/layout.tsx` — metadata, font vars

### Do not touch without deep review
- `src/components/animated-background.tsx`
- `src/components/animated-background-config.ts`
- `src/components/ui/animated-modal.tsx` (has a known bug — see below)
- `src/components/providers.tsx`

### Do not touch at all
- `public/assets/skills-keyboard.spline`
- `public/assets/404.spline`

---

## Known Issues

**1. `useOutsideClick` in `animated-modal.tsx` is logically inverted.**
The condition `!event.target.classList.contains("no-click-outside")` causes the hook to fire only when the clicked element *has* that class. No element in this app has it, so the hook is a complete no-op. The modal still closes correctly via the `Overlay` component's own `onClick`. Do not "fix" this without testing both close paths — backdrop click, close icon, and Escape key must all still work.

**2. `bg`/`fg` fields on `Skill` (in `projects.tsx`) are unused.**
`FloatingDock` only reads `title` and `icon`. The fields exist in the type definition and all `PROJECT_SKILLS` entries, but are never rendered. Keep them for type consistency until a deliberate refactor.

**3. `screenshots` field on `Project` is unused.**
Defined on the type and populated on each project, but the carousel rendering code in `ProjectContents` is commented out. Kept for forward compatibility.

**4. `FloatingDockMobile` is commented out** in `floating-dock.tsx`. Mobile users see the desktop dock only.

**5. `about` GSAP state is never triggered.**
`animated-background-config.ts` has an `about` entry in `STATES` and the `Section` type, but no `id="about"` section exists and `animated-background.tsx` never registers it as a ScrollTrigger. It is inert dead code — safe to leave.

---

## Rules for Spline, GSAP, Lenis, and Modals

**Spline**
- Never rename `public/assets/skills-keyboard.spline` or any named object inside it
- Never rename Spline runtime variables `"heading"` or `"desc"`
- `SkillNames` enum value = exact Spline object name. Mismatch = silent failure, no crash

**GSAP / ScrollTrigger**
- Section `id` props `"hero"`, `"skills"`, `"projects"`, `"contact"` are hardcoded trigger anchors — do not change
- Adding a new section between existing ones requires updating `createSectionTimeline` calls in `animated-background.tsx`

**Lenis**
- Do not set `overflow: scroll` or `overflow: auto` on any page-level element
- The modal wraps its content in `<SmoothScroll isInsideModal={true}>` — do not remove it

**Modals**
- `content` must be a getter, not a method
- Do not add `overflow: hidden` to modal content — `ScrollArea` handles inner scroll

---

## Checks After Any Edit

```bash
npx tsc --noEmit   # type-check — must pass
npm run build      # full build — run locally before deploying (takes >45s due to Spline bundle)
```

Then verify manually:
- [ ] Dark mode + light mode (Spline text layering differs per theme)
- [ ] Mobile breakpoint (keyboard transforms and keycap visibility differ)
- [ ] New project image loads (watch for Next.js Image domain errors in console)
- [ ] Contact form submits (requires `RESEND_API_KEY` in `.env.local`)

---

## Quick Reference — What to Edit for Common Tasks

| Task | File |
|---|---|
| Add a project | `src/data/projects.tsx` |
| Edit experience entries | `src/data/constants.ts` → `EXPERIENCE[]` |
| Edit skill labels / icons | `src/data/constants.ts` → `SKILLS` record |
| Change hero text or social links | `src/data/config.ts` |
| Add/remove nav links | `src/components/header/config.ts` |
| Add a blog post | `src/content/blogs/<slug>.mdx` |
| Change keyboard 3D pose per section | `src/components/animated-background-config.ts` STATES |
| Update deployed URL | `src/data/config.ts` → `config.site` |
