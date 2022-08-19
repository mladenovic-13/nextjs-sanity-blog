/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#CEDDEF",
        "primary-300": "#5893D4",
        "primary-600": "#1F3C88",
        "primary-900": "#070D59",
      },
    },
  },
  plugins: [],
};
