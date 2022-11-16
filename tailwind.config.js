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
      backgroundImage: {
        'hero-bg': "url('/images/hero/hero-bg.jpg')",
      },
      keyframes: {
        appear: {
          '0%': { transform: 'translateX(300px)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        appear: 'appear 1s ease-out',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
  plugins: [require("daisyui")],
};
