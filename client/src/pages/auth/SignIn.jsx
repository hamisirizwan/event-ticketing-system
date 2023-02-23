import React from "react";
import ticketImage from "../../assets/icons/ticketing.png";

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("login logic goes here");
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
              <input
                type="email"
                name="email"
                placeholder="enter email"
                className=" block w-full border-b-2 focus:border-primary focus:outline-none "
              />
            </div>
            <div className="py-4">
              <input
                type="password"
                name="password"
                placeholder="enter password"
                className="block w-full border-b-2 focus:border-primary focus:outline-none "
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
    </section>
  );
}

export default SignIn;
