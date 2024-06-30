import React from "react";

const Location = () => {
  return (
    <div className=" pt-24 pb-64 px-64 grid grid-cols-2">
      <div className="w-64 h-64">
        {" "}
        <iframe
          className="border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929682.9213111987!2d-102.8862740213926!3d44.18608606222324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877d432d85e938a5%3A0x7f0d6293186a4b7!2sSouth%20Dakota%2C%20USA!5e0!3m2!1sen!2sbd!4v1719676020671!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <h1 className="font-semibold text-4xl mb-4">
          North American Locations
        </h1>
        <p>
          Recruiting and managing an individual to clean your home can be
          time-intensive and unpredictable. Gain the benefits of working with a
          nationally recognized cleaning service to ensure your cleaning will be
          consistent and the quality of the work never diminishes. Our call
          center will ensure scheduling is a breeze. With over 45+ years in the
          business and 40+ locations in the United States and Canada,
          CottageCare consistently receives the highest quality reviews from our
          customers across the country.
        </p>
        <div className="mt-4 flex">
          <p className=" text-lg me-5  flex">
            <p className="text-2xl me-2">
              <ion-icon name="checkmark-circle"></ion-icon>
            </p>{" "}
            <strong className="text-gray-600"> 40+ Locations</strong>{" "}
          </p>
          <p className=" text-lg flex ">
            <p className="text-2xl me-2">
              <ion-icon name="checkmark-circle"></ion-icon>
            </p>{" "}
            <strong className="text-gray-600">
              {" "}
              45+ Years in the Business
            </strong>{" "}
          </p>
        </div>
        <div className="mt-4 flex">
          <button className="bg-primary text-white rounded-full py-3 px-6 me-5">
            Find a Location Close to You!
          </button>
          <p className="ms-4 flex items-center">
            Call{" "}
            <p className=" w-10 h-10 bg-blue-200  p-3 rounded-full  mx-2">
              <ion-icon name="call"></ion-icon>
            </p>{" "}
            1-700-474-7730
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
