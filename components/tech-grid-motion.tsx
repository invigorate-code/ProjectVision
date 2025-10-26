"use client"

export function TechGridMotion() {
  return (
    <div className="tech-container">
      {/* Animated Grid Background */}
      <div className="tech-grid" />

      {/* Animated Tech Network SVG */}
      <svg className="tech-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Network connection lines - horizontal */}
        <line x1="0" y1="150" x2="1200" y2="150" className="network-line line-delay-1" />
        <line x1="0" y1="300" x2="1200" y2="300" className="network-line line-delay-2" />
        <line x1="0" y1="450" x2="1200" y2="450" className="network-line line-delay-3" />
        <line x1="0" y1="600" x2="1200" y2="600" className="network-line line-delay-4" />

        {/* Network connection lines - vertical */}
        <line x1="200" y1="0" x2="200" y2="800" className="network-line line-delay-2" />
        <line x1="400" y1="0" x2="400" y2="800" className="network-line line-delay-3" />
        <line x1="600" y1="0" x2="600" y2="800" className="network-line line-delay-4" />
        <line x1="800" y1="0" x2="800" y2="800" className="network-line line-delay-1" />
        <line x1="1000" y1="0" x2="1000" y2="800" className="network-line line-delay-2" />

        {/* Diagonal connection lines */}
        <line x1="100" y1="100" x2="400" y2="300" className="network-connection conn-delay-1" />
        <line x1="400" y1="150" x2="600" y2="450" className="network-connection conn-delay-2" />
        <line x1="600" y1="300" x2="800" y2="150" className="network-connection conn-delay-3" />
        <line x1="800" y1="450" x2="1000" y2="600" className="network-connection conn-delay-4" />
        <line x1="200" y1="600" x2="400" y2="450" className="network-connection conn-delay-5" />
        <line x1="1000" y1="300" x2="800" y2="600" className="network-connection conn-delay-1" />

        {/* Data nodes - major hubs */}
        <circle cx="200" cy="150" r="12" className="data-node node-delay-1" />
        <circle cx="400" cy="300" r="12" className="data-node node-delay-2" />
        <circle cx="600" cy="450" r="12" className="data-node node-delay-3" />
        <circle cx="800" cy="150" r="12" className="data-node node-delay-4" />
        <circle cx="1000" cy="600" r="12" className="data-node node-delay-5" />

        {/* Data nodes - minor nodes */}
        <circle cx="100" cy="100" r="8" className="data-node-minor node-delay-2" />
        <circle cx="400" cy="150" r="8" className="data-node-minor node-delay-3" />
        <circle cx="600" cy="300" r="8" className="data-node-minor node-delay-4" />
        <circle cx="800" cy="450" r="8" className="data-node-minor node-delay-5" />
        <circle cx="1000" cy="300" r="8" className="data-node-minor node-delay-1" />
        <circle cx="200" cy="600" r="8" className="data-node-minor node-delay-2" />

        {/* Traveling Data Pulses - Horizontal */}
        <circle r="7" className="pulse-dot pulse-h1">
          <animateMotion dur="4s" repeatCount="indefinite" begin="3.5s">
            <mpath href="#path-h1" />
          </animateMotion>
        </circle>
        <circle r="7" className="pulse-dot pulse-h2">
          <animateMotion dur="5s" repeatCount="indefinite" begin="4s">
            <mpath href="#path-h2" />
          </animateMotion>
        </circle>
        <circle r="7" className="pulse-dot pulse-h3">
          <animateMotion dur="4.5s" repeatCount="indefinite" begin="5s">
            <mpath href="#path-h3" />
          </animateMotion>
        </circle>

        {/* Traveling Data Pulses - Vertical */}
        <circle r="7" className="pulse-dot pulse-v1">
          <animateMotion dur="4s" repeatCount="indefinite" begin="4.5s">
            <mpath href="#path-v1" />
          </animateMotion>
        </circle>
        <circle r="7" className="pulse-dot pulse-v2">
          <animateMotion dur="5s" repeatCount="indefinite" begin="5.5s">
            <mpath href="#path-v2" />
          </animateMotion>
        </circle>

        {/* Hidden paths for pulse animation */}
        <defs>
          <path id="path-h1" d="M 0 300 L 1200 300" />
          <path id="path-h2" d="M 0 450 L 1200 450" />
          <path id="path-h3" d="M 0 600 L 1200 600" />
          <path id="path-v1" d="M 400 0 L 400 800" />
          <path id="path-v2" d="M 800 0 L 800 800" />
        </defs>

        {/* Floating data packets */}
        <g className="data-packet float-1">
          <rect x="295" y="145" width="10" height="10" rx="2" className="packet-shape" />
          <circle cx="300" cy="150" r="2" className="packet-dot" />
        </g>

        <g className="data-packet float-2">
          <rect x="695" y="395" width="10" height="10" rx="2" className="packet-shape" />
          <circle cx="700" cy="400" r="2" className="packet-dot" />
        </g>

        <g className="data-packet float-3">
          <rect x="445" y="545" width="10" height="10" rx="2" className="packet-shape" />
          <circle cx="450" cy="550" r="2" className="packet-dot" />
        </g>
      </svg>

      <style jsx>{`
        .tech-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* Animated tech grid background */
        .tech-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(14, 165, 233, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 165, 233, 0.12) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 60s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .tech-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* Network lines with stroke dash animation */
        .network-line {
          stroke: #0EA5E9;
          stroke-width: 2;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 3s ease-out forwards, dataFlow 25s linear 3s infinite;
          opacity: 0.6;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Data flow effect on network lines */
        @keyframes dataFlow {
          from {
            stroke-dasharray: 8 4;
            stroke-dashoffset: 0;
          }
          to {
            stroke-dasharray: 8 4;
            stroke-dashoffset: 12;
          }
        }

        .line-delay-1 { animation-delay: 0s, 3s; }
        .line-delay-2 { animation-delay: 0.3s, 3.3s; }
        .line-delay-3 { animation-delay: 0.6s, 3.6s; }
        .line-delay-4 { animation-delay: 0.9s, 3.9s; }

        /* Network connection lines (diagonals) */
        .network-connection {
          stroke: #7DD3FC;
          stroke-width: 1.5;
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: drawConnection 2.5s ease-out forwards, connectionPulse 8s ease-in-out 2.5s infinite;
          opacity: 0.4;
        }

        @keyframes drawConnection {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes connectionPulse {
          0%, 100% {
            opacity: 0.4;
            stroke-width: 1.5;
          }
          50% {
            opacity: 0.7;
            stroke-width: 2;
          }
        }

        .conn-delay-1 { animation-delay: 0.5s, 3s; }
        .conn-delay-2 { animation-delay: 0.8s, 3.3s; }
        .conn-delay-3 { animation-delay: 1.1s, 3.6s; }
        .conn-delay-4 { animation-delay: 1.4s, 3.9s; }
        .conn-delay-5 { animation-delay: 1.7s, 4.2s; }

        /* Data nodes - major hubs */
        .data-node {
          fill: none;
          stroke: #0EA5E9;
          stroke-width: 3;
          opacity: 0;
          animation: fadeInNode 0.8s ease-out forwards, nodePulse 4s ease-in-out 2s infinite;
        }

        @keyframes fadeInNode {
          to {
            opacity: 0.9;
          }
        }

        /* Pulsing effect on data nodes */
        @keyframes nodePulse {
          0%, 100% {
            opacity: 0.9;
            stroke-width: 3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            stroke-width: 4;
            transform: scale(1.1);
          }
        }

        .node-delay-1 { animation-delay: 2s, 4s; }
        .node-delay-2 { animation-delay: 2.2s, 4.2s; }
        .node-delay-3 { animation-delay: 2.4s, 4.4s; }
        .node-delay-4 { animation-delay: 2.6s, 4.6s; }
        .node-delay-5 { animation-delay: 2.8s, 4.8s; }

        /* Data nodes - minor */
        .data-node-minor {
          fill: #0EA5E9;
          opacity: 0;
          animation: fadeInMinorNode 0.6s ease-out forwards, minorNodePulse 5s ease-in-out 2s infinite;
        }

        @keyframes fadeInMinorNode {
          to {
            opacity: 0.6;
          }
        }

        @keyframes minorNodePulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        /* Traveling data pulses */
        .pulse-dot {
          fill: #0EA5E9;
          opacity: 0;
          filter: drop-shadow(0 0 6px rgba(14, 165, 233, 0.9));
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
            transform: scale(0.6);
          }
          10% {
            opacity: 1;
            transform: scale(1.3);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
            transform: scale(1.3);
          }
          100% {
            opacity: 0;
            transform: scale(0.6);
          }
        }

        /* Floating data packets */
        .data-packet {
          animation: floatPacket 10s ease-in-out infinite;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .packet-shape {
          stroke: #0EA5E9;
          stroke-width: 1.5;
          fill: rgba(14, 165, 233, 0.2);
        }

        .packet-dot {
          fill: #0EA5E9;
        }

        @keyframes floatPacket {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          50% {
            transform: translate(40px, -40px);
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translate(80px, -80px);
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
