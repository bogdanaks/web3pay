/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/shared/ui/**/*.{ts,tsx}",
    "./src/widgets/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '98': '26rem',
      }
    },
  },
  plugins: [],
}
