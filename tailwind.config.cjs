/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    fontFamily: {
      display: ["Alegreya", "serif"],
      body: ["Alegreya", "serif"],
    },

    color: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#ea761c",
      light: {
        400: "#fefcf9",
        500: "#f1efe5",
      },
      dark: "#26262f",
    },

    extend: {},
  },
  plugins: [],
};
