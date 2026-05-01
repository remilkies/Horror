import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.tsx";

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
