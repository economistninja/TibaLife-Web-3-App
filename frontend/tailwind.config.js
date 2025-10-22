/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        colors: {
          'brand-red': '#D32F2F',
          'brand-olive': '#556B2F',
          'ocean-start': '#0ea5e9',
          'ocean-end': '#22d3ee',
          'ocean-deep': '#0c4a6e',
          'ocean-turquoise': '#0891b2',
          'light-blue': '#F0F8FF',
        },
        fontFamily: {
          ubuntu: ["Ubuntu", 'sans-serif'],
          urbanist: ["Urbanist", 'sans-serif'],
          'bbh-hegarty': ["Bebas Neue", 'sans-serif'],
        },
        backgroundImage: {
          'ocean-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)',
          'ocean-deep-gradient': 'linear-gradient(135deg, #0c4a6e 0%, #0891b2 100%)',
        },
      },
    },
    plugins: [],
  }