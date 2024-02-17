import React from "react";
import { Route } from "react-router-dom";
import navs from "../Navigation.jsx";
import App from "../../App.jsx";
import { useAuth } from "../Context/AuthProvider.jsx";

const AllRoutes = () => {

  const auth = JSON.parse(localStorage.getItem("basicUserInfo"));
  const { role, isAuthenticated } = auth;

  const allRoute = () => {
    return navs.map((nav, i) => {
      if (isAuthenticated) {
        if (nav.isVisibleAfterAuth) {
          if (nav.role === role || nav.role === "ALL") {
            console.log(nav);
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
        }
      } else {
        if (!nav.requireAuth && nav.role === "ALL") {
          console.log(nav);
          return <Route key={i} path={nav.path} element={nav.element} />;
        }
      }
    });
  };
  return allRoute();
};

export default AllRoutes;
