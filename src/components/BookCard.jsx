import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BookCard({
  book,
  isFavorite,
  isReadingList,
  onToggleFavorite,
  onToggleReadingList,
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 14 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.25 }}
      className="group min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/70"
    >
      <div className="relative">
        <img src={book.cover} alt={book.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-800">
          {book.category}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="break-words text-xl font-bold text-slate-900">{book.title}</h3>
            <p className="mt-1 text-sm text-slate-500">by {book.author}</p>
          </div>
          <div className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
            ★ {book.rating}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{book.publication}</span>
          <span>{book.pages} pages</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <motion.button
            type="button"
            onClick={() => onToggleFavorite(book.id)}
            whileTap={{ scale: 0.96 }}
            aria-pressed={isFavorite}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
              isFavorite ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isFavorite ? 'Saved' : 'Favorite'}
          </motion.button>
          <motion.button
            type="button"
            onClick={() => onToggleReadingList(book.id)}
            whileTap={{ scale: 0.96 }}
            aria-pressed={isReadingList}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
              isReadingList ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            }`}
          >
            {isReadingList ? 'Added' : 'Read Later'}
          </motion.button>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-extrabold text-slate-900">{book.price}</span>
          <motion.div whileTap={{ scale: 0.96 }}>
            <Link
              to={`/book/${book.id}`}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              View Details
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
