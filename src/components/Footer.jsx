import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-white">BookNest</Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Discover your next read with curated recommendations, thoughtful categories, and a simple reading experience.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link className="transition hover:text-white" to="/">Home</Link></li>
            <li><Link className="transition hover:text-white" to="/books">Books</Link></li>
            <li><Link className="transition hover:text-white" to="/favorites">Favorites</Link></li>
            <li><Link className="transition hover:text-white" to="/reading-list">Reading List</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a className="transition hover:text-white" href="mailto:hello@booknest.com">hello@booknest.com</a></li>
            <li><a className="transition hover:text-white" href="tel:+15559084422">+1 (555) 908-4422</a></li>
            <li>123 Bloom Street, New York</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © 2026 BookNest. Designed for discovery.
      </div>
    </footer>
  );
}
