# Visual QA loop

1. `npm run dev` in the background (one instance only), http://localhost:4321.
2. `node scripts/screenshot.mjs <url> <label>`: full-page shots at **375 / 768 / 1440 px**, saved to **`screenshots/`** (gitignored; the client can ask for it to be cleared at any time).
3. Shoot Arabic and English for every changed page.
4. Read every screenshot. Fix spacing, alignment, RTL mirroring, overflow, contrast and image crops.
5. Repeat until nothing is left to fix (minimum 2 rounds).
6. Lighthouse mobile on changed pages: 95+ in Performance, Accessibility, Best Practices and SEO.
