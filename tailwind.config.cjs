/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    fontFamily: {
      'display': ['Alegreya', 'serif'],
      'body': ['Alegreya', 'serif'],
    },

    extend: {},
  },
  plugins: [],
};
