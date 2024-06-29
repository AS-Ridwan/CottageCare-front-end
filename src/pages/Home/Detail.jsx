import React from "react";

const Detail = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-[500px]  2xl:px-64 my-24 bg-gray-100 py-[420px]">
        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffff"
                viewBox="0 0 24 24"
                stroke-width="0"
                stroke="currentColor"
                className="h-10 w-10 text-white transition-all "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <h2 className=" font-semibold text-2xl">Instant Quotes</h2>
              <p>
                Other cleaning companies perform a walkthrough before giving you
                an estimate. CottageCare was the first to innovate
                over-the-phone pricing. We provide estimates solely based on the
                size of your home and the frequency of your cleanings.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  className="text-sky-500 transition-all duration-300 group-hover:text-white"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              {/* --- */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#0984e3"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffff"
                className="h-10 w-10 text-white transition-all "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <h2 className=" font-semibold text-2xl">No Rescheduling Fees</h2>
              <p>
                Your life is busy. Your schedule changes. The next thing you
                know, people are visiting when you least expect it. We get it!
                We understand that our customers’ lives are busy, and your
                cleaning service should relieve stress in every way. Need to
                reschedule? Not a problem.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  className="text-sky-500 transition-all duration-300 group-hover:text-white"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffff"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0984e3"
                className="h-10 w-10 text-white transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <h2 className=" font-semibold text-2xl">No Contracts</h2>
              <p>
                We realize our customers don’t want to get locked into lengthy
                contracts. Sometimes when you’re stuck in a contract, the
                quality can deteriorate over time. We choose to earn your
                loyalty with each and every cleaning.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  className="text-sky-500 transition-all duration-300 group-hover:text-white"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
