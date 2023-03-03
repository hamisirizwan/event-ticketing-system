import React from "react";
import tmmImage from "../../assets/tmm.jpeg";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/layouts/reusables/Input";
import axios from "axios";
import Spinner from "../../components/layouts/reusables/Spinner";
import { useParams } from "react-router-dom";

function BookEvent() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    phone: "",
  });

  const params = useParams();
  const fetchEvent = async () => {
    setLoading(true);

    await axios
      .get(`/event/single/${params.id}`)
      .then((res) => {
        console.log(res);
        setEvent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.phone) {
      return toast.error("all fields required");
    }
    if (inputData.phone.length !== 10) {
      return toast.error("Invalid phone number");
    }
    if (
      inputData.phone.substring(0, 2) !== "07" &&
      inputData.phone.substring(0, 2) !== "01"
    ) {
      return toast.error("Invalid phone number");
    }

    //send request
    console.log({
      name: inputData.name,
      phone: inputData.phone,
      event_id: event.id,
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <ToastContainer />
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : error ? (
        <div className="container py-10 md:py-24 mx-auto flex flex-wrap items-center">
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center w-full md:w-1/2 text-red-400 gap-6 my-6">
            <h1>error occured</h1>
            <h1>Please comeback later</h1>
          </div>
        </div>
      ) : (
        <div className="container py-10 md:py-24 mx-auto flex flex-wrap items-center">
          <div className="sm:w-1/2  px-3 md:mb-10">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-fit object-center h-full w-full"
                src={event.image_url}
                //   src="https://dummyimage.com/1201x501"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              {event.title}
            </h2>
            <p className="leading-relaxed text-base">{event.description}</p>
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
      )}
    </section>
  );
}

export default BookEvent;
