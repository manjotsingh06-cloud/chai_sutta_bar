import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useDemoAuth } from "../context/DemoAuthContext";

type Form = { name: string; email: string; phone: string; pw: string; cf: string };

export default function Signup() {
  const { signup } = useDemoAuth();
  const [f, setF] = useState<Form>({ name: "", email: "", phone: "", pw: "", cf: "" });
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const set = (k: keyof Form) => (e: ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.email.trim() || !f.phone.trim() || !f.pw) return setErr("Please fill in every field.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return setErr("Enter a valid email address.");
    if (f.pw.length < 6) return setErr("Password must be at least 6 characters.");
    if (f.pw !== f.cf) return setErr("Passwords do not match.");
    signup({ name: f.name.trim(), email: f.email.trim(), phone: f.phone.trim() }); // password is never stored
    setDone(true);
  };
  if (done) return (
    <section className="page"><div className="panel mx-auto max-w-md space-y-3 text-center">
      <h1 className="text-3xl font-bold">Demo account created successfully.</h1>
      <p className="note">This static demo does not permanently store account information.</p>
      <Link to="/profile" className="btn btn-primary">Go to Profile</Link></div></section>
  );
  const fields: [keyof Form, string, string][] = [["name", "Full Name", "text"], ["email", "Email", "email"], ["phone", "Phone", "tel"], ["pw", "Password", "password"], ["cf", "Confirm Password", "password"]];
  return (
    <section className="page">
      <form onSubmit={submit} noValidate className="panel mx-auto max-w-md space-y-4">
        <h1 className="text-3xl font-bold">Create Demo Account</h1>
        <p className="note">This static demo does not permanently store account information.</p>
        {fields.map(([k, l, t]) => <label key={k} className="block text-sm font-medium">{l}<input className="input mt-1" type={t} value={f[k]} onChange={set(k)} /></label>)}
        {err && <p role="alert" className="text-sm text-red-700">{err}</p>}
        <button className="btn btn-primary w-full">Sign Up</button>
        <p className="text-center text-sm">Already have the demo login? <Link to="/login" className="font-semibold text-terra">Login</Link></p>
      </form>
    </section>
  );
}
