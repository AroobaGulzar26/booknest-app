import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allCategories, books } from '../data/books';

const values = [
  {
    number: '01',
    title: 'Curiosity first',
    description: 'A great reading journey starts with a question. Browse across subjects and follow the ideas that interest you.',
  },
  {
    number: '02',
    title: 'Your library, your way',
    description: 'Keep track of books you love and titles you want to read next, right in your own browser.',
  },
  {
    number: '03',
    title: 'Simple by design',
    description: 'Spend less time sorting through clutter and more time finding a book that feels right for you.',
  },
];

const steps = [
  { title: 'Explore', description: 'Browse the collection or search by a book title or author.' },
  { title: 'Find a fit', description: 'Narrow the collection by category and reader rating, then open a book for its details.' },
  { title: 'Save for later', description: 'Add a title to Favorites or your Reading List and return to it whenever you like.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const averageRating = (books.reduce((total, book) => total + book.rating, 0) / books.length).toFixed(1);
  const stats = [
    { value: books.length, label: 'Books to explore' },
    { value: allCategories.length - 1, label: 'Categories' },
    { value: `${averageRating}/5`, label: 'Average catalogue rating' },
  ];

  return (
    <div className="space-y-14 pb-12 sm:space-y-20">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-12 text-white sm:px-10 sm:py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">A little about us</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          A welcoming place to find your next good read.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          BookNest is a small, calm corner of the internet for readers who enjoy discovering new ideas.
          Explore a handpicked starter collection, learn about each title, and keep the books you like close at hand.
        </p>
        <Link
          to="/books"
          className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        >
          Explore the collection
        </Link>
      </motion.section>

      <section aria-labelledby="mission-heading" className="grid gap-6 md:grid-cols-2">
        <motion.article
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Our mission</p>
          <h2 id="mission-heading" className="mt-3 text-2xl font-black text-slate-900">Make discovery feel easy.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Finding a book should feel like opening a door, not working through a maze. BookNest brings together
            clear book information, useful filters, and personal save lists to help readers move from browsing to
            their next chapter.
          </p>
        </motion.article>
        <motion.article
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-[2rem] border border-slate-200 bg-amber-50 p-7 sm:p-9"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Our purpose</p>
          <h2 className="mt-3 text-2xl font-black text-slate-900">Help every reader follow their curiosity.</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Whether you are looking for practical ideas, a fresh perspective, or a story to enjoy, the collection
            is a starting point. Search, compare, and save titles at your own pace—with no account or sign-in
            required.
          </p>
        </motion.article>
      </section>

      <motion.section
        aria-label="BookNest collection statistics"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {stats.map((item) => (
          <motion.div
            key={item.label}
            variants={cardVariants}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8"
          >
            <p className="text-4xl font-black text-slate-900">{item.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
          </motion.div>
        ))}
      </motion.section>

      <section aria-labelledby="values-heading">
        <div className="mb-7 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">What matters to us</p>
          <h2 id="values-heading" className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            A thoughtful reading experience, from the first click.
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-5 md:grid-cols-3"
        >
          {values.map((value) => (
            <motion.article
              key={value.number}
              variants={cardVariants}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-amber-600">{value.number}</span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section aria-labelledby="how-heading" className="rounded-[2rem] bg-slate-100 p-6 sm:p-10">
        <div className="mb-7 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">How BookNest works</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-black tracking-tight text-slate-900">Three simple steps to a new read.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl bg-white p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-100 text-sm font-bold text-amber-800">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 sm:flex-row sm:items-center sm:p-9">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Ready when you are</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">Your next favorite could be one page away.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Browse the books and save anything that catches your eye.</p>
        </div>
        <Link
          to="/books"
          className="inline-flex shrink-0 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Browse books
        </Link>
      </section>
    </div>
  );
}
