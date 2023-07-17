/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'palette-beige': '#EEE2DC',
        'palette-beige-brown': '#EDC7B7',
        'palette-gray': '#BAB2B5',
        'palette-blue': {
          500: '#123C69',
          700: '#0E3054',
          800: '#0D2A4A'
        },
        'palette-pink': '#AC3B61',
      }
    },
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
      'heading': ['OpenSans', 'sans-serif'],
    },
  },
  plugins: [],
});
