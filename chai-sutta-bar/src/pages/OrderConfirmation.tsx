import { Link, Navigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function OrderConfirmation() {
  const { lastOrder: o } = useCart();
  if (!o) return <Navigate to="/menu" replace />;
  return (
    <section className="page">
      <div className="panel animate-pop mx-auto max-w-lg space-y-4 text-center">
        <CheckCircle2 className="mx-auto text-green-600" size={56} />
        <h1 className="text-3xl font-bold">Demo Order Placed!</h1>
        <p className="text-xl font-bold text-terra">Order #{o.id}</p>
        <p>Thank you for trying the Chai Sutta Bar demo ordering experience, {o.name}.</p>
        <ul className="rounded-2xl bg-cream p-4 text-left text-sm">{o.lines.map((l) => <li key={l.item.id} className="flex justify-between py-0.5"><span>{l.item.name} × {l.qty}</span><span>₹{l.item.price * l.qty}</span></li>)}<li className="mt-2 flex justify-between border-t border-sand pt-2 font-bold"><span>Total ({o.mode})</span><span>₹{o.total}</span></li></ul>
        <p className="note">This is a static website demonstration. No real order has been sent to the café.</p>
        <Link to="/menu" className="btn btn-primary">Back to Menu</Link>
      </div>
    </section>
  );
}
