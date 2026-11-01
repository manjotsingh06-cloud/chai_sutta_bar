interface Props { categories: string[]; active: string; onChange: (c: string) => void; }

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2" role="group" aria-label="Filter by category">
      {categories.map((c) => (
        <button key={c} aria-pressed={c === active} onClick={() => onChange(c)}
          className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${c === active ? "border-bean bg-bean text-cream" : "border-sand bg-white hover:border-terra"}`}>
          {c}
        </button>
      ))}
    </div>
  );
}
