/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura': ['Futura', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'futura-medium': ['Futura', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'futura-bold': ['Futura', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'medium': '500',
        'bold': 'bold',
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
