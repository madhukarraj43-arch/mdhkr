/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          black: '#000000',
          dark: '#0c0c0d',
          card: '#161617',
          gray: '#1d1d1f',
          muted: '#86868b',
          subtext: '#a1a1a6',
          border: 'rgba(255, 255, 255, 0.12)',
          light: '#f5f5f7',
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"SF Pro"',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
        mono: ['"SF Mono"', 'JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      borderRadius: {
        'apple-sm': '14px',
        'apple-md': '20px',
        'apple-lg': '26px',
        'apple-xl': '32px',
        'apple-2xl': '38px',
      },
      letterSpacing: {
        'apple-tight': '-0.035em',
        'apple-normal': '-0.015em',
        'apple-wide': '0.08em',
      },
      animation: {
        'liquid-float': 'liquidFloat 14s ease-in-out infinite',
        'liquid-pulse': 'liquidPulse 8s ease-in-out infinite',
      },
      keyframes: {
        liquidFloat: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(20px, -20px, 0) scale(1.05)' },
        },
        liquidPulse: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
