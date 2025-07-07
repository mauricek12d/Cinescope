import { useWatchlistStore } from '../store/watchlistStore';

export default function MovieCard({ movie }) {
  const { watchlist, addMovie, removeMovie } = useWatchlistStore();
  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  const toggleWatchlist = () => {
    isInWatchlist ? removeMovie(movie.id) : addMovie(movie);
  };

  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full"
      />
      <div className="p-2 text-sm text-white">
        <h3 className="font-bold">{movie.title}</h3>
        <button
          onClick={toggleWatchlist}
          className={`mt-2 px-3 py-1 rounded text-sm ${
            isInWatchlist ? 'bg-red-600' : 'bg-blue-600'
          }`}
        >
          {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </div>
  );
}
