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
      screens: {
        "mobileL": "425px",
        "mobileM": "375px",
        "mobileS": "320px",
      },
      height: {
        "98": "26rem",
        "440px": "440px",
      },
      width: {
        "124": "32rem",
        "440px": "440px",
      },
      maxHeight: {
        "440px": "440px",
      },
      maxWidth: {
        "440px": "440px",
      },
      spacing: {
        "124": "32rem",
        "50%": "50%",
      },
      boxShadow: {
        "around": "0 0 15px 0 rgba(34, 60, 80, 0.1)"
      }
    },
  },
  plugins: [],
}
