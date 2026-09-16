import { Link, useParams } from 'react-router-dom';
import { books } from '../data/books';

export default function BookDetails({
  favoriteIds,
  readingListIds,
  onToggleFavorite,
  onToggleReadingList,
}) {
  const { id } = useParams();
  const book = books.find((entry) => entry.id === Number(id));

  if (!book) {
    return (
      <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center">
        <p className="text-xl font-bold text-slate-900">Book not found</p>
        <Link to="/books" className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white">
          Return to books
        </Link>
      </div>
    );
  }

  const isFavorite = favoriteIds.includes(book.id);
  const isReadingList = readingListIds.includes(book.id);

  return (
    <div className="space-y-8 pb-12">
      <Link to="/books" className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900">
        ← Back to Books
      </Link>

      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/80">
        <div className="grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
            <img src={book.cover} alt={book.title} className="h-full w-full object-cover" />
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
                {book.category}
              </span>
              <span className="text-lg font-bold text-amber-600">★ {book.rating}</span>
            </div>

            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900">{book.title}</h1>
              <p className="mt-2 text-lg text-slate-500">by {book.author}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-100 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Published</p>
                <p className="mt-2 font-bold text-slate-900">{book.year}</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Pages</p>
                <p className="mt-2 font-bold text-slate-900">{book.pages}</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Format</p>
                <p className="mt-2 font-bold text-slate-900">Paperback</p>
              </div>
            </div>

            <p className="text-base leading-7 text-slate-600">{book.description}</p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onToggleFavorite(book.id)}
                className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                  isFavorite ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
              <button
                type="button"
                onClick={() => onToggleReadingList(book.id)}
                className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                  isReadingList ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                {isReadingList ? 'Remove from Reading List' : 'Add to Reading List'}
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {book.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
