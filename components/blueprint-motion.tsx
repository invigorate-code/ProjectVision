"use client"

export function BlueprintMotion() {
  return (
    <div className="blueprint-container">
      {/* Grid Background */}
      <div className="blueprint-grid" />

      {/* Animated Blueprint Lines - Horizontal */}
      <svg className="blueprint-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Main horizontal construction lines */}
        <line x1="0" y1="100" x2="1200" y2="100" className="blueprint-line line-delay-1" />
        <line x1="0" y1="250" x2="1200" y2="250" className="blueprint-line line-delay-2" />
        <line x1="0" y1="400" x2="1200" y2="400" className="blueprint-line line-delay-3" />
        <line x1="0" y1="550" x2="1200" y2="550" className="blueprint-line line-delay-4" />
        <line x1="0" y1="700" x2="1200" y2="700" className="blueprint-line line-delay-5" />

        {/* Vertical construction lines */}
        <line x1="200" y1="0" x2="200" y2="800" className="blueprint-line line-delay-2" />
        <line x1="400" y1="0" x2="400" y2="800" className="blueprint-line line-delay-3" />
        <line x1="600" y1="0" x2="600" y2="800" className="blueprint-line line-delay-4" />
        <line x1="800" y1="0" x2="800" y2="800" className="blueprint-line line-delay-5" />
        <line x1="1000" y1="0" x2="1000" y2="800" className="blueprint-line line-delay-1" />

        {/* Architectural rectangles */}
        <rect x="50" y="50" width="250" height="150" className="blueprint-rect rect-delay-1" />
        <rect x="350" y="180" width="300" height="200" className="blueprint-rect rect-delay-2" />
        <rect x="700" y="80" width="200" height="250" className="blueprint-rect rect-delay-3" />
        <rect x="950" y="300" width="200" height="180" className="blueprint-rect rect-delay-4" />
        <rect x="100" y="500" width="350" height="200" className="blueprint-rect rect-delay-5" />
        <rect x="550" y="450" width="250" height="280" className="blueprint-rect rect-delay-1" />

        {/* Technical circles (like measurement points) */}
        <circle cx="175" cy="125" r="8" className="blueprint-circle circle-delay-1" />
        <circle cx="500" cy="280" r="8" className="blueprint-circle circle-delay-2" />
        <circle cx="800" cy="205" r="8" className="blueprint-circle circle-delay-3" />
        <circle cx="1050" cy="390" r="8" className="blueprint-circle circle-delay-4" />
        <circle cx="275" cy="600" r="8" className="blueprint-circle circle-delay-5" />
        <circle cx="675" cy="590" r="8" className="blueprint-circle circle-delay-1" />

        {/* Dimension arrows and measurement lines */}
        <path d="M 60 210 L 290 210 M 60 210 L 70 205 M 60 210 L 70 215 M 290 210 L 280 205 M 290 210 L 280 215"
          className="blueprint-dimension dimension-delay-1" />
        <path d="M 920 90 L 920 320 M 920 90 L 915 100 M 920 90 L 925 100 M 920 320 L 915 310 M 920 320 L 925 310"
          className="blueprint-dimension dimension-delay-2" />

        {/* Traveling Light Pulses - Horizontal Lines */}
        <circle r="6" className="pulse-dot pulse-h1">
          <animateMotion dur="4s" repeatCount="indefinite" begin="3.5s">
            <mpath href="#path-h1" />
          </animateMotion>
        </circle>
        <circle r="6" className="pulse-dot pulse-h2">
          <animateMotion dur="5s" repeatCount="indefinite" begin="4s">
            <mpath href="#path-h2" />
          </animateMotion>
        </circle>
        <circle r="6" className="pulse-dot pulse-h3">
          <animateMotion dur="4.5s" repeatCount="indefinite" begin="5s">
            <mpath href="#path-h3" />
          </animateMotion>
        </circle>

        {/* Traveling Light Pulses - Vertical Lines */}
        <circle r="6" className="pulse-dot pulse-v1">
          <animateMotion dur="4s" repeatCount="indefinite" begin="4.5s">
            <mpath href="#path-v1" />
          </animateMotion>
        </circle>
        <circle r="6" className="pulse-dot pulse-v2">
          <animateMotion dur="5s" repeatCount="indefinite" begin="5.5s">
            <mpath href="#path-v2" />
          </animateMotion>
        </circle>

        {/* Hidden paths for pulse animation */}
        <defs>
          <path id="path-h1" d="M 0 250 L 1200 250" />
          <path id="path-h2" d="M 0 400 L 1200 400" />
          <path id="path-h3" d="M 0 550 L 1200 550" />
          <path id="path-v1" d="M 400 0 L 400 800" />
          <path id="path-v2" d="M 800 0 L 800 800" />
        </defs>

        {/* Floating blueprint markers */}
        <g className="blueprint-float float-1">
          <circle cx="300" cy="150" r="4" className="blueprint-marker" />
          <line x1="295" y1="150" x2="305" y2="150" className="blueprint-marker" />
          <line x1="300" y1="145" x2="300" y2="155" className="blueprint-marker" />
        </g>

        <g className="blueprint-float float-2">
          <circle cx="700" cy="400" r="4" className="blueprint-marker" />
          <line x1="695" y1="400" x2="705" y2="400" className="blueprint-marker" />
          <line x1="700" y1="395" x2="700" y2="405" className="blueprint-marker" />
        </g>

        <g className="blueprint-float float-3">
          <circle cx="450" cy="550" r="4" className="blueprint-marker" />
          <line x1="445" y1="550" x2="455" y2="550" className="blueprint-marker" />
          <line x1="450" y1="545" x2="450" y2="555" className="blueprint-marker" />
        </g>
      </svg>

      <style jsx>{`
        .blueprint-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* Blueprint grid background */
        .blueprint-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(58, 134, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(58, 134, 255, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 60s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }

        .blueprint-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* Blueprint lines with stroke dash animation */
        .blueprint-line {
          stroke: #3A86FF;
          stroke-width: 2;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 3s ease-out forwards, marchingAnts 20s linear 3s infinite;
          opacity: 0.7;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Marching ants effect after line is drawn */
        @keyframes marchingAnts {
          from {
            stroke-dasharray: 10 5;
            stroke-dashoffset: 0;
          }
          to {
            stroke-dasharray: 10 5;
            stroke-dashoffset: 15;
          }
        }

        .line-delay-1 { animation-delay: 0s, 3s; }
        .line-delay-2 { animation-delay: 0.3s, 3.3s; }
        .line-delay-3 { animation-delay: 0.6s, 3.6s; }
        .line-delay-4 { animation-delay: 0.9s, 3.9s; }
        .line-delay-5 { animation-delay: 1.2s, 4.2s; }

        /* Blueprint rectangles */
        .blueprint-rect {
          fill: none;
          stroke: #3A86FF;
          stroke-width: 2.5;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawRect 4s ease-out forwards, marchingAnts 25s linear 4s infinite;
          opacity: 0.5;
        }

        @keyframes drawRect {
          to {
            stroke-dashoffset: 0;
          }
        }

        .rect-delay-1 { animation-delay: 0.5s, 4.5s; }
        .rect-delay-2 { animation-delay: 0.8s, 4.8s; }
        .rect-delay-3 { animation-delay: 1.1s, 5.1s; }
        .rect-delay-4 { animation-delay: 1.4s, 5.4s; }
        .rect-delay-5 { animation-delay: 1.7s, 5.7s; }

        /* Blueprint circles */
        .blueprint-circle {
          fill: none;
          stroke: #3A86FF;
          stroke-width: 2.5;
          opacity: 0;
          animation: fadeInCircle 0.8s ease-out forwards, pulsateCircle 3s ease-in-out 2s infinite;
        }

        @keyframes fadeInCircle {
          to {
            opacity: 0.7;
          }
        }

        /* Subtle pulsing effect on circles */
        @keyframes pulsateCircle {
          0%, 100% {
            opacity: 0.7;
            stroke-width: 2.5;
          }
          50% {
            opacity: 0.9;
            stroke-width: 3;
          }
        }

        .circle-delay-1 { animation-delay: 2s, 4s; }
        .circle-delay-2 { animation-delay: 2.2s, 4.2s; }
        .circle-delay-3 { animation-delay: 2.4s, 4.4s; }
        .circle-delay-4 { animation-delay: 2.6s, 4.6s; }
        .circle-delay-5 { animation-delay: 2.8s, 4.8s; }

        /* Dimension lines */
        .blueprint-dimension {
          fill: none;
          stroke: #3A86FF;
          stroke-width: 1.5;
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: drawDimension 2s ease-out forwards;
          opacity: 0.6;
        }

        @keyframes drawDimension {
          to {
            stroke-dashoffset: 0;
          }
        }

        .dimension-delay-1 { animation-delay: 1.5s; }
        .dimension-delay-2 { animation-delay: 1.8s; }

        /* Traveling light pulses */
        .pulse-dot {
          fill: #3A86FF;
          opacity: 0;
          filter: drop-shadow(0 0 4px rgba(58, 134, 255, 0.8));
          animation: pulseFade 4s ease-in-out infinite;
        }

        .pulse-h2 {
          animation: pulseFade 5s ease-in-out infinite;
        }

        .pulse-h3 {
          animation: pulseFade 4.5s ease-in-out infinite;
        }

        .pulse-v1 {
          animation: pulseFade 4s ease-in-out infinite;
        }

        .pulse-v2 {
          animation: pulseFade 5s ease-in-out infinite;
        }

        @keyframes pulseFade {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          10% {
            opacity: 0.9;
            transform: scale(1.2);
          }
          50% {
            opacity: 0.9;
            transform: scale(1);
          }
          90% {
            opacity: 0.9;
            transform: scale(1.2);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        /* Floating markers */
        .blueprint-float {
          animation: float 8s ease-in-out infinite;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .blueprint-marker {
          stroke: #3A86FF;
          stroke-width: 2;
          fill: none;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            transform: translate(30px, -30px);
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translate(60px, -60px);
            opacity: 0;
          }
        }

        .float-1 { animation-delay: 3s; }
        .float-2 { animation-delay: 4s; }
        .float-3 { animation-delay: 5s; }
      `}</style>
    </div>
  )
}
