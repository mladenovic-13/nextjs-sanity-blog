/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#E63E6D",
        "primary-300": "#B42B51",
        "primary-600": "#7D1935",
        "primary-900": "#420516",
      },
    },
  },
  plugins: [],
};
