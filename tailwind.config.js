/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        pthin: ['Poppins-Thin', 'sans-serif'],
        pextralight: ['Poppins-ExtraLight', 'san-serif'],
        plight: ['Poppins-Light', 'san-serif'],
        pregular: ['Poppins-Regular', 'san-serif'],
        pmedium: ['Poppins-Medium', 'san-serif'],
        psemibold: ['Poppins-SemiBold', 'san-serif'],
        pbold: ['Poppins-Bold', 'san-serif'],
        pblack: ['Poppins-Black', 'san-serif'],
      },
    },
  },
  plugins: [],
};
