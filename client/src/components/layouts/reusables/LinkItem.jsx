import React from "react";
import { Link } from "react-router-dom";

function LinkItem({ icon, text, route }) {
  return (
    <div className="flex items-center gap-4 ">
      <Link to={route}>
        <img src={icon} alt="" className="h-10 w-10" />
      </Link>
      <Link to={route}>
        <h1 className="text-xl text-white font-medium">{text}</h1>
      </Link>
    </div>
  );
}

export default LinkItem;
