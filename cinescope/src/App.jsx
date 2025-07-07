import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}
