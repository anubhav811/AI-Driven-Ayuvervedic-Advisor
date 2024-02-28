import React from "react";
import { PinContainer } from "./ui/pin-container";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const LandingPage: React.FC = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="logo.png" className="h-10" alt="Website Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ayurvedic Advisor
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="bg-[#B4A6AB]  hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    const about = document.getElementById("about");
                    about &&
                      about.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    const features = document.getElementById("features");
                    features &&
                      features.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="about" className="bg-[#DDF8E8] dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              AI-powered Ayurvedic Assistant
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Revitalize Your Well-being with our AI-Powered Ayurvedic
              Assistant: Your Personalized Path to Holistic Health and Balance
            </p>
            <Link
              to="/"
              onClick={() => {
                const features = document.getElementById("features");
                features &&
                  features.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#171717,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Get Started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="ayurveda.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section id="features" className="bg-[#DDF8E8] dark:bg-gray-800 py-12 ">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <h2 className="text-5xl font-bold text-center mb-12">Features</h2>
          <div className="flex flex-wrap justify-center gap-20">
            <PinContainer title="Go to Chatbot">
              <Link to="/chatbot">
                <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold text-base text-slate-800">
                    Ayurvedic Chatbot ✨
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text">
                      Engage with our AI-powered chatbot to get personalized
                      advice and recommendations based on Ayurvedic principles
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4">
                    <img
                      className="max-w-full max-h-full"
                      src="chatbot.jpg"
                      alt="Chatbot Image"
                    />
                  </div>
                </div>
              </Link>
            </PinContainer>
            <PinContainer title="Go to Prakruti analyzer">
              <Link to="/prakruti-analyzer">
                <div className="flex basis-full flex-col p-4 tracking-tight text-black sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold text-base text-slate-800">
                    Analyze Prakruti 🧠
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span>
                      Discover your unique constitution (Prakruti) with our
                      Prakruti analyzer tool. Get insights into your physical,
                      mental, and emotional characteristics to support your
                      holistic health journey
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                    <img
                      className="max-w-full max-h-full object-fit"
                      src="prakruti.png"
                      alt="Prakruti Analyzer Image"
                    />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
