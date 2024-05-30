import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { CartContext, CartProvider } from "./context/CartContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { CartContext };

root.render(
  <StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>
);
