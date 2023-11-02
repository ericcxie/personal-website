/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-70": "linear-gradient(70deg, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gilroy: ["GilroyMedium", "sans-serif"],
        gilroybold: ["GilroyBold", "sans-serif"],
        gilroylight: ["GilroyLight", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        "wild-blue": {
          50: "#f5f7fa",
          100: "#eaeef4",
          200: "#d1dae6",
          300: "#a9bbd0",
          400: "#7491b3",
          500: "#59799e",
          600: "#466083",
          700: "#394d6b",
          800: "#32435a",
          900: "#2e3a4c",
        },
        dark: "#5c748f",
        darkmode: "#060813",
        "light-theme-gray": "#bfbfbf",
        "light-button-gray": "#bfbfbf",
        "light-font": "#474747",
        "pf-dark": "#161F38",
        "pf-light": "#dbdbdb",
      },

      borderRadius: {
        card: "10px",
      },

      boxShadow: {
        "light-card":
          "5px 5px 8px 0 rgba(0, 0, 0, .25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
        "light-button":
          "6px 6px 7px 0 rgba(190, 190, 190, 0.3), -4px -4px 6px 0 rgba(250, 250, 250, .25)",
      },

      height: {
        card: "300px",
        button: "40px",
      },

      width: {
        card: "250px",
        button: "100px",
      },
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: " translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },

  plugins: [],
};
