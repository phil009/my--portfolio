"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const skillsAndTools = [
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express", icon: "skill-icons:expressjs-light" },
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "vscode-icons:file-type-css" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "VS Code", icon: "vscode-icons:file-type-vscode" },
  { name: "Webpack", icon: "logos:webpack" },
  { name: "Jest", icon: "vscode-icons:file-type-jest" },
  { name: "Figma", icon: "logos:figma" },
]

export default function SkillsAndTools() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="mb-8" aria-labelledby="skills-and-tools-title">
      <h2 id="skills-and-tools-title" className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Skills & Tools
      </h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {skillsAndTools.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-gray-100 bg-opacity-40 dark:bg-gray-800"
            variants={itemVariants}
          >
            <Icon icon={item.icon} className="text-4xl mb-2" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
