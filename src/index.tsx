import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const mount = () => {
  const rootElement = document.getElementById("react-root");
  if (!rootElement) return;

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Wait for the container to be ready
const interval = setInterval(() => {
  const rootElement = document.getElementById("react-root");
  if (rootElement?.getAttribute("data-ready") === "true") {
    clearInterval(interval);
    mount();
  }
}, 100);
