/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        adminPrimary: "#2B2B4B",
      },
      flex:{
        "100": "1 0 100%"
      }
    },
  },
  plugins: [],
};
