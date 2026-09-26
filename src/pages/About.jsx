export default function About() {
  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[2rem] bg-slate-900 p-7 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Our story</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">About BookNest</h1>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Mission</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            BookNest helps readers discover thoughtful books, build personal recommendations, and make reading part of their everyday life.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Purpose</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Our goal is simple: create a clean, inspiring place to explore diverse topics, find meaning in reading, and keep momentum going.
          </p>
        </div>
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { value: '8', label: 'Curated titles' },
          { value: '7', label: 'Book categories' },
          { value: '4.8/5', label: 'Average book rating' },
        ].map((item) => (
          <div key={item.label} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-4xl font-black text-slate-900">{item.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
