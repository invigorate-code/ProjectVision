import type { BrandTheme } from "@/lib/tokens"
import { getThemeTokens } from "@/lib/tokens"

interface StatsRowProps {
  theme: BrandTheme
  stats: string[]
}

export function StatsRow({ theme, stats }: StatsRowProps) {
  const tokens = getThemeTokens(theme)

  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-700">
        {stats.map((stat, index) => (
          <span key={index} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-300">•</span>}
            <span style={{ color: tokens.primary }}>{stat}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
