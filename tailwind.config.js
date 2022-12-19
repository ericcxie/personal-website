/** @type {import('tailwindcss').Config} */
module.exports = {  
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
                     blue: '#7491B3',
              }
         },
       },  
  plugins: [],
}
