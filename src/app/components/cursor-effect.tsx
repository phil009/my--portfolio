"use client";

import React, { useState, useEffect, useCallback } from "react";

export default function SearchlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [updatePosition]);

  return (
    <>
      <div
        className="absolute z-0 opacity-35 inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 500px at ${position.x}px ${position.y}px, 
                       rgba(255,255,255,0.2) 0%, 
                       rgba(255,255,255,0.05) 40%, 
                       transparent 90%)`,
        }}
      />
    </>
  );
}
