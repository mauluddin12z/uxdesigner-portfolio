/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          120: "#0064CA",
          100: "#007DFC",
          80: "#3397FD",
          60: "#99CBFE",
          40: "#CCE5FE",
          20: "#CCE5FE",
          10: "#E6F2FF",
        },
        background: {
          1: "#FFFFFF",
          2: "#F2F8FF",
        },
      },

      fontFamily: {
        sans: ["'Poppins', sans-serif"],
      },
      width: {
        384: "96rem",
      },
    },
  },
  plugins: [],
}
