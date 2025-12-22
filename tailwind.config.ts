import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A", // Slate 900
          light: "#1E293B",   // Slate 800
          dark: "#020617",    // Slate 950
        },
        accent: {
          blue: "#3B82F6",    // Blue 500
          purple: "#8B5CF6",  // Violet 500
          cyan: "#06B6D4",    // Cyan 500
          yellow: "#F59E0B",  // Amber 500
        },
        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(15, 23, 42, 0.6)",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'text-reveal': 'textReveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        textReveal: {
          '0%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/grid.svg')",
      },
    },
  },
  plugins: [],
};
export default config;

