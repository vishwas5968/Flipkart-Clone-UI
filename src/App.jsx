import React, { useEffect } from "react";
import Header from "./Components/Util/Header";
import Login from "./Components/Public/Login";
import Home from "./Components/Public/Home";
import { Outlet } from "react-router-dom";

const App = () => {
  // const pageHeader = Header();

  // useEffect(() => {
  //   storeUserInLocalStorage();
  // }, []);

  return (
    <div>
      {/* <Header /> */}
      {/* {storeUserInLocalStorage()} */}
      <Header />
      <Outlet />
      {/* <Home /> */}
    </div>
  );
};

export default App;
