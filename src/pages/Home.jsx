import React from "react";
import Client from "../components/client/Client";
import Featured from "../components/featured/Featured";
import Hero from "../components/hero/Hero";
import Location from "../components/location/Location";
import Recent from "../components/recent/Recent";
import Team from "../components/team/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Client />
      <Location />
      <Team />
    </>
  );
};

export default Home;
