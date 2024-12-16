"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
];

const tools = ["Git", "VS Code", "Webpack", "Jest", "Docker", "Figma"];

export default function SkillsAndTools() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Skills & Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Skills
          </h3>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-400">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Tools
          </h3>
          <ul className="list-disc list-inside">
            {tools.map((tool, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-400">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
