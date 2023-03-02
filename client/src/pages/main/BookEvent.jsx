import React from "react";
import tmmImage from "../../assets/tmm.jpeg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/layouts/reusables/Input";
function BookEvent() {
  const [inputData, setInputData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.phone) {
      return toast.error("all fields required");
    }
    alert("validation goes here");
  };

  return (
    <section className="text-gray-600 body-font">
      <ToastContainer />
      <div className="container px-5 py-10 md:py-24 mx-auto flex flex-wrap items-center">
        <div className="sm:w-1/2  md:mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={tmmImage}
              //   src="https://dummyimage.com/1201x501"
            />
          </div>
          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
            THE CEO'S BREAKFAST
          </h2>
          <p className="leading-relaxed text-base">
            Come and connect with many of successfull youthfull CEOs and get
            insites of how businesses are build.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-2 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Book Now
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              {!inputData.name && (
                <h1 className="text-xs text-red-500">required</h1>
              )}
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="your name"
                value={inputData.name}
                handleChange={handleChange}
              />
            </div>
            <div>
              {!inputData.phone && (
                <h1 className="text-xs text-red-500">required</h1>
              )}
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="07... or 01..."
                value={inputData.phone}
                handleChange={handleChange}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookEvent;
