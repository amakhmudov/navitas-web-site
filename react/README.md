# Naiton Business Suite — React SPA

Marketing and product website for **Naiton Business Suite**, built as a single-page application with React 19, Vite, and Tailwind CSS 4.

---

## Tech Stack

| Layer          | Technology                                    |
| -------------- | --------------------------------------------- |
| Framework      | React 19                                      |
| Build tool     | Vite 7                                        |
| Routing        | React Router 7                                |
| Server state   | TanStack React Query 5                        |
| Styling        | Tailwind CSS 4 (Vite plugin)                  |
| Carousel       | Swiper 12 (manual instance, no React wrapper) |
| SVG imports    | vite-plugin-svgr                              |
| Error boundary | react-error-boundary                          |
| Testing        | Vitest 4 + Testing Library + MSW              |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

> The app loads all data from `/public/data/db.json` as a static file — no backend is required to run the app.

### Optional: start the JSON Server API

If you need a live REST API (e.g. for testing dynamic refetch behaviour):

```bash
npm run server
```

Starts `json-server` on `http://localhost:4000`, watching `public/data/db.json`.

---

## Available Scripts

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Start Vite dev server with HMR           |
| `npm run build`         | Production build to `dist/`              |
| `npm run preview`       | Serve the production build locally       |
| `npm run lint`          | Run ESLint across all source files       |
| `npm run server`        | Start JSON Server on port 4000           |
| `npm test`              | Run all tests once and exit              |
| `npm run test:watch`    | Re-run tests on every file save          |
| `npm run test:coverage` | Run tests and generate a coverage report |

---

## Project Structure

```
src/
├── App.jsx                  # Root layout: Header + route outlet + Footer
├── Header.jsx               # Site header with nav and phone CTA
├── Footer.jsx               # Site footer
├── Logo.jsx                 # Logo component (inline SVG via SVGR)
├── main.jsx                 # Entry point — React root, providers, error boundary
│
├── pages/
│   ├── Home.jsx             # Homepage: project carousel, clients, CTAs
│   ├── About.jsx            # About page: ERP sections from db.json
│   ├── Solutions.jsx        # Solutions page: CRM, HRM, WMS, Licences
│   ├── Contact.jsx          # Contact page: phone, address, Google Maps
│   └── NotFound.jsx         # 404 fallback page
│
├── components/
│   ├── CTASection.jsx       # Reusable call-to-action section with phone links
│   ├── ContentSection.jsx   # Reusable title + paragraphs + image section
│   ├── LazySection.jsx      # IntersectionObserver fade-in wrapper
│   ├── ProjectsSwiper.jsx   # Swiper carousel (manual initialisation)
│   ├── SolutionSection.jsx  # Solution module wrapper (title + items grid)
│   ├── SuccessCaseSection.jsx # Expandable success case with chevron toggle
│   ├── Error.jsx            # Error boundary fallback UI
│   ├── Loader.jsx           # Spinner shown during code-split loads
│   └── solutions/
│       ├── SolutionItem.jsx # Shared renderer: icon + title + bullet list
│       ├── CRMItems.jsx     # CRM module items
│       ├── HRMItems.jsx     # HRM module items
│       ├── WMSItems.jsx     # WMS module items
│       └── LicencesItems.jsx # Licences module items
│
├── lib/
│   └── api.js               # fetchDb() — fetches /data/db.json
│
├── test/                    # Test infrastructure (not tests themselves)
│   ├── setup.js             # jest-dom + MSW server lifecycle
│   ├── server.js            # MSW node server intercepting /data/db.json
│   ├── db-fixture.js        # In-memory mirror of db.json used in tests
│   └── test-utils.jsx       # Wrapper component: QueryClient + MemoryRouter
│
└── __tests__/
    ├── LazySection.test.jsx # Unit tests for IntersectionObserver logic
    ├── Header.test.jsx      # Integration tests: nav, phone, active link
    └── CTASection.test.jsx  # Integration + contract tests for db.json shape

public/
└── data/
    └── db.json              # Single data source: menu, contact, projects, clients, about
```

---

## Data Layer

All content is served from a single static file: `public/data/db.json`.

### Structure

```jsonc
{
  "menuItems":    [{ "id", "label", "href" }],
  "contact":      { "phone", "phoneDisplay" },   // single source of truth for phone
  "projects":     [{ "id", "title", "alt" }],
  "clients":      [{ "id", "name", "link" }],
  "aboutSections":[{ "id", "title", "paragraphs", "imageAlt" }]
}
```

