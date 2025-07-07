import { create } from 'zustand';

export const useWatchlistStore = create((set) => ({
  watchlist: [],
  
  addMovie: (movie) =>
    set((state) => ({
      watchlist: [...state.watchlist, movie].filter(
        (m, i, arr) => arr.findIndex((x) => x.id === m.id) === i
      ),
    })),

  removeMovie: (id) =>
    set((state) => ({
      watchlist: state.watchlist.filter((m) => m.id !== id),
    })),
}));
