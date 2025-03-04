import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

const blogs = [
  {
    id: 1,
    image: work1,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
  },
  {
    id: 2,
    image: work2,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["DESIGN", "PRINT"],
  },
  {
    id: 3,
    image: work3,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["FIGMA", "WEB"],
  },
];

const Blog = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">✷ Blog</h2>
        <a href="/" className="text-gray-400 text-sm hover:underline">
          view all
        </a>
      </div>

      {/* Blog List */}
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center justify-between bg-[#151515] p-5 rounded-2xl"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-28 h-28 rounded-lg object-cover"
            />

            {/* Blog Details */}
            <div className="flex-1 ml-6">
              <p className="text-sm text-gray-400">{blog.date}</p>
              <h3 className="text-xl font-medium mt-1">{blog.title}</h3>

              {/* Tags */}
              <div className="flex gap-2 mt-3">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read Button */}
            <button className="bg-white border border-gray-500 px-6 py-2 text-black text-sm rounded-full hover:bg-gray-800 transition">
              Read
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
