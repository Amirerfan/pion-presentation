/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,scss}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['NotoSerifSC', 'sans-serif'],
      },
      colors: {
        'primary': '#4D3E9E',
        'primary-l1': '#918EF5',
        'primary-l3': '#CDC9FD',
        'xyz-75': '#E9EFF6BF',
        'green': '#B7F03C',
        'body-bg': '#11070E',
        'gradient-1': '#5B4FEC',
        'gradient-2': '#DFA891',
        'element-header': '#2D2B34',
        'element-body': '#36333E',
        'table-body-border': '#484359',
        'red': '#FF4747',
        'input-bg': '#5D6168',
        'gray-l1': '#BCC8DE',
      },
    },
  },
  plugins: [],
}

