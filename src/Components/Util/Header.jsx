import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/flipkart.png";

const Header = () => {
  return (
    <>
      <header className="head bg-blue-900 flex justify-evenly h-20 w-full">
        <div className="flex justify-around h-full items-center ">
          {/* LOGO */}
          <Link to={"/home"} className="pr-10 h-4/6">
            <img src={logo} alt="" className=" w-28 h-full" />
          </Link>
          {/* SEARCH BAR */}
          <div className="bg-blue-50 h-12 pr-8 rounded-sm">
            <input
              type="text"
              placeholder="Search for products, categories etc..."
              className=" min-w-96 pl-8 pr-8 h-full bg-blue-50  rounded-sm"
            ></input>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="flex justify-evenly items-center h-full w-4/12 ">
          <Link to={"/login"}>
            <button className="h-10 w-28 m-2 bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold rounded-sm">
              Login
            </button>
          </Link>
          <Link to={"/seller/register"} className="text-white">
            <button className="h-10 w-36 bg-blue-600 text-white hover:bg-white hover:text-blue-700 font-medium rounded-sm">
              Become a Seller
            </button>
          </Link>
          <Link to={"/customer/register"} className="text-white">
            <button className="h-10 w-36 m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-700 font-medium rounded-sm">
              Signup
            </button>
          </Link>
          <Link to={"/verify-otp"} className="text-white ">
            <button className="h-10 w-28 bg-blue-600 text-white hover:bg-white hover:text-blue-700 font-medium rounded-sm">
              OTP
            </button>
          </Link>
          <Link to={"/cart"} className="text-white ">
            <button className="h-10 w-28 bg-blue-600 text-white hover:bg-white hover:text-blue-700 font-medium rounded-sm">
              Cart
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
