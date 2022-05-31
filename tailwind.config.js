module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        primary: {
          black: "#484668",
          white: "#fafafa",
        },
        main: {
          light: "#c9a3f9",
          dark: "#0a192f",
          100: "#fafafa",
          200: "#e4e5f1",
          300: "#d2d3db",
          400: "#9394a5",
          500: "#2b3638",
          600: "#333333",
        },
        card: {
          dark: "#0A2B53",
          light: "#fafafa",
        },
      },
    },
  },
  plugins: [],
};
