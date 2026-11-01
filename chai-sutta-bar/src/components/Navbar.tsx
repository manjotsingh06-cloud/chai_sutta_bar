import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useDemoAuth } from "../context/DemoAuthContext";

const links = [["/", "Home"], ["/menu", "Menu"], ["/about", "About"], ["/gallery", "Gallery"], ["/contact", "Contact"]];
const cls = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 font-medium transition ${isActive ? "bg-bean text-cream" : "hover:bg-sand"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalQty } = useCart();
  const { isLoggedIn, logout } = useDemoAuth();
  const nav = useNavigate();
  const badge = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = badge.current;
    if (!el) return;
    el.classList.remove("animate-bump");
    void el.offsetWidth;
    if (totalQty) el.classList.add("animate-bump");
  }, [totalQty]);

  const close = () => setOpen(false);
  const auth = isLoggedIn ? (
    <>
      <NavLink to="/profile" className={cls} onClick={close}>Profile</NavLink>
      <button className="rounded-full px-4 py-2 text-left font-medium hover:bg-sand" onClick={() => { logout(); close(); nav("/"); }}>Logout</button>
    </>
  ) : (
    <>
      <NavLink to="/login" className={cls} onClick={close}>Login</NavLink>
      <Link to="/signup" className="btn btn-primary" onClick={close}>Sign Up</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-sand bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5">
        <Link to="/" className="mr-auto font-display text-xl font-extrabold tracking-wide text-bean">
          CHAI <span className="text-terra">SUTTA</span> BAR
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map(([to, l]) => <NavLink key={to} to={to} end={to === "/"} className={cls}>{l}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-1 lg:flex">{auth}</div>
        <Link to="/cart" aria-label={`Cart, ${totalQty} items`} className="relative rounded-full bg-sand p-2.5 text-bean transition hover:bg-terra hover:text-white">
          <ShoppingBag size={20} />
          <span ref={badge} className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-terra px-1 text-xs font-bold text-white">{totalQty}</span>
        </Link>
        <button className="rounded-full bg-sand p-2.5 text-bean lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="animate-pop flex flex-col gap-1 border-t border-sand bg-cream px-5 py-3 lg:hidden">
          {links.map(([to, l]) => <NavLink key={to} to={to} end={to === "/"} className={cls} onClick={close}>{l}</NavLink>)}
          <hr className="my-1 border-sand" />
          {auth}
        </nav>
      )}
    </header>
  );
}
