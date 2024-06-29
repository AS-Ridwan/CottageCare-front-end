import React from "react";

import img from "../../assets/Quality-cleaning-1.jpg";
import img2 from "../../assets/Quality-cleaning-2.jpg";
import img1 from "../../assets/Quality-Cleaning-Services-CottageCare.jpg";

const DependableClean = () => {
  return (
    <>
      <div className="py-32">
        <h1 className="text-center text-4xl font-semibold">
          A Dependable Clean from CottageCare
        </h1>
        <div className="grid grid-cols-3 pt-24 px-64">
          <div class="w-[390px] h-[440px] bg-blue-500 rounded-3xl relative">
            <img src={img} className="rounded-3xl" alt="" />

            <div
              class="opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-start ps-5 text-white
           bg-blue-400 m-5 rounded-3xl 
          
          "
            >
              <h3 className="mb-3 text-xl">
                <strong>Cleaning Systems </strong>
              </h3>
              <p>
                Proprietary cleaning systems firstdeveloped in the 70’s and
                continuously refined for 50+ years!
              </p>
            </div>
          </div>
          <div class="w-[390px] h-[440px] bg-blue-500 rounded-3xl relative">
            <img src={img1} className="rounded-3xl" alt="" />

            <div
              class="opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-start ps-5 text-white
           bg-blue-400 m-5 rounded-3xl 
          
          "
            >
              <h3 className="mb-3 text-xl">
                <strong>Quality Service</strong>
              </h3>
              <p>
                Consistent quality with each CottageCare Professional Cleaner!
              </p>
            </div>
          </div>
          <div class="w-[390px] h-[440px] bg-blue-500 rounded-3xl relative">
            <img src={img2} className="rounded-3xl" alt="" />

            <div
              class="opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-start ps-5 text-white
           bg-blue-400 m-5 rounded-3xl 
          
          "
            >
              <h3 className="mb-3 text-xl">
                <strong>Customer Care</strong>
              </h3>
              <p>
                Convenient Customer Communication via your preferred mode
                (phone, email, or text) i.e., cleaning day reminders, special
                offers, and ongoing follow-up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DependableClean;
