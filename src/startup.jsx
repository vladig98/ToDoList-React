import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import ToDo from "./components/ToDo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDo />
  </StrictMode>
);