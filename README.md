# Motionly website

Static marketing and support site for the Motionly iOS app, served at [motionly.net](https://motionly.net/).

## Public pages

- `/` — Japanese landing page
- `/ko.html` — Korean landing page
- `/en.html` — English landing page
- `/support.html` — Support information in Japanese, Korean, and English
- `/privacy.html` — Privacy policy in Japanese, Korean, and English
- `/news.html` — Localized updates loaded from `news.json`

## Structure

- `assets/` — Optimized, real Motionly app screenshots and app icon
- `styles/site.css` — Shared responsive design system
- `scripts/site.js` — Shared progressive enhancement
- `scripts/news.js` — Safe localized rendering for `news.json`

The site has no build step, analytics SDK, cookie banner, or third-party web font. Below-the-fold screenshots are lazy-loaded.

## Local preview

Run a static HTTP server from the repository root. Absolute asset paths are intentional because the production site uses the custom root domain `motionly.net`.

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Release checks

Before merging to the publishing branch:

1. Validate HTML, JSON, JavaScript, and internal links.
2. Inspect desktop and mobile layouts.
3. Confirm App Store and support links.
4. Review all product and privacy claims against the current app.
5. Keep `CNAME` unchanged.
