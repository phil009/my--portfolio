"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { evenza, musicplayer, notion } from "./AppImages";

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl?: StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  finished?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Evenza (Event Management)",
    description:
      "Evenza is an app that makes planning and booking events easy. Whether you're hosting or attending, it helps you create, manage, and enjoy events without the stress. From RSVPs to tickets, everything you need is in one place. Let Evenza make your next event simple and fun!",
    imageUrl: evenza,
    liveUrl: "https://evenza.vercel.app/",
    technologies: ["React", "Tailwind", "Formik"],
    finished: false,
  },
  {
    id: 2,
    name: "Music Player App",
    description:
      "A modern web-based platform designed to make music streaming simple and enjoyable. Users can securely sign up or log in to access a personalized music experience. The app features an intuitive interface, responsive design, and seamless functionality for browsing, playing, and managing songs across devices. For administrators, there’s a dedicated feature to upload new songs, ensuring the library remains fresh and up-to-date.",
    imageUrl: musicplayer,
    githubUrl: "https://github.com/phil009/music-player",
    liveUrl: "https://music-player-beta-azure.vercel.app/",
    technologies: ["React", "Howler.js", "Express", "JWT", "MongoDB"],
    finished: true,
  },
  {
    id: 3,
    name: "Notion Clone",
    description:
      "This project is a Notion clone built with React, Redux, React Query, and TypeScript for frontend functionality, and a Node.js/Express backend with MongoDB for data storage. It features user authentication, dynamic page management, and a rich text editor for creating and organizing content. Protected routes ensure secure access, while the app offers a clean, responsive UI for productivity and collaboration.",
    imageUrl: notion,
    githubUrl: "https://github.com/phil009/notion-clone-frontend",
    liveUrl: "https://project3.com",
    technologies: ["React", "Redux", "Typescript", "Express", "MongoDB"],
    finished: false,
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
      <h2 className="text-lg md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={500}
                height={300}
                className="mb-4 w-full rounded-md"
              />
            )}
            <h3 className="text-base sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs sm:text-sm rounded-md"
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
                className="text-gray-100 text-sm sm:text-base hover:underline"
              >
                GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 text-sm sm:text-base hover:underline"
                >
                  Live App
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
