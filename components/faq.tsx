"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { BrandTheme } from "@/lib/tokens"
import { getThemeTokens } from "@/lib/tokens"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  theme: BrandTheme
  items: FAQItem[]
}

export function FAQ({ theme, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const tokens = getThemeTokens(theme)

  return (
    <section className="px-4 py-16 md:py-24 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: tokens.primary }}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Predefined FAQ content for each audience
export const homeownerFAQs: FAQItem[] = [
  {
    question: "How accurate are the AI estimates?",
    answer:
      "Our AI analyzes thousands of local material and labor costs to provide data-driven estimates. While the final quote from a contractor may vary based on specific details, our estimates give you a reliable ballpark to plan your budget and have informed conversations.",
  },
  {
    question: "Who can see my photos and project details?",
    answer:
      "Your privacy is our top priority. Your photos and project details are encrypted and stored securely. Administrators cannot view your content. Information is only shared with contractors when you explicitly choose to connect with them.",
  },
  {
    question: "Do I have to hire a contractor through Project Vision?",
    answer:
      "Not at all. You can use our estimates to plan your project independently, get quotes from contractors you already know, or browse our network of vetted professionals when you're ready. There's no obligation.",
  },
]

export const contractorFAQs: FAQItem[] = [
  {
    question: "How much do leads cost?",
    answer:
      "Lead pricing varies by project type: Local Repairs ($15-35), Standard Remodels ($35-85), and Major Projects ($85-150). You only pay for leads you choose to accept, and you can review full project details before committing.",
  },
  {
    question: "What makes these leads 'qualified'?",
    answer:
      "Every lead includes detailed project scope, budget expectations set by our AI estimates, timeline, and homeowner contact preferences. Homeowners have already done their research and understand market rates, so you spend less time educating and more time closing.",
  },
  {
    question: "Can I pause or cancel my account?",
    answer:
      "Yes, absolutely. There are no contracts or monthly minimums. You can pause incoming leads or cancel your account at any time with no penalties. You'll only ever pay for the leads you've accepted.",
  },
]
