/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ['Roboto', 'sans-serif'],
        "serif": ['Noto Serif JP', 'serif']
      },
      colors: {
        hero: 'red',
        portfolio: 'green',
        services: 'blue',
        contact: 'purple',
      },
    },
  },
  plugins: [],
}
