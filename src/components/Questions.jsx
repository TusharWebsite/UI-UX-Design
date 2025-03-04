import React from "react";
import star from "../assets/star.png";

const Questions = () => {
  return (
    <div className="bg-black text-white py-12 px-6 md:px-16">
      {/* Section Title */}
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
        <img src={star} alt="star" className="h-6" />
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-6">
        {/* Question 1 with Answer */}
        <div>
          <h3 className="text-lg font-semibold">What is your design process?</h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            My design process typically involves four key phases:{" "}
            <span className="font-bold">research, design, prototype, and test.</span> In the research phase, I gather insights about users' needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models for testing. In the test phase, I collect feedback from users to refine the design.
          </p>
        </div>

        {/* Question 2 */}
        <h3 className="text-lg font-semibold">What tools and software do you use for UX design?</h3>

        {/* Question 3 */}
        <h3 className="text-lg font-semibold">How do you measure the success of your UX designs?</h3>
      </div>
    </div>
  );
};

export default Questions;
