/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
      'background': '#EFEFEF',
      'blue': '#AEBDE6',

    },
    boxShadow:{
      'searchShadow':'0 35px 60px -15px rgba(100, 10, 20, 0.3) '
    },
  },
  },
  plugins: [],
}

