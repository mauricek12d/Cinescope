import { useEffect, useState } from 'react';
import { fetchTrending } from '../api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const [movies, setMovies] = useState([]);
  console.log('✅ Home component loaded');

  useEffect(() => {
    fetchTrending().then((data) => {
      console.log('Fetched movies:', data);
      setMovies(data);
    });
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Trending Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to={`/movie/${movie.id}`}
              className="bg-gray-800 rounded overflow-hidden shadow block hover:scale-105 transform transition-transform duration-200"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full"
              />
              <div className="p-2 text-sm">{movie.title}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
