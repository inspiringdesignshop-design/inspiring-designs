# Inspire Market — React/Vite storefront

This is a clean React + Vite rebuild of the Inspire Market mock storefront.

## Run it

1. Open the project folder in VS Code.
2. Open the terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local Vite address shown in the terminal.

## Build for production

```bash
npm run build
```

## Facebook order button

Open:

`src/components/CartDrawer.jsx`

Change:

```js
const FACEBOOK_PAGE = "https://www.facebook.com/YOUR_PAGE";
```

to your real Facebook Page URL.

The checkout is intentionally a Facebook handoff rather than an online card-payment system.

## Project structure

- `src/App.jsx` — main app
- `src/main.jsx` — React entry point
- `src/data/products.js` — product catalogue
- `src/pages/Home.jsx` — storefront page
- `src/components/` — reusable React components
- `src/styles.css` — responsive storefront styling

The product catalogue is a starter catalogue. Add the remaining Inspiring Designs concepts to `src/data/products.js` when you want the store to contain the full archive.


## Tawk.to ordering chat

The cart's Chat to Order button opens the Tawk.to widget and pre-fills the visitor's chat input with the current cart contents and estimated total. The customer reviews the message and presses Send.

Tawk.to property: 6ac766c76c363b34c1fbee05
Widget: 1k4deivbu
