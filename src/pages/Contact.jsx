import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[2rem] bg-amber-50 p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Get in touch</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Contact BookNest</h1>
      </section>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Reach out</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li>📩 hello@booknest.com</li>
            <li>📞 +1 (555) 908-4422</li>
            <li>📍 123 Bloom Street, New York</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-600">Name</span>
              <input required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-300" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-600">Email</span>
              <input type="email" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-300" />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-slate-600">Subject</span>
            <input required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-300" />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-slate-600">Message</span>
            <textarea required rows={5} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-300" />
          </label>

          <button type="submit" className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700">
            Submit
          </button>

          {submitted && (
            <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              Your message has been sent successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
