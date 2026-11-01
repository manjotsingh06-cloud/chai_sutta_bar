import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useDemoAuth } from "../context/DemoAuthContext";

export default function Profile() {
  const { user, logout } = useDemoAuth();
  const { orders } = useCart();
  const nav = useNavigate();
  if (!user) return null;
  return (
    <section className="page grid gap-6 md:grid-cols-2">
      <div className="panel space-y-3">
        <h1 className="text-3xl font-bold">Profile Information</h1>
        <p><span className="block text-sm text-charcoal/60">Name</span>{user.name}</p>
        <p><span className="block text-sm text-charcoal/60">Email</span>{user.email}</p>
        <p><span className="block text-sm text-charcoal/60">Phone</span>{user.phone}</p>
        <p className="note">Demo profile for this browser session only.</p>
        <button className="btn btn-outline" onClick={() => { logout(); nav("/"); }}>Logout</button>
      </div>
      <div className="panel">
        <h2 className="text-2xl font-bold">Demo Order History</h2>
        {orders.length ? (
          <ul className="mt-3 divide-y divide-sand">
            {orders.map((o) => (
              <li key={o.id} className="flex justify-between py-3"><span><b>#{o.id}</b><br /><span className="text-sm text-charcoal/60">{o.lines.reduce((a, l) => a + l.qty, 0)} items · {o.mode}</span></span><b className="text-terra">₹{o.total}</b></li>
            ))}
          </ul>
        ) : <p className="mt-3 text-charcoal/70">No demo orders yet. Add something from the menu and try the demo checkout.</p>}
      </div>
    </section>
  );
}
