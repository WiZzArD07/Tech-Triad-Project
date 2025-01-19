import React, { useState } from "react";

const PopOutMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

      </button>

      {/* Pop-out Menu */}
      {isMenuOpen && (
        <div className="absolute justify-center text-black flex transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg border">
          <ul className="py-1 w-full">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
              >
                My Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
              >
                Edit Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
              >
                Vendor Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
              >
                Project Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
              >
                Change Password
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopOutMenu;