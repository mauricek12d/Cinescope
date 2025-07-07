import { useState, useEffect } from 'react';
import { searchMovies } from '../api';
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      const movies = await searchMovies(debouncedQuery);
      setResults(movies);
    };

    fetchResults();
  }, [debouncedQuery]);

  return (
    <div className="text-white p-4 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 mb-6 rounded bg-gray-800 text-white placeholder-gray-400"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="bg-gray-800 rounded shadow hover:shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full"
            />
            <div className="p-2 text-sm">{movie.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
