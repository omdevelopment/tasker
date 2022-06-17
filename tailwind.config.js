/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '6': '5px',
    },
    fontFamily : {
      'Raleway': ['Raleway', 'sans-serif'],
      'Roboto' : ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
