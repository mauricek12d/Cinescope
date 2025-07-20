const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchTopRated = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchNowPlaying = async (region = 'US') => {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=${region}`);
  const data = await res.json();
  return data.results;
};

export const fetchUpcoming = async (page = 1) => {
  const res = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&region=US&page=${page}`
  );
  const data = await res.json();
  return data.results;
};

export const fetchMoviesByGenre = async (genreId) => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await res.json();
  return data.results;
};
