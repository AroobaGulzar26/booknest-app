import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { books } from '../data/books';

export default function Favorites({ favoriteIds, readingListIds, onToggleFavorite, onToggleReadingList }) {
  const favoriteBooks = books.filter((book) => favoriteIds.includes(book.id));

  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[2rem] bg-rose-50 p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Your library</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Favorites</h1>
      </section>

      {favoriteBooks.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-xl font-bold text-slate-900">No favorite books yet.</p>
          <Link to="/books" className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white">
            Explore books
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {favoriteBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFavorite={true}
              isReadingList={readingListIds.includes(book.id)}
              onToggleFavorite={onToggleFavorite}
              onToggleReadingList={onToggleReadingList}
            />
          ))}
        </div>
      )}
    </div>
  );
}
