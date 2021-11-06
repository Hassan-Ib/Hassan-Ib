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
        main: "#DBDEE2",
        "main-dark": "#011938",
        side: "#9E9F9F",
        "side-dark": "#435974",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
