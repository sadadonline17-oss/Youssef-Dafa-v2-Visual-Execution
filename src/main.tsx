import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { initializeMockChalets } from "./lib/mockChalets";
import { applyGlobalRealAssets } from "./lib/gccAssetSwap";

// ... rest of imports

// Initialize Chameleon Real Assets before rendering
applyGlobalRealAssets();
initializeMockChalets();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
