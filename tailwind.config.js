module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#484668",
          white: "#ffffff",
        },
        main: {
          light: {
            100: "#fafafa",
            200: "#e4e5f1",
            300: "#d2d3db",
            400: "#9394a5",
            500: "#484b68",
          },
          dark: "#011938",
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
