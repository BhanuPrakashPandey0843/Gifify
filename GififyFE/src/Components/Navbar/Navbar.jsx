import React, { useState } from 'react';
import logo from "../../assets/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5 bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
            Gifify
          </span>
        </a>

        <div className="flex items-center lg:order-2">
          <a
            href="#"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Download
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {['Home', 'Company', 'Marketplace', 'Features', 'Team', 'Contact'].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`block py-2 pl-3 pr-4 ${
                    index === 0
                      ? 'text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700'
                      : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  } lg:p-0`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
