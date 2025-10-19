"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Camera, Clock, DollarSign, Phone, Shield, Lock, CheckCircle, ArrowRight, Star, Menu } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { BlueprintMotion } from "@/components/blueprint-motion"

export default function LandingPage() {
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
              className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-[#3A86FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3A86FF] rounded-lg px-2 py-1"
              aria-label="Project Vision home"
            >
              <div className="bg-[#3A86FF] w-8 h-8 rounded-lg flex items-center justify-center" aria-hidden="true">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="hidden sm:inline">Project Vision</span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-[#3A86FF] transition-colors font-medium focus:outline-none focus:underline"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("privacy")}
                className="text-gray-700 hover:text-[#3A86FF] transition-colors font-medium focus:outline-none focus:underline"
              >
                Privacy
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-[#3A86FF] transition-colors font-medium focus:outline-none focus:underline"
              >
                Testimonials
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => scrollToSection("hero")}
                className="bg-[#3A86FF] hover:bg-[#2E6FCC] text-white px-6 py-2 rounded-lg shadow-md hover-grow focus:ring-4 focus:ring-[#3A86FF]/50 focus:outline-none"
                aria-label="Start your free estimate"
              >
                <span className="hidden sm:inline">Start Estimate</span>
                <span className="sm:hidden">Start</span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-[#3A86FF] focus:outline-none focus:ring-2 focus:ring-[#3A86FF] rounded-lg"
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
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#3A86FF] rounded-lg transition-colors"
                  role="menuitem"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("privacy")}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#3A86FF] rounded-lg transition-colors"
                  role="menuitem"
                >
                  Privacy
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#3A86FF] rounded-lg transition-colors"
                  role="menuitem"
                >
                  Testimonials
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ============================================
          HERO SECTION
          Main landing section with headline and primary CTA
          ============================================ */}
      <section
        id="hero"
        className="relative px-4 py-24 md:py-32 lg:py-40 overflow-hidden mt-16"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <BlueprintMotion />
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/70" aria-hidden="true" />

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance animate-fade-in-up"
          >
            Clarity for your project, <span className="text-[#3A86FF]">right from the start.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-100">
            Get a clear, instant AI-powered estimate for your home renovation project. No pressure, no sign-up fees, and
            no sales calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-200">
            <Button
              size="lg"
              className="bg-[#3A86FF] hover:bg-[#2E6FCC] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover-grow focus:ring-4 focus:ring-[#3A86FF]/50 focus:outline-none"
              aria-label="Get your project estimate in minutes - Start free estimate now"
            >
              <Camera className="mr-2 h-5 w-5" aria-hidden="true" />
              See your project's estimated cost in minutes
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 px-8 py-6 text-lg rounded-xl bg-white/90 backdrop-blur-sm hover-grow focus:ring-4 focus:ring-gray-300 focus:outline-none"
              aria-label="Learn how Project Vision works"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Lock className="h-4 w-4 text-[#3A86FF]" aria-hidden="true" />
              <span>No calls. Your photos stay private. We never share your data.</span>
            </div>

            {/* Trust Badges */}
            <div
              className="flex flex-wrap items-center justify-center gap-4 mt-2"
              role="list"
              aria-label="Trust and security features"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                role="listitem"
              >
                <Shield className="h-4 w-4 text-green-600" aria-hidden="true" />
                <span className="text-xs font-medium text-gray-700">SSL Secure</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                role="listitem"
              >
                <Lock className="h-4 w-4 text-[#3A86FF]" aria-hidden="true" />
                <span className="text-xs font-medium text-gray-700">Privacy-First AI</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                role="listitem"
              >
                <Phone className="h-4 w-4 text-gray-600 line-through" aria-hidden="true" />
                <span className="text-xs font-medium text-gray-700">No Sales Calls</span>
              </div>
            </div>
          </div>

          <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
            {/* This will announce status updates for screen readers when estimates are processing */}
          </div>
        </div>
      </section>

      {/* ============================================
          PAIN POINTS SECTION
          Addresses common frustrations with traditional renovation quotes
          ============================================ */}
      <section id="pain-points" className="px-4 py-16 md:py-24 bg-gray-50" aria-labelledby="pain-points-heading">
        <div className="max-w-6xl mx-auto">
          <h2
            id="pain-points-heading"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 fade-in-section"
          >
            End the Guesswork and Get a Real Plan
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto fade-in-section">
            Stop wasting time and energy on the old way of getting renovation quotes.
          </p>
          <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Common renovation frustrations">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Tired of Waiting for Quotes?</h3>
              <p className="text-gray-600 text-center">
                Stop spending weeks trying to schedule appointments and chase down estimates. Describe your project once
                and get a data-driven cost range in minutes, not days.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Dreading the Sales Pitch?</h3>
              <p className="text-gray-600 text-center">
                Explore your options from the comfort of your own home. Our process is 100% private, allowing you to
                refine your vision without the pressure of an in-person sales meeting.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Unsure If a Price is Fair?</h3>
              <p className="text-gray-600 text-center">
                We analyze thousands of local material and labor costs to give you an impartial, transparent estimate.
                Gain the confidence you need to have informed conversations with contractors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS SECTION
          Four-step process explanation with sequential animations
          ============================================ */}
      <section id="how-it-works" className="px-4 py-16 md:py-24" aria-labelledby="how-it-works-heading">
        <div className="max-w-6xl mx-auto">
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 fade-in-section"
          >
            How It Works
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto fade-in-section">
            Four simple steps to clarity and confidence in your renovation project.
          </p>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="Four steps to get your estimate"
          >
            {[
              {
                step: "1",
                title: "Describe Your Project",
                description:
                  "Tell us about your renovation. Answer a few simple questions and, if you like, upload photos of your space.",
                icon: Camera,
                ariaLabel: "Step 1: Describe your project by answering questions and uploading photos",
              },
              {
                step: "2",
                title: "Receive Your Instant Estimate",
                description:
                  "Our AI analyzes your project details and provides a comprehensive estimate and budget breakdown.",
                icon: "🤖",
                ariaLabel: "Step 2: Receive instant AI-powered estimate with budget breakdown",
              },
              {
                step: "3",
                title: "Refine Your Vision",
                description:
                  "Adjust the scope, compare materials, and see how different choices impact your budget—all in real-time.",
                icon: "🎯",
                ariaLabel: "Step 3: Refine your vision by adjusting scope and comparing materials",
              },
              {
                step: "4",
                title: "Connect When You're Ready",
                description:
                  "Once you feel confident in your plan, we can connect you with vetted, local contractors. You initiate the conversation.",
                icon: CheckCircle,
                ariaLabel: "Step 4: Connect with vetted contractors when you're ready",
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
                    className="bg-[#3A86FF] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg transition-transform duration-300 hover:scale-110"
                    aria-hidden="true"
                  >
                    {typeof item.icon === "string" ? (
                      <span className="text-3xl">{item.icon}</span>
                    ) : (
                      <item.icon className="h-10 w-10" />
                    )}
                  </div>
                  <div
                    className="absolute -top-2 -right-2 bg-white border-4 border-[#3A86FF] text-[#3A86FF] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md"
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
          DATA PRIVACY SECTION
          Privacy-first messaging with security features
          ============================================ */}
      <section
        id="privacy"
        className="px-4 py-16 md:py-24 bg-gradient-to-br from-[#3A86FF]/5 to-blue-50"
        aria-labelledby="privacy-heading"
      >
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <div
            className="bg-[#3A86FF] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse-slow"
            aria-hidden="true"
          >
            <Lock className="h-10 w-10 text-white" />
          </div>
          <h2 id="privacy-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Privacy is <span className="text-[#3A86FF]">Our Foundation</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We believe planning your dream home shouldn't come at the cost of your privacy. Your personal information
            and project details are kept completely anonymous until you decide to share them with a contractor. We will
            never sell your data or allow unsolicited calls. Period.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12" role="list" aria-label="Privacy and security features">
            <Card
              className="p-6 rounded-xl shadow-md bg-white border-0 hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              <Shield className="h-8 w-8 text-[#3A86FF] mb-4 mx-auto" aria-hidden="true" />
              <h3 className="font-bold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-gray-600">Your data is encrypted in transit and at rest.</p>
            </Card>
            <Card
              className="p-6 rounded-xl shadow-md bg-white border-0 hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              <Lock className="h-8 w-8 text-[#3A86FF] mb-4 mx-auto" aria-hidden="true" />
              <h3 className="font-bold text-gray-900 mb-2">No Admin Access</h3>
              <p className="text-sm text-gray-600">Administrators cannot view your photos or project details.</p>
            </Card>
            <Card
              className="p-6 rounded-xl shadow-md bg-white border-0 hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              <CheckCircle className="h-8 w-8 text-[#3A86FF] mb-4 mx-auto" aria-hidden="true" />
              <h3 className="font-bold text-gray-900 mb-2">You Control Sharing</h3>
              <p className="text-sm text-gray-600">Only share your info when you choose to book a job.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================
          DUAL VALUE PROPOSITION SECTION
          Separate value props for homeowners and contractors
          ============================================ */}
      <section id="value" className="px-4 py-16 md:py-24" aria-labelledby="value-heading">
        <div className="max-w-6xl mx-auto">
          <h2
            id="value-heading"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 fade-in-section"
          >
            For Homeowners & Contractors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Homeowners */}
            <Card
              className="fade-in-section p-8 md:p-12 rounded-2xl shadow-xl bg-gradient-to-br from-white to-blue-50 border-2 border-[#3A86FF]/20 hover:shadow-2xl transition-all duration-300"
              role="article"
              aria-labelledby="homeowner-heading"
            >
              <div
                className="bg-[#3A86FF] w-16 h-16 rounded-full flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="text-3xl" role="img" aria-label="House">
                  🏠
                </span>
              </div>
              <h3 id="homeowner-heading" className="text-2xl font-bold text-gray-900 mb-4">
                For the Homeowner: Clarity From the Start
              </h3>
              <p className="text-gray-700 mb-6">
                We put you in the driver's seat. Our tools are designed to give you the knowledge and confidence to move
                forward with your renovation on your own terms.
              </p>
              <ul className="space-y-4" role="list" aria-label="Homeowner benefits">
                {[
                  "Understand the costs upfront",
                  "Explore the possibilities without pressure",
                  "Find the right professional when the time is right",
                  "Access your estimate history anytime",
                  "Compare options side-by-side",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3" role="listitem">
                    <CheckCircle className="h-6 w-6 text-[#3A86FF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full mt-8 bg-[#3A86FF] hover:bg-[#2E6FCC] text-white py-6 rounded-xl text-lg hover-grow focus:ring-4 focus:ring-[#3A86FF]/50 focus:outline-none"
                aria-label="Start your free estimate as a homeowner"
              >
                Start Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Card>

            {/* Contractors */}
            <Card
              className="fade-in-section p-8 md:p-12 rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-2xl transition-all duration-300"
              role="article"
              aria-labelledby="contractor-heading"
            >
              <div
                className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="text-3xl" role="img" aria-label="Hammer">
                  🔨
                </span>
              </div>
              <h3 id="contractor-heading" className="text-2xl font-bold text-gray-900 mb-4">
                For the Contractor: Qualified Leads, Not Guesses
              </h3>
              <p className="text-gray-700 mb-6">
                Stop wasting time on leads that go nowhere. We connect you with serious homeowners who have a clear
                vision, a defined scope, and a realistic budget.
              </p>
              <ul className="space-y-4" role="list" aria-label="Contractor benefits">
                {[
                  "Receive detailed project briefs",
                  "Provide more accurate quotes",
                  "Win better jobs",
                  "Set your pricing models once",
                  "Build your reputation with reviews",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3" role="listitem">
                    <CheckCircle className="h-6 w-6 text-gray-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full mt-8 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-6 rounded-xl text-lg bg-transparent hover-grow focus:ring-4 focus:ring-gray-300 focus:outline-none"
                aria-label="Join Project Vision as a contractor"
              >
                Join as a Contractor
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS SECTION
          Social proof from real users
          ============================================ */}
      <section id="testimonials" className="px-4 py-16 md:py-24 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 fade-in-section"
          >
            What People Are Saying
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 fade-in-section">
            Real stories from homeowners and contractors who trust Project Vision.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" role="list" aria-label="Customer testimonials">
            {[
              {
                name: "Jessica M.",
                role: "Homeowner",
                quote:
                  "Finally, a way to budget for our kitchen remodel without the stress. The AI estimate was surprisingly accurate and gave us the confidence to start talking to contractors.",
                rating: 5,
              },
              {
                name: "David L.",
                role: "Local Pro",
                quote:
                  "Project Vision sends me leads that are already well-defined. I spend less time on initial calls and more time doing what I love—building.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="fade-in-section p-8 rounded-2xl shadow-md bg-white border-0 hover:shadow-xl transition-all duration-300"
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
          FINAL CTA SECTION
          Last conversion opportunity with strong call-to-action
          ============================================ */}
      <section
        id="final-cta"
        className="px-4 py-16 md:py-24 bg-gradient-to-br from-[#3A86FF] to-[#2E6FCC] text-white"
        aria-labelledby="final-cta-heading"
      >
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 id="final-cta-heading" className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Start with a free, private estimate today. Clarity for your project, right from the start.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#3A86FF] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-xl hover-grow focus:ring-4 focus:ring-white/50 focus:outline-none"
            aria-label="Get your free project estimate now"
          >
            <Camera className="mr-2 h-5 w-5" aria-hidden="true" />
            See Your Project Estimate Now
          </Button>
          <p className="mt-6 text-sm opacity-75">No credit card required • Takes less than 2 minutes • 100% free</p>
        </div>
      </section>

      {/* ============================================
          FOOTER
          Site information and legal links
          ============================================ */}
      <footer className="px-4 py-12 bg-gray-900 text-gray-400" role="contentinfo">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold text-white mb-2">Project Vision</p>
          <p className="text-sm">© 2025 Project Vision. All rights reserved.</p>
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
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
