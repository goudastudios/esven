# Combined Esven App

This folder contains the new combined HTML app for Esven, built from selected elements of the three design concepts as outlined in `docs/Combined_Design.md`.

## Structure
- `views/` — EJS templates for all pages (e.g. `home.ejs`, `team.ejs`, `portfolio.ejs`, `contact.ejs`)
- `views/partials/` — EJS partials for shared sections (header, footer, etc.)
- `assets/` — Images, icons, and other media
- `css/` — CSS files for global and page-specific styles
- `components/` — (Legacy) HTML partials (no longer used; see `views/partials/`)

## Starting & Stopping the App Locally

This app now uses Node.js/Express with EJS for local development. All pages are rendered from EJS templates with header/footer partials.

### Start the app locally

```sh
# From the combined-app directory
npm install
node server.js
```
- Open your browser to [http://localhost:3000/](http://localhost:3000/) to view the intro page.
- All main pages (`home`, `team`, `portfolio`, `contact`) are now served as EJS views in `/views`.
- Edit page content in the corresponding `.ejs` files and shared sections in `/views/partials/`.
- Stop the server by pressing `Ctrl+C` in the terminal.

## Deploying to Vercel
- Push your changes to GitHub.
- Connect your repository to Vercel (https://vercel.com/), and Vercel will automatically deploy your app using `server.js` as the entry point.

## Instructions
- The app opens with `intro.html`. After the user clicks anywhere on the intro page, they are taken to `index.html` (the main landing page).
- Edit HTML files as needed, following the roadmap in `Combined_Design.md`.
- Shared sections should be kept as partials in `components/` for maintainability.
- All static assets (images, fonts, etc.) go in `assets/`.
- Deploy by pushing to GitHub; Vercel will serve the static files from this directory.
