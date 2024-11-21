import React from "react";
import { navItems } from "../constants";

const NavBar = () => {
  return (
    <>
      <nav className=" sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm ml-16">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img
                className="h-10 w-10 mr-2 rounded-full"
                src="https://picsum.photos/200"
                alt="Company-Logo"
              />
              <span className="text-xl tracking-tight cursor-pointer hover:text-slate-600 transition duration-300 ease-in-out ">
                <a href="/">ProSure Technology</a>
              </span>
            </div>
            <ul className=" hidden lg:flex space-x-12 mr-32 ">
              {navItems.map((item, index) => {
                return (
                  <li
                    className="hover:text-slate-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110
                     
                     
                     "
                    key={index}
                  >
                    {" "}
                    {item.label}
                  </li>
                );
              })}
            </ul>
            <div className="hidden md:flex  items-center">
              <a
                href="#"
                className="hover:text-black  bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-900 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
