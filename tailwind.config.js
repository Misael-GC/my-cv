/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#9550e5',
        secondary: '#7c3aed',
        accent: '#ec4899',
        dark: {
          100: '#1f1934',
          200: '#131424',
          300: '#0a0a0f'
        }
      },
      backgroundImage:{
        "gradient-cover":"linear-gradient(90.21deg, rgba(170, 54, 124, 0.5)) -5.91%, rgba(74, 47, 189,0.5) 111.58%"
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-1': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-2': ['2rem', { lineHeight: '1.4', fontWeight: '600' }],
      }
    },
  },
  plugins: [],
}

