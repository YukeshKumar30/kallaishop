# Kallai Gift Center

A premium, modern business website for **Kallai Gift Center** in Kallakurichi,
Tamil Nadu — with its associated services **Maddy Photography & Videography**
and **Bagavan Event Management** presented under the main brand.

Built as a fast, frontend-only React + Vite + Tailwind CSS site, ready to
clone, run, and deploy.

## Features

- Sticky, responsive navbar with mobile hamburger menu
- Collage-style hero section with entrance animation
- Brand-hierarchy About section (Kallai Gift Center, Maddy Photography &
  Videography, Bagavan Event Management)
- Dedicated Kallai Gift Center showcase with 8 gift categories
- Photography portfolio section and Event Management showcase
- Filterable masonry gallery with a full keyboard-friendly lightbox
  (Escape to close, ← / → to navigate)
- "Why Choose Us" section, location card, and contact section
- Floating WhatsApp / Instagram / Call buttons and a back-to-top button
- Scroll-reveal animations that respect `prefers-reduced-motion`
- SEO meta tags, Open Graph tags, and a custom favicon
- Editable content kept out of components, in `src/data/`

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)

No Next.js, PHP, WordPress, Bootstrap, or backend framework is used.

## Folder structure

```
kallai-gift-center/
├── public/
│   ├── images/
│   │   ├── gifts/
│   │   ├── photography/
│   │   ├── events/
│   │   └── gallery/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   ├── services.js
│   │   ├── gallery.js
│   │   └── contact.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production build is generated into `dist/` and is not committed to the
repository (see `.gitignore`).

> **Note on images:** the project ships with locally generated placeholder
> images (SVG) organized under `public/images/` so the site works out of the
> box with no broken links. Swap them for real photos of the same file names,
> or update the paths in `src/data/services.js` and `src/data/gallery.js`.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Deploying

The project uses relative asset paths (`base: './'` in `vite.config.js`), so
it works on GitHub Pages, Vercel, and Netlify without extra configuration.

**Vercel**
1. Import the GitHub repository into Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`, output directory: `dist`.

**Netlify**
1. Import the repository.
2. Build command: `npm run build`, publish directory: `dist`.

**GitHub Pages**
1. Run `npm run build`.
2. Deploy the contents of `dist/` to the `gh-pages` branch (e.g. with the
   `gh-pages` npm package, or a GitHub Actions workflow).

## Contact details used on this site

- Phone: +91 98654 32893
- WhatsApp: https://wa.me/919865432893
- Instagram: https://www.instagram.com/kallai_gift_centre
- Location: Kallakurichi, Tamil Nadu, India

These are stored in `src/data/contact.js` — update them there if they ever
change.
