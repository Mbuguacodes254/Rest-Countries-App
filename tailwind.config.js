module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Nunito": ['Nunito', 'sans-serif']
    },
    screens: {
      'mobile': {'min': '234px', 'max': '640px'},
      'tablet': {'min': '641px', 'max': '1024px'},
      'laptop': {'min': '1025px', 'max': '1280px'},
      'desktop': {'min': '1281px'},
    },
    extend: {},
  },
  plugins: [],
}
