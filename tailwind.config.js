/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'rgb(17, 17, 17)',
        second:'rgb(84, 177, 164)',
        third:'rgb(57, 58, 137)',
      },
      fontFamily:{
        jost:'Jost'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out initial',
      }
    },
  },
  plugins: [],
}
