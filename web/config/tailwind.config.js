/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-white': 'rgb(246, 244, 249)',
        'brand-background': 'rgb(14, 15, 20)',
        'brand-dark-gray': 'rgb(140, 144, 150)',
      },
    },
  },
  plugins: [],
}
