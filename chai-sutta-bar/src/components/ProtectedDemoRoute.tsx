import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useDemoAuth } from "../context/DemoAuthContext";

export default function ProtectedDemoRoute({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useDemoAuth();
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
}
