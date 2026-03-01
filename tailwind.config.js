/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        beige: '#f5f0e0',
        lightBeige: '#7a7766',
        darkBeige: '#504d43',
        veryDarkBeige: '#3a3931',
        golden: '#a17137',
        white: '#ffffff',
        gold: '#c9a96e',
        darkgold: '#5a3e2b',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  safelist: [],
};
