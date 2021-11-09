module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#1f212b",
          white: "#ffffff",
        },
        main: {
          light: "#ffffff",
          dark: "#011938",
        },
        card: {
          dark: "#0A2B53",
          light: "#F0DB4F",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
