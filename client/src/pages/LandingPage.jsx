import React from "react";
import AvailableTickets from "../components/sections/AvailableTickets";
import HeroSection from "../components/sections/Hero";
import TopNav from "../components/sections/TopNav";

function LandingPage() {
  return (
    <div>
      <TopNav />
      <HeroSection />
      <AvailableTickets />
    </div>
  );
}

export default LandingPage;
