import React, { useState } from "react";
import Logo from "../assets/fav-icon.png";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navlinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonial", href: "#testimonial" },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 right-0 left-0 bg-white backdrop-blur-sm z-50 border-0 shadow-sm border-gray-100"
    >
      <div className="flex w-full container mx-auto items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
        </div>

        {/* hamburger menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 cursor-pointer"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/*navitems*/}
        <div className="hidden md:flex items-center gap-10">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all 
                ${
                  activeLink === link.href
                    ? "text-blue-600 after:w-full"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100 ">
          <a href="#newsletter">Get in Touch</a>
        </button>

        {/* mobile menu */}
      </div>

      {/*mobile menu*/}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navlinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-bold py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100 ">
              <a href="#newsletter">Get in Touch</a>
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
