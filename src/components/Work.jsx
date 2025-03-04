import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import star from "../assets/star.png";

const works = [
  {
    id: 1,
    title: "Analysis Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    image: work1,
    tags: ["FIGMA", "UX"],
  },
  {
    id: 2,
    title: "Fortknox Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    image: work2,
    tags: ["Market", "Web"],
  },
  {
    id: 3,
    title: "Zenocide Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    image: work3,
    tags: ["UI", "Mobile"],
  },
];

const Work = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <img src={star} alt="star" className="h-6" />
          Works
        </h1>
        <a href="/" className="text-sm underline hover:text-gray-300">
          View All
        </a>
      </div>

      {/* Work Cards */}
      <div className="flex flex-col gap-10">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6 transition hover:scale-[1.02]"
          >
            {/* Image */}
            <img
              src={work.image}
              alt={work.title}
              className="w-full md:w-[40%] rounded-2xl object-cover"
              loading="lazy"
            />

            {/* Content */}
            <div className="flex flex-col flex-grow text-left">
              <h3 className="text-2xl font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{work.description}</p>

              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {work.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white px-4 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="bg-white text-black font-semibold py-2 px-5 rounded-full hover:opacity-80 transition w-max mt-[190px]">
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
