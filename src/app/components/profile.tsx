"use client"

import Image from "next/image"
import { fetchGitHubProfile } from "../utils/github"
import { Icon } from "@iconify/react"
import MyIntro from "./my-intro"
import { profilePic } from "./AppImages"
import { useEffect, useState } from "react"

interface GitHubProfile {
  name?: string
  login: string
  bio?: string
  blog?: string
  location?: string
  html_url: string
}

export default function Profile() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchGitHubProfile("phil009")
        setProfile(data)
      } catch (error) {
        console.error("Failed to fetch GitHub profile:", error)
      }
    }

    fetchProfile()
  }, [])

  if (!profile) {
    return (
      <div className="flex h-full flex-col justify-center items-center">
        {/* Profile Picture Skeleton */}
        <div className="w-56 p-1 border-2 border-gray-400 border-dashed aspect-square rounded-full mb-4 overflow-hidden">
          <div className="aspect-square rounded-full w-full h-full overflow-hidden bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>

        {/* Name Skeleton */}
        <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-2 animate-pulse"></div>

        {/* Bio Skeleton */}
        <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded-md mb-2 animate-pulse"></div>

        {/* Location Skeleton */}
        <div className="flex items-center gap-1 mb-4">
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>

        {/* Blog/Intro Skeleton */}
        <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded-md mb-2 animate-pulse"></div>

        {/* Social Icons Skeleton */}
        <div className="flex justify-center gap-1 items-center">
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <div className="w-56 p-1 border-2 border-gray-400 border-dashed aspect-square rounded-full mb-4 overflow-hidden">
        <div className="aspect-square rounded-full w-full h-full overflow-hidden">
          <Image
            src={profilePic || "/placeholder.svg"}
            alt={profile.name || profile.login}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{profile.name || profile.login}</h1>
      <p className="text-gray-600 dark:text-gray-500 text-center text-sm md:text-base mb-2">
        {`* ${profile.bio || "No bio available"} *`}
      </p>
      <span className="flex text-gray-900 dark:text-white items-center gap-1 mb-4">
        <Icon icon={"carbon:location"} />
        <p>{profile.location || "Unknown Location"}</p>
      </span>
      {profile.blog ? (
        <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-2">
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
          className="text-xl hover:underline p-2 rounded-full opacity-85 text-gray-800 bg-gray-200 dark:text-white dark:bg-gray-800"
        >
          <Icon icon={"hugeicons:github"} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:underline p-2 rounded-full opacity-85 text-gray-800 bg-gray-200 dark:text-white dark:bg-gray-800"
        >
          <Icon icon={"teenyicons:linkedin-outline"} />
        </a>
      </div>
    </div>
  )
}
