module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"', 'normal'],
        'montserrat-alternates': ['"Montserrat Alternates"', 'normal'],
      }
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'dark']
    },
  },
  plugins: [],
}
