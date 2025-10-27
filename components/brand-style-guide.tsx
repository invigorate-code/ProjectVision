import { ProjectVisionLogo, ProjectVisionWordmark } from "./project-vision-logo"

/**
 * VISION BRAND STYLE GUIDE
 *
 * This component serves as a living style guide and reference
 * for designers and developers working with the Vision brand.
 *
 * Ready for export to Framer or Figma components.
 */
export function BrandStyleGuide() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12 bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 pb-8">
        <ProjectVisionWordmark size={48} />
        <p className="mt-4 text-gray-600 max-w-2xl">
          Vision is an AI-powered home remodeling estimation platform that empowers cautious homeowners with
          instant, transparent, and private cost estimates.
        </p>
      </header>

      {/* Color Palette */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Color Palette</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Primary Blue */}
          <div className="space-y-3">
            <div className="h-32 rounded-lg shadow-md" style={{ backgroundColor: "#3A86FF" }} />
            <div>
              <h3 className="font-semibold text-gray-900">Primary Blue</h3>
              <p className="text-sm text-gray-600 font-mono">#3A86FF</p>
              <p className="text-sm text-gray-600 font-mono">oklch(0.62 0.19 250)</p>
              <p className="text-xs text-gray-500 mt-2">Use for: Primary CTAs, links, focus states, brand elements</p>
            </div>
          </div>

          {/* Secondary Amber */}
          <div className="space-y-3">
            <div className="h-32 rounded-lg shadow-md" style={{ backgroundColor: "#FFBE0B" }} />
            <div>
              <h3 className="font-semibold text-gray-900">Secondary Amber</h3>
              <p className="text-sm text-gray-600 font-mono">#FFBE0B</p>
              <p className="text-sm text-gray-600 font-mono">oklch(0.82 0.17 85)</p>
              <p className="text-xs text-gray-500 mt-2">
                Use for: Accents, highlights, success states, attention-grabbing elements
              </p>
            </div>
          </div>

          {/* Light Neutral */}
          <div className="space-y-3">
            <div className="h-32 rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: "#F8F9FA" }} />
            <div>
              <h3 className="font-semibold text-gray-900">Light Neutral</h3>
              <p className="text-sm text-gray-600 font-mono">#F8F9FA</p>
              <p className="text-sm text-gray-600 font-mono">oklch(0.98 0 0)</p>
              <p className="text-xs text-gray-500 mt-2">Use for: Backgrounds, cards, subtle sections</p>
            </div>
          </div>

          {/* Dark Neutral */}
          <div className="space-y-3">
            <div className="h-32 rounded-lg shadow-md" style={{ backgroundColor: "#212529" }} />
            <div>
              <h3 className="font-semibold text-gray-900">Dark Neutral</h3>
              <p className="text-sm text-gray-600 font-mono">#212529</p>
              <p className="text-sm text-gray-600 font-mono">oklch(0.17 0 0)</p>
              <p className="text-xs text-gray-500 mt-2">Use for: Body text, headings, high-contrast elements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Typography</h2>

        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <div>
            <p className="text-sm text-gray-600 mb-2">Font Family</p>
            <p className="text-3xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
              Inter
            </p>
            <p className="text-sm text-gray-500 font-mono mt-1">font-family: 'Inter', sans-serif</p>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-600 mb-1">Heading 1 - Hero</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Your Vision, Your Budget</h1>
              <p className="text-xs text-gray-500 font-mono mt-1">text-4xl md:text-5xl lg:text-6xl font-bold</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Heading 2 - Section</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
              <p className="text-xs text-gray-500 font-mono mt-1">text-3xl md:text-4xl font-bold</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Heading 3 - Subsection</p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Describe Your Project</h3>
              <p className="text-xs text-gray-500 font-mono mt-1">text-xl md:text-2xl font-semibold</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Body Text</p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Get instant, AI-powered home remodeling quotes. Private, transparent, and tailored to your project with
                trusted local contractors.
              </p>
              <p className="text-xs text-gray-500 font-mono mt-1">text-base md:text-lg leading-relaxed</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Small Text / Captions</p>
              <p className="text-sm text-gray-500">No calls. Your photos stay private.</p>
              <p className="text-xs text-gray-500 font-mono mt-1">text-sm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Logo Variations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo Only */}
          <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center space-y-4">
            <ProjectVisionLogo size={80} />
            <div className="text-center">
              <p className="font-semibold text-gray-900">Icon Only</p>
              <p className="text-sm text-gray-600">Use for: Favicons, app icons, small spaces</p>
            </div>
          </div>

          {/* Wordmark */}
          <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center space-y-4">
            <ProjectVisionWordmark size={60} />
            <div className="text-center">
              <p className="font-semibold text-gray-900">Wordmark</p>
              <p className="text-sm text-gray-600">Use for: Headers, navigation, marketing</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Logo Concept</h4>
          <p className="text-sm text-blue-800">
            The logo combines a stylized house outline with an eye shape, symbolizing "Vision." The roof forms the upper
            eyelid, the base forms the lower eyelid, and the amber pupil represents focus and clarity. This design
            embodies the platform's mission to provide clear insight into home remodeling projects.
          </p>
        </div>
      </section>

      {/* Illustration Style */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Illustration Style</h2>

        <div className="bg-gray-50 p-8 rounded-lg space-y-4">
          <h3 className="font-semibold text-gray-900">Blueprint + Flat Fill</h3>
          <p className="text-gray-600">
            Vision uses a clean, modern illustration style that combines line art with flat color fills, evoking
            a blueprint aesthetic while remaining approachable.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            {/* Example icons in brand style */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-lg bg-white border-2 border-[#3A86FF] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3A86FF" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <p className="text-xs text-gray-600 text-center">Line + Stroke</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-lg bg-[#3A86FF]/10 border-2 border-[#3A86FF] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#3A86FF" stroke="none">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" opacity="0.3" />
                  <path
                    d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
                    fill="none"
                    stroke="#3A86FF"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-600 text-center">Flat Fill</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-lg bg-[#FFBE0B]/20 border-2 border-[#3A86FF] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#FFBE0B" opacity="0.3" />
                  <circle cx="12" cy="12" r="10" stroke="#3A86FF" strokeWidth="2" fill="none" />
                  <path d="M12 6v6l4 2" stroke="#3A86FF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-xs text-gray-600 text-center">Accent Color</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <h4 className="font-semibold text-gray-900">Guidelines:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li>Use 2px stroke weight for consistency</li>
              <li>Combine line art with subtle flat fills (10-30% opacity)</li>
              <li>Use primary blue for main elements, amber for accents</li>
              <li>Maintain clean, geometric shapes</li>
              <li>Evoke blueprint/architectural drawing aesthetic</li>
              <li>Keep illustrations simple and functional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Component Examples</h2>

        <div className="space-y-6">
          {/* Primary Button */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Primary Button</p>
            <button className="bg-[#3A86FF] hover:bg-[#2E6FE6] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Your Free Estimate
            </button>
            <p className="text-xs text-gray-500 font-mono">bg-[#3A86FF] hover:bg-[#2E6FE6] text-white</p>
          </div>

          {/* Secondary Button */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Secondary Button</p>
            <button className="bg-[#FFBE0B] hover:bg-[#E6AA00] text-[#212529] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Learn More
            </button>
            <p className="text-xs text-gray-500 font-mono">bg-[#FFBE0B] hover:bg-[#E6AA00] text-[#212529]</p>
          </div>

          {/* Outline Button */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Outline Button</p>
            <button className="border-2 border-[#3A86FF] text-[#3A86FF] hover:bg-[#3A86FF] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Browse Contractors
            </button>
            <p className="text-xs text-gray-500 font-mono">
              border-2 border-[#3A86FF] text-[#3A86FF] hover:bg-[#3A86FF]
            </p>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Usage Guidelines</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-green-700 flex items-center gap-2">
              <span className="text-xl">✓</span> Do
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use primary blue for main CTAs and brand elements</li>
              <li>• Use amber sparingly for accents and highlights</li>
              <li>• Maintain consistent spacing and padding</li>
              <li>• Use Inter font for all text</li>
              <li>• Keep illustrations simple and blueprint-inspired</li>
              <li>• Ensure WCAG AA contrast ratios (4.5:1 minimum)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-red-700 flex items-center gap-2">
              <span className="text-xl">✗</span> Don't
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Don't use gradients or complex color blends</li>
              <li>• Don't alter logo proportions or colors</li>
              <li>• Don't use decorative fonts or script typefaces</li>
              <li>• Don't overcrowd layouts with too many elements</li>
              <li>• Don't use amber as a primary background color</li>
              <li>• Don't create illustrations that feel cartoonish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Export Info */}
      <footer className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
        <p>
          This style guide is ready for export to Framer or Figma components. All colors use both HEX and OKLCH values
          for maximum compatibility.
        </p>
        <p className="mt-2">Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  )
}
