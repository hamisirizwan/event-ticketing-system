import React from "react";
import { Outlet } from "react-router-dom";

function Protected() {
  //auth logic will go here
  return <Outlet />;
}

export default Protected;
