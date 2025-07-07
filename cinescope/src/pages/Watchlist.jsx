import { useWatchlistStore } from '../store/watchlistStore';
import MovieCard from '../components/MovieCard';

export default function Watchlist() {
  const { watchlist } = useWatchlistStore();

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Your Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
