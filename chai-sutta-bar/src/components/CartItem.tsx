import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartLine } from "../types/menu";
import { useCart } from "../context/CartContext";

export default function CartItem({ line }: { line: CartLine }) {
  const { setQty, remove } = useCart();
  const { item, qty } = line;
  return (
    <li className="flex flex-wrap items-center gap-4 border-b border-sand py-4 last:border-0">
      <img src={item.image} alt={item.name} className="h-16 w-16 rounded-2xl object-cover" />
      <div className="min-w-32 flex-1"><p className="font-bold">{item.name}</p><p className="text-sm text-charcoal/60">₹{item.price} each (sample)</p></div>
      <div className="flex items-center gap-2 rounded-full bg-sand p-1">
        <button aria-label={`Decrease ${item.name}`} className="rounded-full bg-white p-1.5" onClick={() => setQty(item.id, qty - 1)}><Minus size={14} /></button>
        <span className="w-6 text-center font-bold">{qty}</span>
        <button aria-label={`Increase ${item.name}`} className="rounded-full bg-white p-1.5" onClick={() => setQty(item.id, qty + 1)}><Plus size={14} /></button>
      </div>
      <p className="w-20 text-right font-bold text-terra">₹{item.price * qty}</p>
      <button aria-label={`Remove ${item.name}`} className="rounded-full p-2 text-charcoal/50 hover:bg-sand hover:text-terra" onClick={() => remove(item.id)}><Trash2 size={18} /></button>
    </li>
  );
}
