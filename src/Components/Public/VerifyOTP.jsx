import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [OTP, setotp] = useState();
  // const [able, setable] = useState(true);

  const navs = useNavigate();

  const otpVerification = async (e) => {
    // setable(true);
    const url = "http://localhost:8080/api/v1/verify-otp";

    const body = {
      email: sessionStorage.getItem("email"),
      otp: OTP,
    };
    const header = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(url, body, header);
      console.log(res);
      if (res.status === 201) {
        navs("/home");
      } else {
        navs("/search");
        // setable(false);
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
            <label htmlFor="" className="text-2xl text-gray-600">
              Verify-OTP
            </label>
          </div>
          <div className="pl-5 h-12">
            <input
              type="text"
              className="text-xl h-12 w-60 pl-2"
              autoFocus
              onChange={(e) => {
                setotp(e.target.value);
              }}
            />
          </div>
          <div className="pl-5">
            <button
              className="w-60 h-12 bg-amber-400 mt-12 text-xl hover:bg-amber-700"
              onClick={otpVerification}
              // disabled={able}
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyOTP;
