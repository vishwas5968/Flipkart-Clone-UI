import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/flipkart.png";
import { useAuth } from "../Context/AuthProvider";

const Header = () => {
  // let role = "ALL";
  // let login = false;
  // const user = JSON.parse(localStorage.getItem("user"));
  const { auth } = useAuth();
  // console.log(auth);
  const { login, userRole } = auth;
  // console.log(userRole, login);
  // console.log(localStorage.getItem("user"));
  // if (user !== null) {
  //   role = user.userRole;
  //   login = true;
  // }

  const navs = [
    {
      buttonName: "Login",
      link: "/login",
      role: "ALL",
      isLogin: false,
    },
    {
      buttonName: "Become a Seller",
      link: "/seller/register",
      role: "ALL",
      isLogin: false,
    },
    {
      buttonName: "Signup",
      link: "/customer/register",
      role: "ALL",
      isLogin: false,
    },
    {
      buttonName: "Wishlist",
      link: "/customer/register",
      role: "CUSTOMER",
      isLogin: true,
    },
    {
      buttonName: "Orders",
      link: "/orders",
      role: "CUSTOMER",
      isLogin: true,
    },
    {
      buttonName: "Cart",
      link: "/cart",
      role: "CUSTOMER",
      isLogin: true,
    },
    {
      buttonName: "Account",
      link: "/account",
      role: "ALL",
      isLogin: true,
    },
    {
      buttonName: "Edit Profile",
      link: "/edit-profile",
      role: "ALL",
      isLogin: true,
    },
    {
      buttonName: "Seller Dashboard",
      link: "/seller-dashboard",
      role: "SELLER",
      isLogin: true,
    },
    {
      buttonName: "Seller Orders",
      link: "/seller-orders",
      role: "SELLER",
      isLogin: true,
    },
  ];

  // const pageHeader = () => {
  return (
    <header className="head bg-blue-900 flex justify-evenly h-20 w-full">
      <div className="flex justify-around h-full items-center ">
        {/* LOGO */}
        <Link to={"/"} className="pr-10 h-4/6">
          <img src={logo} alt="" className=" w-28 h-full" />
        </Link>
        {/* SEARCH BAR */}
        <div className="bg-blue-50 h-12 pr-8 rounded-sm">
          <input
            type="text"
            placeholder="Search for products, categories etc..."
            className=" min-w-96 pl-8 pr-8 h-full bg-blue-50  rounded-sm"
          ></input>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="flex justify-evenly items-center h-full w-4/12 ">
        {navs.map((button, i) => {
          if (
            button.isLogin === login &&
            (button.role === "ALL" || button.role === userRole)
          ) {
            return (
              <Link key={i} to={button.link}>
                <button className="h-10 w-40 m-2 bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold rounded-sm">
                  {button.buttonName}
                </button>
              </Link>
            );
          }
        })}
      </div>
    </header>
  );
};

// return pageHeader();
// };

export default Header;
