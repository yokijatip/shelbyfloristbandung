/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        beige: "#f5f0e0",
        lightBeige: "#7a7766",
        darkBeige: "#504d43",
        golden: "#a17137",
        white: "#ffffff",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

