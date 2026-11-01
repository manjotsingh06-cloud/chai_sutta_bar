# Chai Sutta Bar — Mullanpur Dakha (static café website)

> **This project is a frontend/static demonstration. Login, signup, cart and checkout are simulated locally and do not create real accounts or process real orders.**

Built with React, TypeScript, Vite, Tailwind CSS v4 and Lucide icons. No database, backend, API or secrets.

## Important notes
- **Menu prices are SAMPLE values** unless you replace them with the café's real menu (`src/data/menu.ts`).
- **Business details are placeholders.** Phone, email, hours, Maps link, Instagram and Facebook are blank in `src/data/business.ts`. Fill in only verified details. Footer social icons activate once a URL is added; the Directions button opens a Maps search until `mapsUrl` is set.
- **Images are placeholder illustrations** (`public/images/*.svg`). Replace them with real photos, keeping the file names or updating `menu.ts` / `gallery.ts`.
- **Demo login:** `demo@chaicafe.com` / `demo123`. Data lives only in the current browser session (sessionStorage); passwords are never stored.
- `public/sitemap.xml` and `public/robots.txt` contain `YOUR-DOMAIN.vercel.app`. Replace it with your real domain after deploying.
- This project was generated without running `npm install` or `npm run build`. Run them once locally and fix anything reported before deploying.

## Run locally
1. Install Node.js 18+ from nodejs.org.
2. Open this folder in a terminal.
3. `npm install`
4. `npm run dev` (opens at http://localhost:5173)
5. `npm run build` creates the production build in `dist/` (`npm run preview` to check it).

## Deploy to Vercel
1. Create a GitHub repository.
2. `git init && git add . && git commit -m "Initial commit"`, then add the remote and `git push`.
3. On vercel.com choose **Add New → Project** and import the repository.
4. Keep the detected Vite settings (build `npm run build`, output `dist`) and click **Deploy**.

No environment variables are needed. `vercel.json` makes refreshes work on routes like `/menu`.

## Structure
```
src/
  components/  Navbar, Footer, Hero, MenuCard, CategoryFilter, CartItem, FoodModal, Gallery, ProtectedDemoRoute
  pages/       Home, Menu, About, Gallery, Contact, Login, Signup, Profile, Cart, Checkout, OrderConfirmation
  data/        menu.ts, business.ts, gallery.ts   <- edit these to update the site
  context/     CartContext.tsx, DemoAuthContext.tsx
  types/       menu.ts
public/        images/, favicon.svg, robots.txt, sitemap.xml
```
