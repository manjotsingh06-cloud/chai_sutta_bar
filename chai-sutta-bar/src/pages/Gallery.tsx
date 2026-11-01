import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <section className="page">
      <h1 className="text-4xl font-extrabold">Gallery</h1>
      <p className="note mb-8 mt-3 inline-block">Placeholder images. Replace them with real café photos in /public/images.</p>
      <Gallery />
    </section>
  );
}
