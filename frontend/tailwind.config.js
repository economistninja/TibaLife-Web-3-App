/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-breeze': '#d4e4e9',
        'olive-green': '#8dcf1d',
        'red-warning': '#bd2020',
        'ocean': {
          'start': '#22d3ee',
          'deep': '#0ea5e9',
          'gradient': 'linear-gradient(to right, #22d3ee, #0ea5e9)',
        },
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}