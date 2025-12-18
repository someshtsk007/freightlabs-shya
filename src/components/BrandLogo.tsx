import React from 'react';

export const BrandLogo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FreightLabs Logo"
    >
      {/* GROUP 1: The Icon */}
      <g id="Icon">
        {/* Hexagon Base:
            - Light Mode: Slate-900 (#0F172A)
            - Dark Mode: Slate-200 (#E2E8F0) -> This makes it visible against the dark bg
        */}
        <path
          d="M12.5 2.5L37.5 2.5L50 24.15L37.5 45.8H12.5L0 24.15L12.5 2.5Z"
          className="fill-slate-900 dark:fill-white transition-colors duration-300"
        />

        {/* Circuit Lines: Always bright (Blue/Green) to look like 'Power' */}
        <path d="M15 35L25 25L35 25" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15L25 15L35 5" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Nodes: Colored dots */}
        <circle cx="15" cy="35" r="3" fill="#3B82F6" />
        <circle cx="35" cy="25" r="3" fill="#3B82F6" />
        <circle cx="15" cy="15" r="3" fill="#22C55E" />
        <circle cx="35" cy="5" r="3" fill="#22C55E" />
      </g>

      {/* GROUP 2: The Text */}
      <g id="Typography">
        {/* 'Freight'
            - Light Mode: Slate-900
            - Dark Mode: White
        */}
        <text
          x="60"
          y="32"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-0.5"
          className="fill-slate-900 dark:fill-white transition-colors duration-300"
        >
          Freight
        </text>

        {/* 'Labs'
            - Light Mode: Slate-900
            - Dark Mode: Slate-300 (Slightly softer white)
        */}
        <text
          x="148"
          y="32"
          fontFamily="'Inter', sans-serif"
          fontWeight="500"
          fontSize="24"
          letterSpacing="0"
          className="fill-slate-900 dark:fill-slate-300 transition-colors duration-300"
        >
          Labs
        </text>
      </g>
    </svg>
  );
};
