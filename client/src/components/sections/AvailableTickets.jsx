import React from "react";
import EventCard from "../layouts/reusables/EventCard";
import SectionHeader from "./SectionHeader";
import eventImage from "../../assets/tmm.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../layouts/reusables/Spinner";

function AvailableTickets() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    await axios
      .get("/event/get-all")
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <SectionHeader />
      <div className="container px-5 py-10 mx-auto">
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-wrap -m-4 gap-4 justify-center">
            {events.length < 1 ? (
              <div>no data</div>
            ) : (
              events.map((event) => (
                <EventCard
                  title={event.title}
                  description={event.description}
                  price={event.price}
                  imageurl={event.image_url}
                  id={event.id}
                />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default AvailableTickets;
