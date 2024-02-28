import React from "react";
import { Link } from "react-router-dom";
// Footer component
export const Navbar: React.FC = () => {
  return (
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

  );
};