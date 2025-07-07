import { useWatchlistStore } from '../store/watchlistStore';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const { watchlist, addMovie, removeMovie } = useWatchlistStore();
  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full"
        />
      </Link>
      <div className="p-2 text-sm">
        <h3 className="text-white font-bold">{movie.title}</h3>
        <button
          onClick={() =>
            isInWatchlist ? removeMovie(movie.id) : addMovie(movie)
          }
          className={`mt-2 px-3 py-1 rounded text-xs ${
            isInWatchlist ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </div>
  );
}
