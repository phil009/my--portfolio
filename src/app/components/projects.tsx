"use client"
import Image, { type StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { citychurch, evenza, obliquepath } from "./AppImages"
import { Icon } from "@iconify/react"

interface Project {
  id: number
  name: string
  description: string
  imageUrl?: StaticImageData
  githubUrl?: string
  liveUrl?: string
  technologies: string[]
  finished?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    name: "Oblique Path",
    description:
      "Designed and built a responsive web platform showcasing AI-powered automation solutions for service-based businesses. Integrated real-world client testimonials, case studies, and conversion-focused CTAs. Implemented scalable architecture with SEO-optimized static content and dynamic components..",
    imageUrl: obliquepath,
    liveUrl: "https://www.obliquepath.dev/",
    technologies: ["Next.js", "Tailwind", "Shadcn", "Framer Motion", "Typescript", "Node.js", "Express", "Resend"],
    finished: true,
  },
  {
    id: 2,
    name: "City Church Site Revamp",
    description:
      "Redisgned and rebuilt the City Church website and incorporated features such as live streaming via Youtube, a store for audio messages, integrating paystacks products features, and multiple forms for conatct and group registrations etc.",
    imageUrl: citychurch,
    liveUrl: "https://citychurchcalabar.org/",
    technologies: ["Next.js", "Tailwind", "Shadcn", "Framer Motion", "Typescript", "Node.js", "Express", "MongoDB"],
    finished: true,
  },
  // {
  //   id: 3,
  //   name: "Music Player App",
  //   description:
  //     "A modern web-based platform designed to make music streaming simple and enjoyable. Users can securely sign up or log in to access a personalized music experience. The app features an intuitive interface, responsive design, and seamless functionality for browsing, playing, and managing songs across devices. For administrators, there's a dedicated feature to upload new songs, ensuring the library remains fresh and up-to-date.",
  //   imageUrl: musicplayer,
  //   githubUrl: "https://github.com/phil009/music-player",
  //   liveUrl: "https://music-player-beta-azure.vercel.app/",
  //   technologies: ["React", "Howler.js", "Express", "JWT", "MongoDB"],
  //   finished: true,
  // },
  {
    id: 4,
    name: "Evenza (Event Management)",
    description:
      "Evenza is an app that makes planning and booking events easy. Whether you're hosting or attending, it helps you create, manage, and enjoy events without the stress. From RSVPs to tickets, everything you need is in one place. Let Evenza make your next event simple and fun!",
    imageUrl: evenza,
    liveUrl: "https://evenza.vercel.app/",
    technologies: ["React", "Tailwind", "Formik"],
    finished: false,
  },
]

export default function Projects() {
  return (
    <div className="mt-8">
      <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6 }}
            key={project.id}
            className="border border-gray-500 dark:border-gray-700 rounded-lg p-4 backdrop-blur-md"
          >
            <div className="relative mb-4 w-full aspect-[4/2] overflow-hidden">
              <div className="absolute top-0 right-0 z-10 flex items-center gap-2 p-2 rounded-lg opacity-80">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
                  >
                    <Icon icon="akar-icons:link" className="text-gray-700 dark:text-gray-200" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
                  >
                    <Icon icon="akar-icons:github-fill" className="text-gray-700 dark:text-gray-200" />
                  </a>
                )}
              </div>
              {!project.finished && (
                <div className="absolute bottom-0 right-0 p-2 rounded-ss-lg text-xs font-light italic bg-gray-500 opacity-75">
                  in progress
                </div>
              )}
              {project.imageUrl && (
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <h3 className="text-base sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
            <p className="text-xs sm:text-base mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 bg-opacity-40 dark:bg-gray-700 text-xs sm:text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
