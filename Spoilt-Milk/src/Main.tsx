import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './style.css'
import TunePassword from "./components/TunePassword.tsx";

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <TunePassword />
  </StrictMode>,
)
