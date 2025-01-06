import Image from "next/image";
import { fetchGitHubProfile } from "../utils/github";
import { Icon } from "@iconify/react";
import MyIntro from "./my-intro";
import { profilePic } from "./AppImages";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface GitHubProfile {
  name?: string;
  login: string;
  bio?: string;
  blog?: string;
  location?: string;
  html_url: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchGitHubProfile("phil009");
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch GitHub profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="flex h-full flex-col justify-center items-center">
        <p className="text-gray-600 text-center">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <div className="w-56 p-1 border-2 border-gray-400 border-dashed aspect-square rounded-full mb-4 overflow-hidden">
        <div className="aspect-square rounded-full w-full h-full overflow-hidden">
          <Image
            src={profilePic}
            alt={profile.name || profile.login}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1
        className={`text-2xl font-bold mb-2 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {profile.name || profile.login}
      </h1>
      <p
        className={`${
          theme === "dark" ? "text-gray-500" : "text-gray-600"
        } text-center text-sm md:text-base mb-2`}
      >
        {`* ${profile.bio || "No bio available"} *`}
      </p>
      <span
        className={`flex ${
          theme === "dark" ? "text-white" : "text-gray-900"
        } items-center gap-1 mb-4`}
      >
        <Icon icon={"carbon:location"} />
        <p>{profile.location || "Unknown Location"}</p>
      </span>
      {profile.blog ? (
        <a
          href={profile.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mb-2"
        >
          {profile.blog}
        </a>
      ) : (
        <MyIntro />
      )}
      <div className="flex justify-center gap-1 items-center">
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl hover:underline p-2 rounded-full opacity-85 ${
            theme === "dark"
              ? "text-white bg-gray-800"
              : "text-gray-800 bg-gray-200"
          }`}
        >
          <Icon icon={"hugeicons:github"} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl hover:underline p-2 rounded-full opacity-85 ${
            theme === "dark"
              ? "text-white bg-gray-800"
              : "text-gray-800 bg-gray-200"
          }`}
        >
          <Icon icon={"teenyicons:linkedin-outline"} />
        </a>
      </div>
    </div>
  );
}
