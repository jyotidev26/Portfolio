/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          700: '#0F766E', // Primary Teal
          800: '#115e59',
          900: '#134e4a',
        },
        sky: {
          400: '#38BDF8', // Secondary Accent
          500: '#0ea5e9',
        },
        slate: {
          700: '#334155',
          800: '#1E293B', // Heading Dark Slate
          900: '#0f172a',
        },
        emergency: '#DC2626', // Reserved strictly for Emergency 24/7 banner
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Bengali', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
