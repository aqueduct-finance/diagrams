/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sfGreen': '#12BB33',
        'aqBlue': '#0160D1',
        'tokenA': '#F97315',
        'tokenB': '#EC4899'
      }
    },
  },
  plugins: [],
}
