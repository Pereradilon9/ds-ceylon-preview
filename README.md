# DS Ceylon Adventures — website design preview

A design prototype for DS Ceylon Adventures' private round tours of Sri Lanka. It's a static site with no build step, so open `index.html` or host the folder as-is.

## What's inside

| File | Purpose |
|---|---|
| `index.html` | The whole site: layout, styles and behaviour |
| `i18n.js` | Translations (EN, DE, FR, ES, RU, ZH, HI) and currency conversion |
| `vendor/` | MapLibre GL 4.7.1, the 3D map library, stored locally (identical to the official npm release) |
| `img/` | Photography, plus `photo-credits.json` |

## Language and currency

- On first visit the site picks a language from the browser's language list. It picks a currency from the browser's region, or from the time zone if no region is set.
- Visitors can change both from the globe button in the header. Their choice is remembered on that device.
- **Currency rates are sample values for the preview.** Bookings are always quoted in US dollars, and converted prices are shown with "≈". To use live rates, fill in `loadLiveRates()` in `i18n.js` with a call to an exchange-rate API.
- Only the interface is translated. Itinerary descriptions stay in English until professional translations are added.

## Credits and terms

- Photos marked in the footer are from Wikimedia Commons under their stated Creative Commons licences. Keep the credit line if you reuse them. All other photos were supplied by DS Ceylon Adventures.
- Map imagery: Esri World Imagery. Elevation: Mapzen Terrain Tiles on AWS. For a production site, use a map provider account (for example MapTiler or ArcGIS) so usage stays within their terms.
- Fonts: Geist and Geist Mono, from Google Fonts.

## Hosting on GitHub Pages

1. Create a new public repository on github.com.
2. Upload the contents of this folder (not the folder itself) to the repository root.
3. Go to **Settings → Pages**, set **Source: Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.
