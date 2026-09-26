# BookNest

BookNest is a responsive, frontend-only book discovery app built with React, Vite, Tailwind CSS, Framer Motion, and React Router. Browse a small curated catalogue, search and filter titles, inspect book details, and save favorites or a reading list in your browser.

## Getting started

Requirements: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run Oxlint |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/books` | Searchable and filterable book collection |
| `/book/:id` | Book details |
| `/favorites` | Saved favorites |
| `/reading-list` | Reading list |
| `/about` | About BookNest |
| `/contact` | Frontend-only contact form |

Favorites and reading-list IDs are stored in `localStorage`. The catalogue and contact form are frontend-only; the contact form displays a local success message and does not send data.
