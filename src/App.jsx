import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { books } from './data/books';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Favorites from './pages/Favorites';
import ReadingList from './pages/ReadingList';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function readBookIds(storageKey) {
  try {
    const value = localStorage.getItem(storageKey);
    if (value === null) return [];

    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) {
      console.error(`Stored value for "${storageKey}" must be an array.`);
      return [];
    }

    const validIds = parsed.filter(
      (id) => Number.isInteger(id) && books.some((book) => book.id === id),
    );
    if (validIds.length !== parsed.length) {
      console.warn(`Invalid book IDs were removed from "${storageKey}".`);
    }

    return [...new Set(validIds)];
  } catch (error) {
    console.error(`Unable to read "${storageKey}" from localStorage.`, error);
    return [];
  }
}

function persistBookIds(storageKey, bookIds) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(bookIds));
  } catch (error) {
    console.error(`Unable to save "${storageKey}" to localStorage.`, error);
  }
}

function App() {
  const [favoriteIds, setFavoriteIds] = useState(() => readBookIds('booknest-favorites'));
  const [readingListIds, setReadingListIds] = useState(() => readBookIds('booknest-reading-list'));

  useEffect(() => {
    persistBookIds('booknest-favorites', favoriteIds);
  }, [favoriteIds]);

  useEffect(() => {
    persistBookIds('booknest-reading-list', readingListIds);
  }, [readingListIds]);

  const toggleFavorite = (bookId) => {
    setFavoriteIds((current) =>
      current.includes(bookId)
        ? current.filter((id) => id !== bookId)
        : [...current, bookId],
    );
  };

  const toggleReadingList = (bookId) => {
    setReadingListIds((current) =>
      current.includes(bookId)
        ? current.filter((id) => id !== bookId)
        : [...current, bookId],
    );
  };

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-slate-50 text-slate-800">
          <Navbar favoritesCount={favoriteIds.length} readingListCount={readingListIds.length} />

          <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <AnimatedRoutes
              favoriteIds={favoriteIds}
              readingListIds={readingListIds}
              onToggleFavorite={toggleFavorite}
              onToggleReadingList={toggleReadingList}
            />
          </main>

          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
}

function AnimatedRoutes({ favoriteIds, readingListIds, onToggleFavorite, onToggleReadingList }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Home
                favoriteIds={favoriteIds}
                readingListIds={readingListIds}
                onToggleFavorite={onToggleFavorite}
                onToggleReadingList={onToggleReadingList}
              />
            }
          />
          <Route
            path="/books"
            element={
              <Books
                favoriteIds={favoriteIds}
                readingListIds={readingListIds}
                onToggleFavorite={onToggleFavorite}
                onToggleReadingList={onToggleReadingList}
              />
            }
          />
          <Route
            path="/book/:id"
            element={
              <BookDetails
                favoriteIds={favoriteIds}
                readingListIds={readingListIds}
                onToggleFavorite={onToggleFavorite}
                onToggleReadingList={onToggleReadingList}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteIds={favoriteIds}
                readingListIds={readingListIds}
                onToggleFavorite={onToggleFavorite}
                onToggleReadingList={onToggleReadingList}
              />
            }
          />
          <Route
            path="/reading-list"
            element={
              <ReadingList
                favoriteIds={favoriteIds}
                readingListIds={readingListIds}
                onToggleFavorite={onToggleFavorite}
                onToggleReadingList={onToggleReadingList}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
