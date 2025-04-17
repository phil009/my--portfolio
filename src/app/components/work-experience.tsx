"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const experiences = [
  {
    title: "Fullstack Engineer",
    company: "City Church Calabar",
    link: "https://citychurchcalabar.org/",
    period: "January 2025 - Present",
    description: [
      "Redesigned and maintained City Church Calabar’s website to improve user experience and enable non-developers to manage content with ease.",
      "Built a modern, responsive website using Next.js, TypeScript, and Tailwind CSS.",
      "Integrated a CMS for simple content updates by non-technical users.",
      "Developed features like online donations, purchasable audio files, and a contact section.",
      "Delivered a scalable and accessible platform that aligns with the church’s mission.",
      "Technologies: Next.js, TypeScript, Tailwind CSS, Node.js, CMS (e.g., Sanity/Strapi).",
    ],
  },
  {
    title: "Lead Frontend Engineer",
    company: "Copy Trading Markets",
    link: "https://www.copytradingmarkets.com/",
    period: "November 2024 - January 2025",
    description: [
      "Designed, developed, and currently maintained the full web application for Copy Trading Markets, a cutting-edge cryptocurrency investment platform.",
      "Implemented real-time copy trading enabling users to mirror trades of experienced investors.",
      "Integrated secure wallet functionality for cryptocurrency deposits and management.",
      "Created advanced analytics tools for tracking portfolio performance.",
      "Built a user-friendly dashboard with robust security measures for safe, transparent transactions.",
      "Delivered ongoing feature updates, performance optimizations, and ensured a seamless user experience.",
    ],
  },
  {
    title: "Mid-level Frontend Engineer",
    company: "Geecore LLC",
    link: "https://geecorelimited.com",
    period: "March 2024 - Jan 2025",
    description: [
      "Lead the frontend team in the design and development of template websites for an AI-powered web builder project.",
      "Contributed to the successful development and deployment of the AI-powered web builder.",
      "Designed and built the new company website, improving user experience and accessibility.",
    ],
  },
];

export default function WorkExperience() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2
        className={`text-lg sm:text-2xl font-bold mb-4 ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 ml-2">
            <h3
              className={`text-base sm:text-lg font-semibold mb-2 ${
                theme === "dark" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {exp.title}
            </h3>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-blue-500 hover:underline flex items-center gap-1 mb-2 ${
                theme === "dark" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {exp.company}
              <Icon icon="material-symbols:open-in-new" className="text-sm" />
            </a>
            <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm flex items-center mb-2">
              {exp.period}
            </p>
            <ul
              className={`grid gap-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
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
