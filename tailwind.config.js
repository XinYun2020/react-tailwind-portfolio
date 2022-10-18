// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // class based darkMode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        plex: "IBM Plex Mono",
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
      gridTemplateColumns: {
        16: "repeat(16, minmax(0,1fr))", // 16 column grid
        footer: "200px minmax(900px,1fr) 100px", // Complex site-specific column configuration
      },
    },
  },
  plugins: [],
};
