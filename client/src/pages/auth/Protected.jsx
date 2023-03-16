import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, persist } from "../../store/slices/authSlice";

import { useEffect } from "react";

function Protected() {
  const navigate = useNavigate();
  const session = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("sessionUser")) {
      return navigate("/sign-in");
    }
    const payload = {
      user: JSON.parse(localStorage.getItem("sessionUser")),
      token: localStorage.getItem("token"),
    };
    dispatch(persist(payload));
  }, []);

  return <Outlet />;
}

export default Protected;
