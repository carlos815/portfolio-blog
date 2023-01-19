/** @type {import('tailwindcss').Config} */ module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ececec",
        secondary: "#CE9178",
        background: "#1E1E1E",
        comment: "#6A9953",
      },
    },
  },
  plugins: [],
}
