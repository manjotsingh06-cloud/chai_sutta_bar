import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";
import FoodModal from "../components/FoodModal";
import { categories, menu } from "../data/menu";
import type { MenuItem } from "../types/menu";

type Sort = "popular" | "low" | "high" | "az";

export default function Menu() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState<Sort>("popular");
  const [sel, setSel] = useState<MenuItem | null>(null);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const f = menu.filter((m) => (cat === "All" || m.category === cat) && (`${m.name} ${m.description}`).toLowerCase().includes(s));
    const by: Record<Sort, (a: MenuItem, b: MenuItem) => number> = {
      popular: (a, b) => Number(b.popular) - Number(a.popular),
      low: (a, b) => a.price - b.price,
      high: (a, b) => b.price - a.price,
      az: (a, b) => a.name.localeCompare(b.name),
    };
    return [...f].sort(by[sort]);
  }, [q, cat, sort]);

  return (
    <section className="page">
      <h1 className="text-4xl font-extrabold">Our Menu</h1>
      <p className="note mb-6 mt-3 inline-block">Demo menu with sample prices. Edit src/data/menu.ts to use the café's real menu.</p>
      <div className="mb-4 flex flex-wrap gap-3">
        <div className="relative min-w-56 flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-3.5 text-charcoal/40" size={18} />
          <input className="input pl-10" type="search" placeholder="Search by name or description" aria-label="Search menu" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <select className="input !w-auto" aria-label="Sort menu" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
          <option value="popular">Popular</option><option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option><option value="az">Alphabetical</option>
        </select>
      </div>
      <CategoryFilter categories={categories} active={cat} onChange={setCat} />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((m) => <MenuCard key={m.id} item={m} onOpen={setSel} />)}
      </div>
      {!list.length && <p className="mt-10 text-center text-charcoal/70">No items match your search. Try another word or category.</p>}
      {sel && <FoodModal item={sel} onClose={() => setSel(null)} />}
    </section>
  );
}
