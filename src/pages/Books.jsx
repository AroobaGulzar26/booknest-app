import { useMemo, useState } from 'react';
import BookCard from '../components/BookCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import { allCategories, books } from '../data/books';

export default function Books({ favoriteIds, readingListIds, onToggleFavorite, onToggleReadingList }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState(0);

  const visibleBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || book.category === selectedCategory;
      const matchesRating = book.rating >= minRating;

      return matchesSearch && matchesCategory && matchesRating;
    });
  }, [search, selectedCategory, minRating]);

  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[2rem] bg-slate-900 p-7 text-white shadow-lg shadow-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Explore the library</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Find your next favorite read</h1>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80">
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
          <SearchBar value={search} onChange={setSearch} />

          <CategoryFilter
            categories={allCategories}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-600">Rating</span>
            <select
              value={minRating}
              onChange={(event) => setMinRating(Number(event.target.value))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
            >
              <option value={0}>Any rating</option>
              <option value={4.5}>4.5+</option>
              <option value={4.7}>4.7+</option>
              <option value={4.8}>4.8+</option>
            </select>
          </label>

          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedCategory('All');
              setMinRating(0);
            }}
            className="self-end rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Reset
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-600">
            Showing <span className="font-bold text-slate-900">{visibleBooks.length}</span> books
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleBooks.length > 0 ? (
            visibleBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isFavorite={favoriteIds.includes(book.id)}
                isReadingList={readingListIds.includes(book.id)}
                onToggleFavorite={onToggleFavorite}
                onToggleReadingList={onToggleReadingList}
              />
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center md:col-span-2 xl:col-span-3">
              <p className="text-xl font-bold text-slate-900">No books match your filters.</p>
              <p className="mt-2 text-sm text-slate-500">Try a different title, category, or rating.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
