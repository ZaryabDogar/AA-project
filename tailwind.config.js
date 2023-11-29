/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'navtext': '#2C3532',
      'major':'#106466',

    },
    fontFamily: {
    
      jost: ['Jost', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}