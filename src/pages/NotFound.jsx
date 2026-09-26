import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl py-16 text-center sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">404 · Page not found</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
        This page wandered off.
      </h1>
      <p className="mt-4 text-slate-600">Let’s get you back to a good story.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        Return home
      </Link>
    </section>
  );
}
