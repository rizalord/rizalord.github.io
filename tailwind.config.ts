import type { Config } from "tailwindcss"
const flowbite = require("flowbite-react/tailwind")

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: '#F0F2F5',
        dark: '#1A1F2C',
        'dark-2': '#0E1018',
        primary: '#4770FF',
        muted: '#576076',
      },
      boxShadow: {
        dark: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'spin-very-slow': 'spin 20s linear infinite',
        scrollY: 'scrollY 10s linear infinite',
      },
      keyframes: {
        scrollY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      aspectRatio: {
        '6/4': '6 / 4',
      }
    },
  },
  darkMode: 'class',
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config
