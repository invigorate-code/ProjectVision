import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Home Remodeling Estimates | Vision",
  description:
    "Get instant, AI-powered home remodeling quotes. Private, transparent, and tailored to your project with trusted local contractors.",
  keywords: [
    "AI home remodeling estimates",
    "instant renovation quotes",
    "private renovation pricing",
    "trusted home contractors",
    "AI renovation cost estimator",
    "remodeling cost comparison",
    "local contractor pricing",
    "transparent home renovation",
    "renovation estimate app",
    "AI-powered home improvement",
  ],
  authors: [{ name: "Vision" }],
  creator: "Vision",
  publisher: "Vision",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://projectvision.app",
    title: "Vision – Instant AI Remodeling Estimates",
    description:
      "Get transparent, private, and instant renovation cost estimates with AI. Compare trusted contractors and book your next remodel with confidence.",
    siteName: "Vision",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision – Instant AI Remodeling Estimates",
    description:
      "Get transparent, private, and instant renovation cost estimates with AI. Compare trusted contractors and book your next remodel with confidence.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
