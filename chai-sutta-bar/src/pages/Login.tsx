import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DEMO_EMAIL, DEMO_PASSWORD, useDemoAuth } from "../context/DemoAuthContext";

export default function Login() {
  const { login } = useDemoAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (login(email, pw)) nav("/profile");
    else setErr("Those details don't match the demo account. Check the email and password shown above.");
  };
  return (
    <section className="page">
      <form onSubmit={submit} className="panel mx-auto max-w-md space-y-4">
        <h1 className="text-3xl font-bold">Demo Login</h1>
        <p className="note">Demo only, not secure authentication. Use <b>{DEMO_EMAIL}</b> / <b>{DEMO_PASSWORD}</b>.</p>
        <label className="block text-sm font-medium">Email<input className="input mt-1" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label className="block text-sm font-medium">Password<input className="input mt-1" type="password" required value={pw} onChange={(e) => setPw(e.target.value)} /></label>
        {err && <p role="alert" className="text-sm text-red-700">{err}</p>}
        <button className="btn btn-primary w-full">Login</button>
        <Link to="/menu" className="btn btn-soft w-full">Continue as Guest</Link>
        <Link to="/signup" className="btn btn-outline w-full">Create Account</Link>
      </form>
    </section>
  );
}
