/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        intra: ["Inter", "sans-serif"],
      },
      colors: {
        bunker: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          300: "#b8b9c1",
          400: "#91939f",
          500: "#737584",
          600: "#5d5e6c",
          700: "#4c4d58",
          800: "#41414b",
          900: "#393941",
          950: "#18181b",
        },

        persimmon: {
          50: "#fef4f2",
          100: "#ffe6e1",
          200: "#ffd1c8",
          300: "#ffb2a2",
          400: "#fc785d",
          500: "#f45e3f",
          600: "#e24120",
          700: "#be3317",
          800: "#9d2e17",
          900: "#822c1a",
          950: "#471308",
        },
      },
    },
  },
  plugins: [],
};
