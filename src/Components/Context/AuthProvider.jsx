import React, { useState, createContext, useContext, useEffect } from "react";
import RefreshToken from "../Refresh/RefreshToken";

export const AuthContext = createContext({});

function AuthProvider({ child }) {
  let isRefreshRequested = false;
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    userRole: "CUSTOMER",
    accessExpiration: "",
    refreshExpiration: "",
    isAuthenticated: false,
    login: false,
  });
  // console.log(auth.login + "++++++++++++++++++");
  const { checkToken } = RefreshToken();

  const doRefresh = async () => {
    const data = await checkToken();
    setAuth({
      userId: data.userId,
      username: data.username,
      userRole: data.userRole,
      accessExpiration: data.accessExpiration,
      refreshExpiration: data.refreshExpiration,
      isAuthenticated: data.authenticated,
      login: true,
    });
  };

  useEffect(() => {
    if (!isRefreshRequested) {
      console.log("inside isRefreshRequested");
      isRefreshRequested = true;
      doRefresh();
    }
  }, []);

  useEffect(() => {
    // console.log(auth);
    // console.log("!!!!!!!!!!!");
  }, [auth]);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {child}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