**Important:** `contact.phone` must be a valid E.164 number (e.g. `+31208932732`). It is used directly as a `tel:` href in `Header`, `CTASection`, and `Contact`. The contract test in `CTASection.test.jsx` enforces this.

React Query fetches the file once on first load and caches it for **1 hour** (`staleTime: 1000 * 60 * 60`). All components that need data — `Header`, `Home`, `About`, `CTASection` — share the same `"db"` query key and never trigger a second network request.

---

## Routing

| Path          | Page          |
| ------------- | ------------- |
| `/`           | Home          |
| `/about/`     | About         |
| `/solutions/` | Solutions     |
| `/contact/`   | Contact       |
| `*`           | 404 Not Found |

All pages are **code-split** via `React.lazy()` and loaded on demand. A `<Loader />` spinner is shown via `<Suspense>` while the chunk is being fetched.

---

## Styling

- **Tailwind CSS 4** loaded via the official Vite plugin — no PostCSS config needed.
- Custom design tokens are defined in `src/App.css` under `@theme`:
  - Font: `Daxlinecyrtf` (WOFF, 4 weights, `font-display: swap`)
  - Colors: `--color-body: #222`, `--color-snow: #fff`, `--color-accent: #268646`
- Reusable utility classes (`.btn`, `.h2`, `.h3`, `.text-lead`, `.breadcrumbs`, `.menu-link`) are defined in `@layer components`.
- **View Transitions API** is enabled for smooth page-to-page animations.
- SVG files can be imported as React components using the `?react` suffix: `import Logo from "@/assets/logo.svg?react"`.

---

## Image Strategy

Project images in `Home.jsx` are loaded via [`import.meta.glob`](https://vite.dev/guide/features#glob-import) rather than individual static imports. Adding a new project only requires:

1. Adding a folder `src/assets/img/projects/<id>/` with the correct naming convention (see below).
2. Adding the project entry to `public/data/db.json`.

### Required image naming convention per project

```
<id>.webp         <id>@2x.webp
<id>-mobile.webp  <id>-mobile@2x.webp
<id>.jpg          <id>@2x.jpg
<id>-mobile.jpg   <id>-mobile@2x.jpg
```

Where `<id>` matches the project's `id` field in `db.json` (e.g. `gps-buddy`, `kitemana`, `van-dijk`).

All project images use `<picture>` elements with WebP + JPG fallback, responsive mobile variants, retina 2× srcsets, and correct `loading` / `fetchPriority` / `decoding` attributes.

---

## Path Aliases

The `@` alias is configured in `vite.config.js` and resolves to `./src`:

```js
import CTASection from "@/components/CTASection.jsx";
```

---

## Testing

Tests are written with **Vitest** + **React Testing Library** + **MSW**.

### Running tests

```bash
npm test              # single run
npm run test:watch    # watch mode — re-runs on save
npm run test:coverage # coverage report
```

### Test types

| File                   | Type                       | What it protects                                                                                            |
| ---------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `LazySection.test.jsx` | **Unit**                   | IntersectionObserver logic — hidden on mount, fades in on intersection, one-shot disconnect, no memory leak |
| `Header.test.jsx`      | **Integration**            | Nav links rendered from data, phone `href` correct, active route class, fallback when `contact` is missing  |
| `CTASection.test.jsx`  | **Integration + Contract** | Phone links correct; enforces `db.json` field names and shapes                                              |

### Test infrastructure (`src/test/`)

- **`setup.js`** — loads `@testing-library/jest-dom` matchers, starts/resets/stops the MSW server
- **`server.js`** — MSW node server intercepting `GET /data/db.json`
- **`db-fixture.js`** — in-memory mirror of `db.json`; **keep in sync** when adding fields
- **`test-utils.jsx`** — `<Wrapper>` component providing `QueryClient` + `MemoryRouter` to any test

### Adding a test

```jsx
import { render, screen } from "@testing-library/react";
import { Wrapper } from "@/test/test-utils.jsx";
import MyComponent from "@/components/MyComponent.jsx";

it("does something", async () => {
  render(<MyComponent />, { wrapper: ({ children }) => <Wrapper>{children}</Wrapper> });
  await screen.findByText("Expected text");
});
```

---

## Linting

```bash
npm run lint
```

ESLint 9 with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`. Config is in `eslint.config.js`.
