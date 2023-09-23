import { createRoot } from "react-dom/client";
import App from "./App";
import './style.css';
import React from "react";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
    <App />
);