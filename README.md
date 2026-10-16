# be-bop-a-lula — Developer Portfolio

Single-page portfolio built with **Next.js (App Router)**, **Tailwind CSS v4** and **Framer Motion**.
Sections: Hero, About, Skills, Experience, Projects, Contact, plus a sticky nav and footer.
Animations respect `prefers-reduced-motion`.

## Structure

```
app/            layout (metadata/SEO), page, globals.css, robots, sitemap
components/     Nav, Hero, About, Skills, Experience, Projects, Contact, Footer, Reveal, ...
lib/data.ts     ALL editable content (name, links, skills, experience, projects)
```

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Customize

Edit `lib/data.ts`. Everything marked `PLACEHOLDER` must be replaced: name, email, site URL,
profile photo (`/public`), resume, GitHub/LinkedIn links, project URLs, descriptions and screenshots.

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com/new) — no extra configuration needed.
