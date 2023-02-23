/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C44AB",
        secondary: "#7B89F0",
        white: "#F2FDFF",
      },
    },
  },
  plugins: [],
};
