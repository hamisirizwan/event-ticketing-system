import React from "react";
import { Link } from "react-router-dom";
import BottomMobileNav from "../sections/BottomMobileNav";
import TopNav from "../sections/TopNav";
import LinkItem from "./reusables/LinkItem";
import SideBar from "./SideBar";
import TobBar from "./TobBar";

function MainLayout({ children }) {
  //   const dateToday = () => {};
  return (
    <div>
      <SideBar />
      <TobBar />
      {/* <aside className="hidden md:flex flex-col h-screen w-52 md:w-60 m-2 bg-primary rounded-lg">
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
      </aside> */}
      <BottomMobileNav />
      <div className="py-4 px-0 md:px-4 sm:ml-64">
        <div className="py-4 px-2 mx-2  border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {children}
          {/* <TestTable /> */}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
