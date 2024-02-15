import React, { useState } from "react";
import cart from "../../Images/cart.jpg";
import { Link } from "react-router-dom";

const Register = ({ role }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const user = (e) => {
    e.preventDefault();
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
              onChange={(e) => setusername(e.target.value)}
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
          <div>
            <label htmlFor="" className="hidden">
              User Role
            </label>
            <input type="text" className="hidden" value={user} />
          </div>
          <Link to={"/verify-otp"} className="text-black ">
            <div className="pl-5">
              <button className="w-60 h-12 bg-amber-600 mt-12 text-xl">
                Continue
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
