const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchMovieVideos = async (movieId) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  return data.results;
};