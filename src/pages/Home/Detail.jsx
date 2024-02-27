import React from "react";

const Detail = () => {
  return (
    <>
      <div className="my-20 py-20 bg-gray-50">
        <div className="grid grid-cols-3   2xl:px-64">
          <div className="card w-96 bg-gray-200">
            <div className="card-body">
              <div className="w-14 h-14 bg-primary p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffff"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>

              <h2 className="card-title font-semibold text-2xl">
                Instant Quotes
              </h2>
              <p className="leading-8">
                Other cleaning companies perform a walkthrough before giving you
                an estimate. CottageCare was the first to innovate
                over-the-phone pricing. We provide estimates solely based on the
                size of your home and the frequency of your cleanings.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-gray-200">
            <div className="card-body">
              <div className="w-14 h-14 bg-primary p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#0984e3"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffff"
                  className="w-8 h-8 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <h2 className="card-title font-semibold text-2xl">
                No Rescheduling Fees
              </h2>
              <p className="leading-8">
                Your life is busy. Your schedule changes. The next thing you
                know, people are visiting when you least expect it. We get it!
                We understand that our customers’ lives are busy, and your
                cleaning service should relieve stress in every way. Need to
                reschedule? Not a problem.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-gray-200">
            <div className="card-body">
              <div className="w-14 h-14 bg-primary p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffff"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#0984e3"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>

              <h2 className="card-title font-semibold text-2xl">
                No Contracts
              </h2>
              <p className="leading-8">
                We realize our customers don’t want to get locked into lengthy
                contracts. Sometimes when you’re stuck in a contract, the
                quality can deteriorate over time. We choose to earn your
                loyalty with each and every cleaning.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>Flexible Scope of Work to Meet Your Desired Budget</p>
          <p className="flex justify-center items-center mt-4 font-semibold">
            Call{" "}
            <span className="w-10 h-10 bg-primary flex justify-center items-center rounded-full mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                stroke-width="0"
                stroke="currentColor"
                class="w-5 h-5 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>{" "}
            1-800-476-7830
          </p>
        </div>
      </div>
    </>
  );
};

export default Detail;
