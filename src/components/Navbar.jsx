import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/books', label: 'Books' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/reading-list', label: 'Reading List' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ favoritesCount, readingListCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white shadow-lg shadow-amber-200">
            B
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-900">BookNest</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">Discover reads</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:flex">
            <span>{favoritesCount} Favorites</span>
          </div>
          <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:flex">
            <span>{readingListCount} List</span>
          </div>
          <Link to="/books" className="hidden items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 sm:inline-flex">
            Explore Books
          </Link>
          <motion.button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.92 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          >
            {menuOpen ? '×' : '☰'}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 px-4 py-3 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:flex-wrap">
              {navItems.map(({ to, label }) => (
                <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-medium ${isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
