/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md155': '1550px',
        'md12': '1200px',
        'md100':'1000px',
        'md70':'700px',
        'md35': '350px',
         'md39': '390px'

      },
    },
  },
  plugins: [],
}