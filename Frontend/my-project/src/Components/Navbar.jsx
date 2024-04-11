import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Chat App</h1>
      </div>
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
        {/* Chat Room Button with Dropdown */}
        <div className="relative">
          <button className="text-gray-300 hover:text-white">
            Chat Rooms
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown Content */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden">
            <ul className="py-1">
              <li>
                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full">
                  Chat Room 1
                </button>
              </li>
              <li>
                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full">
                  Chat Room 2
                </button>
              </li>
              {/* Add more chat rooms as needed */}
            </ul>
          </div>
        </div>
        <button className="text-gray-300 hover:text-white hidden sm:block">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
