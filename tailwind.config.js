/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
      },
    },
    extend: {
      colors: {
        'primary' : '#FA5252',
        'light-gray' : '#F3F6F6',
        'mid-dark' : '#1D1D1D',
      },
      backgroundImage: {
        'image-dark': "url('/images/bg-image.jpg')",
        'image-light': "url('/images/bg-light.jpg')"
      }
    },
  },
  plugins: [],
}
