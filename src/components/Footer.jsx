export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-extrabold tracking-tight text-white">BookNest</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Discover your next read with curated recommendations, thoughtful categories, and a simple reading experience.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>Home</li>
            <li>Books</li>
            <li>Favorites</li>
            <li>Reading List</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>hello@booknest.com</li>
            <li>+1 (555) 908-4422</li>
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
