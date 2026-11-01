import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { DemoAuthProvider } from "./context/DemoAuthContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <DemoAuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DemoAuthProvider>
  </BrowserRouter>
);
