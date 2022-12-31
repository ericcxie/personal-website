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
                     'poppins': ['Poppins', 'sans-serif']
              },

              colors: {
                     theme: '#7491B3',
                     dark: '#5c748f',
                     darkmode: '#060813',
              }
         },
       },  
  plugins: [],
}
