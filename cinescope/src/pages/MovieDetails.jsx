import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useWatchlistStore } from '../store/watchlistStore';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { watchlist, addMovie, removeMovie } = useWatchlistStore();

  const isInWatchlist = watchlist.some((m) => m.id === Number(id));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`);
      const data = await res.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div className="text-white p-4">Loading...</div>;

  const trailer = movie.videos?.results?.find(
    (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
  );

  return (
    <div className="text-white p-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded mb-4"
        />
        <button
          onClick={() =>
            isInWatchlist ? removeMovie(movie.id) : addMovie(movie)
          }
          className={`w-full px-4 py-2 rounded font-semibold ${
            isInWatchlist ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-400 mb-4">{movie.overview}</p>

        <div className="mb-2">
          <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(', ')}
        </div>
        <div className="mb-2">
          <strong>Release Date:</strong> {movie.release_date}
        </div>

        {typeof movie.vote_average === 'number' && (
          <div className="mb-4">
            <strong>Rating:</strong> {movie.vote_average.toFixed(1)} 
          </div>
        )}
{trailer && (
  <div className="w-full mt-4">
    <iframe
      className="w-full rounded"
      style={{ height: '400px' }}
      src={`https://www.youtube.com/embed/${trailer.key}`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="Trailer"
    />
  </div>
)}


        
      </div>
    </div>
  );
}
