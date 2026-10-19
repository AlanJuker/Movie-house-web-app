# Movie House

[![CI](https://github.com/AlanJuker/Movie-house-web-app/actions/workflows/ci.yml/badge.svg)](https://github.com/AlanJuker/Movie-house-web-app/actions/workflows/ci.yml)

A movie store front-end built with React: browse a catalogue, watch trailers, and
buy or rent films through a cart that survives page reloads.

**Live demo:** https://movie-house-react.vercel.app

## Features

- **Home carousel** of featured titles (react-slick)
- **Catalogue with search** to filter movies by title
- **Details page** with poster, synopsis, cast and an embedded YouTube trailer
- **Buy or rent** — separate cart and rental lists, with quantities and rental
  days adjustable on the checkout page
- **Persistent cart** stored in `localStorage` through a small `useLocalStorage` hook
- Confirmation dialogs with SweetAlert2

## Stack

React 18 · Vite · React Router 6 · Material UI 5 · react-slick · react-youtube · SweetAlert2 · Vitest

## Structure

```
src/
├── api/          # Context providers for movie and image data (mocked)
├── hooks/        # useCartItems, useRentalItems, useLocalStorage
├── containers/   # Pages: Home, Movies, Details, Transaction
├── components/   # Layout, carousel, search bar, cards, details widgets
└── config/       # Routes
```

Movie data is mocked in `src/api/useMovieApi.jsx`; swapping it for a real API
(e.g. TMDB) only touches that provider.

## Run locally

```bash
npm install
npm run dev    # http://localhost:5173
npm test
```

## License

MIT
