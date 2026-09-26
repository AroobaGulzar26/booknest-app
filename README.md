# BookNest

BookNest is a responsive, frontend-only book discovery app built with React, Vite, Tailwind CSS, Framer Motion, and React Router. Browse a small curated catalogue, search and filter titles, inspect book details, and save favorites or a reading list in your browser.

## Getting started

Requirements: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Open and run the project

1. Open the `booknest-app` folder in VS Code (`File` → `Open Folder`).
2. Open the integrated terminal (`Terminal` → `New Terminal`).
3. Run `npm install` once, then `npm run dev`.
4. Open the local URL printed in the terminal (usually `http://localhost:5173`).

Stop the local server with `Ctrl+C`.

## Live demo

The app is configured to publish to [GitHub Pages](https://aroobagulzar26.github.io/booknest-app/). The workflow deploys each push to `master`. To enable Pages for the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. After the first successful deployment, share the demo URL with your teacher.

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
