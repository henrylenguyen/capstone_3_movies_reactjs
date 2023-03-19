/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        adminPrimary: "#2B2B4B",
        adminSecondary: "#000033",
        adminThirdary: "#8D91A0",
      },
      flex: {
        100: "1 0 100%",
      },
    
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1368px",
        // => @media (min-width: 1368px) { ... }
      },

      height: {
        100: "380px",
        120: "460px",
        150: "590px",
        160: "650px",
        200: "780px",
      },

      width: {
        200: "780px",
        160: "660px",
      },

      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
