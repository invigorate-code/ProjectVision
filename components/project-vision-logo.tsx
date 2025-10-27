interface ProjectVisionLogoProps {
  className?: string
  size?: number
}

/**
 * Vision Logo Component
 *
 * Design Concept: Stylized house outline forming an eye (symbolizing Vision)
 * - The house roof forms the upper eyelid
 * - The house base forms the lower eyelid
 * - A circular "pupil" in the center represents focus and clarity
 *
 * Brand Colors:
 * - Primary: #3A86FF (Cool Blue)
 * - Secondary: #FFBE0B (Amber)
 */
export function ProjectVisionLogo({ className = "", size = 40 }: ProjectVisionLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vision Logo"
      role="img"
    >
      {/* House outline forming eye shape */}
      <g>
        {/* Roof / Upper eyelid - forms top of eye */}
        <path
          d="M 10 50 L 50 20 L 90 50"
          stroke="#3A86FF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* House walls / Eye outline */}
        <path
          d="M 15 50 Q 15 70 50 75 Q 85 70 85 50"
          stroke="#3A86FF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Pupil / Focus point - amber accent */}
        <circle cx="50" cy="55" r="12" fill="#FFBE0B" opacity="0.9" />

        {/* Inner pupil detail */}
        <circle cx="50" cy="55" r="6" fill="#3A86FF" />

        {/* Door detail - subtle line */}
        <rect x="45" y="65" width="10" height="8" fill="#3A86FF" opacity="0.3" rx="1" />
      </g>
    </svg>
  )
}

/**
 * Wordmark version with logo and text
 */
export function ProjectVisionWordmark({ className = "", size = 40 }: ProjectVisionLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ProjectVisionLogo size={size} />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-brand-neutral-dark leading-none">Vision</span>
        <span className="text-xs text-muted-foreground leading-none mt-0.5">AI Remodeling Estimates</span>
      </div>
    </div>
  )
}
