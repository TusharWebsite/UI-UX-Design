import React from "react";

const experiences = [
  {
    role: "Lead Product Designer",
    company: "Fortknox",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    role: "Intern Designer",
    company: "OmniSafe",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    role: "UI Designer",
    company: "Doradesign",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    role: "Frontend Developer",
    company: "OpacityAuthor",
    duration: "Mar 2022 - Oct 2023",
  },
];

const Experience = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">✷ Experience</h2>

      {/* Experience List */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-b border-gray-700 pb-4 transition hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              {/* Job Title */}
              <span className="text-lg font-medium">{exp.role}</span>

              {/* Company Name */}
              <span className="text-gray-400 font-semibold">{exp.company}</span>
            </div>

            {/* Duration */}
            <div className="text-sm text-gray-500 mt-1 md:text-right">
              {exp.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
