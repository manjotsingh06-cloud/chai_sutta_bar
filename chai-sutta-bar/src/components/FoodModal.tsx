import { useEffect, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import type { MenuItem } from "../types/menu";
import { useCart } from "../context/CartContext";
import { Price, VegBadge } from "./MenuCard";

export default function FoodModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={item.name} onClick={(e) => e.stopPropagation()}
        className="animate-pop relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl bg-cream">
        <button onClick={onClose} aria-label="Close" autoFocus className="absolute right-3 top-3 rounded-full bg-white p-2 shadow"><X size={18} /></button>
        <img src={item.image} alt={item.name} className="aspect-[4/3] w-full object-cover" />
        <div className="space-y-3 p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <span className="flex items-center gap-1.5 text-sm"><VegBadge veg={item.vegetarian} />{item.vegetarian ? "Vegetarian" : "Non-veg"}</span>
          </div>
          <span className="inline-block rounded-full bg-sand px-3 py-0.5 text-sm text-bean">{item.category}</span>
          <p className="text-charcoal/80">{item.description}</p>
          <Price value={item.price} />
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3 rounded-full bg-sand p-1">
              <button aria-label="Decrease quantity" className="rounded-full bg-white p-2" onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
              <span className="w-6 text-center font-bold" aria-live="polite">{qty}</span>
              <button aria-label="Increase quantity" className="rounded-full bg-white p-2" onClick={() => setQty(qty + 1)}><Plus size={16} /></button>
            </div>
            <button className="btn btn-primary" onClick={() => { add(item, qty); onClose(); }}>Add to Cart · ₹{item.price * qty}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
