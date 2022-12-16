/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,tsx,ts,jsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        "custom-size": "18px"
      },
      fontFamily: {
        "custom-grotesk": "'Space Grotesk', sans-serif"
      },
      colors: {
        "custom-linear-gradient-active-input-border": "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
        "custom-red-input-errors": "hsl(0, 100%, 66%)",
        "custom-white": "hsl(0, 0%, 100%)",
        "custom-light-grayish-violet": "hsl(270, 3%, 87%)",
        "custom-dark-grayish-violet": "hsl(279, 6%, 55%)",
        "custom-very-dark-violet": "hsl(278, 68%, 11%)"
      }
    },
  },
  plugins: [],
}
