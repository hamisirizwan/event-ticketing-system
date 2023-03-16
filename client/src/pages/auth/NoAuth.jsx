import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function NoAuth() {
  const navigate = useNavigate();
  const session = useSelector((state) => state.Auth);

  useEffect(() => {
    if (session.isAuthenticated) {
      return navigate("/dashboard");
    }
  }, []);

  return <Outlet />;
}

export default NoAuth;
