import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BeakerIcon,
  GifIcon,
  GiftIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const Navbar = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      {/* topbar */}
      <div className="flex w-full h-10 justify-between items-center flex-wrap px-4 2xl:px-[273px] bg-gray-400">
        <div>
          <span className="bg-primary p-4 text-white text-sm">NOW HIRING</span>
        </div>
        <div className="flex">
          <div className="hidden md:flex items-center bg-gray-500 py-3 px-2">
            <span>
              <PhoneIcon class="h-4 w-4 text-white" />
            </span>
            <span className="text-white ms-2  text-sm ">
              CALL CottageCare <a href="tel:1-800-476-7830">1-800-476-7830</a>
            </span>
          </div>
          <div className="flex items-center ms-5">
            <span>
              <GiftIcon class="h-4 w-4 text-white" />
            </span>
            <span className="text-white ms-2  text-sm">Gift Certificates</span>
          </div>
        </div>
      </div>
      {/* topbar */}
      {/* topbar */}

      {/* Navbar */}
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-screen navbar bg-accent 2xl:px-64">
            <div className="flex-1 px-2 mx-2 font-bold text-2xl text-secondary">
              CottageCare
            </div>
            <div className="flex-none lg:hidden">
              {/* ///////////// */}
              <li className="ms-2 list-none mt-2 ">
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller "
                    value="synthwave"
                    onChange={handleToggle}
                    checked={theme === "light" ? false : true}
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current text-secondary w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </li>
              {/* ///////////// */}
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "!text-white !bg-gray-700 "
                        : "text-secondary  "
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="ms-2">
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? "!text-white  !bg-gray-700" : "text-secondary "
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li className="ms-2">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "!text-white  !bg-gray-700" : "text-secondary "
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="ms-2">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "!text-white  !bg-gray-700" : "text-secondary "
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
                <li className="ms-2">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "!text-white  !bg-gray-700" : "text-secondary "
                    }
                  >
                    Login
                  </NavLink>
                </li>

                <li className="ms-2 border-l border-slate-200 ">
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                      type="checkbox"
                      className="theme-controller "
                      value="synthwave"
                      onChange={handleToggle}
                      checked={theme === "light" ? false : true}
                    />

                    {/* sun icon */}
                    <svg
                      className="swap-off fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-on fill-current text-secondary w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side overflow-hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-accent">
            {/* Sidebar content here */}
            {/* close sidebar */}
            <div className="my-8 ms-2">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="btn btn-square btn-ghost bg-gray-700 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </label>
            </div>
            {/* close sidebar */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "!text-white !bg-gray-700 " : "text-secondary  "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "!text-white  !bg-gray-700" : "text-secondary "
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "!text-white  !bg-gray-700" : "text-secondary "
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "!text-white  !bg-gray-700" : "text-secondary "
                }
              >
                Contact us
              </NavLink>
            </li>
            <li className="mt-4 items-center">
              <NavLink to="/login" className="text-white  bg-gray-700">
                Login
              </NavLink>
            </li>
            <li className="mt-2 items-center">
              <NavLink to="/login" className="text-white  bg-primary">
                <span>
                  <PhoneIcon class="h-4 w-4 text-white" />
                </span>
                Call Now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
