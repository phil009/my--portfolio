"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Founder & Lead Technologist",
        company: "Philips ICT Solutions",
        link: "https://philipsictsolutions.com",
        period: "May 2026 – Present",
        description: [
            "Founded and operate a technology and business services centre offering printing, internet access, document services, and professional web development in Kaduna.",
            "Designed and launched a structured computer school with Beginner, Intermediate, and Advanced training tracks, defined curriculum, pricing, and certification pathway.",
            "Manage all operations including client acquisition, service delivery, pricing strategy, and staff coordination.",
            "Technologies: Next.js, React, TypeScript, CorelDraw, Canva",
        ],
    },
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
        title: "Co-Founder & Lead Frontend Engineer",
        company: "Tennaa",
        link: "https://tenna.xyz",
        period: "2025 – Present",
        description: [
            "Co-founded Tennaa, a vendor marketplace platform connecting event planners and clients with vetted event service providers across Abuja, Nigeria.",
            "Architected and built the marketing site and core booking journey — vendor discovery, rich profiles, multi-step booking flow, and auth-ready UI on Next.js.",
            "Designed a two-sided marketplace enabling clients to compare pricing, reviews, and portfolios while helping vendors showcase work and manage bookings.",
            "Established the frontend architecture with Radix UI primitives, Tailwind CSS v4, and a scalable module structure ready for live APIs, payments, and AI-assisted matching.",
            "Technologies: Next.js, TypeScript, Tailwind CSS, Radix UI, React 19",
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
        title: "Web Developer (Contract)",
        company: "Brains Specialist Hospital",
        link: "https://brainsspecialisthospital.com.ng",
        period: "February 2026 – April 2026",
        description: [
            "Designed and developed the official company website with a primary focus on SEO performance and organic search visibility.",
            "Implemented a comprehensive on-page SEO strategy including metadata optimization, semantic HTML, schema markup, and page speed improvements.",
            "Built a clean, responsive site presenting the hospital's services, medical team, and contact details — optimized for local search and patient discovery.",
            "Technologies: Next.js, TypeScript, Tailwind CSS",
        ],
    },
        {
        title: "Web Developer (Contract)",
        company: "Jigotex",
        link: "https://jigotex.com.ng",
        period: "April 2026",
        description: [
            "Designed and developed the official company website for Jigotex, a construction company.",
            "Built a professional, responsive portfolio site showcasing the company's projects, services, and contact information.",
            "Technologies: Next.js, TypeScript, Tailwind CSS",
        ],
    },
    {
        title: "Lead Frontend Engineer (Contract)",
        company: "Nyangu Technologies",
        link: "https://nyangu.com",
        period: "August 2025 – October 2025",
        description: [
            "Directed frontend engineering team to architect and deploy the Nyangu platform — a comprehensive real estate marketplace connecting renters, agents, hotel owners, and landlords nationwide.",
            "Engineered complex features including real-time scheduling systems, instant messaging platform, and secure document management infrastructure.",
            "Established frontend architecture standards and mentored team members on React best practices, TypeScript patterns, and performance optimization.",
            "Technologies: React, Next.js, TypeScript",
        ],
    },
    {
        title: "Frontend Engineer (Contract)",
        company: "Aerrand",
        link: "https://aerrand.com",
        period: "April 2025 – July 2025",
        description: [
            "Engineered a cross-platform parcel delivery application using React Native and TypeScript, serving iOS and Android users with a unified codebase.",
            "Implemented real-time package tracking with Socket.io, integrated Google Maps SDK, and developed a push notification system for delivery updates.",
            "Contributed to backend development using Node.js and Express, building RESTful APIs for order workflows, driver assignment algorithms, and user authentication.",
            "Technologies: React Native, TypeScript, Express.js, MongoDB",
        ],
    },
    {
        title: "Fullstack Engineer (Contract)",
        company: "Oblique Path",
        link: "https://www.obliquepath.dev",
        period: "April 2025 – July 2025",
        description: [
            "Architected and launched ObliquePath's corporate website and developed custom web applications for enterprise clients across multiple industries.",
            "Partnered with design and automation teams to deliver responsive, conversion-optimized solutions.",
            "Enhanced development velocity by 40% through a reusable component library and increased client conversion rates through strategic UX improvements.",
            "Technologies: React, Next.js, TypeScript, Tailwind CSS",
        ],
    },
    {
        title: "Fullstack Engineer (Volunteer)",
        company: "City Church Calabar",
        link: "https://citychurchcalabar.org/",
        period: "January 2025 – Present",
        description: [
            "Redesigned and maintained the church website using Next.js, TypeScript, and Tailwind CSS.",
            "Integrated a CMS for easy content updates and developed features including online donations and purchasable audio files.",
            "Built a scalable, accessible platform aligned with the church's digital and community mission.",
            "Technologies: React, Next.js, TypeScript, Node.js, Express.js",
        ],
    },
    {
        title: "Lead Frontend Engineer (Contract)",
        company: "Copy Trading Markets",
        link: "https://www.copytradingmarkets.com/",
        period: "November 2024 – January 2025",
        description: [
            "Architected a comprehensive cryptocurrency trading platform featuring real-time copy trading functionality and advanced portfolio analytics.",
            "Implemented secure wallet integration with multi-signature support, real-time market data visualization, and an intuitive trading dashboard.",
            "Maintained platform security and performance standards for high-frequency trading operations.",
            "Technologies: React, Next.js, TypeScript, Appwrite",
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
                        className="border-l-2 border-gray-200 dark:bg-gray-800/60 bg-gray-100/30 rounded-e-3xl p-4 ml-2"
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
                        <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm flex items-center mb-2">
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
