export const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Development',
    rating: 4.9,
    price: '$18.99',
    cover:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    description:
      'A practical guide to building better habits and breaking bad ones through small, sustainable changes that compound over time.',
    publication: 'Avery',
    year: 2018,
    pages: 320,
    highlights: ['Tiny habits', 'Identity-based goals', 'Progress tracking'],
  },
  {
    id: 2,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Finance',
    rating: 4.8,
    price: '$16.50',
    cover:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    description:
      'An engaging look at how behavior, patience, and personal experiences shape financial decisions and long-term wealth.',
    publication: 'Harriman House',
    year: 2020,
    pages: 256,
    highlights: ['Behavior over intelligence', 'Long-term thinking', 'Risk and patience'],
  },
  {
    id: 3,
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Productivity',
    rating: 4.7,
    price: '$17.25',
    cover:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
    description:
      'A compelling argument for focused work in a distracted world, with practical methods to protect attention and improve output.',
    publication: 'Grand Central Publishing',
    year: 2016,
    pages: 296,
    highlights: ['Focus', 'Digital minimalism', 'Career advantage'],
  },
  {
    id: 4,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'History',
    rating: 4.9,
    price: '$19.00',
    cover:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
    description:
      'A sweeping narrative of how humans evolved, built societies, and shaped the world through culture, technology, and imagination.',
    publication: 'Harper',
    year: 2015,
    pages: 464,
    highlights: ['Human evolution', 'Civilization', 'Big history'],
  },
  {
    id: 5,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    rating: 4.6,
    price: '$15.75',
    cover:
      'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=800&q=80',
    description:
      'A lyrical journey about following purpose, embracing uncertainty, and discovering the extraordinary in everyday life.',
    publication: 'HarperOne',
    year: 1988,
    pages: 208,
    highlights: ['Purpose', 'Personal legend', 'Adventure'],
  },
  {
    id: 6,
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Memoir',
    rating: 4.8,
    price: '$17.90',
    cover:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    description:
      'A memoir about survival, self-discovery, and the transformative power of education in the face of hardship.',
    publication: 'Random House',
    year: 2018,
    pages: 352,
    highlights: ['Resilience', 'Education', 'Identity'],
  },
  {
    id: 7,
    title: 'Ikigai',
    author: 'Héctor García & Francesc Miralles',
    category: 'Wellness',
    rating: 4.7,
    price: '$14.99',
    cover:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
    description:
      'A thoughtful guide to living with purpose, joy, and longevity inspired by the blue zones of Japan.',
    publication: 'Penguin Life',
    year: 2017,
    pages: 208,
    highlights: ['Purpose', 'Longevity', 'Everyday joy'],
  },
  {
    id: 8,
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    category: 'Self Development',
    rating: 4.6,
    price: '$16.90',
    cover:
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=800&q=80',
    description:
      'Explains how habits work in our lives and how recognizing your routines can help create lasting positive change.',
    publication: 'Random House',
    year: 2012,
    pages: 371,
    highlights: ['Habit loops', 'Behavior science', 'Practical change'],
  },
];

export const featuredBooks = books.slice(0, 3);

export const allCategories = ['All', ...new Set(books.map((book) => book.category))];
