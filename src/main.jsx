import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Components/Context/AuthProvider.jsx";
import AllRoutes from "./Components/Routes/AllRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider child={<AllRoutes />}></AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
