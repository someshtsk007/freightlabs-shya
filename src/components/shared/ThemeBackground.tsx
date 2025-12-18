import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { withGPU } from '@/lib/animation';

export function ThemeBackground() {
  const { theme } = useTheme();
  const gridRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isDark || !gridRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xOffset = ((clientX / innerWidth) - 0.5) * 20;
      const yOffset = ((clientY / innerHeight) - 0.5) * 20;

      const clampedX = Math.max(-10, Math.min(10, xOffset));
      const clampedY = Math.max(-10, Math.min(10, yOffset));

      gridRef.current.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]);

  if (isDark) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: '#0A0A0B',
          ...withGPU(),
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="blueGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="greenGradient" cx="70%" cy="60%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
            </filter>
          </defs>

          <ellipse
            cx="30%"
            cy="30%"
            rx="40%"
            ry="40%"
            fill="url(#blueGradient)"
            filter="url(#blur)"
          />
          <ellipse
            cx="70%"
            cy="60%"
            rx="35%"
            ry="35%"
            fill="url(#greenGradient)"
            filter="url(#blur)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 pointer-events-none z-0 transition-transform duration-200 ease-out will-change-transform"
      style={{
        backgroundImage: `
          linear-gradient(to right, #F2F2F2 1px, transparent 1px),
          linear-gradient(to bottom, #F2F2F2 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        ...withGPU(),
      }}
    />
  );
}
