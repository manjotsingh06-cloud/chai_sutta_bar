import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import MenuCard from "../components/MenuCard";
import FoodModal from "../components/FoodModal";
import { menu } from "../data/menu";
import type { MenuItem } from "../types/menu";

export default function Home() {
  const [sel, setSel] = useState<MenuItem | null>(null);
  return (
    <>
      <Hero />
      <section className="page">
        <h2 className="text-3xl font-bold sm:text-4xl">Popular Picks</h2>
        <p className="note mb-8 mt-3 inline-block">Prices shown are sample demo values. Actual prices are available at the outlet.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {menu.filter((m) => m.popular).map((m) => <MenuCard key={m.id} item={m} onOpen={setSel} />)}
        </div>
        <div className="mt-10 text-center"><Link to="/menu" className="btn btn-outline">See the full menu</Link></div>
      </section>
      {sel && <FoodModal item={sel} onClose={() => setSel(null)} />}
    </>
  );
}
