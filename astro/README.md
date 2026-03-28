# Naiton Website

Marketing and product website for **Naiton Business Suite** — a full-fledged ERP, CRM, HRM and WMS platform for growing businesses.

**Live:** [www.naiton.nl](https://www.naiton.nl)

---

## Tech Stack

| Tool                                    | Version | Purpose               |
| --------------------------------------- | ------- | --------------------- |
| [Astro](https://astro.build)            | 6       | Static site generator |
| [Tailwind CSS](https://tailwindcss.com) | 4       | Utility-first styling |
| [Swiper](https://swiperjs.com)          | 12      | Project slider        |

---

## Project Structure

```
astro/
├── public/
│   ├── fonts/              # Daxline font files (.woff + .woff2)
│   └── images/             # Static images (webp/png/svg, 1x/2x, mobile/desktop)
│       ├── clients/
│       └── projects/
└── src/
    ├── assets/
    │   └── icons/          # SVG icons (imported as raw strings)
    ├── components/
    │   ├── ContentSection.astro
    │   ├── CTASection.astro
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── Logo.astro
    │   ├── ProjectsSwiper.astro
    │   ├── SolutionItem.astro
    │   ├── SolutionSection.astro
    │   └── SuccessCaseSection.astro
    ├── data/
    │   └── db.json         # Site content — menu, projects, clients, contact
    ├── images/
    │   └── naiton-logo.svg # Inlined SVG logo
    ├── layouts/
    │   └── Layout.astro    # Base HTML layout with meta, header, footer
    ├── pages/
    │   ├── index.astro
    │   ├── about.astro
    │   ├── solutions.astro
    │   ├── contact.astro
    │   └── 404.astro
    └── styles/
        └── global.css      # Tailwind v4 theme + global component styles
```

---

## Commands

Run from the `astro/` directory:

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview production build locally     |

---

## Deployment

The site builds to **fully static HTML/CSS/JS** — no server required.

Upload the contents of `dist/` to your web server's `public_html` (or `www`) directory via FTP or SCP:

```bash
# build locally
npm run build

# upload to server (example via SCP)
scp -r dist/* user@yourserver.com:/var/www/html/
```

No Node.js needed on the hosting server.

---

## Images

Each image has four variants for optimal delivery:

- `image.webp` / `image@2x.webp` — WebP, standard and retina
- `image.png` / `image@2x.png` — PNG fallback, standard and retina
- `image-mobile.webp` / `image-mobile@2x.webp` — mobile crop
- `image-mobile.png` / `image-mobile@2x.png` — mobile PNG fallback

The `<picture>` element in components serves the correct variant based on screen width and browser support.
