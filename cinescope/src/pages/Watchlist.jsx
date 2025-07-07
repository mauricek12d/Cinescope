import { useWatchlistStore } from '../store/watchlistStore';
import { Link } from 'react-router-dom';

export default function Watchlist() {
  const { watchlist, removeMovie } = useWatchlistStore();

  if (!watchlist.length) {
    return <div className="text-white p-4">Your watchlist is empty.</div>;
  }

  return (
    <div className="text-white p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Watchlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {watchlist.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded shadow overflow-hidden">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full"
              />
            </Link>
            <div className="p-2 text-sm">
              <p>{movie.title}</p>
              <button
                onClick={() => removeMovie(movie.id)}
                className="mt-2 px-3 py-1 rounded text-xs bg-red-600 hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
