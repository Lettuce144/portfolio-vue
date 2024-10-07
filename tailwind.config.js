/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue,js,jsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
    colors: {
      'primary': '#dd5353',
      'primary-disabled': '#9a3a3a',
      'secondary': '#716455',
      'Secondary-disabled': '#5e5448',
      'tertiary': '#643e47',
      'text': '#F6EED7',
      'button': '#F6EED7',
      'button-text-secondary': '#443737',
    },
    },
  },
  plugins: [],
}

