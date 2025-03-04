import React from "react";
import img1 from "../assets/functionality1.png";
import img2 from "../assets/functionality2.png";
import img3 from "../assets/functionality3.png";

const Article = () => {
  return (
    <div className="bg-black text-white p-5 sm:p-10 max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">
      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        <img src={img1} alt="Functionality 1" className="h-[40px] sm:h-[50px] object-contain" />
        <img src={img2} alt="Functionality 2" className="h-[40px] sm:h-[50px] object-contain" />
        <img src={img3} alt="Functionality 3" className="h-[40px] sm:h-[50px] object-contain" />
      </div>

      {/* Text Content */}
      <p className="max-w-[400px] text-gray-400 text-center sm:text-left text-base sm:text-lg leading-relaxed">
        Welcome to my portfolio. Here, artistry meets functionality. Dive into a
        curated showcase of distinctive branding and web designs, each crafted
        to captivate and inspire.
      </p>
    </div>
  );
};

export default Article;
