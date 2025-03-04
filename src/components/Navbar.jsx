import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white h-20 px-5 md:px-10 flex items-center justify-between max-w-6xl mx-auto">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-8 cursor-pointer" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center text-lg">
        <button className="bg-white text-black font-bold py-2 px-5 rounded-full">Home</button>
        <span className="cursor-pointer hover:text-gray-400">About</span>
        <span className="cursor-pointer hover:text-gray-400">Projects</span>
        <span className="cursor-pointer hover:text-gray-400">Contact</span>
      </div>

      {/* Hire Me Button (Desktop) */}
      <button className="hidden md:block border border-white bg-transparent text-white py-2 px-5 rounded-full cursor-pointer text-lg hover:bg-white hover:text-black transition">
        HIRE ME
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-5 py-5 md:hidden">
          <button className="bg-white text-black font-bold py-2 px-5 rounded-full">Home</button>
          <span className="cursor-pointer hover:text-gray-400">About</span>
          <span className="cursor-pointer hover:text-gray-400">Projects</span>
          <span className="cursor-pointer hover:text-gray-400">Contact</span>
          <button className="border border-white bg-transparent text-white py-2 px-5 rounded-full cursor-pointer text-lg hover:bg-white hover:text-black transition">
            HIRE ME
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
