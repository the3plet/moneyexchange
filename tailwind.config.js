/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      fontFamily: {
        Barlow: ['Barlow Condensed', 'serif'],
       Poppins: ["Poppins", 'serif']
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
