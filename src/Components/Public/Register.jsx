import React, { useState } from "react";
import cart from "../../Images/cart.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ role }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const nav = useNavigate();

  const handleRegistration = async (e) => {
    // e.preventDefault();
    //fire request using axios
    const url = "http://localhost:8080/api/v1/user";
    const body = {
      email: email,
      password: password,
      userrole: role,
    };

    const header = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.post(url, body, header);
      sessionStorage.setItem("email", res.data.data.email)
      console.log(res);
      console.log(sessionStorage.getItem("email"));
      if (res.status === 201) {
        nav("/verify-otp");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-20 ml-72 w-8/12 h-full justify-center flex items-center ">
      <section className=" w-2/4 h-96 pb-28 drop-shadow-2xl cart border-indigo-600">
        <div className="bg-blue-950 h-full pb-28 bg-opacity-90">
          <div className="h-full w-full flex justify-start items-center flex-col ">
            <div className="w-96 ml-12 mt-12 text-white  text-4xl ">
              <h1>Looks like you're new </h1>
              <h1>here!</h1>
            </div>
            <div className="6/12 w-96 mt-12 ml-12 text-xl text-white">
              <h1>Sign up with your mobile number</h1>
              <h1>to get started</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-300 w-8/12  h-96 pb-28 drop-shadow-2xl">
        <h1 className="text-4xl pl-11 pt-10 pb-4">Create Account</h1>
        <div className="pl-10">
          <div className="p-5">
            <label htmlFor="" className="text-xl">
              Email-Id
            </label>
          </div>
          <div className="pl-5 h-12">
            <input
              type="email"
              className="text-xl w-96 h-12 pl-2"
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
          {console.log(email, password, role)}
          <div className="pl-5 ">
            <button
              className="w-60 h-12 bg-amber-400 mt-12 text-xl"
              onClick={handleRegistration}
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
