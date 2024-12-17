"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Frontend Developer",
    company: "Geecore LLC",
    link: "https://geecorelimited.com",
    period: "March 2024 - Present",
    description: [
      "Lead the frontend team in the design and development of template websites for an AI-powered web builder project.",
      "Contributed to the successful development and deployment of the AI-powered web builder",
      "Designed and built the new company website, improving user experience andaccessibility.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 ml-2">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              {exp.title}
            </h3>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-sm sm:text-base underline dark:text-gray-400 flex items-center"
            >
              {exp.company}
            </a>
            <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm flex items-center mb-2">
              {exp.period}
            </p>
            <ul className="text-gray-600 dark:text-gray-400 grid gap-2">
              {exp.description.map((item, id) => (
                <li
                  className="flex items-start text-xs sm:text-sm gap-3 max-w-prose"
                  key={id}
                >
                  <div className="mt-3 rounded-full w-1 h-1 bg-gray-400"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
