import React, { useState, createContext, useContext, useEffect } from "react";
import RefreshToken from "../Refresh/RefreshToken";

const authContext = createContext({});

function AuthProvider({ child }) {
  let isRefreshRequested = false;
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    userRole: "CUSTOMER",
    accessExpiration: "",
    refreshExpiration: "",
    isAuthenticated: false,
  });

  const { checkToken } = RefreshToken();

  const doRefresh = async () => {
    const data = await checkToken();
    console.log(data);
    setAuth({
      userId: data.userId,
      username: data.username,
      userRole: data.userRole,
      accessExpiration: data.accessExpiration,
      refreshExpiration: data.refreshExpiration,
      isAuthenticated: false,
    });
    
  };

  useEffect(() => {
    if (!isRefreshRequested) {
      isRefreshRequested = true;
      doRefresh();
    }
  }, []);

  return (
    <>
      <authContext.Provider value={{ auth, setAuth }}>
        {child}
      </authContext.Provider>
    </>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(authContext);
