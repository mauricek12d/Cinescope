import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">🎬 CineScope</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </nav>
  );
}
