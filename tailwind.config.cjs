/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        '_orange': '#fb7413',
        '_light-gray': '#959eac',
        '_medium-gray': '#7c8798',
        '_dark-blue': '#252d37',
        '_very-dark-blue': '#121417'
      },
      fontFamily: {
        'sans': ['Overpass', 'sans-serif']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
