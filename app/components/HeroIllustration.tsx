"use client";

export default function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[620px] mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-primary/5 via-red-accent/3 to-transparent blur-3xl" />

      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tower-grad" x1="300" y1="80" x2="300" y2="420" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C8102E" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#C8102E" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="building-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F3F4F6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C8102E" />
            <stop offset="100%" stopColor="#FF4B55" />
          </linearGradient>
          <linearGradient id="floor-grad" x1="150" y1="420" x2="450" y2="420" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C8102E" stopOpacity="0" />
            <stop offset="50%" stopColor="#C8102E" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#C8102E" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8102E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C8102E" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.08" />
          </filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Network lines - background */}
        <g opacity="0.15" stroke="#C8102E" strokeWidth="0.5">
          <line x1="100" y1="200" x2="250" y2="280" />
          <line x1="250" y1="280" x2="350" y2="220" />
          <line x1="350" y1="220" x2="500" y2="300" />
          <line x1="150" y1="350" x2="300" y2="280" />
          <line x1="300" y1="280" x2="450" y2="350" />
          <line x1="200" y1="150" x2="350" y2="220" />
          <line x1="350" y1="220" x2="480" y2="180" />
          <line x1="100" y1="300" x2="250" y2="280" />
          <line x1="450" y1="350" x2="520" y2="250" />
        </g>

        {/* Network nodes */}
        <g opacity="0.2">
          <circle cx="100" cy="200" r="3" fill="#C8102E" />
          <circle cx="250" cy="280" r="4" fill="#C8102E" />
          <circle cx="350" cy="220" r="3" fill="#C8102E" />
          <circle cx="500" cy="300" r="3" fill="#C8102E" />
          <circle cx="150" cy="350" r="2.5" fill="#C8102E" />
          <circle cx="450" cy="350" r="3" fill="#C8102E" />
          <circle cx="200" cy="150" r="2.5" fill="#C8102E" />
          <circle cx="480" cy="180" r="2.5" fill="#C8102E" />
          <circle cx="520" cy="250" r="2" fill="#C8102E" />
        </g>

        {/* Glossy floor reflection */}
        <ellipse cx="300" cy="440" rx="200" ry="16" fill="url(#floor-grad)" />

        {/* Glass buildings - left */}
        <g filter="url(#soft-shadow)">
          {/* Building 1 */}
          <rect x="100" y="280" width="60" height="160" rx="4" fill="url(#building-grad)" stroke="#E5E7EB" strokeWidth="0.5" />
          <g opacity="0.35">
            <rect x="110" y="295" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="128" y="295" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="146" y="295" width="6" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="110" y="320" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="128" y="320" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="146" y="320" width="6" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="110" y="345" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="128" y="345" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="146" y="345" width="6" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="110" y="370" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="128" y="370" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="110" y="395" width="12" height="16" rx="1.5" fill="#D1D5DB" />
            <rect x="128" y="395" width="12" height="16" rx="1.5" fill="#D1D5DB" />
          </g>

          {/* Building 2 - taller */}
          <rect x="170" y="220" width="50" height="220" rx="4" fill="url(#building-grad)" stroke="#E5E7EB" strokeWidth="0.5" />
          <g opacity="0.3">
            <rect x="178" y="235" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="193" y="235" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="208" y="235" width="6" height="14" rx="1" fill="#D1D5DB" />
            <rect x="178" y="258" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="193" y="258" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="208" y="258" width="6" height="14" rx="1" fill="#D1D5DB" />
            <rect x="178" y="281" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="193" y="281" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="178" y="304" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="193" y="304" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="208" y="304" width="6" height="14" rx="1" fill="#D1D5DB" />
            <rect x="178" y="327" width="10" height="14" rx="1" fill="#D1D5DB" />
            <rect x="193" y="327" width="10" height="14" rx="1" fill="#D1D5DB" />
          </g>
        </g>

        {/* Glass buildings - right */}
        <g filter="url(#soft-shadow)">
          <rect x="440" y="260" width="55" height="180" rx="4" fill="url(#building-grad)" stroke="#E5E7EB" strokeWidth="0.5" />
          <g opacity="0.3">
            <rect x="448" y="275" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="464" y="275" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="480" y="275" width="6" height="15" rx="1" fill="#D1D5DB" />
            <rect x="448" y="298" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="464" y="298" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="480" y="298" width="6" height="15" rx="1" fill="#D1D5DB" />
            <rect x="448" y="321" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="464" y="321" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="448" y="344" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="464" y="344" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="480" y="344" width="6" height="15" rx="1" fill="#D1D5DB" />
            <rect x="448" y="367" width="11" height="15" rx="1" fill="#D1D5DB" />
            <rect x="464" y="367" width="11" height="15" rx="1" fill="#D1D5DB" />
          </g>

          <rect x="505" y="300" width="45" height="140" rx="4" fill="url(#building-grad)" stroke="#E5E7EB" strokeWidth="0.5" />
          <g opacity="0.25">
            <rect x="512" y="315" width="9" height="13" rx="1" fill="#D1D5DB" />
            <rect x="526" y="315" width="9" height="13" rx="1" fill="#D1D5DB" />
            <rect x="512" y="336" width="9" height="13" rx="1" fill="#D1D5DB" />
            <rect x="526" y="336" width="9" height="13" rx="1" fill="#D1D5DB" />
            <rect x="512" y="357" width="9" height="13" rx="1" fill="#D1D5DB" />
            <rect x="526" y="357" width="9" height="13" rx="1" fill="#D1D5DB" />
            <rect x="512" y="378" width="9" height="13" rx="1" fill="#D1D5DB" />
            <rect x="526" y="378" width="9" height="13" rx="1" fill="#D1D5DB" />
          </g>
        </g>

        {/* Telecom Tower */}
        <g filter="url(#soft-shadow)">
          {/* Tower base */}
          <path d="M290 420 L310 420 L305 200 L295 200 Z" fill="url(#tower-grad)" stroke="#C8102E" strokeWidth="0.8" />
          {/* Tower crossbars */}
          <line x1="280" y1="240" x2="320" y2="240" stroke="#C8102E" strokeWidth="1.2" opacity="0.4" />
          <line x1="283" y1="280" x2="317" y2="280" stroke="#C8102E" strokeWidth="1" opacity="0.3" />
          <line x1="286" y1="320" x2="314" y2="320" stroke="#C8102E" strokeWidth="0.8" opacity="0.2" />
          {/* Tower antenna top */}
          <line x1="300" y1="200" x2="300" y2="165" stroke="#C8102E" strokeWidth="1.5" opacity="0.6" />
          {/* Signal waves */}
          <g filter="url(#glow)">
            <path d="M300 175 Q310 165 315 175" stroke="#C8102E" strokeWidth="1" fill="none" opacity="0.5">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M300 175 Q320 155 330 175" stroke="#C8102E" strokeWidth="0.8" fill="none" opacity="0.4">
              <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </path>
            <path d="M300 175 Q330 145 345 175" stroke="#C8102E" strokeWidth="0.6" fill="none" opacity="0.3">
              <animate attributeName="opacity" values="0.05;0.4;0.05" dur="2s" begin="0.6s" repeatCount="indefinite" />
            </path>
            <path d="M300 175 Q290 165 285 175" stroke="#C8102E" strokeWidth="1" fill="none" opacity="0.5">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M300 175 Q280 155 270 175" stroke="#C8102E" strokeWidth="0.8" fill="none" opacity="0.4">
              <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </path>
            <path d="M300 175 Q270 145 255 175" stroke="#C8102E" strokeWidth="0.6" fill="none" opacity="0.3">
              <animate attributeName="opacity" values="0.05;0.4;0.05" dur="2s" begin="0.6s" repeatCount="indefinite" />
            </path>
          </g>
        </g>

        {/* Red circular ring - STI logo inspired */}
        <g>
          <circle cx="300" cy="280" r="140" stroke="url(#ring-grad)" strokeWidth="2.5" fill="none" opacity="0.18" />
          <circle cx="300" cy="280" r="120" stroke="#C8102E" strokeWidth="0.5" fill="none" opacity="0.1" strokeDasharray="4 6" />
          {/* Orbiting dot */}
          <circle r="5" fill="#C8102E" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" from="0 300 280" to="360 300 280" dur="12s" repeatCount="indefinite" />
            <animateMotion dur="12s" repeatCount="indefinite">
              <mpath href="#ring-path" />
            </animateMotion>
          </circle>
          <path id="ring-path" d="M300 140 A140 140 0 1 1 299.99 140" fill="none" />
        </g>

        {/* Premium Smartphone */}
        <g className="animate-float" style={{ transformOrigin: "420px 160px" }}>
          <g filter="url(#soft-shadow)">
            <rect x="395" y="110" width="55" height="100" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="0.5" />
            <rect x="399" y="118" width="47" height="80" rx="6" fill="linear-gradient(180deg, #374151, #1F2937)" />
            {/* Screen content */}
            <rect x="401" y="120" width="43" height="76" rx="5" fill="#111827" />
            {/* Status bar */}
            <rect x="407" y="124" width="18" height="2" rx="1" fill="#C8102E" opacity="0.6" />
            <circle cx="437" cy="125" r="2" fill="#10B981" opacity="0.5" />
            {/* Signal bars */}
            <g opacity="0.4">
              <rect x="405" y="132" width="3" height="6" rx="0.5" fill="#C8102E" />
              <rect x="410" y="130" width="3" height="8" rx="0.5" fill="#C8102E" />
              <rect x="415" y="128" width="3" height="10" rx="0.5" fill="#C8102E" />
              <rect x="420" y="126" width="3" height="12" rx="0.5" fill="#C8102E" />
            </g>
            {/* UI elements */}
            <rect x="405" y="148" width="35" height="18" rx="4" fill="#1F2937" />
            <rect x="405" y="170" width="35" height="12" rx="4" fill="#1F2937" />
            <rect x="405" y="186" width="16" height="8" rx="4" fill="#C8102E" opacity="0.3" />
            {/* Notch */}
            <rect x="415" y="111" width="20" height="5" rx="2.5" fill="#111827" />
          </g>
        </g>

        {/* Router */}
        <g className="animate-float-slow" style={{ transformOrigin: "160px 190px" }}>
          <g filter="url(#soft-shadow)">
            <rect x="120" y="170" width="80" height="35" rx="6" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="0.5" />
            {/* Antennas */}
            <line x1="140" y1="170" x2="130" y2="148" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="130" cy="146" r="3" fill="#C8102E" opacity="0.5" />
            <line x1="180" y1="170" x2="190" y2="148" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="190" cy="146" r="3" fill="#C8102E" opacity="0.5" />
            {/* LED lights */}
            <circle cx="135" cy="197" r="2" fill="#10B981" opacity="0.7">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="145" cy="197" r="2" fill="#C8102E" opacity="0.7">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="155" cy="197" r="2" fill="#3B82F6" opacity="0.7">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="165" cy="197" r="2" fill="#10B981" opacity="0.7">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* SIM Card */}
        <g className="animate-float" style={{ transformOrigin: "480px 400px", animationDelay: "1s" }}>
          <g filter="url(#soft-shadow)">
            <rect x="460" y="380" width="42" height="50" rx="5" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="0.5" />
            <path d="M460 395 L472 380 L502 380 L502 430 L460 430 Z" fill="#FEF3C7" opacity="0.5" />
            {/* Chip */}
            <rect x="471" y="395" width="14" height="12" rx="2" fill="#D4AF37" opacity="0.6" />
            <line x1="474" y1="398" x2="482" y2="398" stroke="#B8860B" strokeWidth="0.3" opacity="0.4" />
            <line x1="474" y1="401" x2="482" y2="401" stroke="#B8860B" strokeWidth="0.3" opacity="0.4" />
            <line x1="474" y1="404" x2="482" y2="404" stroke="#B8860B" strokeWidth="0.3" opacity="0.4" />
          </g>
        </g>

        {/* Satellite Antenna */}
        <g className="animate-float-slow" style={{ transformOrigin: "130px 380px", animationDelay: "2s" }}>
          <g filter="url(#soft-shadow)">
            <ellipse cx="130" cy="380" rx="28" ry="16" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="0.5" />
            <ellipse cx="130" cy="380" rx="20" ry="10" fill="#E5E7EB" opacity="0.5" />
            <line x1="130" y1="380" x2="130" y2="355" stroke="#9CA3AF" strokeWidth="1.5" />
            <circle cx="130" cy="353" r="3" fill="#C8102E" opacity="0.5" />
            <line x1="130" y1="396" x2="130" y2="420" stroke="#9CA3AF" strokeWidth="1" />
          </g>
        </g>

        {/* Glowing particles */}
        <g>
          <circle cx="80" cy="150" r="2" fill="#C8102E" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="520" cy="180" r="1.5" fill="#C8102E" opacity="0.25">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="100" r="1.5" fill="#FF4B55" opacity="0.2">
            <animate attributeName="opacity" values="0.1;0.35;0.1" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="450" r="1.5" fill="#C8102E" opacity="0.2">
            <animate attributeName="opacity" values="0.05;0.3;0.05" dur="4s" begin="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="450" r="1" fill="#FF4B55" opacity="0.2">
            <animate attributeName="opacity" values="0.05;0.3;0.05" dur="3s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="120" r="1" fill="#C8102E" opacity="0.15">
            <animate attributeName="opacity" values="0.05;0.25;0.05" dur="5s" begin="0.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="420" cy="470" r="1.5" fill="#C8102E" opacity="0.2">
            <animate attributeName="opacity" values="0.05;0.3;0.05" dur="4.5s" begin="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Red light trails */}
        <g opacity="0.12">
          <path d="M100 300 Q200 280 300 300 Q400 320 500 280" stroke="#C8102E" strokeWidth="1" fill="none" />
          <path d="M80 320 Q200 300 300 320 Q400 340 520 300" stroke="#C8102E" strokeWidth="0.6" fill="none" />
        </g>
      </svg>
    </div>
  );
}
