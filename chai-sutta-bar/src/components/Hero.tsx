import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2f1a0f] via-bean to-coffee text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold !text-cream sm:text-5xl lg:text-6xl">Good Chai. Good Food. Good Vibes.</h1>
          <p className="mt-5 max-w-md text-lg text-cream/85">Your local spot for chai, coffee, quick bites and café favourites in Mullanpur.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="btn btn-primary px-7 py-3">Explore Menu</Link>
            <Link to="/contact" className="btn border-2 border-cream/70 px-7 py-3 text-cream hover:bg-cream hover:text-bean"><MapPin size={18} />Visit Us</Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-terra/40" aria-hidden="true" />
          <img src="/images/chai.svg" alt="A steaming cup of kulhad chai" className="animate-float relative aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
