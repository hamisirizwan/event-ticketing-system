import React from "react";
import { Link } from "react-router-dom";

function EventCard(props) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        to={`/book/${props.id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="event image"
          className="object-cover object-center w-full h-full block"
          src={props.imageurl}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {props.title}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props.description}
        </h2>
        <p className="mt-1">{props.price} KSH</p>
      </div>
      <div className="mt-4">
        <Link to={`/book/${props.id}`}>
          <button
            type="button"
            className="py-2 px-4  bg-primary hover:bg-secondary focus:ring-primary focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
