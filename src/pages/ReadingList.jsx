import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { books } from '../data/books';

export default function ReadingList({ favoriteIds, readingListIds, onToggleFavorite, onToggleReadingList }) {
  const readingBooks = books.filter((book) => readingListIds.includes(book.id));

  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[2rem] bg-emerald-50 p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Plan your next read</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Reading List</h1>
      </section>

      {readingBooks.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-xl font-bold text-slate-900">No books queued for later.</p>
          <Link to="/books" className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white">
            Pick a title
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          <p className="text-sm text-slate-600">
            You have <span className="font-bold text-slate-900">{readingBooks.length}</span>{' '}
            {readingBooks.length === 1 ? 'book' : 'books'} queued to read.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {readingBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isFavorite={favoriteIds.includes(book.id)}
                isReadingList={true}
                onToggleFavorite={onToggleFavorite}
                onToggleReadingList={onToggleReadingList}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
