/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#9550e5",
        darkbg:"#131424",
        'gray-custom':'#374151'
      },
      backgroundImage:{
        "gradient-cover":"linear-gradient(90.21deg, rgba(170, 54, 124, 0.5)) -5.91%, rgba(74, 47, 189,0.5) 111.58%"
      }
    },
  },
  plugins: [],
}

