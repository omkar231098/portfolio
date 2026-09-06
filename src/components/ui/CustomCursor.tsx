'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function CustomCursor() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on desktop mouse (fine pointer), never on touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .interactive-hover');
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', handleElementHover);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isDark = theme === 'dark';

  return (
    <>
      {/* Outer Ring */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
          border: isHovered 
            ? '1.5px solid rgba(139, 92, 246, 0.7)' 
            : isDark 
              ? '1px solid rgba(255, 255, 255, 0.25)' 
              : '1px solid rgba(15, 23, 42, 0.25)',
          backgroundColor: isHovered 
            ? 'rgba(139, 92, 246, 0.08)' 
            : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(139, 92, 246, 0.25)' : 'none',
        }}
      />
      {/* Center Dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '6px' : '4px',
          height: isHovered ? '6px' : '4px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isHovered 
            ? (isDark ? '#c084fc' : '#7c3aed') 
            : (isDark ? '#ffffff' : '#0f172a'),
          boxShadow: isDark ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none',
        }}
      />
    </>
  );
}
