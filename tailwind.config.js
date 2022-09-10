/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./dist/**/*.html", "./dist/**/*.js"],
  content: ["./dist/**/*.html", "./dist/**/*.js"],
  
  theme: {
    extend: {
      fontFamily:{
        openSans: ["Open Sans", "sans-serif"],
      },
        colors: {
          "blue-main": "#175DOC",
          "blue-navy": "#1A3866"
        },
    },
  },

  variants:{
    extend:{
      transform: ["hover", "focus"],
    },
  },

  plugins: [],
};
