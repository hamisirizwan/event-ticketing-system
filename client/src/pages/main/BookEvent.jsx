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
    let price = event.price;
    alert(price);
  };

  return (
    <section className="text-gray-600 body-font">
      <ToastContainer />
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="container py-10 md:py-24 mx-auto flex flex-wrap items-center">
          <div className="sm:w-1/2  px-3 md:mb-10">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
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
