import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Components/Context/AuthProvider.jsx";
import AllRoutes from "./Components/Routes/AllRoutes.jsx";

const routes = AllRoutes();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <AuthProvider child={<Routes>{routes}</Routes>}></AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
