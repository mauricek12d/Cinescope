import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';
import Watchlist from './pages/Watchlist';
import Search from './pages/Search';

export default function App() {
  console.log('✅ App component loaded');
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}
