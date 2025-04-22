import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { CardProvider } from "./context/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </StrictMode>,
);
