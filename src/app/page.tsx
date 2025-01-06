"use client";
import { useTheme } from "next-themes";
import SearchlightCursor from "./components/cursor-effect";
import Profile from "./components/profile";
import Projects from "./components/projects";
import SkillsAndTools from "./components/skills-and-tools";
import ThemeToggle from "./components/theme-toggle";
import WorkExperience from "./components/work-experience";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex px-4 overflow-x-hidden relative flex-col lg:flex-row min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="fixed z-50 top-4 right-4 ">
        <ThemeToggle />
      </div>
      <div className="w-full flex justify-center relative z-10 lg:w-1/3 lg:fixed left-0 top-0 h-auto lg:h-full p-8 border-b lg:border-r border-gray-200 dark:border-gray-700">
        <Profile />
      </div>
      <div className="w-full lg:w-2/3 z-10 relative lg:ml-[33.333333%] p-2 lg:p-8">
        <div className="grid gap-8 mt-8">
          <WorkExperience />
          <SkillsAndTools />
          <Projects />
        </div>
      </div>
      <SearchlightCursor />
    </div>
  );
}
