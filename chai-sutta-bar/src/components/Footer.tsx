import type { ReactNode } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { businessInfo as b } from "../data/business";

const col = "flex flex-col gap-1.5 text-cream/80";
const Social = ({ url, label, icon }: { url: string; label: string; icon: ReactNode }) =>
  url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full bg-white/10 p-2.5 hover:bg-terra">{icon}</a>
  ) : (
    <span aria-label={`${label} (not linked yet)`} title="Link not added yet" className="rounded-full bg-white/5 p-2.5 opacity-40">{icon}</span>
  );

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold">CHAI SUTTA BAR</p>
          <p className="mt-2 text-cream/80">{b.tagline}</p>
        </div>
        <div><h2 className="mb-2 font-display text-base !text-cream">Quick Links</h2>
          <div className={col}>{[["/", "Home"], ["/menu", "Menu"], ["/about", "About"], ["/gallery", "Gallery"], ["/contact", "Contact"]].map(([t, l]) => <Link key={t} to={t} className="hover:text-terra">{l}</Link>)}</div></div>
        <div><h2 className="mb-2 font-display text-base !text-cream">Customer</h2>
          <div className={col}><Link to="/login" className="hover:text-terra">Login</Link><Link to="/signup" className="hover:text-terra">Sign Up</Link><Link to="/cart" className="hover:text-terra">Cart</Link></div></div>
        <div><h2 className="mb-2 font-display text-base !text-cream">Location</h2>
          <p className="text-cream/80">Mullanpur Dakha<br />Ludhiana, Punjab</p>
          <div className="mt-3 flex gap-2"><Social url={b.instagram} label="Instagram" icon={<Instagram size={18} />} /><Social url={b.facebook} label="Facebook" icon={<Facebook size={18} />} /></div></div>
      </div>
      <p className="border-t border-white/10 px-5 py-4 text-center text-sm text-cream/60">Static demo website. Login, cart and checkout are simulated locally.</p>
    </footer>
  );
}
