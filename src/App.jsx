import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Favorites from './pages/Favorites';
import ReadingList from './pages/ReadingList';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const saved = localStorage.getItem('booknest-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [readingListIds, setReadingListIds] = useState(() => {
    const saved = localStorage.getItem('booknest-reading-list');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('booknest-favorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    localStorage.setItem('booknest-reading-list', JSON.stringify(readingListIds));
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
                  onToggleFavorite={toggleFavorite}
                  onToggleReadingList={toggleReadingList}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
