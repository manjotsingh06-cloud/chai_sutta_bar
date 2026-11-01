import { useState, type FormEvent, type ReactNode } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { businessInfo as b } from "../data/business";

const Row = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => (
  <div className="flex gap-3"><span className="mt-1 text-terra">{icon}</span><div><h3 className="text-base font-bold">{title}</h3><p className="text-charcoal/80">{text}</p></div></div>
);

export default function Contact() {
  const [sent, setSent] = useState(false);
  const maps = b.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${b.name} ${b.location}`)}`;
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <section className="page grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-extrabold">Visit {b.name}</h1>
        <div className="panel mt-6 space-y-5">
          <Row icon={<MapPin size={20} />} title="Address" text={b.location} />
          <Row icon={<Phone size={20} />} title="Phone" text={b.phone || "Contact details available at outlet"} />
          <Row icon={<Clock size={20} />} title="Opening hours" text={b.hours || "Hours available at outlet"} />
          <a href={maps} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get Directions</a>
          {!b.mapsUrl && <p className="text-xs text-charcoal/60">Opens a Google Maps search. Add the verified link as mapsUrl in src/data/business.ts.</p>}
        </div>
      </div>
      <div className="panel">
        {sent ? (
          <div className="py-10 text-center"><p className="text-2xl font-bold text-bean">Thank you! This is a demo contact form.</p><p className="mt-2 text-charcoal/70">Your message was not sent to the café.</p></div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <label className="block text-sm font-medium">Name<input className="input mt-1" required autoComplete="name" /></label>
            <label className="block text-sm font-medium">Email<input className="input mt-1" type="email" required autoComplete="email" /></label>
            <label className="block text-sm font-medium">Phone<input className="input mt-1" type="tel" autoComplete="tel" /></label>
            <label className="block text-sm font-medium">Message<textarea className="input mt-1" rows={4} required /></label>
            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}
