import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { books, featuredBooks } from '../data/books';

const categories = ['Self Development', 'Productivity', 'Finance', 'History'];

export default function Home({ favoriteIds, readingListIds, onToggleFavorite, onToggleReadingList }) {
  return (
    <div className="space-y-16 pb-10">
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-200">
        <div className="grid items-center gap-10 px-6 py-12 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
              Curated for curious readers
            </span>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-5xl">
              Discover books that spark your next great idea.
            </h1>
            <p className="max-w-lg text-base text-slate-300 md:text-lg">
              Explore trending reads, save favorites, build a reading list, and find your next obsession with BookNest.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/books"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300"
              >
                Explore Books
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {featuredBooks.map((book, index) => (
              <div
                key={book.id}
                className={`overflow-hidden rounded-3xl bg-white/5 p-2 backdrop-blur-sm ${index === 1 ? 'translate-y-8' : ''}`}
              >
                <img src={book.cover} alt={book.title} className="h-52 w-full rounded-2xl object-cover" />
                <div className="px-2 pb-2 pt-4">
                  <p className="text-sm text-slate-300">{book.category}</p>
                  <h2 className="mt-1 text-lg font-bold text-white">{book.title}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="grid gap-5 md:grid-cols-3"
      >
        {[
          { value: '8k+', label: 'Readers' },
          { value: '250+', label: 'Curated books' },
          { value: '4.9/5', label: 'Average rating' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/80">
            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
          </div>
        ))}
      </motion.section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Featured books</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Trending this week</h2>
          </div>
          <Link to="/books" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            View all →
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 md:grid-cols-3"
        >
          {featuredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFavorite={favoriteIds.includes(book.id)}
              isReadingList={readingListIds.includes(book.id)}
              onToggleFavorite={onToggleFavorite}
              onToggleReadingList={onToggleReadingList}
            />
          ))}
        </motion.div>
      </section>

      <section className="rounded-[2rem] bg-slate-100 p-6 md:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Popular categories</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Browse by interest</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {categories.map((category) => {
            const count = books.filter((book) => book.category === category).length;

            return (
              <div key={category} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{count} books</p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{category}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Smart recommendations',
            description: 'Find books tailored to your mood, goals, and reading style without the noise.',
          },
          {
            title: 'Build your library',
            description: 'Curate favorites and reading lists that stick with you across every session.',
          },
          {
            title: 'Designed for focus',
            description: 'A clean, responsive experience that works beautifully on desktop, tablet, and mobile.',
          },
        ].map((feature) => (
          <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-amber-100" />
            <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
