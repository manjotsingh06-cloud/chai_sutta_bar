import { Plus } from "lucide-react";
import type { MenuItem } from "../types/menu";
import { useCart } from "../context/CartContext";

export const VegBadge = ({ veg }: { veg: boolean }) => (
  <span title={veg ? "Vegetarian" : "Non-vegetarian"} aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
    className={`grid h-4 w-4 shrink-0 place-items-center rounded-sm border-2 ${veg ? "border-green-600" : "border-red-600"}`}>
    <span className={`h-2 w-2 rounded-full ${veg ? "bg-green-600" : "bg-red-600"}`} />
  </span>
);
export const Price = ({ value }: { value: number }) => (
  <span className="font-bold text-terra"><span className="mr-1 text-[11px] font-normal text-bean/60">Sample</span>₹{value}</span>
);

export default function MenuCard({ item, onOpen }: { item: MenuItem; onOpen: (i: MenuItem) => void }) {
  const { add } = useCart();
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-bean/10 transition hover:-translate-y-1">
      <button onClick={() => onOpen(item)} aria-label={`View details for ${item.name}`} className="overflow-hidden">
        <img src={item.image} alt={item.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110" />
      </button>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2"><h3 className="text-lg font-bold">{item.name}</h3><VegBadge veg={item.vegetarian} /></div>
        <p className="flex-1 text-sm text-charcoal/70">{item.description}</p>
        <div className="flex items-center justify-between"><Price value={item.price} />
          <button className="btn btn-primary !px-4 !py-2 text-sm" onClick={() => add(item)}><Plus size={16} />Add</button></div>
      </div>
    </article>
  );
}
