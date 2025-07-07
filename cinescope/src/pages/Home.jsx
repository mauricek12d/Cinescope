import { useEffect, useState } from 'react';
import { fetchTrending } from '../api';

export default function Home() {
  const [movies, setMovies] = useState([]);

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
          <div key={movie.id} className="bg-gray-800 rounded overflow-hidden shadow">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full"
            />
            <div className="p-2 text-sm">{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
