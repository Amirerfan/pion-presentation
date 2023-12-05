/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,scss}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-l1': '#918EF5',
        'body-bg': '#11070E',
        'gradient-1': '#5B4FEC',
        'gradient-2': '#DFA891',
      }
    },
  },
  plugins: [],
}

