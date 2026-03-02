'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

/**
 * DarkModeBackground
 * Decorative SVG curves + blur bubbles — visible only in dark mode.
 * Fixed overlay, pointer-events-none so it never blocks interaction.
 */
export default function DarkModeBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted || resolvedTheme !== 'dark') return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* ── Ambient SVG curves ── */}
      <svg
        viewBox="0 0 1200 800"
        className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-[0.07]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dmCurveGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FCD34D" />
          </linearGradient>
          <linearGradient id="dmCurveBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <filter id="dmGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Gold curves */}
        <path
          d="M80 40 C 520 220, 700 580, 1120 760"
          stroke="url(#dmCurveGold)"
          strokeWidth="2.5"
          filter="url(#dmGlow)"
        />
        <path
          d="M140 0 C 560 200, 740 560, 1080 800"
          stroke="url(#dmCurveGold)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Blue curves */}
        <path
          d="M1080 20 C 640 240, 460 600, 80 780"
          stroke="url(#dmCurveBlue)"
          strokeWidth="2"
          filter="url(#dmGlow)"
          opacity="0.7"
        />
        <path
          d="M1000 60 C 600 260, 400 620, 120 760"
          stroke="url(#dmCurveBlue)"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>

      {/* ── Blur bubble accents ── */}
      <div className="absolute left-[16%] top-[18%] h-40 w-40 rounded-full bg-amber-400/[0.06] blur-3xl" />
      <div className="absolute left-[62%] top-[46%] h-48 w-48 rounded-full bg-blue-500/[0.07] blur-[80px]" />
      <div className="absolute left-[42%] top-[78%] h-32 w-32 rounded-full bg-amber-300/[0.05] blur-2xl" />
      <div className="absolute right-[10%] top-[8%] h-52 w-52 rounded-full bg-blue-600/[0.05] blur-[100px]" />
      <div className="absolute left-[5%] top-[60%] h-36 w-36 rounded-full bg-amber-500/[0.04] blur-3xl" />
    </div>
  );
}
