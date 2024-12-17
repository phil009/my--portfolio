"use client";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const MyIntro = () => {
  const [typing, setTyping] = useState(true);
  return (
    <p className="text-center mb-4 text-xs md:text-sm">
      {typing ? (
        <Typewriter
          words={[
            "I’m a frontend engineer who loves bringing ideas to life on the web. I focus on creating clean, responsive designs that look great and feel even better to use. I’m always learning new things, tackling challenges, and striving to make every project better than the last. Take a look at my work—let’s create something awesome together!",
          ]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={40}
          onLoopDone={() => setTyping(false)}
          delaySpeed={1000}
        />
      ) : (
        "I’m a frontend engineer who loves bringing ideas to life on the web. I focus on creating clean, responsive designs that look great and feel even better to use. I’m always learning new things, tackling challenges, and striving to make every project better than the last. Take a look at my work—let’s create something awesome together!"
      )}
    </p>
  );
};

export default MyIntro;
