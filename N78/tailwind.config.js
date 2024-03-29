/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
          sm: '545px',
          md: '745px',
          lg: '950px',
          xl: "1440",
      },
      extend: {
          colors: {
              textPrimary:'#222222',
              textSecondary:'#818181',
              logoSelected:'#000000',
              logoSecondary:'#717171',
              logoAccent:'#dddddd',
              logoPrimary:'#ff385c',
              borderSecondary: '#cccccc',
              defaultBackground: "#ffffff"
          }
      },
  },
  plugins: [],
}

