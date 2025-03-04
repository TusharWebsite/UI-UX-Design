import React from "react";
import star from "../assets/star.png";

const Expertise = () => {
  return (
    <div className="bg-black text-white py-12 px-6 max-w-5xl mx-auto">
      {/* Title */}
      <div className="flex items-center mb-8">
        <img src={star} alt="star" className="h-8 cursor-pointer mr-2" />
        <h2 className="text-3xl font-bold">Expertise</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-bold">▪ Branding</h3>
          <p className="text-gray-400 text-base mt-2">
            I create efficient, adaptable, and engaging websites. No predefined
            patterns. No sluggish, complex code. Webflow forms the foundation of
            my web development approach. I employ it to provide safe, top-notch
            bespoke websites.
          </p>
        </div>

        {/* UI Design */}
        <div>
          <h3 className="text-xl font-bold">▪ UI Design</h3>
          <p className="text-gray-400 text-base mt-2">
            I create efficient, adaptable, and engaging websites. No predefined
            patterns. No sluggish, complex code. Webflow forms the foundation of
            my web development approach. I employ it to provide safe, top-notch
            bespoke websites.
          </p>
        </div>

        {/* UX Design */}
        <div>
          <h3 className="text-xl font-bold">▪ UX Design</h3>
          <p className="text-gray-400 text-base mt-2">
            I comprehend and resolve digital product issues using a user-focused
            methodology. Investigation, compassion, and visual conveyance are a
            few techniques I apply to captivate and involve your users while
            fulfilling your business requirements.
          </p>
        </div>

        {/* Development */}
        <div>
          <h3 className="text-xl font-bold">▪ Development</h3>
          <p className="text-gray-400 text-base mt-2">
            I create user-friendly, adaptive, engaging websites. No
            cookie-cutters. No cumbersome, complex coding. Webflow forms the
            foundation of my web development approach. I employ it to produce
            safe, top-notch personalized websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
