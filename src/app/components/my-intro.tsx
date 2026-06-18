"use client"
import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"

const introText =
  "Fullstack Engineer with 3+ years of experience building production-grade web applications across PropTech, FinTech, and SaaS. I lead frontend teams, ship scalable systems, and deliver across the full stack. Expert in React, Next.js, TypeScript, and Node.js."

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
