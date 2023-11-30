/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navtext: "#2C3532",
      navtext2: "#2C2C2C",
      major: "#106466",
      btntext: "#D3E8E3",
      primary: "#F7F7F7",
      lightBrown:"#D8B08C",
      lightGrey:"#6A6A6A",
      inputBg:"#DEDADA",
      inputText:"#595959",
      bgBlue:"#D2EAE4",
      input:"#D9DEE4",
      white:"#FFFFFF",
      darkgreen:"#2C3532",
    },
    fontFamily: {
      jost: ["Jost", "serif"],
      nunito: ["Nunito Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
