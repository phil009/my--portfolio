"use client"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer",
    company: "Telah.ng",
    link: "https://telah.ng",
    period: "July 2025 - Present",
    description: [
      "Developing and maintaining a comprehensive digital property management platform that serves property managers and tenants across Nigeria.",
    "Building responsive web applications with automated invoicing, rent tracking, tenant communication systems, and real-time dashboard analytics for property portfolio management.",
    "Implementing secure user authentication, document management systems, and automated notification features that reduce administrative workload by up to 95%.",
    "Collaborating with cross-functional teams to deliver seamless integration between property manager and tenant portals, ensuring transparent communication and efficient rent collection processes.",
    "Optimizing application performance for mobile-first users and ensuring reliable, secure transactions for Nigeria's growing PropTech market.",
      "Technologies: React, TypeScript, Node.js",
  ],
  },
  {
    title: "Software Engineer - Contractor",
    company: "Emergence Technologies Ltd",
    link: "https://www.linkedin.com/company/emergence-technologies-ltd/",
    period: "June 2025 - Present",
    description: [
      "Developing cutting-edge applications for international clients across various industries and platforms.",
      "Leading full-stack development projects from initial design concepts through deployment, including UI/UX design, frontend and backend development, comprehensive documentation, and quality assurance testing.",
      "Building scalable cross-platform solutions using modern technologies including React Native, TypeScript, Node.js, and various database systems.",
      "Collaborating with global teams to deliver end-to-end digital solutions that meet diverse client requirements and business objectives.",
      "Technologies: Astro, TypeScript, Supabase",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Velox Delivery",
    link: "#",
    period: "April 2025 - Present",
    description: [
      "Building a cross-platform parcel delivery app using React Native and TypeScript.",
      "Implementing real-time tracking with socket.io, map integrations, push notifications, and secure user authentication.",
      "Assisting with backend development using Node.js, Express, and MongoDB to support order workflows, driver assignments, and user management.",
      "Technologies: React Native, TypeScript, Nativewind, Node.js",
    ],
  },
  {
    title: "Web Engineer (Contract)",
    company: "Oblique Path",
    link: "https://www.obliquepath.dev",
    period: "April 2025 - July 2025",
    description: [
      "Built and launched ObliquePath's official website and currently develop custom sites and web apps for their clients across various industries.",
      "Collaborate with design and automation teams to deliver responsive, user-focused solutions using React, TypeScript, Tailwind CSS, and Node.js.",
      "Improved development efficiency with reusable components and boosted client conversions through performance and UX enhancements.",
      "Technologies: Next.js, TypeScript, Tailwind, Node.js",
    ],
  },
  {
    title: "Fullstack Engineer (Contract)",
    company: "City Church Calabar",
    link: "https://citychurchcalabar.org/",
    period: "January 2025 - April 2025",
    description: [
      "Redesigned and maintained City Church Calabar's website to improve user experience and enable non-developers to manage content with ease.",
      "Built a modern, responsive website using Next.js, TypeScript, and Tailwind CSS.",
      "Integrated a CMS for simple content updates by non-technical users.",
      "Developed features like online donations, purchasable audio files, and a contact section.",
      "Delivered a scalable and accessible platform that aligns with the church's mission.",
      "Technologies: Next.js, TypeScript, Tailwind CSS, Node.js, CMS (e.g., Sanity/Strapi).",
    ],
  },
  {
    title: "Lead Frontend Engineer (Contract)",
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
]

export default function WorkExperience() {
  return (
    <div
      className="mb-8"
    >
      <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6 }}
            key={index}
            className="border-l-2 border-gray-200 dark:bg-gray-800/60 bg-gray-100/30 rounded-e-3xl p-4 ml-2"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-600 dark:text-gray-200">{exp.title}</h3>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 mb-2 text-gray-600 dark:text-gray-200"
            >
              {exp.company}
              <Icon icon="material-symbols:open-in-new" className="text-sm" />
            </a>
            <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm flex items-center mb-2">{exp.period}</p>
            <ul className="grid gap-2 text-gray-700 dark:text-gray-300">
              {exp.description.map((item, id) => (
                <li className="flex items-start text-xs sm:text-sm gap-3" key={id}>
                  <div className="mt-3 rounded-full w-1 h-1 bg-gray-400"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
