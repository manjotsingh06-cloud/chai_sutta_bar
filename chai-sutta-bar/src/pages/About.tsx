import { Link } from "react-router-dom";
import { Coffee, MessageCircle, Sofa, Users, Utensils } from "lucide-react";

const points = [
  [Coffee, "Chai & coffee", "Kulhad chai, masala chai and coffees made the way you like them."],
  [Utensils, "Quick bites", "Momos, sandwiches, burgers, pizza and other snacks."],
  [Users, "Friends", "An easy place to meet up and catch up."],
  [MessageCircle, "Conversations", "Sit back and talk over a warm cup."],
  [Sofa, "Relaxing", "Take a break from the day, no rush."],
] as const;

export default function About() {
  return (
    <section className="page">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <img src="/images/cafe-interior.png" alt="Chai Sutta Bar café interior" className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-xl" />
        <div>
          <h1 className="text-4xl font-extrabold sm:text-5xl">More Than Just Chai</h1>
          <p className="mt-5 text-lg text-charcoal/80">Chai Sutta Bar in Mullanpur Dakha is a casual corner for good chai, coffee and quick bites. It is somewhere to bring your friends, slow down for a bit and enjoy simple, tasty food.</p>
          <Link to="/menu" className="btn btn-primary mt-6">See the menu</Link>
        </div>
      </div>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {points.map(([Icon, t, d]) => (
          <li key={t} className="panel !p-5"><Icon className="text-terra" size={26} /><h2 className="mt-3 text-lg font-bold">{t}</h2><p className="mt-1 text-sm text-charcoal/70">{d}</p></li>
        ))}
      </ul>
    </section>
  );
}
