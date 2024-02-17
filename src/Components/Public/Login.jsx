import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { auth, setAuth } = useAuth();
  const nav = useNavigate();

  const handleLogin = async (e) => {
    // e.preventDefault();
    const url = "http://localhost:8080/api/v1/login";

    const body = {
      email: email,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const response = await axios.post(url, body, config);
    if (response.status === 202) {
      console.log(response);
      const user = {
        userId: response.data.data.userId,
        username: response.data.data.username,
        userRole: response.data.data.userRole,
        accessExpiration: response.data.data.accessExpiration,
        refreshExpiration: response.data.data.refreshExpiration,
        authenticated: response.data.data.authenticated,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(user);
      nav("/");
    } else {
      nav("/search");
    }
  };

  return (
    <div className=" mt-20 ml-60 w-8/12 h-full justify-center flex items-center ">
      <section className=" w-2/4 h-96 pb-28 drop-shadow-2xl cart border-indigo-600">
        <div className="bg-blue-950 h-full pb-28 bg-opacity-90">
          <div className="h-full w-full flex justify-start items-center flex-col ">
            <div className="w-96 ml-12 mt-12 text-white  text-4xl ">
              <h1>Login </h1>
            </div>
            <div className="6/12 w-96 mt-12 ml-12 text-xl text-white">
              <h1>Get access to your Orders,</h1>
              <h1>Wishlist and Recommendations</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-300 w-8/12  h-96 pb-28 drop-shadow-2xl">
        <h1 className="text-4xl pl-11 pt-10 pb-4">Login</h1>
        <div className="pl-10 ">
          <div className="p-5">
            <label htmlFor="" className="text-xl">
              Email-Id
            </label>
          </div>
          <div className="pl-5 h-12">
            <input
              type="email"
              className="text-xl w-96 h-12 pl-2 "
              autoFocus
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="p-5">
            <label htmlFor="" className="text-xl">
              Password
            </label>
          </div>
          <div className="pl-5">
            <input
              type="password"
              className="text-xl w-96 h-12 pl-2"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="pl-5">
            <button
              className="w-60 h-12 bg-amber-400 mt-12 text-xl"
              onClick={handleLogin}
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
