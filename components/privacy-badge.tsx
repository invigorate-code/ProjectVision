"use client"

import { homeowner, brand } from "@/lib/tokens"

export function PrivacyBadge() {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-sm" style={{ color: brand.subtleText }}>
      <span
        className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full"
        style={{ backgroundColor: homeowner.trustGreen }}
        aria-hidden="true"
      />
      <span>Encrypted by default • Admins can't view your photos</span>
    </div>
  )
}
