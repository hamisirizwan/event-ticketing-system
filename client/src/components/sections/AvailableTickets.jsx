import React from "react";
import EventCard from "../layouts/reusables/EventCard";
import SectionHeader from "./SectionHeader";
import eventImage from "../../assets/tmm.jpeg";

function AvailableTickets() {
  return (
    <section className="text-gray-600 body-font">
      <SectionHeader />
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 gap-4 justify-center">
          <EventCard
            title="THE MUSLIM MEDIA"
            description="Attend one of the event"
            price="2000"
            imageurl={eventImage}
          />
          <EventCard
            title="THE MUSLIM MEDIA"
            description="Attend one of the best event"
            price="2000"
            imageurl={eventImage}
          />
          <EventCard
            title="THE MUSLIM MEDIA"
            description="Attend one of the best event"
            price="2000"
            imageurl={eventImage}
          />
          <EventCard
            title="THE MUSLIM MEDIA"
            description="Attend one of the best event"
            price="2000"
            imageurl={eventImage}
          />
        </div>
      </div>
    </section>
  );
}

export default AvailableTickets;
