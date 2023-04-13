import React from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, persist } from "../../store/slices/authSlice";

import { useEffect } from "react";

function Protected() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("sessionUser"));
  const token = JSON.parse(localStorage.getItem("token"));
  // if (!user) {
  //   return ;
  // }

  if (user) {
    dispatch(persist({ user: user, token: token }));
    return <Outlet />;
  }

  return <Navigate to="/sign-in" />;
  // console.log(user);
  // return user ? <Outlet /> : navigate("/sign-in");
  // const payload = {
  //   user: JSON.parse(localStorage.getItem("sessionUser")),
  //   token: localStorage.getItem("token"),
  // };

  // dispatch(persist(payload));

  // return;
}

export default Protected;
