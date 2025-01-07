/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'red': '#fd0100',
        'light-blue': '#2385ff',
        'dark-blue': '#233fd6',
        'black': '#000000',
        'grey': '#1c2939',
      },
      font: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

