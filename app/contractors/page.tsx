"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Camera,
  Clock,
  DollarSign,
  Phone,
  Shield,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Menu,
  TrendingUp,
  Target,
  Award,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { TechGridMotion } from "@/components/tech-grid-motion"
import { AudienceToggle } from "@/components/audience-toggle"
import { StatsRow } from "@/components/stats-row"
import { RoiMiniCalc } from "@/components/roi-mini-calc"
import { FAQ, contractorFAQs } from "@/components/faq"
import { getContractorCopy } from "@/lib/ab-variants"
import { contractor } from "@/lib/tokens"

export default function ContractorsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    console.log("[v0] Setting up IntersectionObserver for animations")

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("[v0] Element intersecting:", entry.target.className, "isIntersecting:", entry.isIntersecting)

          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            console.log("[v0] Added animate-fade-in-up class to:", entry.target.className)

            // Sequential animation for step cards
            if (entry.target.classList.contains("step-card")) {
              const delay = Number.parseInt(entry.target.getAttribute("data-delay") || "0")
              console.log("[v0] Step card delay:", delay)
              setTimeout(() => {
                entry.target.classList.add("animate-fade-in-up")
              }, delay)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-section, .step-card")
    console.log("[v0] Found elements to observe:", elements.length)
    elements.forEach((el) => {
      console.log("[v0] Observing element:", el.className)
      observerRef.current?.observe(el)
    })

    return () => {
      console.log("[v0] Cleaning up IntersectionObserver")
      observerRef.current?.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          STICKY NAVIGATION BAR
          ============================================ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-lg px-2 py-1"
              aria-label="Vision home"
            >
              <div className="bg-gray-800 w-8 h-8 rounded-lg flex items-center justify-center" aria-hidden="true">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="hidden sm:inline">Vision</span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium focus:outline-none focus:underline"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium focus:outline-none focus:underline"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium focus:outline-none focus:underline"
              >
                Testimonials
              </button>
            </div>

            {/* Right Side: Audience Toggle, CTA Button, Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Audience Toggle - Always visible on mobile, part of nav on desktop */}
              <div className="md:hidden">
                <AudienceToggle />
              </div>

              {/* Desktop Audience Toggle and CTA */}
              <div className="hidden md:flex items-center gap-4">
                <AudienceToggle />
                <Button
                  onClick={() => scrollToSection("hero")}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md hover-grow focus:ring-4 focus:ring-gray-800/50 focus:outline-none"
                  aria-label="Join as a contractor"
                >
                  Join Network
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-lg"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white" role="menu">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  role="menuitem"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  role="menuitem"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  role="menuitem"
                >
                  Testimonials
                </button>
                <div className="px-4 pt-2">
                  <Button
                    onClick={() => {
                      scrollToSection("hero")
                      setMobileMenuOpen(false)
                    }}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md hover-grow focus:ring-4 focus:ring-gray-800/50 focus:outline-none"
                    aria-label="Join as a contractor"
                  >
                    Join Network
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ============================================
          HERO SECTION
          Main landing section for contractors
          ============================================ */}
      <section
        id="hero"
        className="relative px-4 py-24 md:py-32 lg:py-40 overflow-hidden mt-16"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <TechGridMotion />
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/70" />

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance animate-fade-in-up"
          >
            {getContractorCopy("hero", "headline")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-100">
            {getContractorCopy("hero", "subheadline")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-200">
            <Button
              size="lg"
              style={{ backgroundColor: contractor.primary }}
              className="hover:opacity-90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover-grow focus:ring-4 focus:outline-none"
              aria-label="Join the Vision contractor network"
            >
              <Award className="mr-2 h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{getContractorCopy("hero", "primaryCTA")}</span>
              <span className="sm:hidden">Join</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 px-8 py-6 text-lg rounded-xl bg-white/90 backdrop-blur-sm hover-grow focus:ring-4 focus:ring-gray-300 focus:outline-none"
              aria-label="Learn how Vision works for contractors"
            >
              {getContractorCopy("hero", "secondaryCTA")}
            </Button>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4" style={{ color: contractor.primary }} aria-hidden="true" />
              <span>No upfront fees. Only pay for qualified leads you accept.</span>
            </div>

            {/* Trust Badges */}
            <div
              className="flex flex-wrap items-center justify-center gap-4 mt-2"
              role="list"
              aria-label="Platform features"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                role="listitem"
              >
                <Target className="h-4 w-4" style={{ color: contractor.primary }} aria-hidden="true" />
                <span className="text-xs font-medium text-gray-700">Pre-Qualified Leads</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                role="listitem"
              >
                <TrendingUp className="h-4 w-4 text-green-600" aria-hidden="true" />
                <span className="text-xs font-medium text-gray-700">Higher Win Rates</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                role="listitem"
              >
                <DollarSign className="h-4 w-4" style={{ color: contractor.primary }} aria-hidden="true" />
                <span className="text-xs font-medium text-gray-700">Transparent Pricing</span>
              </div>
            </div>

            <StatsRow theme="contractor" stats={getContractorCopy("stats", "variant")} />
          </div>
        </div>
      </section>

      {/* ============================================
          PAIN POINTS SECTION
          Addresses common frustrations contractors face
          ============================================ */}
      <section id="pain-points" className="px-4 py-16 md:py-24 bg-gray-50" aria-labelledby="pain-points-heading">
        <div className="max-w-6xl mx-auto">
          <h2
            id="pain-points-heading"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 fade-in-section"
          >
            Stop Wasting Time on Unqualified Leads
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto fade-in-section">
            Focus on what you do best—building—not chasing down vague project requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Common contractor frustrations">
            <Card
              className="fade-in-section p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border-0"
              role="listitem"
            >
              <div
                className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                aria-hidden="true"
              >
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Tire-Kickers Wasting Your Time?</h3>
              <p className="text-gray-600 text-center">
                Stop spending hours on initial consultations with homeowners who aren't ready to commit. Every lead you
                receive has already been pre-qualified with budget, scope, and timeline.
              </p>
            </Card>

            <Card
              className="fade-in-section p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border-0"
              role="listitem"
            >
              <div
                className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                aria-hidden="true"
              >
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Vague Project Descriptions?</h3>
              <p className="text-gray-600 text-center">
                No more "I want to renovate something." Our AI helps homeowners create detailed project briefs with
                photos, measurements, and material preferences before you ever get involved.
              </p>
            </Card>

            <Card
              className="fade-in-section p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border-0"
              role="listitem"
            >
              <div
                className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                aria-hidden="true"
              >
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Price Shopping Wars?</h3>
              <p className="text-gray-600 text-center">
                Homeowners arrive with realistic expectations based on AI-powered estimates. Less negotiation, more
                focus on the quality and value you bring to the table.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS SECTION
          Four-step process for contractors
          ============================================ */}
      <section id="how-it-works" className="px-4 py-16 md:py-24" aria-labelledby="how-it-works-heading">
        <div className="max-w-6xl mx-auto">
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 fade-in-section"
          >
            How It Works for Contractors
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto fade-in-section">
            Four simple steps to better leads and more efficient quoting.
          </p>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="Four steps to join Vision"
          >
            {[
              {
                step: "1",
                title: "Set Up Your Profile",
                description:
                  "Create your contractor profile, upload your portfolio, certifications, and set your service areas and specialties.",
                icon: "👔",
                ariaLabel: "Step 1: Create your contractor profile with portfolio and certifications",
              },
              {
                step: "2",
                title: "Configure Your Pricing",
                description:
                  "Set your labor rates, material markups, and preferred project types. Our system uses this to match you with compatible leads.",
                icon: "💰",
                ariaLabel: "Step 2: Configure your pricing models and preferences",
              },
              {
                step: "3",
                title: "Receive Qualified Leads",
                description:
                  "Get detailed project briefs with photos, AI estimates, and homeowner expectations. Review and accept only the leads that fit your business.",
                icon: "📋",
                ariaLabel: "Step 3: Receive detailed, pre-qualified project briefs",
              },
              {
                step: "4",
                title: "Submit Your Bid & Win Jobs",
                description:
                  "Submit competitive quotes based on comprehensive project details. Build your reputation through reviews and repeat business.",
                icon: CheckCircle,
                ariaLabel: "Step 4: Submit bids and win quality jobs",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="step-card text-center opacity-0"
                data-delay={index * 100}
                role="listitem"
                aria-label={item.ariaLabel}
              >
                <div className="relative mb-6">
                  <div
                    className="bg-gray-800 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg transition-transform duration-300 hover:scale-110"
                    aria-hidden="true"
                  >
                    {typeof item.icon === "string" ? (
                      <span className="text-3xl">{item.icon}</span>
                    ) : (
                      <item.icon className="h-10 w-10" />
                    )}
                  </div>
                  <div
                    className="absolute -top-2 -right-2 bg-white border-4 border-gray-800 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md"
                    aria-label={`Step ${item.step}`}
                  >
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          BENEFITS SECTION
          Key value propositions for contractors
          ============================================ */}
      <section
        id="benefits"
        className="px-4 py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100"
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 fade-in-section"
          >
            Why Contractors Choose Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <Card
              className="fade-in-section p-8 md:p-10 rounded-2xl shadow-xl bg-white border-0 hover:shadow-2xl transition-all duration-300"
              role="article"
            >
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Quality Leads</h3>
              <p className="text-gray-700 mb-6">
                Every lead comes with detailed project specifications, realistic budgets, and homeowners who are ready to
                move forward. No more tire-kickers or endless back-and-forth clarifications.
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Pre-qualified budget and timeline",
                  "Detailed project scope with photos",
                  "Material preferences specified",
                  "Homeowner expectations aligned with market rates",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefit 2 */}
            <Card
              className="fade-in-section p-8 md:p-10 rounded-2xl shadow-xl bg-white border-0 hover:shadow-2xl transition-all duration-300"
              role="article"
            >
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Higher Win Rates</h3>
              <p className="text-gray-700 mb-6">
                When homeowners arrive educated and prepared, your expertise shines. Compete on quality and service, not
                just price. Build long-term relationships with satisfied customers.
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Less price-based competition",
                  "More informed homeowner conversations",
                  "Faster decision-making timelines",
                  "Review system builds your reputation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefit 3 */}
            <Card
              className="fade-in-section p-8 md:p-10 rounded-2xl shadow-xl bg-white border-0 hover:shadow-2xl transition-all duration-300"
              role="article"
            >
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Save Time, Make More</h3>
              <p className="text-gray-700 mb-6">
                Spend less time on initial consultations and quote preparation. Our platform does the heavy lifting so you
                can focus on what you do best: delivering exceptional work.
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Streamlined quoting process",
                  "Reduced admin and follow-up time",
                  "Automated project brief generation",
                  "Digital contract and payment tools",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefit 4 */}
            <Card
              className="fade-in-section p-8 md:p-10 rounded-2xl shadow-xl bg-white border-0 hover:shadow-2xl transition-all duration-300"
              role="article"
            >
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Your Reputation</h3>
              <p className="text-gray-700 mb-6">
                Showcase your best work, collect verified reviews, and grow your business. Our platform helps you stand
                out from the competition with a professional digital presence.
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Portfolio showcase with before/after photos",
                  "Verified customer reviews and ratings",
                  "Certifications and credentials display",
                  "Repeat customer and referral incentives",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS SECTION
          Social proof from contractors
          ============================================ */}
      <section id="testimonials" className="px-4 py-16 md:py-24 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 fade-in-section"
          >
            What Contractors Are Saying
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 fade-in-section">
            Real stories from professionals who use Vision to grow their business.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" role="list" aria-label="Contractor testimonials">
            {[
              {
                name: "David L.",
                role: "General Contractor, 12 Years Experience",
                quote:
                  "Vision sends me leads that are already well-defined. I spend less time on initial calls and more time doing what I love—building. My win rate has doubled.",
                rating: 5,
              },
              {
                name: "Maria S.",
                role: "Kitchen & Bath Specialist",
                quote:
                  "The homeowners I meet through Vision actually know what they want. They've done their research, have realistic budgets, and appreciate quality work. It's a game-changer.",
                rating: 5,
              },
              {
                name: "James K.",
                role: "Renovation Expert, Licensed & Insured",
                quote:
                  "I was skeptical at first, but the quality of leads is genuinely better. These aren't price shoppers—they're people who value craftsmanship and are ready to invest in their homes.",
                rating: 5,
              },
              {
                name: "Linda P.",
                role: "Flooring & Tile Contractor",
                quote:
                  "The detailed project briefs save me hours of work. Everything from measurements to material preferences is documented before I even make contact. It's so much more efficient.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="fade-in-section p-8 rounded-2xl shadow-md bg-gray-50 border-0 hover:shadow-xl transition-all duration-300"
                role="listitem"
              >
                <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING SECTION
          Transparent pricing model
          ============================================ */}
      <section
        id="pricing"
        className="px-4 py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-5xl mx-auto text-center fade-in-section">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            No upfront fees. No monthly subscriptions. Only pay for qualified leads you choose to accept.
          </p>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Local Repair", range: "$15–$35", subtitle: "per lead" },
              { title: "Standard Remodel", range: "$35–$85", subtitle: "per lead" },
              { title: "Major Projects", range: "$85–$150", subtitle: "per lead" },
            ].map((tier, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tier.title}</h3>
                <div className="text-3xl font-bold mb-1" style={{ color: contractor.primary }}>
                  {tier.range}
                </div>
                <p className="text-sm text-gray-600">{tier.subtitle}</p>
              </Card>
            ))}
          </div>

          <p className="text-sm text-gray-600 mb-8">{getContractorCopy("pricing", "footnote")}</p>

          {/* ROI Calculator */}
          <RoiMiniCalc />

          {/* CTA */}
          <Card className="p-8 md:p-10 rounded-2xl shadow-xl bg-white border-2 border-gray-200 max-w-2xl mx-auto mt-8">
            <div className="space-y-4 mb-8 text-left">
              {[
                "Review leads for free before accepting",
                "Set your own service areas and project types",
                "No hidden fees or surprise charges",
                "Cancel or pause anytime",
                "Money-back guarantee on first 3 leads",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                    style={{ color: contractor.primary }}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              style={{ backgroundColor: contractor.primary }}
              className="w-full hover:opacity-90 text-white py-6 rounded-xl text-lg hover-grow focus:ring-4 focus:outline-none"
              aria-label="Join Vision as a contractor"
            >
              Join as a Contractor
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Card>
        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION
          Last conversion opportunity
          ============================================ */}
      <section
        id="final-cta"
        className="px-4 py-16 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white"
        aria-labelledby="final-cta-heading"
      >
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 id="final-cta-heading" className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Get Better Leads?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Join our network of trusted contractors and start receiving qualified leads today.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-xl hover-grow focus:ring-4 focus:ring-white/50 focus:outline-none"
            aria-label="Join the contractor network now"
          >
            <Award className="mr-2 h-5 w-5" aria-hidden="true" />
            Join Our Network Now
          </Button>
          <p className="mt-6 text-sm opacity-75">No setup fees • Review leads before accepting • 100% risk-free</p>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          Frequently Asked Questions
          ============================================ */}
      <FAQ theme="contractor" items={contractorFAQs} />

      {/* ============================================
          FOOTER
          Site information and legal links
          ============================================ */}
      <footer className="px-4 py-12 bg-gray-900 text-gray-400" role="contentinfo">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold text-white mb-2">Vision</p>
          <p className="text-sm">© 2025 Vision. All rights reserved.</p>
          <nav className="flex justify-center gap-6 mt-6 text-sm" aria-label="Footer navigation">
            <a
              href="#"
              className="hover:text-white transition-colors focus:text-white focus:outline-none focus:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors focus:text-white focus:outline-none focus:underline"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors focus:text-white focus:outline-none focus:underline"
            >
              Contractor Terms
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors focus:text-white focus:outline-none focus:underline"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
