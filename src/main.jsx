import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import navs from "./Components/Navigation.jsx";
import VerifyOTP from "./Components/Public/VerifyOTP.jsx";

const user = {
  username: "",
  role: "CUSTOMER",
  isAuthenticated: false,
};

const { role, isAuthenticated } = user;

const routing = () => {
  return navs.map((nav, i) => {
    if (isAuthenticated) {
      if (nav.isVisibleAfterAuth) {
        if (nav.role === role || nav.role == "ALL") {
          return (
            <Route
              key={i}
              path={nav.path}
              element={nav.element}
              role={nav.role}
            />
          );
        }
      }
    } else {
      if (!nav.requireAuth && nav.role === "ALL") {
        return <Route key={i} path={nav.path} element={nav.element} />;
      }
    }
  });
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        {/* {user != null && user.isAuthenticated ? userRole() : notAuth()} */}
        {routing()}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
