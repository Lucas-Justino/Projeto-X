/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sequel-sans-heavy-disp': ['Sequel Sans Heavy Disp', 'sans-serif'],
        'open-sans-light': ['OpenSans-Light', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#536471',
      },
    },
  },
  plugins: [],
}

