import Profile from "./components/profile";
import Projects from "./components/projects";
import SkillsAndTools from "./components/skills-and-tools";
import ThemeToggle from "./components/theme-toggle";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full md:w-1/3 md:fixed left-0 top-0 h-auto md:h-full p-8 border-b md:border-r border-gray-200 dark:border-gray-700">
        <Profile />
      </div>
      <div className="w-full md:w-2/3 relative md:ml-[33.333333%] p-8">
        <div className="fixed top-4 right-4 ">
          <ThemeToggle />
        </div>
        <div className="grid gap-8">
          <Projects />
          <SkillsAndTools />
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}
