import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  favoriteIds={favoriteIds}
                  readingListIds={readingListIds}
                  onToggleFavorite={toggleFavorite}
                  onToggleReadingList={toggleReadingList}
                />
              }
            />
            <Route
              path="/books"
              element={
                <Books
                  favoriteIds={favoriteIds}
                  readingListIds={readingListIds}
                  onToggleFavorite={toggleFavorite}
                  onToggleReadingList={toggleReadingList}
                />
              }
            />
            <Route
              path="/book/:id"
              element={
                <BookDetails
                  favoriteIds={favoriteIds}
                  readingListIds={readingListIds}
                  onToggleFavorite={toggleFavorite}
                  onToggleReadingList={toggleReadingList}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favoriteIds={favoriteIds}
                  readingListIds={readingListIds}
                  onToggleFavorite={toggleFavorite}
                  onToggleReadingList={toggleReadingList}
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
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
