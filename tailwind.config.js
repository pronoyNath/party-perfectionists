/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins : "'Poppins', sans-serif",
        youngSerif: "'Young Serif', serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

