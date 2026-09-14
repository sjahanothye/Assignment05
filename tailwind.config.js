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
        brand: {
          orange: '#FF5E3A',
          pink: '#FF2A85',
          violet: '#8A2BE2',
          dark: '#0F172A',
          card: '#1E293B',
          border: '#334155'
        }
      },
      backgroundImage: {
        'brand-gradient': 'var(--brand-gradient)',
        'brand-gradient-hover': 'var(--brand-gradient-hover)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(255, 42, 133, 0.4)',
        'glow-subtle': '0 0 15px -3px rgba(138, 43, 226, 0.25)',
      }
    },
  },
  plugins: [],
}
