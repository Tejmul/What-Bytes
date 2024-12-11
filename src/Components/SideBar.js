import React from "react";
import { FaHome, FaClipboardList, FaBriefcase } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="border text-black w-64 hidden h-screen md:flex flex-col">
      <nav className="flex-grow mt-6">
        <ul className="space-y-2 px-4">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-black-200 hover:bg-gray-200 rounded-md"
            >
              <FaHome className="w-5 h-5 mr-3" />
              <p className="hidden md:flex">Dashboard</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-black-200 bg-gray-200 rounded-md"
            >
              <FaClipboardList className="w-5 h-5 mr-3" />
              <p className="hidden md:flex">Skill Test</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-black-200 hover:bg-gray-200 rounded-md"
            >
              <FaBriefcase className="w-5 h-5 mr-3" />
              <p className="hidden md:flex">Internship</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
