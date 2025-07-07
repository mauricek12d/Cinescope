import { create } from 'zustand';

export const useWatchlistStore = create((set) => ({
  watchlist: [],
  addMovie: (movie) =>
    set((state) => ({
      watchlist: [...state.watchlist, movie],
    })),
  removeMovie: (id) =>
    set((state) => ({
      watchlist: state.watchlist.filter((m) => m.id !== id),
    })),
}));
