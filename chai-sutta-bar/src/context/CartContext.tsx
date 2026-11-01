import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartLine, DemoOrder, MenuItem } from "../types/menu";

interface CartCtx {
  lines: CartLine[];
  totalQty: number;
  subtotal: number;
  orders: DemoOrder[];
  lastOrder: DemoOrder | null;
  add: (item: MenuItem, qty?: number) => void;
  setQty: (id: number, qty: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  placeOrder: (name: string, mode: string) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [orders, setOrders] = useState<DemoOrder[]>([]);
  const totalQty = lines.reduce((a, l) => a + l.qty, 0);
  const subtotal = lines.reduce((a, l) => a + l.qty * l.item.price, 0);

  const add = (item: MenuItem, qty = 1) =>
    setLines((p) => p.some((l) => l.item.id === item.id)
      ? p.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + qty } : l))
      : [...p, { item, qty }]);
  const setQty = (id: number, qty: number) =>
    setLines((p) => p.map((l) => (l.item.id === id ? { ...l, qty } : l)).filter((l) => l.qty > 0));
  const remove = (id: number) => setLines((p) => p.filter((l) => l.item.id !== id));
  const clear = () => setLines([]);
  const placeOrder = (name: string, mode: string) => {
    setOrders((p) => [{ id: `DEMO-${1024 + p.length}`, lines, total: subtotal, name, mode }, ...p]);
    setLines([]);
  };

  return (
    <Ctx.Provider value={{ lines, totalQty, subtotal, orders, lastOrder: orders[0] ?? null, add, setQty, remove, clear, placeOrder }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
