import React from "react";

import employment from "../../assets/employment.png";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const EmploymentOpportunities = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <>
      <section className="w-screen 2xl:px-64 mt-6 ">
        <div>EmploymentOpportunities page</div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center my-14 ">
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
                  Please Provide your details here!
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="First Name"
                        {...register("firstName", {
                          required: {
                            value: true,
                            message: "FirstName is required",
                          },
                        })}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Last Name"
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "LastName is required",
                          },
                        })}
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Your Number"
                      {...register("number", {
                        required: {
                          value: true,
                          message: "Number is required",
                        },
                      })}
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@gmail.com"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                      })}
                    />
                  </div>
                  <div>
                    <label for="choice"> At Least 18 years of Age?</label>
                    <Controller
                      name="MyCheckbox"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          className="checkbox"
                          {...field}
                        />
                      )}
                    />
                  </div>

                  <div>
                    <label for="input">
                      {" "}
                      Interested in Which Metro Area?(Required)
                    </label>

                    <Controller
                      name="areaName"
                      control={control}
                      render={({ field }) => (
                        <Select
                          className="select-bordered  w-full "
                          {...field}
                          options={[
                            { value: "Akron, OH", label: "Akron, OH" },
                            {
                              value: "Barboursville, WV",
                              label: "Barboursville, WV",
                            },
                            {
                              value: "Baton Rouge, LA",
                              label: "Baton Rouge, LA",
                            },
                            {
                              value: "Bloomington, IL",
                              label: "Bloomington, IL",
                            },
                            {
                              value: "Calgary North Central",
                              label: "Calgary North Central",
                            },
                            { value: "Calgary South", label: "Calgary South" },
                            {
                              value: "Milwaukee/North, WI",
                              label: "Milwaukee/North, WI",
                            },
                          ]}
                          isClearable
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label for="input">
                      {" "}
                      How did you hear about us?(Required)
                    </label>

                    <Controller
                      name="socialName"
                      control={control}
                      render={({ field }) => (
                        <Select
                          className="select-bordered  w-full "
                          {...field}
                          options={[
                            {
                              value: "Instagram",
                              label: "Instagram",
                            },
                            { value: "Facebook", label: "Facebook" },
                            {
                              value: "CottageCare Website",
                              label: "CottageCare Website",
                            },
                            { value: "Nextdoor", label: "Nextdoor" },
                            { value: "Referral", label: "Referral" },
                            { value: "Indeed", label: "Indeed" },
                            { value: "Other", label: "Other" },
                          ]}
                          isClearable
                        />
                      )}
                    />
                  </div>
                  <div>
                    <div>
                      <label for="input"> Resume</label>
                      <input
                        type="file"
                        accept=".pdf"
                        className="file-input file-input-bordered file-input-secondary w-full "
                        {...register("resume", {
                          required: {
                            value: true,
                            message: "Resume is required",
                          },
                        })}
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
