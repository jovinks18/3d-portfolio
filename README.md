# 3D Portfolio

A personal portfolio website built with Next.js, TypeScript, Tailwind CSS, Spline, GSAP, and Framer Motion. The site combines interactive 3D elements, smooth scroll-based animations, project showcases, and a responsive design.

## Features

* Interactive 3D skills keyboard built with Spline
* Smooth animations using GSAP and Framer Motion
* Responsive layout for desktop and mobile
* Light and dark mode support
* Project showcase with descriptions and tech stacks
* Contact form with email delivery through Resend
* Customizable personal, project, and skills data

## Tech Stack

| Layer     | Technologies                           |
| --------- | -------------------------------------- |
| Framework | Next.js 14, React 18, TypeScript       |
| Styling   | Tailwind CSS, Shadcn UI, Aceternity UI |
| Animation | GSAP, Framer Motion                    |
| 3D        | Spline Runtime                         |
| Email     | Resend                                 |
| Other     | Lenis, Zod, next-themes                |

## Getting Started

### Prerequisites

* Node.js v18+
* pnpm, npm, or yarn

### Installation

```bash
git clone <your-repository-url>
cd 3d-portfolio
pnpm install
```

### Environment Variables

Create a `.env.local` file using the example file:

```bash
cp .env.example .env.local
```

Add the required values:

| Variable         | Required | Description                   |
| ---------------- | -------- | ----------------------------- |
| `RESEND_API_KEY` | Yes      | API key for the contact form  |
| `UMAMI_DOMAIN`   | No       | Optional analytics script URL |
| `UMAMI_SITE_ID`  | No       | Optional analytics site ID    |

### Run Locally

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Customization

Most personal information is stored in:

```bash
src/data/config.ts
```

Update this file to change your name, title, description, email, site URL, GitHub details, and social links.

Other important files:

| File                    | Purpose                                                     |
| ----------------------- | ----------------------------------------------------------- |
| `src/data/projects.tsx` | Project details, screenshots, descriptions, and tech stacks |
| `src/data/constants.ts` | Skills, experience, and supporting content                  |
| `public/assets/`        | Images, icons, Open Graph image, and project screenshots    |

## Updating 3D Keyboard Skills

The 3D keyboard is controlled through a Spline scene. To update the skills:

1. Open the Spline file from `public/assets/`.
2. Edit the keycap icons or labels inside Spline.
3. Make sure each Spline keycap object name matches the related skill name in `src/data/constants.ts`.
4. Export the updated Spline scene.
5. Replace the existing Spline file in `public/assets/`.

The Spline object names and the skills data must stay in sync for interactions to work correctly.

## Deployment

This project can be deployed on Vercel.

1. Push the code to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy.

## License

This project is based on an open-source portfolio template and is available under the MIT License.
