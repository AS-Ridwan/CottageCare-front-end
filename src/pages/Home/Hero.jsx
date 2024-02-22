import React, { useEffect } from "react";
import homeClean from "../../assets/House Cleaning Services & Housekeeping » CottageCare.mp4";

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      const modal = document.getElementById("my_modal_2");
      modal.showModal();
    }, 2000);
  }, []);

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
