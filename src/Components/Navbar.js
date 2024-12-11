import React from "react";
import Logo from "../Assets/logo.png"
import Profile from "../Assets/tejmul.jpeg"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={Logo.src}
            alt=""
            className="h-12 w-28"
          />
        </div>

        <div className="flex justify-center items-center space-x-4">
          <img
            src={Profile.src}
            alt="User Avatar"
            className="h-8 w-8 rounded-full border border-gray-300"
          />
          <div className="text-gray-600">Tejmul Movin</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
