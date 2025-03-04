import React from "react";
import header1 from "../assets/header1.png";
import header2 from "../assets/header2.png";

const Header = () => {
  return (
    <div className="text-center bg-black text-white font-bold leading-tight p-5 sm:p-10">
      <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
        <span>I AM A </span>
        <span>
          <img
            src={header1}
            alt="Header 1"
            className="inline-block w-[60px] h-[50px] sm:w-[80px] sm:h-[60px] md:w-[100px] md:h-[70px] rounded-lg align-middle mx-2"
          />
        </span>
        <span>FREELANCE</span>
      </div>

      <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
        <span>DESIGNER</span>
        <span>
          <img
            src={header2}
            alt="Header 2"
            className="inline-block w-[60px] h-[50px] sm:w-[80px] sm:h-[60px] md:w-[100px] md:h-[70px] rounded-lg align-middle mx-2"
          />
        </span>
        <span>FROM</span>
      </div>

      <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
        <span>SAN FRANCISCO</span>
      </div>
    </div>
  );
};

export default Header;
