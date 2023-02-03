/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontWeight: {
      'light': '100',
      'normal': '400',
      'bold': '700',
      'extra-bold': '900',
    },
    colors: {
      'primary': '#59A5E3',
      'secondary': '#095590',
      'color': '#095590',
      'light': '#D1E6F7',
      'quaternary': '#F5FAFF',
      'white': '#FFFFFF',
      'white-2': '#F9FCFE',
      'white-3': '#F8FCFF',
      'black': '#000000',
      'gray': '#707070',
      'gray-light': '#00000012',
      'gray-light-2': '#707070',
    },
    fontFamily: {
      "primary": "var(--font-primary)",
    },
    extend: {},
  },
  plugins: [],
};