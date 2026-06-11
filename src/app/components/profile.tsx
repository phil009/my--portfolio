"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import MyIntro from "./my-intro";
import { profilePic } from "./AppImages";

export default function Profile() {
    return (
        <div className="flex h-full flex-col justify-center items-center">
            <div className="w-56 p-1 border-2 border-gray-400 border-dashed aspect-square rounded-full mb-4 overflow-hidden">
                <div className="aspect-square rounded-full w-full h-full overflow-hidden">
                    <Image
                        src={profilePic || "/placeholder.svg"}
                        alt="Philip N. Ogboh"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Philip N. Ogboh
            </h1>
            <p className="text-gray-600 dark:text-gray-500 text-center text-sm md:text-base mb-2">
                Fullstack Engineer · Frontend Specialist · Founder & Co-Founder
            </p>
            <span className="flex text-gray-900 dark:text-white items-center gap-1 mb-4">
                <Icon icon={"carbon:location"} />
                <p>Lagos / Kaduna, Nigeria</p>
            </span>

            <MyIntro />

            <div className="flex justify-center gap-1 items-center flex-wrap">
                <a
                    href="mailto:philipogboh60@gmail.com"
                    className="text-xl hover:underline p-2 rounded-full opacity-85 text-gray-800 bg-gray-200 dark:text-white dark:bg-gray-800"
                    title="philipogboh60@gmail.com"
                >
                    <Icon icon={"mdi:email-outline"} />
                </a>
                <a
                    href="https://github.com/phil009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:underline p-2 rounded-full opacity-85 text-gray-800 bg-gray-200 dark:text-white dark:bg-gray-800"
                >
                    <Icon icon={"hugeicons:github"} />
                </a>
                <a
                    href="https://www.linkedin.com/in/philipogboh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:underline p-2 rounded-full opacity-85 text-gray-800 bg-gray-200 dark:text-white dark:bg-gray-800"
                >
                    <Icon icon={"teenyicons:linkedin-outline"} />
                </a>
                <a
                    href="https://www.instagram.com/philip.n.ogboh?igsh=MWF2cDdzNXVrNGJwOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:underline p-2 rounded-full opacity-85 text-gray-800 bg-gray-200 dark:text-white dark:bg-gray-800"
                >
                    <Icon icon={"mdi:instagram"} />
                </a>
            </div>
        </div>
    );
}
