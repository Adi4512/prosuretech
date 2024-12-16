import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import companyLogo from "../assets/companyLogo.jpeg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [drawer, setDrawer] = useState(false);

  // Toggle the mobile drawer
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  // Close drawer and ensure scrolling is restored
  const closeDrawer = () => {
    setDrawer(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <img
                className="h-10 w-10 mr-2 rounded-full"
                src={companyLogo}
                alt="Company Logo"
              />
              <span className="text-xl tracking-tight cursor-pointer hover:text-slate-600 transition duration-300 ease-in-out">
                <a href="/">ProSure Technology</a>
              </span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-12 mr-32">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-slate-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                >
                  {item.target === "_blank" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Contact Button */}
            <div className="hidden lg:flex justify-end">
              <NavLink
                to="/contact"
                className="hover:text-black bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-900 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Contact Us
              </NavLink>
            </div>

            {/* Mobile Drawer Toggle */}
            <div className="flex flex-col lg:hidden z-50">
              <button onClick={toggleDrawer} className="p-2">
                {drawer ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {drawer && (
            <div className="fixed top-[64px] left-0 z-50 w-full bg-neutral-900 text-center p-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  smooth={true}
                  duration={1000}
                  className="py-2 text-white cursor-pointer hover:text-slate-400"
                  onClick={closeDrawer} // Close drawer on click
                >
                  {item.label}
                </Link>
              ))}
              <NavLink
                to="/contact"
                className="text-white bg-orange-700 py-2 px-4 rounded hover:bg-orange-600"
                onClick={closeDrawer} // Close drawer
              >
                Contact Us
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
