/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3A408C',
        'primary-100': '#484fb1',
        'secondary': '#E2342D',
        'secondary-100': '#DF5853',
        'grey': '#F3F3F3',
        'grey-100': '#F3F3F3C0'
      },
      maxWidth: {
        'site': '1280px'
      }
    },
  },
  plugins: [],
}

