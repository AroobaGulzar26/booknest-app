export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-600">Category</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Filter books by category"
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
}
