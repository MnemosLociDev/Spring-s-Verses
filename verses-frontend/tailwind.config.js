/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F43F5E',
        surface: {
          700: '#141414',
          800: '#0a0a0a',
          900: '#000000',
        }
      },
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
