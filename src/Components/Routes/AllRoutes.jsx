import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import navs from "../Navigation.jsx";
import App from "../../App.jsx";
import { AuthContext, useAuth } from "../Context/AuthProvider.jsx";

const AllRoutes = () => {
  // var role = null;
  // var isAuthenticated = null;
  // var auth = null;
  // if (localStorage.getItem("user") === null) {
  //   auth = sessionStorage.getItem("basicUserInfo");
  //   var { role, isAuthenticated } = auth;
  // } else {
  //   auth = localStorage.getItem("user");
  // }

  // const [a, setA] = useState("");

  const { auth } = useAuth();
  // const authContext = useContext(AuthContext);
  // const { auth, setAuth } = authContext();
  console.log(auth);
  console.log("++++++++++");
  const { isAuthenticated, userRole } = auth;
  console.log(userRole);
  console.log(isAuthenticated);

  // const allRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === userRole || nav.role === "ALL") {
                console.log(nav);
                console.log("9999999999999");
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    </Routes>
  );
  // };
};

export default AllRoutes;
