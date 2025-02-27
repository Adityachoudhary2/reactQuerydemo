import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Get the root element with TypeScript safety
const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) {
  throw new Error("Root element not found. Make sure 'index.html' has a div with id 'root'.");
}

// Create and render the React app
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 