/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura': ['FuturaCustom', 'Futura', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#837CF3',
        secondary: '#9256E2',
        background: '#201C2E',
        'gradient-end': '#502F7C',
      },
    },
  },
  plugins: [],
}
