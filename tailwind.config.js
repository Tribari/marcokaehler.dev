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
        'jost': ['"Jost"', 'normal'],
        'vt323': ['"VT323"', 'normal'],
      }
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'swap']
    },
  },
  plugins: [],
}
