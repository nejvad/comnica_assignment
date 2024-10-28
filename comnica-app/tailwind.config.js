/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"]
      },
      gridTemplateColumns: {
        "30/70": "28% 70%"
      }
    },
  },
  plugins: [],
}