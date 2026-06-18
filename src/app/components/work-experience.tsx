"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Fullstack Engineer",
        company: "Telah.ng",
        link: "https://telah.ng",
        period: "July 2025 – Present",
        description: [
            "Architect and maintain a comprehensive PropTech platform serving property managers and tenants across Nigeria, processing thousands of transactions monthly.",
            "Engineered automated invoicing, rent tracking, and tenant communication systems with real-time dashboard analytics, achieving 95% reduction in administrative overhead.",
            "Implemented enterprise-grade security including secure authentication, encrypted document management, and automated notification workflows.",
            "Optimized application performance for a mobile-first user base with sub-second load times and reliable payment processing.",
            "Technologies: React, Next.js, TypeScript, Matchmaker.js",
        ],
    },
    {
        title: "Fullstack Engineer (Contract)",
        company: "Emergence Technologies Ltd",
        link: "https://www.linkedin.com/company/emergence-technologies-ltd/",
        period: "June 2025 – May 2026",
        description: [
            "Architected and delivered enterprise-scale applications for international clients across diverse sectors, managing the complete development lifecycle from design through production deployment.",
            "Led full-stack development initiatives encompassing UI/UX design, frontend and backend engineering, technical documentation, and quality assurance.",
            "Engineered scalable cross-platform solutions using React Native, TypeScript, Node.js, and distributed database systems.",
            "Collaborated with global distributed teams to deliver digital solutions that exceeded client expectations and business KPIs.",
            "Technologies: Astro, Supabase, TypeScript",
        ],
    },
    {
        title: "Fullstack Engineer (Contract)",
        company: "Oblique Path / Aerrand",
        link: "https://www.obliquepath.dev",
        period: "January 2025 – June 2025",
        description: [
            "Architected and launched ObliquePath's corporate website and developed custom web applications for enterprise clients across multiple industries.",
            "Partnered with design and automation teams to deliver responsive, conversion-optimized solutions.",
            "Enhanced development velocity by 40% through a reusable component library and increased client conversion rates through strategic UX improvements.",
            "Engineered a cross-platform parcel delivery application for Aerrand using React Native and TypeScript, serving iOS and Android users with a unified codebase.",
            "Implemented real-time package tracking with Socket.io, integrated Google Maps SDK, and developed a push notification system for delivery updates.",
            "Contributed to backend development using Node.js and Express, building RESTful APIs for order workflows, driver assignment algorithms, and user authentication.",
            "Technologies: React, React Native, Next.js, TypeScript, Tailwind CSS, Express.js, MongoDB",
        ],
    },
    {
        title: "Frontend Developer",
        company: "Geecore LLC",
        link: "https://geecorelimited.com",
        period: "March 2024 – January 2025",
        description: [
            "Spearheaded frontend development for an AI-powered web builder and managed a portfolio of template websites serving diverse client requirements.",
            "Redesigned the corporate website with a focus on accessibility and user experience, improving engagement metrics and client acquisition.",
            "Contributed to the successful deployment of AI-driven web solutions, integrating machine learning capabilities with intuitive user interfaces.",
            "Technologies: React, TypeScript, Node.js, Express.js",
        ],
    },
    {
        title: "Freelance Frontend Developer (Independent)",
        company: "Freelance",
        link: "",
        period: "2023 – February 2024",
        description: [
            "Designed and developed template websites and portfolio sites for clients using HTML, CSS, and JavaScript.",
            "Delivered responsive, cross-browser compatible sites from brief to delivery, managing projects independently.",
            "Technologies: HTML, CSS, JavaScript",
        ],
    },
];

export default function WorkExperience() {
    return (
        <div className="mb-8">
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Work Experience
            </h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        initial={{ opacity: 0, translateX: 50 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.25 }}
                        key={index}
                        className="border-l-2 border-gray-200 dark:bg-gray-800/85 bg-gray-100/70 rounded-e-3xl p-4 ml-2"
                    >
                        <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-600 dark:text-gray-200">
                            {exp.title}
                        </h3>
                        <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1 mb-2 text-gray-600 dark:text-gray-200"
                        >
                            {exp.company}
                            <Icon
                                icon="material-symbols:open-in-new"
                                className="text-sm"
                            />
                        </a>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm flex items-center mb-2">
                            {exp.period}
                        </p>
                        <ul className="grid gap-2 text-gray-700 dark:text-gray-300">
                            {exp.description.map((item, id) => (
                                <li
                                    className="flex items-start text-xs sm:text-sm gap-3"
                                    key={id}
                                >
                                    <div className="mt-3 rounded-full w-1 h-1 bg-gray-400"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
