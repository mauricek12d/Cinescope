import { useEffect, useState } from 'react';
import {
  fetchTopRated,
  fetchNowPlaying,
  fetchUpcoming,
} from '../api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const [nowPlayingUS, setNowPlayingUS] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
  fetchNowPlaying('US').then(setNowPlayingUS);
  fetchTopRated().then(setTopRated);

  const fetchUpcomingWithMinimum = async () => {
    let allMovies = [];
    let page = 1;

    while (allMovies.length < 5 && page <= 5) {
      const data = await fetchUpcoming(page);
      if (!data.length) break;

      const today = new Date();
      const filtered = data.filter((movie) => {
        const releaseDate = new Date(movie.release_date);
        return releaseDate >= today;
      });

      allMovies = [...allMovies, ...filtered];
      page++;
    }

    setUpcoming(allMovies.slice(0, 12)); // show 10–12 results
  };

  fetchUpcomingWithMinimum();
}, []);

  const renderSection = (title, movies) => (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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

  return (
    <div className="p-4 text-white">
      {renderSection('🔥 Now Playing in Theaters (US)', nowPlayingUS)}
      {renderSection('🎯 Top Rated', topRated)}
      {renderSection('📅 Upcoming', upcoming)}
    </div>
  );
}
