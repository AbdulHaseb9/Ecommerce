/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "herobg": "url(/hero-bg.jpg)",
      },
      colors: {
        primary: "#16628F",
        secondary: "#aeaeae",
      },
      screens: {
        mlg: '425px'
      }
    },
  },
  plugins: [],
};
