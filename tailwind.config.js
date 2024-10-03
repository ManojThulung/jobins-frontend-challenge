/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(5%)", opacity: "0" },
          "30%": { transform: "translateY(5%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translate(-100%, -50%)" },
          "100%": { transform: "translate(0, -50%)" },
        },
        spin: {
          "0%": {
            transform:
              "rotate(0deg) scale(1) translateY(0)" /* Start position */,
          },
          "40%": {
            transform:
              "rotate(180deg) scale(1.2) translateY(10px)" /* Half spin */,
          },
          "100%": {
            transform: "rotate(360deg) scale(1) translateY(0)" /* Full spin */,
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-right": "slide-right 2s ease-out forwards",
        spin: "spin 2s ease-in-out infinite",
      },
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
