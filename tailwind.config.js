/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      notebook: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      television: "1920px",
    },
    extend: {
      opacity: {
        fade: ".60",
      },
      colors: {
        brand: "#007032",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
