import React from "react";
import ReactDOM from "react-dom/client";
import './i18n.js'
import App from "./App";
import ContextProvider from "./Context/StateContext";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Wrap entire app with BrowserRouter */}
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
