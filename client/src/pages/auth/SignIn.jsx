import React from "react";
import { useState } from "react";
import ticketImage from "../../assets/icons/ticketing.png";
import emailValidator from "email-validator";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    // console.log(details);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputData.email || !inputData.password) {
      return toast.error("all fields required");
    }
    if (!emailValidator.validate(inputData.email)) {
      return toast.error("invalid email");
    }

    await axios
      .post("/user/login", inputData)
      .then((res) => {
        console.log(res);
        toast.success();
        //handle user auth redux
      })
      .catch((err) => {
        toast.error(err.response.data);
        console.log(err.response.data);
      });
  };
  return (
    <section className="grid md:grid-cols-2  h-screen">
      <div className="flex items-center justify-center">
        <img src={ticketImage} alt="" />
      </div>
      <div className="flex items-center justify-center md:justify-start ">
        <div>
          <h1 className="text-2xl font-medium text-center mt-4">Log In</h1>
          <form className="my-4 mx-3" onSubmit={handleSubmit}>
            <div className="py-4">
              {!inputData.email && (
                <h1 className="text-xs text-red-500">required</h1>
              )}
              <input
                type="email"
                name="email"
                placeholder="enter email"
                className=" block w-full border-b-2 focus:border-primary focus:outline-none "
                value={inputData.email}
                // required
                onChange={handleChange}
              />
            </div>
            <div className="py-4">
              {!inputData.password && (
                <h1 className="text-xs text-red-500">required</h1>
              )}

              <input
                type="password"
                name="password"
                placeholder="enter password"
                className="block w-full border-b-2 focus:border-primary focus:outline-none"
                value={inputData.password}
                // required
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              class=" mt-4 items-center justify-center w-full md:w-full sm:w-auto px-8 py-2 sm:text-sm text-lg sm:py-3.5 font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-lg  hover:bg-secondary focus:outline-none "
            >
              Log In
            </button>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </section>
  );
}

export default SignIn;
