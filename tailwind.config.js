/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myComforta: ["myComforta", "sans-serif"],
        KalamehRegular: ["KalamehRegular", "sans-serif"],
        KalamehBlack: ["KalamehBlack", "sans-serif"],
        KalamehBold: ["KalamehBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};