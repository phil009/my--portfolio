"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { evenza } from "./AppImages";

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Evenza (Event Management)",
    description:
      "Evenza is an app that makes planning and booking events easy. Whether you're hosting or attending, it helps you create, manage, and enjoy events without the stress. From RSVPs to tickets, everything you need is in one place. Let Evenza make your next event simple and fun!",
    imageUrl: evenza,
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
    technologies: ["React", "Tailwind", "Formik"],
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description of your second project.",
    imageUrl: "/placeholder.svg?height=150&width=300",
    githubUrl: "https://github.com/yourusername/project2",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Project 3",
    description: "Your third project's description.",
    imageUrl: "/placeholder.svg?height=150&width=300",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.com",
    technologies: ["Angular", "Django", "MySQL"],
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 mb-16"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={500}
              height={300}
              className="mb-4 w-full rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
