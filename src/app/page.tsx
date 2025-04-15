"use client";
import { useTheme } from "next-themes";
import SearchlightCursor from "./components/cursor-effect";
import Profile from "./components/profile";
import Projects from "./components/projects";
import SkillsAndTools from "./components/skills-and-tools";
import ThemeToggle from "./components/theme-toggle";
import WorkExperience from "./components/work-experience";
import Image from "next/image";
import { waterfalls } from "./components/AppImages";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Fixed background image */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src={waterfalls || "/placeholder.svg"}
          alt="background"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>

      {/* Theme toggle */}
      <div className="fixed z-50 top-8 right-12">
        <ThemeToggle />
      </div>

      {/* Main layout container */}
      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Profile sidebar - fixed on large screens */}
        <div className="w-full lg:w-1/3 lg:fixed lg:inset-y-0 lg:left-0 h-auto lg:h-full border-b lg:border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 bg-opacity-80 bg-opacity-55 backdrop-blur-sm">
          <div className="p-8 h-full">
            <Profile />
          </div>
        </div>

        {/* Content area - scrollable */}
        <div className="w-full lg:w-2/3 lg:ml-[33.333333%] relative overflow-x-hidden">
          <div className="p-4 lg:p-8">
            <div className="grid gap-8 mt-8 pb-16">
              <WorkExperience />
              <SkillsAndTools />
              <Projects />
            </div>
          </div>
        </div>
      </div>

      <SearchlightCursor />
    </div>
  );
}
