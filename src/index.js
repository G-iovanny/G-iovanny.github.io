import React from 'react';
import ReactDOM from "react-dom/client";

import "./global.css";
import AppRouter from "./Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
