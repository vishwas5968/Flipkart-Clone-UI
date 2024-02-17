import React from "react";
import Header from "./Components/Util/Header";

const App = () => {
  const basicUserInfo ={
    userId: "",
    username: "",
    userRole: "CUSTOMER",
    accessExpiration: "",
    refreshExpiration: "",
    isAuthenticated: false,
  }
    localStorage.setItem("basicUserInfo",JSON.stringify(basicUserInfo));
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;