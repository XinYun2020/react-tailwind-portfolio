// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // I want darkMode based on a class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        // metal: "#EEEEEE",

        gray: {
          DEFAULT: "#EEEEEE",
          light: "#EEEEEE",
          font: "#333333",
          border: "#ccc",
          card: "#F5F5F5",
          primary: "#E6E6E6",
        },
        blue: {
          hover: "#3471FF",
        },
        red: {
          DEFAULT: "#FF0000",
          badge: "#FF0000",
          font: "#D9534F",
        },
        green: {
          badge: "#468847",
        },
        yellow: {
          alert: "#FCF8E3",
          border: "#FAEBCC",
          font: "#8A6D3B",
        },
      },
    },
  },
  plugins: [],
};
