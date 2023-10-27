/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#A9C2CB",
       secondary:"#020305",
       shad:"#0D0F12"
      
      },
    fontFamily: {
      poppins: ["Plus Jakarta Sans", "sans-serif"],
       
    },
  },
  screens: {
   xxs:"190px",
    xs: "430px",
    ss: "620px",
    sm: "768px",
  bsm:"770px",
  bf:"1250px",
  md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];
