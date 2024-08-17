/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f9f1f5",
          100: "#edd4e0",
          200: "#e1b7cb",
          300: "#d69ab7",
          400: "#ca7da2",
          500: "#be608d",
          600: "#ae4779",
          700: "#913b65",
          800: "#83365b",
          900: "#652946",
          950: "#481e32",
        },
        secondary: {
          50: "#f4f4f6",
          100: "#dedee3",
          200: "#c7c7d1",
          300: "#b1b1be",
          400: "#9b9bab",
          500: "#7a7a90",
          600: "#66667a",
          700: "#4a4a59",
          800: "#41414e",
          900: "#2f2f38",
          950: "#1c1c21",
        },
        tertiary: {
          50: "#fff3ed",
          100: "#ffe4d5",
          200: "#fec9b0",
          300: "#fd9d74",
          400: "#fb693c",
          500: "#f94216",
          600: "#ea280c",
          700: "#c21a0c",
          800: "#9a1712",
          900: "#7c1612",
          950: "#430707",
        },
      },
    },
  },
  plugins: [],
};
