import React, { useState } from "react";
import serviceImg from "../../assets/service-img.png";

const OurServices = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="grid grid-cols-2  w-full   2xl:px-64 py-20">
        <div className=" max-w-[550px]">
          <img className="w-full h-auto" src={serviceImg} alt="Service" />
        </div>
        <div>
          <h1 className="text-4xl font-semibold mb-5">
            45+ Years of Superior Cleaning
          </h1>
          <p className="w-[90%] leading-7">
            CottageCare has the distinguished record of using environmentally
            friendly cleaning products since our beginning in the mid-’70s. We
            were eco-friendly before the recent popular trend of all natural
            products.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-200 py-14  rounded-2xl flex flex-col  items-center">
              <svg
                className="w-10 h-10 fill-primary hover:fill-orange-500 "
                viewBox="0 0 24 24"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3.5 4.13516C3.5 3.23209 4.23209 2.5 5.13516 2.5C5.80379 2.5 6.40505 2.90708 6.65338 3.52788L6.79665 3.88607C6.20214 4.31929 5.71643 4.92335 5.41723 5.66014C4.99692 6.69515 5.01959 7.80665 5.3978 8.76651C5.47221 8.95535 5.61997 9.10596 5.80735 9.18396C5.99473 9.26197 6.20572 9.26069 6.39215 9.18044L12.3529 6.61436C12.725 6.45417 12.9026 6.02744 12.7541 5.65053C12.3758 4.69029 11.637 3.87189 10.6217 3.43813C9.81033 3.09152 8.94952 3.04489 8.15623 3.24613L8.04609 2.97079C7.56997 1.7805 6.41715 1 5.13516 1C3.40366 1 2 2.40366 2 4.13516V11H1.75C1.33579 11 1 11.3358 1 11.75C1 12.1642 1.33579 12.5 1.75 12.5H2V12.75C2 12.7538 2.00003 12.7576 2.00008 12.7614C1.99999 12.7799 2 12.7985 2.00001 12.8168L2.00001 12.8546C2 13.2298 2 13.4498 2.01557 13.6952C2.15751 15.9316 3.36604 17.9968 5.11758 19.3472C5.10383 19.3688 5.09106 19.3913 5.07934 19.4148L4.07934 21.4148C3.8941 21.7852 4.04427 22.2357 4.41475 22.421C4.78524 22.6062 5.23574 22.4561 5.42098 22.0856L6.3887 20.1501C7.19042 20.5559 8.0623 20.823 8.96911 20.9148C9.21355 20.9396 9.36275 20.9452 9.61687 20.9548L9.62369 20.955C10.3639 20.9828 11.0885 21 11.75 21C12.4115 21 13.1361 20.9828 13.8763 20.955L13.883 20.9548C14.1372 20.9452 14.2865 20.9396 14.5309 20.9148C15.4378 20.823 16.3098 20.5559 17.1116 20.15L18.0793 22.0856C18.2646 22.4561 18.7151 22.6062 19.0856 22.421C19.4561 22.2357 19.6062 21.7852 19.421 21.4148L18.421 19.4148C18.4092 19.3913 18.3964 19.3687 18.3827 19.347C20.1341 17.9966 21.3425 15.9315 21.4845 13.6952C21.5 13.4498 21.5 13.2299 21.5 12.8546L21.5 12.8168C21.5 12.7567 21.5001 12.6942 21.4963 12.6365C21.4933 12.5905 21.4886 12.545 21.4821 12.5H21.75C22.1642 12.5 22.5 12.1642 22.5 11.75C22.5 11.3358 22.1642 11 21.75 11H3.5V4.13516Z"
                    fill=""
                  ></path>{" "}
                </g>
              </svg>
              <p className="mt-5 text-secondary w-[50%] text-center">
                Bathroom cleaning
              </p>
            </div>

            <div
              className={`py-14  rounded-2xl flex flex-col  items-center ${
                isHovered ? "bg-primary " : "bg-gray-200"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <svg
                className={` w-10 h-10  ${
                  isHovered ? "fill-white" : "fill-primary"
                }`}
                fill=""
                viewBox="0 -0.65 122.88 122.88"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      class="st0"
                      d="M10.28,98.77c5.06,0,9.16,3.82,9.16,8.53c0,4.71-4.1,8.53-9.16,8.53c-5.06,0-9.17-3.82-9.17-8.53 C1.11,102.59,5.22,98.77,10.28,98.77L10.28,98.77z M93.09,97.99l0.01,0.03l1.38-0.44c3.99,10.75,6.25,15.3,17.91,16.5h10.48v7.5 H89.39v-7.5h1.14l-3.89-13.98l1.08-0.35l-14.3-36.82l-0.02-0.06l0,0L62.83,33.76c-1.49-3.28-2.45-6.65-3.4-9.96 C57.4,16.68,55.45,9.85,48.69,7.35c-1.25-0.46-2.66-0.83-4.21-1.1c-1.63-0.29-3.37-0.47-5.23-0.56c-5.22-0.25-10.36,1.11-14.6,4.17 c-3.86,2.78-6.99,7.01-8.76,12.74c-1.75,5.67-2.61,10.38-1.82,14.49c0.76,3.95,3.12,7.56,7.82,11.25c0.15,0.12,0.36,0.3,0.58,0.48 c0.29,0.24,0.59,0.5,0.82,0.63c2.93,1.7,5.98,3.17,8.95,4.61c0.51,0.25,1.02,0.49,1.53,0.74c0.69,0.33,1.41,0.67,2.1,1 c7.59,3.6,12.26,5.81,13.58,15.97c0.26,1.96,0.24,3.86-0.01,5.69c18.44,6.65,30.97,18.74,36.03,38.68H22.59 c3.29-4.42,4.34-9.96,2.29-14.87c-3.32-7.95-13.51-11.27-22.76-7.4C1.38,94.15,0.68,94.49,0,94.87V70.66 c1.85,0.01,3.69,0.04,5.5,0.09v-6.72c0-0.65,0.53-1.18,1.18-1.18h10.1c0.65,0,1.18,0.53,1.18,1.18v7.26 c9.51,0.74,18.2,2.15,25.99,4.39c0.07-1.03,0.04-2.09-0.1-3.18c-0.92-7.1-4.53-8.81-10.39-11.59c-0.67-0.32-1.36-0.65-2.14-1.02 c-0.51-0.25-1.02-0.49-1.53-0.74c-3.07-1.48-6.22-3-9.33-4.81c-0.68-0.39-1.17-0.81-1.64-1.21c-0.12-0.1-0.24-0.2-0.42-0.34 c-5.87-4.61-8.87-9.31-9.88-14.64c-0.99-5.17-0.03-10.71,1.98-17.22c2.16-6.99,6.05-12.19,10.87-15.67 c5.3-3.83,11.71-5.54,18.16-5.23c2.16,0.1,4.14,0.31,5.94,0.63c1.88,0.33,3.6,0.79,5.18,1.37c9.47,3.51,11.81,11.68,14.24,20.21 c0.9,3.16,1.82,6.37,3.1,9.19c0.05,0.1,0.1,0.2,0.14,0.31l10.59,29.2l0,0L93.09,97.99L93.09,97.99z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p
                className={` mt-5 w-[50%] text-center ${
                  isHovered ? "text-white" : "text-secondary"
                }`}
              >
                Bathroom cleaning
              </p>
            </div>

            <div className="bg-gray-200 py-14  rounded-2xl flex flex-col  items-center">
              <svg
                className="w-10 h-10 fill-primary hover:fill-orange-500 "
                fill=""
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Cleaning">
                    {" "}
                    <g id="XMLID_533_">
                      {" "}
                      <path
                        d="M94.675,112h260.364c6.772-8,10.497-18.033,10.306-28.361c-0.212-11.452-5.018-22.08-13.531-29.545 c-4.635-4.064-11.917-8.963-20.29-8.963c-0.523,0-1.045-0.018-1.564,0c-21.727,0.765-42.184-7.714-56.141-23.233 C262.437,9.244,246.157,1.981,229.152,1.981c-17.108,0-33.454,7.33-44.845,20.113c-15.572,17.475-39.112,26.193-62.973,23.309 c-1.754-0.212-3.547-0.314-5.329-0.314c-5.327,0-10.905,2.229-16.579,6.601c-8.48,6.533-13.87,16.08-15.179,26.837 c-1.345,11.065,1.738,22.234,8.683,30.96L94.675,112z"
                        id="XMLID_534_"
                      ></path>{" "}
                      <path
                        d="M192.141,153.939c0.366,0,0.727,0.061,1.083,0.061h192.984c6.39,0,11.589-5.11,11.589-11.501 c0-6.39-5.199-11.499-11.589-11.499H89.89c-0.004,0-0.008,0-0.012,0c-0.003,0-0.006,0-0.009,0H62.932 c-6.391,0-11.59,5.11-11.59,11.499c0,6.391,5.199,11.501,11.59,11.501h128.125C191.414,154,191.775,153.939,192.141,153.939z"
                        id="XMLID_535_"
                      ></path>{" "}
                      <path
                        d="M346,371h27V229.079c0-3.598-1.713-6.986-4.262-9.54c-0.939-0.939-2.169-1.72-3.308-2.334 c-0.051-0.028-0.172-0.051-0.223-0.08c-1.901-0.993-3.773-1.525-5.984-1.526C351.793,215.6,346,221.647,346,229.079v116.983 c0,0.526,0.142,1.062,0.142,1.612c0,0.55-0.142,1.086-0.142,1.612V371z"
                        id="XMLID_536_"
                      ></path>{" "}
                      <path
                        d="M382.345,419c-5.502,0-9.345-4.404-9.345-9.906V390h-27v19.091c0,5.502-5.041,9.909-10.543,9.909h-1.485 C318.785,419,307,431.409,307,446.596v6.358c0,0.745,0.282,1.518,0.282,2.318c0,0.799-0.282,1.573-0.282,2.318V465h110v-7.532 c0-0.708-0.251-1.441-0.251-2.197s0.251-1.489,0.251-2.197v-6.47c0-0.013,0.275-0.054,0.276-0.068 C417.256,431.365,405.181,419,390.005,419H382.345z"
                        id="XMLID_537_"
                      ></path>{" "}
                      <path
                        d="M182,207.527V174H84.729l15.662,129.777C146.902,296.064,182,255.599,182,207.527z"
                        id="XMLID_538_"
                      ></path>{" "}
                      <path
                        d="M453.198,465H437v9.771c0,5.502-3.988,10.229-9.49,10.229H296.466c-5.502,0-9.466-4.727-9.466-10.229V465 h-10.884l-7.46,45h192.002L453.198,465z"
                        id="XMLID_539_"
                      ></path>{" "}
                      <path
                        d="M326,399.886v-18.924c0-0.026,0-0.051,0-0.077V358H107.004l16.136,132.537 C124.503,501.755,134.095,510,145.454,510h103.002l9.39-56.551c0.8-4.805,4.956-8.449,9.827-8.449h18.859 C287.142,423,304,403.821,326,399.886z"
                        id="XMLID_540_"
                      ></path>{" "}
                      <path
                        d="M326,229.078c0-18.419,14.736-33.419,33.154-33.42c0.903,0,1.638-0.133,2.528-0.062L364.189,174H202 v33.527c0,58.161-42.745,107.446-99.166,116.375L104.582,338H326V229.078z"
                        id="XMLID_541_"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g id="Layer_1"></g>{" "}
                </g>
              </svg>
              <p className="mt-5 text-secondary w-[50%] text-center">
                Bathroom cleaning
              </p>
            </div>
            <div className="bg-gray-200 py-14  rounded-2xl flex flex-col  items-center">
              <svg
                className="w-10 h-10 fill-primary hover:fill-orange-500 "
                fill=""
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M10 2C9.45 2 9 2.45 9 3L9 6.4902344L2.4199219 11.189453C2.1599219 11.369453 2 11.68 2 12L2 16C2 16.55 2.45 17 3 17L25 17C25.55 17 26 16.55 26 16L26 12C26 11.68 25.840078 11.369453 25.580078 11.189453L19 6.4902344L19 3C19 2.45 18.55 2 18 2L10 2 z M 6.9882812 22C6.4392812 22 5.9902344 22.45 5.9902344 23L5.9902344 24L1.9980469 24C1.4490469 24 1 24.45 1 25L1 47C1 47.55 1.4490469 48 1.9980469 48L25.808594 48C26.437594 48 26.945312 47.489375 26.945312 46.859375L26.945312 25.082031C26.945312 24.484031 26.462234 24 25.865234 24L21.955078 24L21.955078 23.134766C21.955078 22.507766 21.448266 22 20.822266 22L6.9882812 22 z M 30.085938 24C30.018937 23.998 29.591391 23.994938 29.275391 24.335938C29.030391 24.599938 29.005 24.91 29 25L29 32L49 32L49 25C49 24.45 48.550953 24 48.001953 24L45.90625 24L36.925781 24L30.085938 24 z M 5.9902344 28L21.957031 28C22.506031 28 22.955078 28.45 22.955078 29L22.955078 43C22.955078 43.55 22.506031 44 21.957031 44L5.9902344 44C5.4412344 44 4.9921875 43.55 4.9921875 43L4.9921875 29C4.9921875 28.45 5.4412344 28 5.9902344 28 z M 32.933594 28L44.908203 28C45.457203 28 45.90625 28.45 45.90625 29C45.90625 29.55 45.457203 30 44.908203 30L32.933594 30C32.384594 30 31.935547 29.55 31.935547 29C31.935547 28.45 32.384594 28 32.933594 28 z M 6.9882812 30L6.9882812 42L20.958984 42L20.958984 30L6.9882812 30 z M 29 34L29 47C29.002 47.083 29.018578 47.402828 29.267578 47.673828C29.575578 48.007828 29.992641 48.002 30.056641 48L48.001953 48C48.550953 48 49 47.55 49 47L49 34L29 34 z M 32.933594 37C33.482594 37 33.931641 37.45 33.931641 38L33.931641 43C33.931641 43.55 33.482594 44 32.933594 44C32.384594 44 31.935547 43.55 31.935547 43L31.935547 38C31.935547 37.45 32.384594 37 32.933594 37 z"></path>
                </g>
              </svg>
              <p className="mt-5 text-secondary w-[50%] text-center">
                Bathroom cleaning
              </p>
            </div>
            <div className="bg-gray-200 py-14  rounded-2xl flex flex-col  items-center">
              <svg
                className="w-10 h-10 fill-primary hover:fill-orange-500 "
                fill=""
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="202.268,512 340.105,512 512,340.105 512,202.268 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="75.209,96.686 0,171.895 0,309.732 144.128,165.605 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="256,277.477 21.477,512 159.314,512 324.919,346.395 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="436.791,458.268 383.058,512 490.523,512 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="458.268,436.791 512,490.523 512,383.058 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="171.895,0 96.686,75.209 165.605,144.128 309.732,0 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="0,383.058 0,490.523 53.732,436.791 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="277.477,256 346.395,324.919 512,159.314 512,21.477 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="0,0 0,128.942 128.942,0 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="383.058,0 436.791,53.732 490.523,0 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <rect
                        x="-29.694"
                        y="162.064"
                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -87.315 210.7958)"
                        width="480.979"
                        height="97.465"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p className="mt-5 text-secondary w-[50%] text-center">
                Bathroom cleaning
              </p>
            </div>
            <div className="bg-gray-200 py-14  rounded-2xl flex flex-col  items-center">
              <svg
                className="w-10 h-10 fill-primary hover:fill-orange-500 "
                viewBox="0 0 24 24"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.5 2C8.67157 2 8 2.67157 8 3.5V4.5C8 5.32843 8.67157 6 9.5 6H14.5C15.3284 6 16 5.32843 16 4.5V3.5C16 2.67157 15.3284 2 14.5 2H9.5Z"
                    fill=""
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 4.03662C5.24209 4.10719 4.44798 4.30764 3.87868 4.87694C3 5.75562 3 7.16983 3 9.99826V15.9983C3 18.8267 3 20.2409 3.87868 21.1196C4.75736 21.9983 6.17157 21.9983 9 21.9983H15C17.8284 21.9983 19.2426 21.9983 20.1213 21.1196C21 20.2409 21 18.8267 21 15.9983V9.99826C21 7.16983 21 5.75562 20.1213 4.87694C19.552 4.30764 18.7579 4.10719 17.5 4.03662V4.5C17.5 6.15685 16.1569 7.5 14.5 7.5H9.5C7.84315 7.5 6.5 6.15685 6.5 4.5V4.03662ZM15.5117 12.5483C15.8146 12.2657 15.8309 11.7911 15.5483 11.4883C15.2657 11.1855 14.7911 11.1691 14.4883 11.4517L10.7143 14.9741L9.51174 13.8517C9.20893 13.5691 8.73434 13.5855 8.45171 13.8883C8.16909 14.1911 8.18545 14.6657 8.48826 14.9483L10.2025 16.5483C10.4907 16.8172 10.9379 16.8172 11.226 16.5483L15.5117 12.5483Z"
                    fill=""
                  ></path>{" "}
                </g>
              </svg>
              <p className="mt-5 text-secondary w-[50%] text-center">
                Bathroom cleaning
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
