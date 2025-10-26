/**
 * A/B Testing Copy Variants
 * Easy-to-toggle copy variations for conversion optimization
 */

export type VariantKey = "A" | "B"

// Homeowner page variants
export const homeownerVariants = {
  hero: {
    headline: {
      A: "Get instant, transparent remodeling estimates — no calls, no pressure.",
      B: "Clarity for your project, right from the start.",
    },
    subheadline: {
      A: "Snap a photo, answer a few simple questions. Our AI delivers a private, local price estimate in minutes.",
      B: "Get a clear, instant AI-powered estimate for your home renovation project. No pressure, no sign-up fees, and no sales calls.",
    },
    primaryCTA: {
      A: "Start Your Estimate",
      B: "See Your Price",
    },
    secondaryCTA: {
      A: "How It Works",
      B: "See How It Works",
    },
  },
  trust: {
    tagline: {
      A: "Private by design • Local contractors • No sales calls",
      B: "No calls. Your photos stay private. We never share your data.",
    },
  },
  howItWorks: {
    step2Description: {
      A: "Our AI analyzes your project details and provides a comprehensive estimate and budget breakdown.",
      B: "AI works in the background—we'll notify you when it's ready. No waiting.",
    },
  },
} as const

// Contractor page variants
export const contractorVariants = {
  hero: {
    headline: {
      A: "Qualified Leads. Less Guesswork.",
      B: "Meet homeowners who already saw your pricing.",
    },
    subheadline: {
      A: "Get homeowners who already saw your pricing and fit your service area. Pay only for leads that match.",
      B: "Connect with serious homeowners who have clear vision, defined scope, and realistic budgets. Stop wasting time on leads that go nowhere.",
    },
    primaryCTA: {
      A: "Get Qualified Leads",
      B: "Start with a Free Profile",
    },
    secondaryCTA: {
      A: "View Pricing",
      B: "See How It Works",
    },
  },
  stats: {
    variant: {
      A: ["+38% close rate", "-42% wasted time", "$2,400 avg lead value"],
      B: ["Higher win rates", "Pre-qualified budgets", "Less time on dead-end bids"],
    },
  },
  pricing: {
    footnote: {
      A: "You only pay when we deliver a matching lead. No subscriptions. Cancel anytime.",
      B: "Only pay for qualified leads you accept. No hidden fees. Typical CAC $45–$75.",
    },
  },
} as const

// Active variant selector (change these to switch variants)
export const activeVariants = {
  homeowner: "A" as VariantKey,
  contractor: "A" as VariantKey,
}

// Helper functions to get active copy
export function getHomeownerCopy<
  T extends keyof typeof homeownerVariants,
  K extends keyof (typeof homeownerVariants)[T],
>(section: T, key: K): (typeof homeownerVariants)[T][K][VariantKey] {
  const variant = activeVariants.homeowner
  return homeownerVariants[section][key][variant]
}

export function getContractorCopy<
  T extends keyof typeof contractorVariants,
  K extends keyof (typeof contractorVariants)[T],
>(section: T, key: K): (typeof contractorVariants)[T][K][VariantKey] {
  const variant = activeVariants.contractor
  return contractorVariants[section][key][variant]
}
