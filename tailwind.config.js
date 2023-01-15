/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [   
        "./pages/**/*.{js,ts,jsx,tsx}",   
        "./components/**/*.{js,ts,jsx,tsx}",  
         ],
  theme: {   
         extend: {
              fontFamily: {
                     'poppins': ['Poppins', 'sans-serif'],
                     'jakarta-sans': ['Jakarta Sans', 'sans-serif'],
              },

              colors: {
                     theme: '#7491B3',
                     dark: '#5c748f',
                     darkmode: '#060813',
                     "light-theme-gray": "#bfbfbf",
                     "light-button-gray": "#bfbfbf",
                     "light-font": "#474747"
              },

              borderRadius: {
                     card: "10px"
                 },

              boxShadow: {
                     "light-card":
                         "5px 5px 8px 0 rgba(0, 0, 0, .25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
                     "light-button":
                         "6px 6px 7px 0 rgba(190, 190, 190, 0.3), -4px -4px 6px 0 rgba(250, 250, 250, .25)"
                 },

              height: {
                     card: "300px",
                     button: "40px"
                 },

              width: {
                     card: "250px",
                     button: "100px"
                 }
              
         },
       },

       
  plugins: [],
}
