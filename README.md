# 🎬 Cinescope

**Cinescope** is a sleek, modern movie discovery app built with React, Vite, Tailwind CSS, Zustand, and Framer Motion. It uses the [TMDB API](https://www.themoviedb.org/documentation/api) to display trending movies, top-rated films, upcoming releases, and more—all with smooth animations and a clean UI.

## 🚀 Features

- 🔍 **Live Search**: Search for movies with real-time suggestions
- 📅 **Upcoming Movies**: View upcoming releases (filtered by future dates)
- 📽️ **Now Playing in Theaters (US)**: See movies currently in U.S. theaters
- ⭐ **Top Rated**: Explore the highest-rated movies
- 🎞️ **Movie Details Page**: Watch trailers, view metadata, and add to your Watchlist
- 📌 **Watchlist**: Add or remove favorites using Zustand (local persistent state)
- ✨ **Framer Motion**: Smooth animations and transitions
- 📱 **Responsive Design**: Optimized for desktop and mobile devices

## 🧱 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router DOM](https://reactrouter.com/en/main)
- [TMDB API](https://developer.themoviedb.org/)

## 📸 Preview

> Live Demo: [https://cinescope.vercel.app](https://cinescope.vercel.app)

![screenshot](public/cinescope-preview.png)

## ⚙️ Installation

```bash
git clone https://github.com/mauricek12d/Cinescope.git
cd Cinescope/cinescope
npm install
npm run dev

🔐 Environment Variables
Create a .env file in the cinescope/ folder and add:
VITE_TMDB_API_KEY=your_tmdb_api_key

📁 Project Structure
cinescope/
├── public/
│   └── favicon.png
├── src/
│   ├── api.js
│   ├── components/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   └── Watchlist.jsx
│   ├── store/
│   │   └── watchlistStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── hooks/
│       └── useDebounce.js
├── .env
└── index.html






