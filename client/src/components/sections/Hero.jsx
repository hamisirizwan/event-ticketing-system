import React from "react";
import { Link } from "react-router-dom";
// import HeroImg from "../../assets/hero1.png";
import HeroImg from "../../assets/ticketing.svg";

function HeroSection() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 overflow-hidden  md:pt-10 relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
              Manage and sell your events tickets like a Pro
            </span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            E-tiketi enables you to manage and sell your events tickets online.
            Integrated with online payment tools, You can easily post your
            events and people can seamlessly book for the with just a click of a
            button
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <Link to="/sign-in">
                <button
                  type="button"
                  className="py-2 px-4  bg-primary hover:bg-secondary focus:ring-primary focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Go To Console
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img src={HeroImg} className="object-fill" alt="Tree" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
