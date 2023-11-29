/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'navtext': '#2C3532',
      'navtext2':'#2C2C2C',
      'major':'#106466',
      'btntext':'#D3E8E3',
    },
    fontFamily: {
    
      jost: ['Jost', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}