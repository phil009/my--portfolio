"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md shadow-md bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white"
    >
      <Icon icon={"line-md:light-dark"} />
    </button>
  )
}
