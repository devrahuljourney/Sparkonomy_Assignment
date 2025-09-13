/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#E6CDE8',
        customWhite: '#FFFFFF',
        customPurple: '#8134AF',
      },
    },
  },
  plugins: [],
}
