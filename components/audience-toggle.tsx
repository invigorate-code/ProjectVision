"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"
import { useState, useTransition } from "react"

export function AudienceToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)
  const [isPending, startTransition] = useTransition()

  const isContractorPage = pathname === "/contractors"
  const isLoading = isNavigating || isPending

  const handleToggle = () => {
    if (isLoading) return // Prevent double-clicks

    setIsNavigating(true)
    startTransition(() => {
      if (isContractorPage) {
        router.push("/")
      } else {
        router.push("/contractors")
      }
      // Reset loading state after a short delay to allow navigation to complete
      setTimeout(() => setIsNavigating(false), 500)
    })
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      disabled={isLoading}
      className="border-2 border-gray-300 hover:border-[#3A86FF] hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={isContractorPage ? "Switch to homeowner view" : "Switch to contractor view"}
    >
      <span className="text-sm font-medium">
        {isContractorPage ? "Are you a homeowner?" : "Are you a contractor?"}
      </span>
      {isLoading ? (
        <Loader2 className="ml-1 h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  )
}
