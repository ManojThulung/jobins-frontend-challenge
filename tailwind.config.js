/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
      },
      screens: {
        xs: "460px",
      },
      colors: {
        primary: {
          DEFAULT: "#0F60FF",
          light: "#E9E7FD",
        },
        secondary: {
          DEFAULT: "#23272E",
          light: "#8B909A",
        },
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
