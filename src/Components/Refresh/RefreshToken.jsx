import React, { useEffect } from "react";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RefreshToken = () => {
  const nav = useNavigate();

  // useEffect(() => {
  console.log("inside Refresh Token");
  // });

  const refresh = async (e) => {
    console.log("refreshing...");
    const url = "http://localhost:8080/api/v1/refresh";
    const body = {};

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.post(url, body, header);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("user",response.data.data)
        return response.data.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkToken = async () => {
    console.log("validating local data...");
    if (localStorage.getItem("user") !== null) {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      if (new Date(userInfo.refreshExpiration) > new Date()) {
        console.log("refresh is not expired");
        if (new Date(userInfo.accessExpiration) > new Date()) {
          console.log("access is not expired");
          // get data from local storage and return the same
        } else return await refresh();
      } else {
        nav("/login");
      }
    }
  };

  return { checkToken };
};

export default RefreshToken;
