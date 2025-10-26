"use client"

import { motion, useReducedMotion } from "framer-motion"
import { contractor } from "@/lib/tokens"

const NODES = [
  { x: 20, y: 30, type: "circle" },
  { x: 60, y: 50, type: "dollar" },
  { x: 80, y: 20, type: "circle" },
  { x: 35, y: 70, type: "chart" },
  { x: 75, y: 65, type: "circle" },
  { x: 15, y: 55, type: "briefcase" },
]

// Network connections between nodes (lead flow visualization)
const CONNECTIONS = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 0, to: 5 },
  { from: 1, to: 3 },
  { from: 3, to: 4 },
  { from: 2, to: 4 },
]

// Helper to render different node icons
const NodeIcon = ({ type, color }: { type: string; color: string }) => {
  const iconSize = 8
  const halfSize = iconSize / 2

  switch (type) {
    case "dollar":
      return (
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="10"
          fontWeight="bold"
          fill={color}
        >
          $
        </text>
      )
    case "chart":
      return (
        <g>
          <rect x="-4" y="2" width="2" height="6" fill={color} opacity="0.8" />
          <rect x="-1" y="-1" width="2" height="9" fill={color} />
          <rect x="2" y="-3" width="2" height="11" fill={color} opacity="0.8" />
        </g>
      )
    case "briefcase":
      return (
        <g>
          <rect x="-5" y="-2" width="10" height="7" rx="1" fill={color} opacity="0.8" />
          <rect x="-3" y="-4" width="6" height="3" rx="1" fill={color} />
        </g>
      )
    default:
      return <circle cx="0" cy="0" r="4" fill={color} />
  }
}

export function HeroBgContractor() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    // Static precision grid for users who prefer reduced motion
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          background: `radial-gradient(700px 500px at 60% 20%, ${contractor.bgGradientStart}, transparent 70%), radial-gradient(600px 400px at 30% 80%, ${contractor.bgSubtle}, transparent 70%)`,
        }}
      >
        {/* Subtle grid with measurement ticks */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${contractor.grid}66 1px, transparent 1px),
              linear-gradient(to bottom, ${contractor.grid}66 1px, transparent 1px),
              linear-gradient(to right, ${contractor.grid}33 0.5px, transparent 0.5px),
              linear-gradient(to bottom, ${contractor.grid}33 0.5px, transparent 0.5px)
            `,
            backgroundSize: "128px 128px, 128px 128px, 32px 32px, 32px 32px",
          }}
        />

        {/* Dashboard panel overlay */}
        <div
          className="absolute top-8 right-8 w-48 h-32 border opacity-20 rounded-lg"
          style={{
            borderColor: contractor.accent,
            background: `linear-gradient(135deg, ${contractor.bgSubtle}, transparent)`,
          }}
        >
          <div className="p-3 space-y-2">
            <div className="h-2 w-3/4 rounded" style={{ backgroundColor: contractor.grid }} />
            <div className="h-2 w-1/2 rounded" style={{ backgroundColor: contractor.grid }} />
            <div className="h-2 w-5/6 rounded" style={{ backgroundColor: contractor.grid }} />
          </div>
        </div>

        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-70">
          {/* Connection lines between nodes */}
          {CONNECTIONS.map((conn, i) => {
            const start = NODES[conn.from]
            const end = NODES[conn.to]
            return (
              <line
                key={i}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={contractor.accent}
                strokeWidth="0.25"
                strokeDasharray="0.5 0.5"
                opacity="0.7"
              />
            )
          })}

          {/* Static nodes with varied types */}
          {NODES.map((n, i) => (
            <g key={i} transform={`translate(${n.x}, ${n.y})`}>
              <circle cx="0" cy="0" r="1.5" fill={contractor.bgSubtle} opacity="0.9" />
              <g transform="scale(0.12)">
                <NodeIcon type={n.type} color={contractor.nodePulse} />
              </g>
            </g>
          ))}
        </svg>
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        background: `radial-gradient(700px 500px at 60% 20%, ${contractor.bgGradientStart}, transparent 70%), radial-gradient(600px 400px at 30% 80%, ${contractor.bgSubtle}, transparent 70%)`,
      }}
    >
      {/* Precision measurement grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${contractor.grid}66 1px, transparent 1px),
            linear-gradient(to bottom, ${contractor.grid}66 1px, transparent 1px),
            linear-gradient(to right, ${contractor.grid}33 0.5px, transparent 0.5px),
            linear-gradient(to bottom, ${contractor.grid}33 0.5px, transparent 0.5px)
          `,
          backgroundSize: "128px 128px, 128px 128px, 32px 32px, 32px 32px",
        }}
      />

      {/* Soft angled sheen */}
      <div className="absolute -left-1/3 top-1/3 h-[60%] w-[80%] rotate-12 bg-gradient-to-r from-sky-100/60 to-transparent blur-2xl" />

      {/* Animated dashboard panel */}
      <motion.div
        className="absolute top-8 right-8 w-48 h-32 border rounded-lg overflow-hidden"
        style={{
          borderColor: contractor.accent,
          background: `linear-gradient(135deg, ${contractor.bgSubtle}, transparent)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="p-3 space-y-2">
          {[0.75, 0.5, 0.85].map((width, i) => (
            <motion.div
              key={i}
              className="h-2 rounded"
              style={{
                backgroundColor: contractor.grid,
                width: `${width * 100}%`,
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>

      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ opacity: 0.9 }}>
        {/* Animated connection lines with data flow */}
        {CONNECTIONS.map((conn, i) => {
          const start = NODES[conn.from]
          const end = NODES[conn.to]
          return (
            <g key={i}>
              {/* Base connection line */}
              <motion.line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={contractor.accent}
                strokeWidth="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2, ease: "easeInOut", delay: i * 0.2 }}
              />
              {/* Data stream pulse */}
              <motion.line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={contractor.primary}
                strokeWidth="0.25"
                strokeDasharray="2 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1], opacity: [0.9, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            </g>
          )
        })}

        {/* Animated nodes with varied types */}
        {NODES.map((n, i) => (
          <g key={i}>
            {/* Glow effect */}
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="2.5"
              fill={contractor.primary}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                r: [2, 3, 2],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Node background */}
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="1.5"
              fill={contractor.bgSubtle}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Node icon */}
            <motion.g
              transform={`translate(${n.x}, ${n.y}) scale(0.12)`}
              animate={{
                scale: [0.12, 0.14, 0.12],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <NodeIcon type={n.type} color={contractor.nodePulse} />
            </motion.g>
          </g>
        ))}
      </svg>
    </div>
  )
}
