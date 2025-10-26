"use client"

import { motion, useReducedMotion } from "framer-motion"
import { homeowner } from "@/lib/tokens"

const PATHS = [
  "M60 80 H540 V280 H60 Z",
  "M120 140 H480",
  "M300 80 V280",
  "M640 120 H1040 V320 H640 Z",
  "M700 160 H980",
  "M860 120 V320",
  "M180 360 H520 V520 H180 Z",
  "M180 400 H520",
  "M350 360 V520",
]

// Sparkle positions for dream/possibility effect
const SPARKLES = [
  { x: 15, y: 25, delay: 0 },
  { x: 45, y: 15, delay: 0.8 },
  { x: 70, y: 35, delay: 1.6 },
  { x: 30, y: 60, delay: 2.4 },
  { x: 85, y: 50, delay: 3.2 },
  { x: 55, y: 75, delay: 4 },
]

export function HeroBgHomeowner() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    // Static blueprint background for users who prefer reduced motion
    return (
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          background: `radial-gradient(800px 600px at 50% 20%, ${homeowner.bgGradientStart}, transparent 70%)`,
        }}
        aria-hidden="true"
      >
        {/* Warm spotlight overlay */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgb(219 234 254 / 0.4), transparent 70%)`,
          }}
        />

        <svg
          viewBox="0 0 1200 600"
          className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-40"
          aria-hidden="true"
        >
          <defs>
            <pattern id="dots-static" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1.5" fill={homeowner.accent} />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#dots-static)" />
          {PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={homeowner.primary}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={i % 3 === 0 ? "0" : "4 2"}
              opacity="0.5"
            />
          ))}
        </svg>

        {/* Static sparkles */}
        {SPARKLES.map((sparkle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-40"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              backgroundColor: homeowner.primary,
              boxShadow: `0 0 4px ${homeowner.accent}`,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        background: `radial-gradient(800px 600px at 50% 20%, ${homeowner.bgGradientStart}, transparent 70%)`,
      }}
      aria-hidden="true"
    >
      {/* Warm spotlight overlay with gentle pulse */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${homeowner.bgGradientStart}80, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Paint stroke color washes */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[60%] h-[40%] rounded-full blur-3xl"
        style={{
          background: `linear-gradient(135deg, ${homeowner.accent}80, transparent)`,
        }}
        animate={{
          x: [0, 100, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 -right-1/4 w-[50%] h-[35%] rounded-full blur-3xl"
        style={{
          background: `linear-gradient(225deg, ${homeowner.primary}60, transparent)`,
        }}
        animate={{
          x: [0, -80, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <svg
        viewBox="0 0 1200 600"
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-80"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.5" fill={homeowner.accent} />
          </pattern>
        </defs>
        <rect width="1200" height="600" fill="url(#dots)" />
        {PATHS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={homeowner.primary}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={i % 3 === 0 ? "0" : "4 2"}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.8, 0.5, 0],
              x: [0, 30],
              y: [0, -30],
            }}
            transition={{
              duration: 8 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Floating sparkles representing possibilities and dreams */}
      {SPARKLES.map((sparkle, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            backgroundColor: homeowner.primary,
            boxShadow: `0 0 8px ${homeowner.accent}`,
          }}
          animate={{
            y: [-20, -60],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
            delay: sparkle.delay,
          }}
        />
      ))}
    </div>
  )
}
