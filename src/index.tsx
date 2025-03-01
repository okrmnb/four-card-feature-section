import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const app = document.getElementById("app");

function setup() {
  if (!app) {
    console.error("Can't get app element");
    return;
  }

  const root = createRoot(app);
  root.render(<App />);
}

setup();
