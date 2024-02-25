import React, { useEffect } from "react";
import homeClean from "../../assets/House Cleaning Services & Housekeeping » CottageCare.mp4";

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      const modal = document.getElementById("my_modal_2");
      modal.showModal();
    }, 3000);
  }, []);

  return (
    <div className="relative">
      <video
        className="w-screen h-[60vh] object-cover  "
        autoPlay
        playsInline
        loop
        muted
      >
        <source src={homeClean} type="video/mp4"></source>
      </video>
      <div className="absolute inset-0 flex flex-col items-start justify-center 2xl:px-64">
        <h1 className="text-6xl font-semibold leading-tight text-white">
          Simplify life.
          <br /> Delegate housecleaning®
        </h1>
        <p className="text-white text-lg pt-4 w-[55%]">
          We strive to provide the best home cleaning and commercial cleaning
          available, matched with great customer service.
        </p>
        <div className="mt-10">
          <button className="bg-primary text-white rounded-full py-4 px-6 me-8">
            Book Online Now
          </button>
          <button className="bg-accent text-secondary rounded-full py-4 px-6 ">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
