/**
 * Vision Design Tokens
 * Centralized brand colors and theme configuration for homeowner and contractor audiences
 */

// Shared brand neutrals used across both themes
export const brand = {
  neutralBg: "#FFFFFF",
  neutralText: "#0F172A", // slate-900
  subtleText: "#475569", // slate-600
  lightText: "#64748B", // slate-500
  border: "#E2E8F0", // slate-200
  radius: "1rem",
} as const

// Homeowner theme - friendly, approachable, privacy-focused
export const homeowner = {
  primary: "#3A86FF", // bright blue
  primaryHover: "#2E6FCC", // darker blue
  accent: "#A0C4FF", // light blue
  bgSubtle: "#D5E8FF", // light blue (boosted from almost-white)
  bgGradientStart: "#C5DEFF", // vibrant blue gradient (was #E8F2FF - too pale)
  bgGradientEnd: "transparent",
  trustGreen: "#10B981", // emerald-500
} as const

// Contractor theme - professional, analytical, ROI-focused
export const contractor = {
  primary: "#0EA5E9", // sky-500 (clean pro)
  primaryHover: "#0284C7", // sky-600
  accent: "#7DD3FC", // sky-300
  bgSubtle: "#D0EFFF", // light sky (boosted from almost-white)
  bgGradientStart: "#B8E5FF", // vibrant sky gradient (was #E0F2FE - too pale)
  bgGradientEnd: "transparent",
  grid: "#BAC8D3", // darker gray for visibility (was #E5E7EB)
  nodePulse: "#0EA5E9", // matches primary
} as const

// Typography scale
export const typography = {
  heroH1: "text-4xl md:text-5xl lg:text-6xl",
  sectionH2: "text-3xl md:text-4xl",
  cardH3: "text-xl md:text-2xl",
  body: "text-base md:text-lg",
  small: "text-sm",
} as const

// Spacing scale (Tailwind compatible)
export const spacing = {
  section: "py-16 md:py-24",
  cardPadding: "p-8 md:p-10",
  gap: {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  },
} as const

// Animation durations
export const animation = {
  fast: "200ms",
  normal: "300ms",
  slow: "500ms",
  heroDrift: "20s",
  pathDraw: "8s",
} as const

// Export type for TypeScript safety
export type BrandTheme = "homeowner" | "contractor"

// Helper function to get theme-specific tokens
export function getThemeTokens(theme: BrandTheme) {
  return theme === "homeowner" ? homeowner : contractor
}
