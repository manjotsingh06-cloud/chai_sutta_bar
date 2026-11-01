import { useState, type ChangeEvent, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useDemoAuth } from "../context/DemoAuthContext";

type Form = { name: string; phone: string; email: string; mode: string; note: string };
type El = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export default function Checkout() {
  const { lines, subtotal, placeOrder } = useCart();
  const { user } = useDemoAuth();
  const nav = useNavigate();
  const [f, setF] = useState<Form>({ name: user?.name ?? "", phone: "", email: user?.email ?? "", mode: "Pickup", note: "" });
  const [err, setErr] = useState("");
  if (!lines.length) return <Navigate to="/cart" replace />;
  const set = (k: keyof Form) => (e: ChangeEvent<El>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) return setErr("Please enter your name and phone number.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return setErr("Enter a valid email address.");
    placeOrder(f.name.trim(), f.mode);
    nav("/order-confirmation");
  };
  return (
    <section className="page grid gap-8 md:grid-cols-5">
      <form onSubmit={submit} noValidate className="panel space-y-4 md:col-span-3">
        <h1 className="text-3xl font-bold">Demo Checkout</h1>
        <p className="note">This is a demo. Nothing is sent to the café and no payment is taken.</p>
        <label className="block text-sm font-medium">Name<input className="input mt-1" value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium">Phone<input className="input mt-1" type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" /></label>
          <label className="block text-sm font-medium">Email<input className="input mt-1" type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
        </div>
        <label className="block text-sm font-medium">Pickup / Visit<select className="input mt-1" value={f.mode} onChange={set("mode")}><option>Pickup</option><option>Dine-in visit</option></select></label>
        <label className="block text-sm font-medium">Special instructions<textarea className="input mt-1" rows={3} value={f.note} onChange={set("note")} /></label>
        {err && <p role="alert" className="text-sm text-red-700">{err}</p>}
        <button className="btn btn-primary w-full">Place Demo Order</button>
      </form>
      <aside className="panel h-fit md:col-span-2">
        <h2 className="text-2xl font-bold">Order Summary</h2>
        <ul className="mt-3 space-y-2">{lines.map((l) => <li key={l.item.id} className="flex justify-between"><span>{l.item.name} × {l.qty}</span><b>₹{l.item.price * l.qty}</b></li>)}</ul>
        <p className="mt-4 flex justify-between border-t border-sand pt-4 text-xl font-bold">Total <span className="text-terra">₹{subtotal}</span></p>
        <p className="mt-1 text-xs text-charcoal/60">Sample prices.</p>
      </aside>
    </section>
  );
}
