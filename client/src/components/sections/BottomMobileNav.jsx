import React from "react";
import settingIcon from "../../assets/icons/settings.png";
import eventIcon from "../../assets/icons/event.png";
import houseIcon from "../../assets/icons/house.png";
import ticketIcon from "../../assets/icons/tickets.png";
import { Link } from "react-router-dom";

function BottomMobileNav() {
  return (
    <section className="block md:hidden fixed bottom-0 inset-x-0 z-50 shadow-lg text-gray-800 bg-primary dark:bg-dark backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 dark:text-gray-400 border-t-2 border-royal/20 rounded-lg">
      <div id="tabs" className="flex justify-between">
        <Link
          to="/dashboard"
          className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
          activeclass="dark:text-gray-100 text-black"
        >
          <img src={houseIcon} alt="" className="h-6 w-6 inline-block mb-1" />
          <span className="tab block text-xs">Home</span>
        </Link>
        <Link
          to="/events"
          className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
          activeclass="dark:text-gray-100 text-black"
        >
          <img src={eventIcon} alt="" className="h-6 w-6 inline-block mb-1" />
          <span className="tab block text-xs">Events</span>
        </Link>
        <Link
          to="/tickets"
          className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
          activeclass="dark:text-gray-100 text-black"
        >
          <img src={ticketIcon} alt="" className="h-6 w-6 inline-block mb-1" />
          <span className="tab block text-xs">Tickets</span>
        </Link>
        <a
          href="#"
          className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
          activeclass="dark:text-gray-100 text-black"
        >
          <img src={settingIcon} alt="" className="h-6 w-6 inline-block mb-1" />
          <span className="tab block text-xs">Settings</span>
        </a>
      </div>
    </section>
  );
}

export default BottomMobileNav;
