import Account from "./Private/Common/Account";
import EditProfile from "./Private/Common/EditProfile";
import Cart from "./Private/Customer/Cart";
import Orders from "./Private/Customer/Orders";
import Wishlist from "./Private/Customer/Wishlist";
import SellerDashboard from "./Private/Seller/SellerDashboard";
import SellerOrders from "./Private/Seller/SellerOrders";
import Home from "./Public/Home";
import Login from "./Public/Login";
import Register from "./Public/Register";
import Search from "./Public/Search";
import VerifyOTP from "./Public/VerifyOTP";

const navs = [
  {
    path: "/seller/register",
    element: <Register role="SELLER" />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/customer/register",
    element: <Register role="CUSTOMER" />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/login",
    element: <Login />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },

  // -------------------------- BEFORE AND AFTER AUTH ----------------

  {
    path: "/home",
    element: <Home />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/search",
    element: <Search />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },

  // ---------------------- COMMON AND AFTER AUTH ----------------------

  {
    path: "/account",
    element: <Account />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },

  // --------------------------- CUSTOMER --------------------------

  {
    path: "/cart",
    element: <Cart />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/orders",
    element: <Orders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },

  // ------------------------- SELLER ----------------------------

  {
    path: "/seller-dashboard",
    element: <SellerDashboard />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
  {
    path: "/seller-orders",
    element: <SellerOrders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
];

export default navs;
