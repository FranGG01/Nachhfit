/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        nf: {
          yellow: "#F6C739",
          black:  "#0B0B0B",
          white:  "#EAEAEA",
        },
      },
    },
  },
  plugins: [],
};
