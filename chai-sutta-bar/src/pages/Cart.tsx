import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { lines, totalQty, subtotal, clear } = useCart();
  if (!lines.length) return (
    <section className="page"><div className="panel mx-auto max-w-md space-y-4 text-center">
      <ShoppingBag className="mx-auto text-terra" size={44} />
      <h1 className="text-3xl font-bold">Your cart is empty</h1>
      <p className="text-charcoal/70">Pick something warm from the menu to get started.</p>
      <Link to="/menu" className="btn btn-primary">Browse Menu</Link></div></section>
  );
  return (
    <section className="page">
      <h1 className="text-4xl font-extrabold">Your Cart</h1>
      <div className="panel mt-6">
        <ul>{lines.map((l) => <CartItem key={l.item.id} line={l} />)}</ul>
        <div className="mt-4 flex items-center justify-between border-t border-sand pt-4">
          <span>{totalQty} item{totalQty > 1 ? "s" : ""}</span>
          <p className="text-2xl font-bold">Subtotal <span className="text-terra">₹{subtotal}</span></p>
        </div>
        <p className="mt-1 text-right text-xs text-charcoal/60">Sample prices. No payment is taken.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/menu" className="btn btn-outline">Continue Shopping</Link>
          <button className="btn btn-soft" onClick={clear}>Clear Cart</button>
          <Link to="/checkout" className="btn btn-primary sm:ml-auto">Demo Checkout</Link>
        </div>
      </div>
    </section>
  );
}
