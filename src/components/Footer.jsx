import React from "react";
import arrow from "../assets/arrow.png";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center py-10 px-5">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3">LET’S TALK!</h1>

      {/* Email Section with Arrow Icon */}
      <div className="flex justify-center items-center gap-2">
        <a
          href="mailto:tp81566@gmail.com"
          className="text-lg md:text-xl flex items-center gap-2 hover:underline"
        >
          tp81566@gmail.com
          <img src={arrow} alt="Arrow" className="w-4 h-4" />
        </a>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm opacity-80">
        <p>© Tushar Pawar - 2025</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/" className="hover:underline">Dribbble</a>
          <a href="/" className="hover:underline">Behance</a>
          <a href="/" className="hover:underline">Twitter</a>
          <a href="/" className="hover:underline">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
