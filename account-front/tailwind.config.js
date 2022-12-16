/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/shared/ui/*.{ts,tsx}",
    "./src/widgets/*.{ts,tsx}",
    "./src/widgets/**/*.{ts,tsx}",
    "./src/features/**/ui/*.{ts,tsx}",
    "./src/features/**/ui/form/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '98': '26rem',
      },
      width: {
        '124': '32rem',
      },
      spacing: {
        '124': '32rem',
      }
    },
  },
  plugins: [],
}
