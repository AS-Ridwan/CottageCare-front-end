import React from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import Modal from "../Modal/Modal";
import OurServices from "./OurServices";
import Detail from "./Detail";
import DependableClean from "./DependableClean";
import Location from "./Location";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurServices></OurServices>
      <Detail></Detail>
      <DependableClean></DependableClean>
      <Location></Location>
      <Experience></Experience>
      <Modal></Modal>
    </div>
  );
};

export default Home;
