import React from "react";

function SectionHeader() {
  return (
    <div className="flex flex-wrap w-full mb-4 mt-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        Book Your Event Now
      </h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Get your ticket in advance. With just a click of a button, You can book
        a slot to your fovourite event
      </p>
    </div>
  );
}

export default SectionHeader;
