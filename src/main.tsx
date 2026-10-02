import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initAnalytics } from "./lib/analytics";
import "./index.css";
import "./styles/guide.css";

// Google Analytics 4 : initialisé une seule fois, AVANT le premier rendu
// pour que le premier page_view soit bien mesuré. No-op si aucun
// VITE_GA_MEASUREMENT_ID n'est configuré.
initAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
