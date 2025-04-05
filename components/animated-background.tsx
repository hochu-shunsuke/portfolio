"use client"

import { motion } from "framer-motion"

// Generate animated path data with improved visibility
const generatePaths = (position: number) => {
  return Array.from({ length: 18 }, (_, i) => ({
    id: i,
    d: `M-${480 - i * 5 * position} -${189 + i * 6}C-${
      480 - i * 5 * position
    } -${189 + i * 6} -${412 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${716 - i * 5 * position} ${470 - i * 6} ${
      784 - i * 5 * position
    } ${875 - i * 6} ${784 - i * 5 * position} ${875 - i * 6}`,
    width: 1.2 + i * 0.05, // Increased stroke width
  }))
}

export function AnimatedBackground() {
  const pathsPositive = generatePaths(1)
  const pathsNegative = generatePaths(-1)

  return (
    <div className="contents">
      {/* Base black background - lowest layer */}
      <div className="fixed inset-0 w-screen h-screen" style={{ zIndex: -10 }} />

      {/* Animation layer */}
      <div className="fixed inset-0 w-screen h-screen" style={{ zIndex: -8 }}>
        {/* First set of paths */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full text-zinc-100"
            viewBox="-200 -200 1400 1400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            {pathsPositive.map((path) => (
              <motion.path
                key={`pos-${path.id}`}
                d={path.d}
                stroke="currentColor"
                strokeWidth={path.width}
                strokeOpacity={0.3 + path.id * 0.03}
                initial={{ pathLength: 0.3, opacity: 0.8 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.5, 0.8, 0.5],
                  pathOffset: [0, 1, 0],
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </svg>
        </div>

        {/* Second set of paths (reversed) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full text-white"
            viewBox="-200 -200 1400 1400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            {pathsNegative.map((path) => (
              <motion.path
                key={`neg-${path.id}`}
                d={path.d}
                stroke="currentColor"
                strokeWidth={path.width}
                strokeOpacity={0.3 + path.id * 0.03}
                initial={{ pathLength: 0.3, opacity: 0.8 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.5, 0.8, 0.5],
                  pathOffset: [0, 1, 0],
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Optional gradient overlay */}
      <div 
        className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-transparent via-black/20 to-black/30" 
        style={{ zIndex: -9 }} 
      />
    </div>
  )
}
