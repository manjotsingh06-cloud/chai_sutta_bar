import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { galleryItems } from "../data/gallery";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  const sel = open === null ? null : galleryItems[open];
  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {galleryItems.map((g, i) => (
          <li key={g.label}>
            <button onClick={() => setOpen(i)} aria-label={`Enlarge ${g.label} photo`} className="group relative block w-full overflow-hidden rounded-3xl shadow-lg shadow-bean/10">
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left font-semibold text-white">{g.label}</span>
            </button>
          </li>
        ))}
      </ul>
      {sel && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={sel.label}>
          <button aria-label="Close" autoFocus className="absolute right-4 top-4 rounded-full bg-white p-2"><X size={20} /></button>
          <figure className="animate-pop max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={sel.src} alt={sel.alt} className="max-h-[80vh] w-full rounded-3xl object-contain" />
            <figcaption className="mt-3 text-center text-cream">{sel.label}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
