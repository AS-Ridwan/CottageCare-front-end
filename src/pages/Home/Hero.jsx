import React from "react";
import homeClean from "../../assets/House Cleaning Services & Housekeeping » CottageCare.mp4";

const Hero = () => {
  return (
    <div>
      <video
        className="w-screen h-[60vh] object-cover "
        autoPlay
        playsInline
        loop
        muted
      >
        <source src={homeClean} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Hero;
