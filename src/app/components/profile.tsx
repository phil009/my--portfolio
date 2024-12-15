import Image from "next/image";
import { fetchGitHubProfile } from "../utils/github";
import { Icon } from "@iconify/react";
import MyIntro from "./my-intro";
import { profilePic } from "./AppImages";

export default async function Profile() {
  const profile = await fetchGitHubProfile("phil009");

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
      <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        {profile.name || profile.login}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{`* ${profile.bio} *`}</p>
      <span className="flex items-center gap-1 mb-4">
        <Icon icon={"carbon:location"} />
        <p>Calabar, Nigeria</p>
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
          className="text-blue-500 hover:underline"
        >
          <Icon icon={"hugeicons:github"} />
        </a>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          <Icon icon={"teenyicons:linkedin-outline"} />
        </a>
      </div>
    </div>
  );
}
