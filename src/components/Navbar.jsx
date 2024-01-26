import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <>
      {/* topbar */}
      <div className="flex w-full h-10 justify-between items-center flex-wrap px-[273px] bg-gray-400">
        <div>
          <span className="bg-primary p-4 text-accent">NOW HIRING</span>
        </div>
        <div>
          <span className="text-accent p-4 bg-gray-500">
            CALL CottageCare 1-800-476-7830
          </span>
          <span className="text-accent py-4  ps-4">Gift Certificates</span>
        </div>
      </div>
      {/* topbar */}
      {/* topbar */}

      {/* Navbar */}
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-screen navbar bg-accent px-64">
            <div className="flex-1 px-2 mx-2 font-bold text-2xl">
              CottageCare
            </div>
            <div className="flex-none lg:hidden">
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
                      isActive ? "text-white bg-gray-700" : "text-black"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-gray-700" : "text-black"
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-gray-700" : "text-black"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-gray-700" : "text-black"
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-gray-700" : "text-black"
                    }
                  >
                    Login
                  </NavLink>
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
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Items 1</a>
            </li>
            <li>
              <a>Sidebar Items 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
