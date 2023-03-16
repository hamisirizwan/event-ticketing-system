import React from "react";
import { useState } from "react";
import ticketImage from "../../assets/icons/ticketing.png";
import emailValidator from "email-validator";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Input from "../../components/layouts/reusables/Input";
import { useDispatch } from "react-redux";
import { login, persist } from "../../store/slices/authSlice";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

    try {
      const resp = await axios.post("/user/login", inputData);
      console.log(resp);
      toast.success();
      //handle user auth redux
      dispatch(login(resp.data));
      navigate("/dashboard");
    } catch (error) {
      if (!error.response.data) {
        console.log(error);
        return toast.error("something wrong happened");
      }
      // console.log(error);
      return toast.error(error.response.data);
    }
  };
  return (
    <section className="grid md:grid-cols-2  h-screen">
      <div className="flex items-center justify-center">
        <img src={ticketImage} alt="" />
      </div>
      <div className="flex items-center justify-center ">
        <div className="">
          <h1 className="text-2xl font-medium text-center mt-4">Log In</h1>
          <form className="my-4 mx-3" onSubmit={handleSubmit}>
            <div className="py-4">
              {!inputData.email && (
                <h1 className="text-xs text-red-500">required</h1>
              )}
              <Input
                label="Email Adress"
                type="email"
                name="email"
                placeholder="xyz@gmail.com"
                value={inputData.email}
                handleChange={handleChange}
              />
            </div>

            <div className="py-4">
              {!inputData.password && (
                <h1 className="text-xs text-red-500">required</h1>
              )}

              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="enter password"
                value={inputData.password}
                handleChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className=" mt-4 items-center justify-center w-full md:w-full sm:w-auto px-8 py-2 sm:text-sm text-lg sm:py-3.5 font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-lg  hover:bg-secondary focus:outline-none "
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
