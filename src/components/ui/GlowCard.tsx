'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className,
  glowColor,
  ...props
}: GlowCardProps) {
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const defaultGlow = theme === 'dark' 
    ? 'rgba(139, 92, 246, 0.15)' 
    : 'rgba(139, 92, 246, 0.08)';

  const activeGlow = glowColor || defaultGlow;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0c0e15]/85 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-none backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-purple-400/40 dark:hover:border-white/20 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {/* Radial cursor spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${activeGlow}, transparent 70%)`,
        }}
      />
      {/* Top border highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/40 dark:via-white/20 to-transparent" />
      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
