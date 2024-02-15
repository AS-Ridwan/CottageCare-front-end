import React from "react";

import employment from "../../assets/employment.png";

const EmploymentOpportunities = () => {
  return (
    <>
      <section className="w-screen 2xl:px-64 mt-6 ">
        <div>EmploymentOpportunities page</div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center ">
          {/* left side img */}
          {/* left side img */}
          <div className=" flex justify-center lg:justify-start mx-5 lg:mx-0 ">
            <img
              className="h-auto w-full lg:max-w-xl "
              src={employment}
              alt=""
            />
          </div>

          {/* right side form */}
          {/* right side form */}
          <div className="flex flex-col items-center  justify-center ">
            <div className="w-full bg-accent rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                <h1 className="text-xl font-medium leading-tight tracking-tight text-secondary  md:text-2xl ">
                  Create your account to get full access!
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label
                        for="text"
                        className="block mb-2 text-sm font-medium text-secondary dark:text-accent"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="text"
                        className="block mb-2 text-sm font-medium text-secondary dark:text-accent"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="number"
                      className="block mb-2 text-sm font-medium text-secondary dark:text-accent"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Your Number"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-secondary dark:text-accent"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@gmail.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label for="choice"> At Least 18 years of Age?</label>
                    <input
                      type="checkbox"
                      id="choice"
                      className="ms-3"
                      name="choice"
                      value=""
                    />
                  </div>

                  <div>
                    <label for="input">
                      {" "}
                      Interested in Which Metro Area?(Required)
                    </label>

                    <select className=" select select-bordered  w-full ">
                      <option selected>Akron, OH</option>
                      <option>Barboursville, WV</option>
                      <option>Baton Rouge, LA</option>
                      <option>Bloomington, IL</option>
                      <option>Calgary North Central</option>
                      <option>Calgary South</option>
                      <option>Milwaukee/North, WI</option>
                    </select>
                  </div>
                  <div>
                    <label for="input">
                      {" "}
                      How did you hear about us?(Required)
                    </label>

                    <select className=" select select-bordered  w-full ">
                      <option selected>Instagram</option>
                      <option>Facebook</option>
                      <option>CottageCare Website</option>
                      <option>Nextdoor</option>
                      <option>Referral</option>
                      <option>Indeed</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <label for="input"> Resume</label>
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-secondary w-full "
                      />
                    </div>
                    <small>Max. file size: 50 MB.</small>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-accent bg-secondary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmploymentOpportunities;
