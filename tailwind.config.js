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
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'lg': '1280px',
        'xl': '1580px',
        '2xl': '1780px',
        '3xl': '2030px', // ou qualquer outro valor que desejar
      },      
    },
  },
  plugins: [],
}

