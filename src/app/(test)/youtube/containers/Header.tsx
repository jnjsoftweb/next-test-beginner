'use client';

import React from 'react';
import { useSidebar } from '../context/SidebarContext';

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <span className="text-2xl font-bold text-red-600 mr-2">YouTube</span>
      </div>
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-full"
        />
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
