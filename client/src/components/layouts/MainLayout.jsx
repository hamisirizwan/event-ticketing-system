import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/avator.svg";
import logo2 from "../../assets/react.svg";
import BottomMobileNav from "../sections/BottomMobileNav";
import LinkItem from "./reusables/LinkItem";

function MainLayout({ children }) {
  //   const dateToday = () => {};
  return (
    <div className="flex h-screen">
      <aside className="hidden md:flex flex-col h-screen w-52 md:w-60 m-2 bg-primary rounded-lg">
        <div className="flex gap-4 py-8 px-3  items-center">
          <div className="">
            <img src={logo} alt="" className="h-20 w-20 " />
          </div>
          <div>
            <h1 className="text-2xl text-gray-300">RIZWAN</h1>
            <h1 className="text-xl text-gray-400 ">devriz</h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-3 p-4">
          <LinkItem icon={logo2} text="Dashboard" route="/dashboard" />
          <LinkItem icon={logo2} text="Events" route="/events" />
          <LinkItem icon={logo2} text="Tickets" route="/tickets" />
        </div>
      </aside>
      <BottomMobileNav />
      <div className="mt-12 mx-4 w-full ">
        <header className="text-3xl">Welcome back, Rizwan</header>
        <div className="flex p-4 h-full">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
