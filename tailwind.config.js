/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        customTheme: {
          primary : "#f87171",
          
          secondary : "#a78bfa",
                   
          accent : "#fee2e2",
                   
          neutral : "black",
                   
              
          info : "#3ABFF8",
                   
          success : "#36D399",
                   
          warning : "#FBBD23",
                   
          error : "#F87272", 
        }
      }
    ]
  },
  plugins: [require("daisyui")],

}
