import { createContext, useContext, useState, type ReactNode } from "react";

// DEMO ONLY: not real authentication. Passwords are never stored.
export interface DemoUser { name: string; email: string; phone: string; }
export const DEMO_EMAIL = "demo@chaicafe.com";
export const DEMO_PASSWORD = "demo123";
const KEY = "chai-demo-user";

interface AuthCtx {
  user: DemoUser | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  signup: (u: DemoUser) => void;
  logout: () => void;
}
const Ctx = createContext<AuthCtx | null>(null);

function load(): DemoUser | null {
  try { return JSON.parse(sessionStorage.getItem(KEY) || "null"); } catch { return null; }
}
function save(u: DemoUser | null) {
  try {
    if (u) sessionStorage.setItem(KEY, JSON.stringify(u));
    else sessionStorage.removeItem(KEY);
  } catch { /* ignore */ }
}

export function DemoAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(load);
  const set = (u: DemoUser | null) => { setUser(u); save(u); };
  const login = (email: string, password: string) => {
    if (email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD) {
      set({ name: "Demo Customer", email: DEMO_EMAIL, phone: "Sample number" });
      return true;
    }
    return false;
  };
  return <Ctx.Provider value={{ user, isLoggedIn: !!user, login, signup: set, logout: () => set(null) }}>{children}</Ctx.Provider>;
}

export function useDemoAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useDemoAuth must be used inside DemoAuthProvider");
  return c;
}
