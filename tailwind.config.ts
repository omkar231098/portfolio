import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          DEFAULT: '#f8fafc',
          dark50: '#161922',
          dark100: '#12141c',
          dark200: '#0e1017',
          dark300: '#0b0d13',
        },
        border: {
          subtle: 'var(--card-border)',
          DEFAULT: 'var(--card-border)',
          glow: 'rgba(139, 92, 246, 0.4)',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          hover: '#7c3aed',
          muted: 'var(--accent-glow)',
        },
        cyan: {
          glow: '#06b6d4',
        },
        emerald: {
          glow: '#10b981',
        },
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, var(--accent-glow) 0%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
        'mesh-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.2), transparent)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radar 2.5s cubic-bezier(0, 0.2, 0.8, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
