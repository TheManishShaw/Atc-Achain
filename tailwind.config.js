/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#2E437C',
      primary2: '#1B1C57',
      secondary: '#006198',
      'text-primary': '#2E437C',
      'text-secondary': '#006198',
      'text-orange': '#E74623',
      'btn-primary': '#2E437C',
      'btn-secondary': '#E74623',
      'btn-purple': '#583FBC',
      'text-gray': '#A6A6A6',
      'badge-primary': '#FEE2E2',
      'bg-blue': '#4977F5',
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
};
