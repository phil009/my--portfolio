"use client"
import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"

const introText =
  "Results-driven Fullstack Engineer with extensive experience architecting and delivering enterprise-grade web applications. I lead technical initiatives, mentor development teams, and build scalable PropTech, FinTech, and SaaS platforms using React, Next.js, TypeScript, and Node.js — serving thousands of users across multiple markets."

const MyIntro = () => {
  const [typing, setTyping] = useState(true)

  return (
    <p className="text-center text-gray-800 dark:text-white mb-4 text-xs md:text-sm">
      {typing ? (
        <Typewriter
          words={[introText]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={40}
          onLoopDone={() => setTyping(false)}
          delaySpeed={1000}
        />
      ) : (
        introText
      )}
    </p>
  )
}

export default MyIntro
