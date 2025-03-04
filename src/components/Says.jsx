import React from "react";
import client from "../assets/client.png";
import quotes from "../assets/quotes.png";
import star from "../assets/star.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Says = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      {/* Heading */}
      <h1 className="text-2xl font-bold flex items-center gap-3 mb-8">
        <img src={star} alt="star" className="w-6 h-6" />
        What they say
      </h1>

      {/* Testimonial Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#0A0A0A] p-8 rounded-xl space-y-6 md:space-y-0">
        {/* Left Section - Client Info */}
        <div className="flex flex-col items-center text-center">
          <img src={client} alt="Client" className="w-16 h-16 rounded-full mb-3" />
          <h3 className="text-lg font-semibold">Floyd Miles</h3>
          <p className="text-sm text-gray-400">eBay</p>
        </div>

        {/* Right Section - Testimonial */}
        <div className="relative max-w-lg">
          {/* Quotes Image */}
          <img
            src={quotes}
            alt="Quotes"
            className="w-24 absolute -top-8 -left-5 opacity-30"
          />

          {/* Testimonial Text */}
          <p className="text-lg leading-relaxed font-medium relative z-10">
            Synergy’s resume builder is fantastic. It helped me create a
            professional resume that stood out to employers. Synergy’s resume
            builder is fantastic. It helped me create a professional resume
            that stood out to employers.
          </p>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl hover:bg-gray-700 transition">
            <FaLongArrowAltLeft />
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-xl hover:bg-gray-300 transition">
            <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Says;
