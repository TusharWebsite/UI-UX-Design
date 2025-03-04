import React from "react";
import star from "../assets/star.png";

const Marque = () => {
  return (
    <div className="overflow-hidden bg-black py-3">
      <div className="flex space-x-8 animate-marquee text-[40px] md:text-[60px] font-bold uppercase text-transparent whitespace-nowrap custom-stroke">
        <img src={star} alt="star" className="h-10 md:h-12" />
        Flow
        <img src={star} alt="star" className="h-10 md:h-12" />
        Figma
        <img src={star} alt="star" className="h-10 md:h-12" />
        Designer
        <img src={star} alt="star" className="h-10 md:h-12" />
        Developer
        <img src={star} alt="star" className="h-10 md:h-12" />
      </div>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 10s linear infinite;
            display: inline-flex;
            align-items: center;
          }
          /* White Border Around Text */
          .custom-stroke {
            -webkit-text-stroke: 1px white;
          }
        `}
      </style>
    </div>
  );
};

export default Marque;
