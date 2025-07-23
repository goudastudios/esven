# Combined Esven App

This folder contains the new combined HTML app for Esven, built from selected elements of the three design concepts as outlined in `docs/Combined_Design.md`.

## Structure
- `intro.html` — Entry intro page (app opens here)
- `index.html` — Main landing page (accessed after clicking anywhere on intro page)
- `portfolio.html` — Portfolio showcase
- `team.html` — Team page
- `contact.html` — Contact page
- `assets/` — Images, icons, and other media
- `css/` — CSS files for global and page-specific styles
- `components/` — HTML partials for shared sections (header, footer, etc.)

## Starting & Stopping the App Locally

This app uses Node.js/Express for local development, matching the esven-revamp setup.

### Start the app locally

```sh
# From the combined-app directory
npm install express
node server.js
```
- Open your browser to [http://localhost:3000/](http://localhost:3000/) to view the intro page.
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
